<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import ProgressBar from 'primevue/progressbar';
// import Button from 'primevue/button';
import {
  fetchRegionsData,
  // fetchRegionImageUrls,
  // getRegionStats,
  getRegionImageName,
  getRegionImageUrls,
} from '@/api/api';
import type { RegionQueryData, ImageUrls, RegionStats } from '@/api/api';

interface ExtendedRegionsQueryData extends RegionQueryData {
  imageUrl?: ImageUrls | null;
  stats?: RegionStats | null;
  statsLoaded?: boolean;
  statsLoading?: boolean;
}

interface LoadingProgress {
  current: number;
  total: number;
  status: string;
  percentage: number;
  estimatedMinutes: number;
}

// const reloadAllStats = async () => {
//   regions.value.forEach((region) => {
//     region.statsLoaded = false;
//     region.stats = null;
//   });

//   await loadAllStatsBackground();
// };

const regions = ref<ExtendedRegionsQueryData[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const CIVILIZATION = 'Royal Space Society';
const showEnglish = ref(false);
const loadingProgress = ref<LoadingProgress>({
  current: 0,
  total: 0,
  status: 'Iniciando...',
  percentage: 0,
  estimatedMinutes: 0,
});

interface QueryTask {
  id: string;
  execute: () => Promise<any>;
  resolve: (value: any) => void;
  reject: (reason: any) => void;
  priority?: number;
}

const queryQueue: QueryTask[] = [];
let isProcessingQueue = false;
const QUERIES_PER_MINUTE = 4;
const QUERY_INTERVAL = (60 * 1000) / QUERIES_PER_MINUTE;
const activeQueries = new Set<string>();

const queryCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;

const allowedNames = [
  'Uekenbe Shallows',
  'Uklots Shallows',
  'Eighba Fringe',
  'Xecroften',
  'Areyas',
  'Sea of Ticrops',
  'Udrupi Shallows',
  'Jiessl Shallows',
  'Becheeth Sector',
  'Juhalbe Cluster',
  'Larinar Boundary',
  'Qudsor Void',
  'Uhcheimri Void',
  'Skitco',
  'Emcalh Nebula',
  'Gumita Nebula',
  'Jajaja Cluster',
];

const regionTranslations: Record<string, string> = {
  'Uekenbe Shallows': 'Bajíos de Uekenbe',
  'Uklots Shallows': 'Bajíos de Uklots',
  'Eighba Fringe': 'Frontera de Eighba',
  Xecroften: 'Xecroften',
  Areyas: 'Areyas',
  'Sea of Ticrops': 'Mar de Ticrops',
  'Udrupi Shallows': 'Bajíos de Udrupi',
  'Jiessl Shallows': 'Bajíos de Jiessl',
  'Becheeth Sector': 'Sector Becheeth',
  'Juhalbe Cluster': 'Cúmulo de Juhalbe',
  'Larinar Boundary': 'Frontera de Larinar',
  'Qudsor Void': 'Vacío de Qudsor',
  'Uhcheimri Void': 'Vacío de Uhcheimri',
  Skitco: 'Skitco',
  'Emcalh Nebula': 'Nebulosa de Emcalh',
  'Gumita Nebula': 'Nebulosa de Gumita',
  'Jajaja Cluster': 'Cúmulo de Jajaja',
};

const regionGlyphsMap: Record<string, string> = {
  'Uekenbe Shallows': '2141F7EC0D24',
  'Uklots Shallows': '01B8032FE9B0',
  Xecroften: '01B8F7EC0D25',
  Areyas: '0080F8EBDD24',
  'Udrupi Shallows': '10BCF7EBFD24',
  'Jiessl Shallows': '01A7F7EBFD25',
  'Becheeth Sector': '00E6F7EC1D24',
  'Juhalbe Cluster': '01B6F6EC0D23',
  'Sea of Ticrops': '007A0EEC7D10',
  'Larinar Boundary': '010F0AAEBB96',
  'Eighba Fringe': '0133FEA34C10',
  'Emcalh Nebula': '0041F9F846D8',
  'Qudsor Void': '007CFF9B4CB0',
  'Uhcheimri Void': '00EAFBF21696',
  Skitco: '00F30266CF95',
  'Gumita Nebula': '140FF7EBFD23',
};

const itemNameTranslations: Record<string, string> = {
  Cross: 'Cruzado',
  'Star systems': 'Sistemas',
  Planets: 'Planetas',
  Starships: 'Naves',
  'Multi-Tools': 'Multiherramientas',
  Euclid: 'Euclides',
  'Hilbert Dimension': 'Dimensión de Hilbert',
};

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

const processQueryQueue = async () => {
  if (isProcessingQueue || queryQueue.length === 0) return;

  isProcessingQueue = true;

  while (queryQueue.length > 0 && activeQueries.size < QUERIES_PER_MINUTE) {
    const task = queryQueue.shift();
    if (!task) break;

    if (activeQueries.has(task.id)) {
      queryQueue.push({ ...task, priority: (task.priority || 0) - 1 });
      continue;
    }

    activeQueries.add(task.id);

    try {
      const result = await task.execute();
      task.resolve(result);
    } catch (err) {
      task.reject(err);
    } finally {
      activeQueries.delete(task.id);

      if (queryQueue.length > 0) {
        await new Promise((resolve) => setTimeout(resolve, QUERY_INTERVAL));
      }
    }
  }

  isProcessingQueue = false;

  if (queryQueue.length > 0) {
    setTimeout(() => processQueryQueue(), QUERY_INTERVAL);
  }
};

const queueQuery = <T,>(id: string, execute: () => Promise<T>, priority = 0): Promise<T> => {
  return new Promise((resolve, reject) => {
    const cacheKey = `query-${id}`;
    const cached = queryCache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      resolve(cached.data);
      return;
    }

    const task: QueryTask = {
      id,
      execute: async () => {
        const result = await execute();
        queryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      },
      resolve,
      reject,
      priority,
    };

    const index = queryQueue.findIndex((q) => (q.priority || 0) < priority);
    if (index === -1) {
      queryQueue.push(task);
    } else {
      queryQueue.splice(index, 0, task);
    }

    if (!isProcessingQueue) {
      processQueryQueue();
    }
  });
};

