<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Paginator from 'primevue/paginator';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

interface SystemQueryData {
  SystemName: string;
  SystemTitle: string;
  Coordinates: string;
  Galaxy: string;
  Region: string;
  Class: string;
  Color: string;
  Faction: string;
  Planets: string;
  Moons: string;
  Civilized: string;
  Distance: string;
  Platform: string;
  SystemID: string;
  Game_Release: string;
  Economy: string;
  Wealth: string;
  Buy: string;
  Sell: string;
  Conflict: string;
  Water: string;
  Dissonant: string;
  Gateway: string;
  Discovered: string;
  DiscoveredLink: string;
  ResearchTeam: string;
  MultipleStars: string;
  NoShow: string;
  Misc: string;
}

type CargoResponse<T> = {
  cargoquery?: Array<{ title: T }>;
  error?: {
    code: string;
    info: string;
  };
};

const basicQueryData = { origin: '*', format: 'json', limit: '500' };
const screenWidth = ref(window.innerWidth);
const showScrollButton = ref<boolean>(false);

const first = ref(0);
const rows = ref(12);
const totalRecords = ref(0);

const buildQueryUrl = (queryObject: Record<string, any>) => {
  const params = new URLSearchParams();
  Object.entries(queryObject).forEach(([k, v]) => {
    params.set(k, Array.isArray(v) ? v.join(',') : String(v));
  });
  return `https://nomanssky.fandom.com/api.php?${params.toString()}`;
};

const getSystemsQueryDataUrl = (offset = 0) =>
  buildQueryUrl({
    ...basicQueryData,
    action: 'cargoquery',
    tables: 'Systems',
    fields: [
      'Systems._pageName=SystemName',
      'Systems._pageTitle=SystemTitle',
      'Systems.Coordinates',
      'Systems.Galaxy',
      'Systems.Region',
      'Systems.Class',
      'Systems.Color',
      'Systems.Faction',
      'Systems.Planets',
      'Systems.Moons',
      'Systems.Civilized',
      'Systems.Distance',
      'Systems.Platform',
      'Systems.SystemID',
      'Systems.Game_Release',
      'Systems.Economy',
      'Systems.Wealth',
      'Systems.Buy',
      'Systems.Sell',
      'Systems.Conflict',
      'Systems.Water',
      'Systems.Dissonant',
      'Systems.Gateway',
      'Systems.Discovered',
      'Systems.DiscoveredLink',
      'Systems.ResearchTeam',
      'Systems.MultipleStars',
      'Systems.NoShow',
      'Systems.Misc',
    ].join(','),
    order_by: 'Systems._pageName ASC',
    where: `Systems.Civilized='Royal Space Society'`,
    offset,
  });

const mapSystemsData = (data: CargoResponse<SystemQueryData>) => {
  if (!data?.cargoquery) {
    throw new Error('La respuesta de la API no contiene datos válidos');
  }

  return data.cargoquery.map(({ title }) => ({
    SystemName: title.SystemName || 'Desconocido',
    SystemTitle: title.SystemTitle || 'Desconocido',
    Coordinates: title.Coordinates || 'Desconocido',
    Galaxy: title.Galaxy || 'Desconocido',
    Region: title.Region || 'Desconocido',
    Class: title.Class || 'Desconocido',
    Color: title.Color || 'Desconocido',
    Faction: title.Faction || 'Desconocido',
    Planets: title.Planets || 'Desconocido',
    Moons: title.Moons || 'Desconocido',
    Civilized: title.Civilized || 'Desconocido',
    Distance: title.Distance || 'Desconocido',
    Platform: title.Platform || 'Desconocido',
    SystemID: title.SystemID || 'Desconocido',
    Game_Release: title.Game_Release || 'Desconocido',
    Economy: title.Economy || 'Desconocido',
    Wealth: title.Wealth || 'Desconocido',
    Buy: title.Buy || 'Desconocido',
    Sell: title.Sell || 'Desconocido',
    Conflict: title.Conflict || 'Desconocido',
    Water: title.Water || 'Desconocido',
    Dissonant: title.Dissonant || 'Desconocido',
    Gateway: title.Gateway || 'Desconocido',
    Discovered: title.Discovered || 'Desconocido',
    DiscoveredLink: title.DiscoveredLink || 'Desconocido',
    ResearchTeam: title.ResearchTeam || 'Desconocido',
    MultipleStars: title.MultipleStars || 'Desconocido',
    NoShow: title.NoShow || 'Desconocido',
    Misc: title.Misc || 'Desconocido',
  }));
};

