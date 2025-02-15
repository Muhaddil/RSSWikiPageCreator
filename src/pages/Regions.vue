<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import { fetchRegionsData, fetchRegionImageUrls, getRegionStats } from '@/api/api';
import type { RegionQueryData, ImageUrls, RegionStats } from '@/api/api';

interface ExtendedRegionsQueryData extends RegionQueryData {
  imageUrl?: ImageUrls | null;
  stats?: RegionStats | null;
}

const bases = ref<ExtendedRegionsQueryData[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const CIVILIZATION = 'Royal Space Society';

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
];

const gridColumns = computed(() =>
  screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3
);

const mergeAndRemoveDuplicates = (
  existing: ExtendedRegionsQueryData[],
  newItems: ExtendedRegionsQueryData[]
): ExtendedRegionsQueryData[] => {
  const merged = [...existing, ...newItems];
  return merged.filter((item, index, self) =>
    index === self.findIndex(t => t.Region === item.Region)
  );
};

const fetchBases = async (offset: number = 0) => {
  try {
    const newBases = await fetchRegionsData(CIVILIZATION, offset) as ExtendedRegionsQueryData[];

    const filteredBases = newBases.filter(base =>
      allowedNames.some(name => base.Region.includes(name))
    );

    await Promise.all(filteredBases.map(async (base) => {
      base.imageUrl = await fetchRegionImageUrls(base.Region);
      base.stats = await getRegionStats(base.Region);
    }));

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
  return name
    .trim()
    .replace(/\s+/g, '_')
    .replace(/\//g, '_')
    .replace(/:/g, ':')
    .replace(/'/g, "'");
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

  const system_idx = "000";

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
  'Uklots Shallows': '0016032FE9B0',
};

function getGlyphs(region: string, coordinates: string): string {
  return regionGlyphsMap[region] || coords2Glyphs(coordinates);
}

const itemNameTranslations: Record<string, string> = {
  'Cross': 'Cruzado',
  'Star systems': 'Sistemas',
  'Planets': 'Planetas',
  'Starships': 'Naves',
  'Multi-Tools': 'Multiherramientas',
};

function translateItemName(itemName: string | number): string {
  const key = itemName.toString();
  return itemNameTranslations[key] || key;
}
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society" target="_blank">
              <div class="rss-logo">
                <img src="/assets/images/basesdestacadas/RSS-Logo.webp" class="logo-image" alt="RSS Logo" />
              </div>
            </a>
            <div class="header-container">
              <div class="title-theme-container">
                <h1 class="galactic-title">
                  <span class="title-text">Regiones - Royal Space Society</span>
                </h1>
              </div>
            </div>
            <p class="text-stellar-gray mt-2">Explora las regiones de la Royal Space Society</p>
          </div>
        </div>

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="panel-title">Información de las regiones</h2>
          </template>
          <div class="panel-content">
            <p>Total de regiones registradas: <strong>{{ bases.length }}</strong></p>
            <p class="security-level mt-2">
              Nivel de seguridad:
              <Tag value="Clasificado RSS" severity="info" class="category-tag" />
            </p>
            <p class="update-info">Última actualización: {{ new Date().toLocaleDateString() }}</p>
          </div>
        </Panel>

        <br />

        <div v-if="isLoading" class="loading-message">
          <i class="pi pi-spinner pi-spin"></i> Cargando regiones...
        </div>
        <div v-else-if="error" class="error-message p-error">
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>

        <div v-else class="grid gap-4" :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`">
          <Card v-for="(base, index) in bases" :key="index" class="link-card">
            <template #content>
              <div class="p-4 base-content">
                <div class="flex flex-column gap-3">
                  <div class="flex align-items-center gap-2">
                    <h3 class="base-title">{{ base.Region }}</h3>
                    <Tag :value="base.Galaxy" severity="info" class="category-tag" />
                  </div>

                  <div class="base-details">
                    <div class="detail-item">
                      <span class="detail-label">Cuadrante:</span>
                      <span class="detail-value">{{ base.Quadrant }}</span>
                    </div>

                    <div class="detail-item">
                      <span class="detail-label">Coordenadas:</span>
                      <span class="detail-value">{{ base.Coordinates }}</span>
                    </div>

                    <div class="detail-item">
                      <span class="detail-label">Glifos:</span>
                      <span class="glyph-value">{{ getGlyphs(base.Region, base.Coordinates) }}</span>
                    </div>
                  </div>

                  <Panel v-if="base.stats" class="stats-panel mt-3">
                    <template #header>
                      <span class="stats-header">Estadísticas de la Región</span>
                    </template>
                    <div class="stats-content">
                      <div v-for="(item, itemName) in base.stats" :key="itemName" class="stat-item">
                        <span class="stat-label">{{ translateItemName(itemName) }}</span>
                        <Tag class="stat-tag" severity="info">
                          Cantidad: {{ item.CrossPlatform }}
                        </Tag>
                      </div>
                    </div>
                  </Panel>

                  <Panel v-if="base.Region" class="builder-panel mt-3">
                    <template #header>
                      <span class="builder-link-header">Enlaces de la Región</span>
                    </template>
                    <div class="panel-content-with-image">
                      <a :href="`https://nomanssky.fandom.com/wiki/${formatWikiLink(base.Region)}`" target="_blank"
                        class="builder-link">
                        <i class="pi pi-external-link"></i> Ver detalles de la región
                      </a>
                      <img v-if="base.imageUrl" :src="base.imageUrl.modal" alt="Imagen de la base"
                        class="panel-base-image"
                        @click="openModal(`https://nomanssky.fandom.com/wiki/${formatWikiLink(base.Region)}`)" />
                    </div>
                  </Panel>
                </div>
              </div>
            </template>
          </Card>
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
  --background-primary: #d3d3d3;
  --background-secondary: #f1f1f1;
  --background-terciary: #a0a0a0;
  --border-color: rgba(99, 102, 241, 0.15);
  --hover-effect: rgba(99, 102, 241, 0.1);
  --tag-background: rgba(79, 70, 229, 0.1);
  --tag-border: #4f46e5;
  --tag-text: #4f46e5;
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --background-terciary: #192340;
  --border-color: rgba(103, 232, 249, 0.15);
  --hover-effect: rgba(103, 232, 249, 0.2);
  --tag-background: rgba(103, 232, 249, 0.1);
  --tag-border: #67e8f9;
  --tag-text: #67e8f9;
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  margin: 0 auto;
  padding: 0 1rem;
}

.space-page-container {
  max-width: 2800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.link-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.panel-base-image {
  max-width: 100%;
  height: auto;
  min-width: 90%;
  align-items: center;
  justify-items: center;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  font-size: 1.5em;
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
  top: 2rem;
  height: auto;
  width: auto;
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

@media (max-width: 768px) {
  .rss-logo {
    position: absolute;
    right: 0.1rem;
    top: 0.5rem;
    margin-top: 1rem;
    width: 0px;
    height: 0px;
  }

  .logo-image {
    height: auto;
    transition: transform 0.3s ease;
    filter: brightness(var(--logo-brightness, 1));
  }

  .galactic-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .header-container {
    text-align: center;
  }
}
</style>