const fetchRegionImageUrlsQueued = async (pageName: string): Promise<ImageUrls | null> => {
  return queueQuery(
    `image-${pageName}`,
    async () => {
      const imageName = await getRegionImageName(pageName);
      if (!imageName) return null;
      return await getRegionImageUrls(imageName);
    },
    1
  );
};

// const getRegionStatsQueued = async (pageName: string): Promise<RegionStats | null> => {
//   return queueQuery(
//     `stats-${pageName}`,
//     async () => {
//       return await getRegionStats(pageName);
//     },
//     0
//   );
// };

// const loadRegionStats = async (region: ExtendedRegionsQueryData) => {
//   if (region.statsLoading || region.statsLoaded) return;

//   region.statsLoading = true;

//   try {
//     const stats = await getRegionStatsQueued(region.Region);
//     region.stats = stats;
//     region.statsLoaded = true;

//     const index = regions.value.findIndex((r) => r.Region === region.Region);
//     if (index !== -1) {
//       regions.value[index] = { ...region };
//     }

//     await saveCacheToStorage(regions.value);
//   } catch (err) {
//     console.error(`Error cargando stats para ${region.Region}:`, err);
//     region.stats = null;
//   } finally {
//     region.statsLoading = false;
//   }
// };

// const loadMultipleRegionsStats = async (regionNames: string[]) => {
//   const total = regionNames.length;
//   let completed = 0;

//   for (const regionName of regionNames) {
//     const region = regions.value.find((r) => r.Region === regionName);
//     if (region && !region.statsLoaded && !region.statsLoading) {
//       try {
//         await loadRegionStats(region);
//         completed++;

//         updateProgress(
//           loadingProgress.value.current + 1,
//           loadingProgress.value.total,
//           `Cargando estadísticas (${completed}/${total})`
//         );

//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       } catch (err) {
//         console.error(`Error en carga batch para ${regionName}:`, err);
//       }
//     }
//   }
// };