const fetchSystemsData = async (offset = 0) => {
  const url = getSystemsQueryDataUrl(offset);
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error HTTP: ${res.status}`);
  }

  const data = (await res.json()) as CargoResponse<SystemQueryData>;

  if (data.error) {
    throw new Error(`Error API: ${data.error.info}`);
  }

  return mapSystemsData(data);
};

const systems = ref<SystemQueryData[]>([]);
const filtered = ref<SystemQueryData[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

const searchText = ref('');
const filterGalaxy = ref('');
const filterUser = ref('');
const filterRegion = ref('');

const paginatedSystems = computed(() => {
  return filtered.value.slice(first.value, first.value + rows.value);
});

const applyFilters = () => {
  filtered.value = systems.value.filter(
    (s) =>
      (!searchText.value || s.SystemName.toLowerCase().includes(searchText.value.toLowerCase())) &&
      (!filterGalaxy.value || s.Galaxy === filterGalaxy.value) &&
      (!filterRegion.value || s.Region === filterRegion.value) &&
      (!filterUser.value ||
        (s.DiscoveredLink && s.DiscoveredLink.toLowerCase().includes(filterUser.value.toLowerCase())) ||
        (s.Discovered && s.Discovered.toLowerCase().includes(filterUser.value.toLowerCase())) ||
        (s.ResearchTeam && s.ResearchTeam.toLowerCase().includes(filterUser.value.toLowerCase())))
  );
  totalRecords.value = filtered.value.length;
  first.value = 0;
};

const uniqueGalaxies = computed(() => [...new Set(systems.value.map((s) => s.Galaxy))].sort());

const uniqueRegions = computed(() => [...new Set(systems.value.map((s) => s.Region))].sort());

const uniqueUsers = computed(() => {
  const users = new Set<string>();

  systems.value.forEach((system) => {
    if (system.DiscoveredLink && system.DiscoveredLink !== 'Desconocido') {
      users.add(system.DiscoveredLink.trim());
    }
    if (system.Discovered && system.Discovered !== 'Desconocido') {
      users.add(system.Discovered.trim());
    }
    if (system.ResearchTeam && system.ResearchTeam !== 'Desconocido') {
      users.add(system.ResearchTeam.trim());
    }
  });

  return [...users].sort();
});

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

watch([searchText, filterGalaxy, filterUser, filterRegion], applyFilters);

onMounted(async () => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  window.addEventListener('scroll', handleScroll);

  isLoading.value = true;
  try {
    systems.value = await fetchSystemsData();
    applyFilters();
  } catch (e) {
    console.error(e);
    error.value = 'Error al cargar sistemas';
  } finally {
    isLoading.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

function getGlyphs(coordinates: string): string {
  return coords2Glyphs(coordinates);
}
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a
              href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society"
              target="_blank"
            >
              <div class="wiki-logo">
                <img
                  src="/assets/images/shared/logo-white.png"
                  class="logo-image"
                  alt="Wiki Logo"
                />
              </div>
            </a>
            <div class="header-container">
              <div class="title-theme-container">
                <h1 class="galactic-title">
                  <span class="title-text">Sistemas RSS</span>
                </h1>
              </div>
            </div>
            <p class="text-stellar-gray mt-2">Listado de sistemas de la Royal Space Society</p>
          </div>
          <ThemeSwitch />
        </div>

        <div class="filter-container mb-6 p-4 bg-space-dark rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block mb-2">Buscar nombre:</label>
              <InputText
                v-model="searchText"
                placeholder="Buscar sistema..."
                class="w-full"
              />
            </div>
            <div>
              <label class="block mb-2">Filtrar galaxia:</label>
              <Dropdown
                v-model="filterGalaxy"
                :options="uniqueGalaxies"
                placeholder="Todas las galaxias"
                showClear
                class="w-full"
              />
            </div>
            <div>
              <label class="block mb-2">Filtrar región:</label>
              <Dropdown
                v-model="filterRegion"
                :options="uniqueRegions"
                placeholder="Todas las regiones"
                showClear
                class="w-full"
              />
            </div>
            <div>
              <label class="block mb-2">Filtrar por usuario:</label>
              <InputText
                v-model="filterUser"
                placeholder="Buscar descubridor o equipo..."
                class="w-full"
              />
            </div>
          </div>
        </div>

        <Panel class="galactic-panel">
          <template #header><h2 class="panel-title">Estadísticas</h2></template>
          <div class="panel-content">
            <p>
              🌐 Sistemas totales: <strong>{{ systems.length }}</strong>
            </p>
            <p>
              🔍 Filtrados: <strong>{{ filtered.length }}</strong>
            </p>
            <p>
              🪐 Galaxias: <strong>{{ uniqueGalaxies.length }}</strong>
            </p>
            <p>
              👤 Usuarios únicos: <strong>{{ uniqueUsers.length }}</strong>
            </p>
          </div>
        </Panel>

        <br />

        <Paginator
          v-model:first="first"
          v-model:rows="rows"
          :totalRecords="totalRecords"
          :rowsPerPageOptions="[6, 12, 18, 24, 30, 36, 48]"
          class="mt-4"
        />

        <br />

        <div
          v-if="isLoading"
          class="loading-message"
        >
          <i class="pi pi-spinner pi-spin"></i> Cargando sistemas...
        </div>
        <div
          v-else-if="error"
          class="error-message p-error"
        >
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>
        <template v-else>
          <div
            class="grid gap-4"
            :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
          >
            <Card
              v-for="(s, i) in paginatedSystems"
              :key="i"
              class="update-card"
            >
              <template #content>
                <div class="p-4">
                  <div class="flex flex-column gap-3">
                    <h3 class="update-title">{{ s.SystemName }}</h3>
                    <div class="update-details">
                      <div class="detail-item">
                        <span class="detail-label">Región:</span
                        ><Tag
                          :value="s.Region"
                          class="category-tag"
                        />
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Galaxia:</span
                        ><Tag
                          :value="s.Galaxy"
                          class="category-tag"
                        />
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Coordenadas:</span
                        ><span class="detail-value">{{ s.Coordinates }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Glifos:</span
                        ><span class="glyph-value">{{ getGlyphs(s.Coordinates) }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Clase:</span><span class="detail-value">{{ s.Class }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Color:</span><span class="detail-value">{{ s.Color }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Facción:</span><span class="detail-value">{{ s.Faction }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Planetas:</span><span class="detail-value">{{ s.Planets }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Lunas:</span><span class="detail-value">{{ s.Moons }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Descubridor:</span
                        ><span class="detail-value">{{
                          s.Discovered && s.Discovered !== 'Desconocido' ? s.Discovered : s.DiscoveredLink
                        }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Equipo investigación:</span
                        ><span class="detail-value">{{ s.ResearchTeam }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Economía:</span><span class="detail-value">{{ s.Economy }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Riqueza:</span><span class="detail-value">{{ s.Wealth }}</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Conflictos:</span><span class="detail-value">{{ s.Conflict }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </template>
      </div>
    </template>
  </Card>

  <transition name="fade">
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      class="scroll-top-button"
    >
      <i class="pi pi-arrow-up"></i>
    </button>
  </transition>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #d3d3d3;
  --background-secondary: #f1f1f1;
  --border-color: rgba(99, 102, 241, 0.15);
  --hover-effect: rgba(99, 102, 241, 0.1);
  --tag-background: rgba(79, 70, 229, 0.1);
  --tag-border: #4f46e5;
  --tag-text: #4f46e5;
  --space-dark: #c3d4ff;
  --space-light: #e2e3e4;
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --border-color: rgba(103, 232, 249, 0.15);
  --hover-effect: rgba(103, 232, 249, 0.2);
  --tag-background: rgba(103, 232, 249, 0.1);
  --tag-border: #67e8f9;
  --tag-text: #67e8f9;
  --space-dark: #0f172a;
  --space-light: #1e293b;
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
}

label.block {
  display: block;
  min-height: 1.5em;
  white-space: normal;
  line-height: 1.2;
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.update-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.update-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.category-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
}

.text-stellar-gray {
  color: var(--text-secondary);
}

.update-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  word-break: break-word;
  white-space: normal;
  min-height: 3rem;
  display: block;
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
  max-width: 200px;
  font-family: NMS-Glyphs-Mono;
  text-overflow: ellipsis;
  overflow: hidden;
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

.wiki-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: 1.5rem;
  height: auto;
  width: auto;
}

.logo-image {
  height: 10rem;
  transition: transform 0.3s ease;
  filter: brightness(var(--logo-brightness, 1));
}

.theme-dark .logo-image {
  --logo-brightness: 0.9;
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

.filter-container {
  background: var(--space-dark);
  border: 1px solid var(--border-color);
}

.galactic-panel {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
}

.panel-title {
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
}

.panel-content {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .wiki-logo {
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

.scroll-top-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-gradient);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.scroll-top-button:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
