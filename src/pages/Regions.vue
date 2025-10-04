<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import { fetchRegionsData, fetchRegionImageUrls, getRegionStats } from '@/api/api';
import type { RegionQueryData, ImageUrls, RegionStats } from '@/api/api';

// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });

interface ExtendedRegionsQueryData extends RegionQueryData {
  imageUrl?: ImageUrls | null;
  stats?: RegionStats | null;
}

const bases = ref<ExtendedRegionsQueryData[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const CIVILIZATION = 'Royal Space Society';
const showEnglish = ref(false);

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

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

const mergeAndRemoveDuplicates = (
  existing: ExtendedRegionsQueryData[],
  newItems: ExtendedRegionsQueryData[]
): ExtendedRegionsQueryData[] => {
  const merged = [...existing, ...newItems];
  return merged.filter((item, index, self) => index === self.findIndex((t) => t.Region === item.Region));
};

const fetchBases = async (offset: number = 0) => {
  try {
    const newBases = (await fetchRegionsData(CIVILIZATION, offset)) as ExtendedRegionsQueryData[];

    const filteredBases = newBases.filter((base) => allowedNames.some((name) => base.Region.includes(name)));

    await Promise.all(
      filteredBases.map(async (base) => {
        base.imageUrl = await fetchRegionImageUrls(base.Region);
        base.stats = await getRegionStats(base.Region);
        // console.log(base);
      })
    );

    bases.value = mergeAndRemoveDuplicates(bases.value, filteredBases);

    if (newBases.length === 500) {
      await fetchBases(offset + 500);
    }
  } catch (err) {
    error.value = 'Error al cargar las bases';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  await fetchBases(0);
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

function getGlyphs(region: string, coordinates: string): string {
  return regionGlyphsMap[region] || coords2Glyphs(coordinates);
}

const itemNameTranslations: Record<string, string> = {
  Cross: 'Cruzado',
  'Star systems': 'Sistemas',
  Planets: 'Planetas',
  Starships: 'Naves',
  'Multi-Tools': 'Multiherramientas',
  Euclid: 'Euclides',
  'Hilbert Dimension': 'Dimensión de Hilbert',
};

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

  bases.value.forEach((region) => {
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

const regionsNeedingSystems = computed(() =>
  bases.value.filter((region) => {
    const systems = region.stats?.['Star systems']?.CrossPlatform;
    return systems !== undefined && systems < 10;
  })
);

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

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="panel-title">Información de las regiones</h2>
          </template>
          <div class="panel-content">
            <p>
              Total de regiones registradas: <strong>{{ bases.length }}</strong>
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
          </div>
        </Panel>

        <br />

        <Panel
          v-if="regionsNeedingSystems.length > 0"
          class="galaxy-panel shadow-md rounded-xl border border-yellow-300"
          toggleable
          collapsed
        >
          <template #header>
            <div class="galaxy-header flex items-start gap-4 p-4 bg-yellow-50 rounded-t-xl">
              <i class="pi pi-exclamation-triangle text-yellow-600 text-2xl"></i>
              <div class="flex flex-col">
                <h2 class="text-lg font-semibold text-yellow-800">Regiones con pocos sistemas descubiertos</h2>
                <p class="text-sm text-yellow-700">
                  Estas regiones tienen menos de 10 sistemas registrados y requieren exploración.
                </p>
              </div>
              <Tag
                :value="`${regionsNeedingSystems.length} region${regionsNeedingSystems.length === 1 ? '' : 'es'}`"
                severity="warning"
                class="ml-auto font-medium text-sm"
              />
            </div>
          </template>

          <div
            class="regions-grid grid gap-4 p-4 bg-white rounded-b-xl"
            :style="`grid-template-columns: repeat(${gridColumns}, minmax(250px, 1fr))`"
          >
            <Card
              v-for="(region, index) in regionsNeedingSystems"
              :key="index"
              class="region-card border border-gray-200 shadow-sm rounded-lg"
            >
              <template #content>
                <div class="p-4">
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">
                    {{ translateRegionName(region.Region) }}
                  </h3>
                  <p class="text-sm text-gray-700"><strong>Galaxia:</strong> {{ region.Galaxy }}</p>
                  <p class="text-sm text-gray-700">Cuadrante: {{ region.Quadrant }}</p>
                  <p class="text-sm text-gray-700">Coordenadas: {{ region.Coordinates }}</p>
                  <p class="text-sm text-gray-700">
                    <strong>Sistemas descubiertos:</strong>
                    {{ region.stats?.['Star systems']?.CrossPlatform }}
                  </p>
                  <p class="text-sm text-gray-700">
                    Glifos:
                    <span class="glyph-value font-mono bg-gray-100 px-2 py-0.5 rounded">
                      {{ getGlyphs(region.Region, region.Coordinates) }}
                    </span>
                  </p>
                  <Tag
                    value="Menos de 10 sistemas"
                    severity="danger"
                    class="mt-3 text-xs px-2 py-1 rounded"
                  />
                </div>
              </template>
            </Card>
          </div>
        </Panel>

        <div
          v-if="isLoading"
          class="loading-message"
        >
          <i class="pi pi-spinner pi-spin"></i> Cargando regiones...
        </div>
        <div
          v-else-if="error"
          class="error-message p-error"
        >
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>

        <div
          v-else
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

                          <Panel
                            v-if="region.stats"
                            class="stats-panel mt-3"
                          >
                            <template #header>
                              <span class="stats-header">Estadísticas de la Región</span>
                            </template>
                            <div class="stats-content">
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
                          </Panel>

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
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
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