const saveCacheToStorage = async (data: ExtendedRegionsQueryData[]) => {
  try {
    const cacheData = {
      regions: data.map((region) => ({
        ...region,
        statsLoading: false,
      })),
      timestamp: Date.now(),
      version: '1.1',
    };
    localStorage.setItem('rss-regions-cache', JSON.stringify(cacheData));
  } catch (err) {
    console.error('Error guardando caché:', err);
  }
};

const loadCacheFromStorage = async (): Promise<ExtendedRegionsQueryData[] | null> => {
  try {
    const result = localStorage.getItem('rss-regions-cache');
    if (result) {
      const cacheData = JSON.parse(result);
      const cacheAge = Date.now() - cacheData.timestamp;
      const maxAge = 24 * 60 * 60 * 1000 * 7; // 1 semana

      if (cacheAge < maxAge && cacheData.version === '1.1') {
        console.log('✅ Datos cargados desde caché');
        return cacheData.regions;
      } else {
        console.log('⚠️ Caché expirada o versión antigua, recargando...');
      }
    }
  } catch (err) {
    console.log('ℹ️ No hay caché disponible');
  }
  return null;
};

const updateProgress = (current: number, total: number, status: string) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const remaining = total - current;
  const estimatedMinutes = Math.ceil((remaining * QUERY_INTERVAL) / (60 * 1000));

  loadingProgress.value = {
    current,
    total,
    status,
    percentage,
    estimatedMinutes,
  };
};

const loadRegionsProgressive = async () => {
  try {
    const cachedData = await loadCacheFromStorage();

    if (cachedData && cachedData.length > 0) {
      regions.value = cachedData;
      updateProgress(cachedData.length, cachedData.length, 'Datos cargados desde caché');
      isLoading.value = false;
      return;
    }

    updateProgress(0, 0, 'Obteniendo lista de regiones...');

    const allRegions = await fetchRegionsData(CIVILIZATION, 0);
    const filteredRegions = allRegions.filter((region: RegionQueryData) =>
      allowedNames.some((name) => region.Region.includes(name))
    ) as ExtendedRegionsQueryData[];

    const totalQueries = filteredRegions.length;
    updateProgress(0, totalQueries, 'Cargando imágenes de regiones...');

    const enrichedRegions: ExtendedRegionsQueryData[] = [];

    for (let i = 0; i < filteredRegions.length; i++) {
      const region = filteredRegions[i];

      try {
        updateProgress(i + 1, totalQueries, `Cargando imagen de ${region.Region}...`);
        region.imageUrl = await fetchRegionImageUrlsQueued(region.Region);

        region.stats = null;
        region.statsLoaded = false;
        region.statsLoading = false;

        enrichedRegions.push(region);
        regions.value = [...enrichedRegions];
        await nextTick();

        if ((i + 1) % 2 === 0) {
          await saveCacheToStorage(enrichedRegions);
        }
      } catch (err) {
        console.error(`Error procesando región ${region.Region}:`, err);
        region.imageUrl = null;
        region.stats = null;
        region.statsLoaded = false;
        region.statsLoading = false;
        enrichedRegions.push(region);
      }
    }

    await saveCacheToStorage(enrichedRegions);

    updateProgress(totalQueries, totalQueries, '¡Imágenes cargadas! Las estadísticas se cargarán bajo demanda.');
    isLoading.value = false;
  } catch (err) {
    error.value = 'Error al cargar las regiones';
    console.error(err);
    isLoading.value = false;
  }
};

// const loadAllStatsBackground = async () => {
//   const regionNames = regions.value
//     .filter((region) => !region.statsLoaded && !region.statsLoading)
//     .map((region) => region.Region);

//   if (regionNames.length === 0) return;

//   updateProgress(0, regionNames.length, 'Cargando todas las estadísticas en segundo plano...');
//   await loadMultipleRegionsStats(regionNames);
// };

onMounted(async () => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  await loadRegionsProgressive();
});

const formatWikiLink = (name: string) => {
  return name.trim().replace(/\s+/g, '_').replace(/\//g, '_');
};

const openModal = (image: string) => {
  window.open(image, '_blank');
};

function coords2Glyphs(coordinates: string): string {
  const parts = coordinates.split(':');
  if (parts.length !== 4) return '';

  const [xStr, yStr, zStr] = parts;
  const coords_x = parseInt(xStr, 16);
  const coords_y = parseInt(yStr, 16);
  const coords_z = parseInt(zStr, 16);

  const system_idx = '000';
  const X_Z_POS_SHIFT = 2049;
  const X_Z_NEG_SHIFT = 2047;
  const Y_POS_SHIFT = 129;
  const Y_NEG_SHIFT = 127;

  const x_glyph = coords_x <= 2046 ? coords_x + X_Z_POS_SHIFT : coords_x - X_Z_NEG_SHIFT;
  const z_glyph = coords_z <= 2046 ? coords_z + X_Z_POS_SHIFT : coords_z - X_Z_NEG_SHIFT;
  const y_glyph = coords_y <= 126 ? coords_y + Y_POS_SHIFT : coords_y - Y_NEG_SHIFT;

  const xGlyphHex = x_glyph.toString(16).toUpperCase().padStart(3, '0');
  const yGlyphHex = y_glyph.toString(16).toUpperCase().padStart(2, '0');
  const zGlyphHex = z_glyph.toString(16).toUpperCase().padStart(3, '0');

  const prefix = '0';
  return prefix + system_idx + yGlyphHex + zGlyphHex + xGlyphHex;
}

function getGlyphs(region: string, coordinates: string): string {
  return regionGlyphsMap[region] || coords2Glyphs(coordinates);
}

function translateItemName(itemName: string | number): string {
  const key = itemName.toString();
  return itemNameTranslations[key] || key;
}

interface Quadrant {
  name: string;
  regions: ExtendedRegionsQueryData[];
}

interface Galaxy {
  name: string;
  quadrants: Quadrant[];
  image?: string;
}

const groupedGalaxies = computed(() => {
  const galaxiesMap = new Map<string, Galaxy>();

  regions.value.forEach((region) => {
    if (!galaxiesMap.has(region.Galaxy)) {
      galaxiesMap.set(region.Galaxy, {
        name: region.Galaxy,
        quadrants: [],
        image: region.imageUrl?.modal,
      });
    }

    const galaxy = galaxiesMap.get(region.Galaxy)!;
    let quadrant = galaxy.quadrants.find((q) => q.name === region.Quadrant);

    if (!quadrant) {
      quadrant = { name: region.Quadrant, regions: [] };
      galaxy.quadrants.push(quadrant);
    }

    quadrant.regions.push(region);
  });

  return Array.from(galaxiesMap.values());
});

// const regionsNeedingSystems = computed(() =>
//   regions.value.filter((region) => {
//     const systems = region.stats?.['Star systems']?.CrossPlatform;
//     return systems !== undefined && systems < 10;
//   })
// );

function translateRegionName(name: string): string {
  return showEnglish.value ? name : regionTranslations[name] || name;
}
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <div class="header-container">
              <a
                href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society"
                target="_blank"
              >
                <div class="rss-logo">
                  <img
                    src="/assets/images/shared/logo-white.png"
                    class="logo-image"
                    alt="RSS Logo"
                  />
                </div>
              </a>
              <div class="title-theme-container">
                <h1 class="galactic-title">
                  <span class="title-text">Regiones - Royal Space Society</span>
                </h1>
              </div>
            </div>
            <p class="text-stellar-gray mt-2">Explora las regiones de la Royal Space Society</p>
            <div class="flex items-center gap-2 mt-2">
              <Checkbox
                v-model="showEnglish"
                :binary="true"
                inputId="toggle-language"
              />
              <label
                for="toggle-language"
                class="cursor-pointer select-none"
              >
                Mostrar nombres de las regiones en inglés
              </label>
            </div>
          </div>
        </div>

        <Panel
          v-if="isLoading"
          class="galactic-panel mt-6 loading-panel"
        >
          <template #header>
            <h2 class="panel-title"><i class="pi pi-spin pi-spinner"></i> Cargando datos...</h2>
          </template>
          <div class="panel-content">
            <p class="loading-status">{{ loadingProgress.status }}</p>
            <ProgressBar
              :value="loadingProgress.percentage"
              class="mt-3"
            />
            <div class="loading-stats mt-3">
              <p>
                Progreso: <strong>{{ loadingProgress.current }}</strong> de
                <strong>{{ loadingProgress.total }}</strong> consultas completadas
                <span v-if="loadingProgress.percentage > 0"> ({{ loadingProgress.percentage }}%) </span>
              </p>
              <p
                v-if="loadingProgress.estimatedMinutes > 0"
                class="text-sm text-stellar-gray"
              >
                Tiempo estimado restante: ~{{ loadingProgress.estimatedMinutes }} minuto{{
                  loadingProgress.estimatedMinutes !== 1 ? 's' : ''
                }}
              </p>
              <!-- <p class="text-xs text-stellar-gray mt-2">
                ℹ️ Las estadísticas se cargarán bajo demanda para optimizar el rendimiento
              </p> -->
            </div>
          </div>
        </Panel>

        <Panel
          v-if="!isLoading"
          class="galactic-panel mt-6"
        >
          <template #header>
            <h2 class="panel-title">Información de las regiones</h2>
          </template>
          <div class="panel-content">
            <p>
              Total de regiones registradas: <strong>{{ regions.length }}</strong>
            </p>
            <p class="security-level mt-2">
              Nivel de seguridad:
              <Tag
                value="Clasificado RSS"
                severity="info"
                class="category-tag"
              />
            </p>
            <p class="update-info">Última actualización: {{ new Date().toLocaleDateString() }}</p>
            <!-- <div class="flex gap-5 mt-3 mr-3">
              <Button
                @click="loadAllStatsBackground"
                label="Cargar todas las estadísticas"
                icon="pi pi-chart-line"
                size="small"
              />
              <Button
                @click="reloadAllStats"
                label="Recargar todas las estadísticas"
                icon="pi pi-refresh"
                size="small"
                class="p-button-secondary"
              />
            </div> -->
          </div>
        </Panel>

        <br />

        <div
          v-if="!isLoading && !error"
          class="galaxy-container"
        >
          <Panel
            v-for="(galaxy, gIndex) in groupedGalaxies"
            :key="gIndex"
            class="galaxy-panel"
            toggleable
            collapsed
          >
            <template #header>
              <div class="galaxy-header">
                <img
                  v-if="galaxy.image"
                  :src="galaxy.image"
                  class="galaxy-image"
                />
                <h2 class="galaxy-title">{{ translateItemName(galaxy.name) }}</h2>
                <Tag
                  :value="`${galaxy.quadrants.length} ${galaxy.quadrants.length === 1 ? 'Cuadrante' : 'Cuadrantes'}`"
                  severity="info"
                />
              </div>
            </template>

            <div class="quadrants-grid">
              <Panel
                v-for="(quadrant, qIndex) in galaxy.quadrants"
                :key="qIndex"
                class="quadrant-panel"
                toggleable
                collapsed
              >
                <template #header>
                  <h3 class="quadrant-title">
                    <i class="pi pi-th-large"></i>
                    {{ quadrant.name }}
                    <Tag
                      :value="`${quadrant.regions.length} ${quadrant.regions.length === 1 ? 'Región' : 'Regiones'}`"
                      severity="info"
                    />
                  </h3>
                </template>

                <div
                  class="regions-grid"
                  :style="`grid-template-columns: repeat(${gridColumns}, 3fr)`"
                >
                  <Card
                    v-for="(region, rIndex) in quadrant.regions"
                    :key="rIndex"
                    class="region-card"
                  >
                    <template #content>
                      <div class="p-4 base-content">
                        <div class="flex flex-column gap-3">
                          <div class="flex align-items-center gap-2">
                            <h3 class="base-title">{{ translateRegionName(region.Region) }}</h3>
                            <Tag
                              :value="region.Galaxy"
                              severity="info"
                              class="category-tag"
                            />
                          </div>

                          <div class="base-details">
                            <div class="detail-item">
                              <span class="detail-label">Cuadrante:</span>
                              <span class="detail-value">{{ region.Quadrant }}</span>
                            </div>

                            <div class="detail-item">
                              <span class="detail-label">Coordenadas:</span>
                              <span class="detail-value">{{ region.Coordinates }}</span>
                            </div>

                            <div class="detail-item">
                              <span class="detail-label">Glifos:</span>
                              <span class="glyph-value">{{ getGlyphs(region.Region, region.Coordinates) }}</span>
                            </div>
                          </div>

                          <!-- <Panel class="stats-panel mt-3">
                            <template #header>
                              <div class="flex align-items-center justify-between w-full">
                                <span class="stats-header">Estadísticas de la Región</span>
                                <Button
                                  v-if="!region.statsLoaded && !region.statsLoading"
                                  @click="loadRegionStats(region)"
                                  label="Cargar"
                                  icon="pi pi-chart-line"
                                  size="small"
                                />
                                <i
                                  v-else-if="region.statsLoading"
                                  class="pi pi-spin pi-spinner"
                                />
                                <Tag
                                  v-else
                                  value="Cargado"
                                  severity="success"
                                  class="text-xs"
                                />
                              </div>
                            </template>
                            <div class="stats-content">
                              <div v-if="region.statsLoaded && region.stats">
                                <div
                                  v-for="(item, itemName) in region.stats"
                                  :key="itemName"
                                  class="stat-item"
                                >
                                  <span class="stat-label">{{ translateItemName(itemName) }}</span>
                                  <Tag
                                    class="stat-tag"
                                    severity="info"
                                  >
                                    Cantidad: {{ item.CrossPlatform }}
                                  </Tag>
                                </div>
                              </div>
                              <div
                                v-else-if="region.statsLoading"
                                class="text-center py-2"
                              >
                                <i class="pi pi-spin pi-spinner mr-2"></i>
                                Cargando estadísticas...
                              </div>
                              <div
                                v-else
                                class="text-center py-2 text-gray-500"
                              >
                                <i class="pi pi-chart-line mr-2"></i>
                                Haz clic en "Cargar" para ver las estadísticas
                              </div>
                            </div>
                          </Panel> -->

                          <Panel
                            v-if="region.Region"
                            class="builder-panel mt-3"
                          >
                            <template #header>
                              <span class="builder-link-header">Enlaces de la Región</span>
                            </template>
                            <div class="panel-content-with-image">
                              <a
                                :href="`https://nomanssky.fandom.com/wiki/${formatWikiLink(region.Region)}`"
                                target="_blank"
                                class="builder-link"
                              >
                                <i class="pi pi-external-link"></i> Ver detalles de la región
                              </a>
                              <img
                                v-if="region.imageUrl"
                                :src="region.imageUrl.modal"
                                alt="Imagen de la base"
                                class="panel-base-image"
                                @click="openModal(`https://nomanssky.fandom.com/wiki/${formatWikiLink(region.Region)}`)"
                              />
                            </div>
                          </Panel>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>
              </Panel>
            </div>
          </Panel>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #f8fafc;
  --background-secondary: #e2e8f0;
  --background-terciary: #cbd5e1;
  --border-color: rgb(99 102 241 / 15%);
  --hover-effect: rgb(99 102 241 / 10%);
  --tag-background: rgb(79 70 229 / 10%);
  --tag-border: #4f46e5;
  --tag-text: #4f46e5;
  --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%);
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0f172a;
  --background-secondary: #1e293b;
  --background-terciary: #334155;
  --border-color: rgb(103 232 249 / 15%);
  --hover-effect: rgb(103 232 249 / 20%);
  --tag-background: rgb(103 232 249 / 10%);
  --tag-border: #67e8f9;
  --tag-text: #67e8f9;
  --card-shadow: 0 4px 6px -1px rgb(255 255 255 / 10%);
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  margin: 1rem auto;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
}

.space-page-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.header-container {
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.loading-panel {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid var(--tag-border);
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(79, 70, 229, 0.6);
  }
}

.loading-status {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.loading-stats {
  background: var(--background-secondary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.loading-stats p {
  margin: 0.5rem 0;
}

.link-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.panel-base-image {
  max-width: 100%;
  height: auto;
  min-width: 90%;
  place-items: center center;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.panel-base-image:hover {
  transform: scale(1.02);
}

.stats-panel {
  background: var(--background-terciary) !important;
  border: 1px solid var(--border-color) !important;
  margin-top: 1rem;
}

.stats-header {
  color: var(--tag-text);
  font-weight: 600;
}

.stats-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.stat-item {
  background-color: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-label {
  font-weight: 600;
  color: var(--text-primary);
}

.stat-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.9rem;
  padding: 0.4rem 0.6rem;
}

.category-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.8rem;
  margin-left: 0.2rem;
}

.text-stellar-gray {
  color: var(--text-secondary);
}

.base-content {
  color: var(--text-primary);
}

.base-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  display: inline;
  margin-right: 1em;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.detail-label {
  color: var(--text-secondary);
  font-weight: 500;
}

.detail-value {
  color: var(--text-primary);
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.glyph-value {
  color: var(--text-primary);
  max-width: 300px;
  font-family: NMS-Glyphs-Mono;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1.2em;
}

.builder-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.builder-link {
  color: var(--tag-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.security-level {
  color: var(--tag-text);
  font-weight: 600;
}

.update-info {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 1rem;
}

.loading-message,
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.rss-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: -3rem;
}

.logo-image {
  height: 7rem;
  transition: transform 0.3s ease;
  filter: brightness(var(--logo-brightness, 1));
}

.theme-dark .logo-image {
  --logo-brightness: 0.9;
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

.galactic-panel {
  background: var(--background-secondary) !important;
  border-radius: 10px !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: var(--card-shadow);
}

.panel-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
}

.panel-content {
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
}

.security-level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.galaxy-container {
  display: grid;
  gap: 3rem;
  margin-top: 2rem;
}

.galaxy-panel {
  background: var(--background-terciary) !important;
  border-radius: 12px !important;
  overflow: hidden;
  box-shadow: 0 0 20px rgb(79 70 229 / 10%);
}

.galaxy-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(45deg, rgb(79 70 229 / 5%), transparent);
}

.galaxy-image {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid var(--tag-border);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%);
}

.quadrants-grid {
  display: grid;
  gap: 2rem;
  padding: 1.5rem;
  grid-template-columns: 1fr;
  overflow-x: auto;
}

.quadrant-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 10px !important;
  transition: transform 0.2s ease;
  width: 100%;
}

.quadrant-panel:hover {
  transform: translateY(-2px);
}

.quadrant-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.regions-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 1rem;
  grid-auto-flow: dense;
}

.region-card {
  background: var(--background-primary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 8px !important;
  transition: all 0.2s ease;
  min-width: 360px;
  height: fit-content;
}

.region-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px var(--hover-effect);
}

.stats-panel {
  background: var(--background-secondary) !important;
  border-radius: 8px !important;
  margin-top: 1.5rem;
}

.stats-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-item {
  background: var(--background-primary);
  border-radius: 6px;
  padding: 0.75rem;
  text-align: center;
}

@media (width <= 1024px) {
  .space-page-container {
    padding: 1.5rem 1rem;
  }

  .galactic-title {
    font-size: 2rem;
  }
}

@media (width <= 768px) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .logo-image {
    height: 0;
  }

  .galactic-title {
    font-size: 1.75rem;
  }

  .galaxy-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .quadrants-grid {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .regions-grid {
    width: 50%;
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-content {
    grid-template-columns: 1fr;
  }

  .region-card {
    max-width: 20%;
  }
}

@media (width <= 480px) {
  .galactic-title {
    font-size: 1.5rem;
  }

  .panel-title {
    font-size: 1.25rem;
  }

  .quadrant-title {
    font-size: 1.1rem;
  }

  .region-card {
    margin: 0 -0.5rem;
  }
}

@keyframes card-entry {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.galaxy-panel {
  animation: card-entry 0.6s ease-out;
}

.region-card {
  animation: card-entry 0.4s ease-out;
}

.loading-message,
.error-message {
  padding: 3rem 2rem;
  border-radius: 12px;
  background: var(--background-secondary);
  border: 2px dashed var(--border-color);
  text-align: center;
  margin: 2rem 0;
}

.loading-message i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-message i {
  color: #ef4444;
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
