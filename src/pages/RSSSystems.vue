<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });

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

const wikiSearchText = ref('');
const isSearchingWiki = ref(false);
const wikiSearchResults = ref(new Set<string>());
const searchProgress = ref({ current: 0, total: 0 });

const wikiSearchOptionsSpanish = ref([
  { label: 'Indio Activado', value: 'Activated Indium' },
  { label: 'Chatarra Recuperable', value: 'Salvageable Scrap' },
  { label: 'Bulbo Estelar', value: 'Star Bulb' },
  { label: 'Parafinio', value: 'Paraffinium' },
  { label: 'Cadmio', value: 'Cadmium' },
  { label: 'Emerilio', value: 'Emeril' },
  { label: 'Indio', value: 'Indium' },
  { label: 'Cobre', value: 'Copper' },
  { label: 'Oro', value: 'Gold' },
  { label: 'Plata', value: 'Silver' },
  { label: 'Platino', value: 'Platinum' },
  { label: 'Metal Cromático', value: 'Chromatic Metal' },
  { label: 'Polvo de Ferrita', value: 'Ferrite Dust' },
  { label: 'Ferrita Pura', value: 'Pure Ferrite' },
  { label: 'Ferrita Magnetizada', value: 'Magnetised Ferrite' },
  { label: 'Sodio', value: 'Sodium' },
  { label: 'Oxígeno', value: 'Oxygen' },
  { label: 'Carbono', value: 'Carbon' },
  { label: 'Carbono Condensado', value: 'Condensed Carbon' },
  { label: 'Cobalto', value: 'Cobalt' },
  { label: 'Cobalto Ionizado', value: 'Ionised Cobalt' },
  { label: 'Sal', value: 'Salt' },
  { label: 'Cloro', value: 'Chlorine' },
  { label: 'Amoníaco', value: 'Ammonia' },
  { label: 'Uranio', value: 'Uranium' },
  { label: 'Radón', value: 'Radon' },
  { label: 'Sulfurina', value: 'Sulphurine' },
  { label: 'Nitrógeno', value: 'Nitrogen' },

  { label: 'Seda estelar', value: 'Star Silk' },
  { label: 'Gotas de cometa', value: 'Comet Droplets' },
  { label: 'Esfera de iones', value: 'Ion Sphere' },
  { label: 'Datos de usuario desencriptados', value: 'Decrypted User Data' },
  { label: 'Coordinadores de teletransporte', value: 'Teleport Coordinators' },
  { label: 'Caja de nanotubos', value: 'Nanotube Crate' },
  { label: 'Heridio autorreparable', value: 'Self-Repairing Heridium' },
  { label: 'Disolvente óptico', value: 'Optical Solvent' },
  { label: 'Toro 5D', value: '5D Torus' },
  { label: 'Fibra superconductora', value: 'Superconducting Fibre' },
  { label: 'Botellas sin aroma', value: 'De-Scented Bottles' },
  { label: 'Microscopio de neutrones', value: 'Neutron Microscope' },
  { label: 'Inyector de inestabilidad', value: 'Instability Injector' },
  { label: 'Canalización orgánica', value: 'Organic Piping' },
  { label: 'Conducto neuronal', value: 'Neural Duct' },
  { label: 'Suciedad', value: 'Dirt' },
  { label: 'Grasa de pirita sin refinar', value: 'Unrefined Pyrite Grease' },
  { label: 'Sal de bromuro', value: 'Bromide Salt' },
  { label: 'Circonio policromo', value: 'Polychromatic Zirconium' },
  { label: 'Cristal de doble arco reticular', value: 'Re-latticed Arc Crystal' },
  { label: 'Diente metálico enorme', value: 'Enormous Metal Cog' },
  { label: 'Pistón antiadherente', value: 'Non-Stick Piston' },
  { label: 'Desacopladores de malla', value: 'Mesh Decouplers' },
  { label: 'Cigüeñal holográfico', value: 'Holographic Crankshaft' },
  { label: 'Compresores vectoriales', value: 'Vector Compressors' },
  { label: 'Circuitos desguazados', value: 'Decommissioned Circuits' },
  { label: 'Tiza para soldadura', value: 'Welding Soap' },
  { label: 'Condensador de iones', value: 'Ion Capacitor' },
  { label: 'Unidad de posicionamiento autónoma', value: 'Autonomous Positioning Unit' },
  { label: 'Acelerador de cuantos', value: 'Quantum Accelerator' },
  { label: 'Bote de chispas', value: 'Spark Canister' },
  { label: 'Batería industrial', value: 'Industrial-Grade Battery' },
  { label: 'Gel óhmico', value: 'Ohmic Gel' },
  { label: 'Fluido de energía experimental', value: 'Experimental Power Fluid' },
  { label: 'Núcleo de fusión', value: 'Fusion Core' },
]);

const selectedWikiOption = ref('');

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

const getWikiPageContent = async (pageName: string): Promise<string> => {
  const url = buildQueryUrl({
    ...basicQueryData,
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    rvslots: 'main',
    titles: pageName,
    formatversion: '2',
  });

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.query && data.query.pages && data.query.pages.length > 0) {
      const page = data.query.pages[0];
      if (page.revisions && page.revisions.length > 0) {
        const content = page.revisions[0].slots.main.content;
        return content.toLowerCase();
      }
    }
  } catch (error) {
    console.warn(`Error fetching content for ${pageName}:`, error);
  }

  const fallbackUrl = buildQueryUrl({
    ...basicQueryData,
    action: 'query',
    prop: 'extracts',
    exintro: false,
    explaintext: true,
    exsectionformat: 'plain',
    titles: pageName,
  });

  try {
    const response = await fetch(fallbackUrl);
    const data = await response.json();

    if (data.query && data.query.pages) {
      const pages = Object.values(data.query.pages) as any[];
      if (pages.length > 0 && pages[0].extract) {
        return pages[0].extract.toLowerCase();
      }
    }
  } catch (error) {
    console.warn(`Fallback extract also failed for ${pageName}:`, error);
  }

  return '';
};

const cancelWikiSearch = () => {
  isSearchingWiki.value = false;
  searchProgress.value = { current: 0, total: 0 };
  wikiSearchResults.value.clear();
  wikiSearchText.value = '';
  selectedWikiOption.value = '';
  applyFilters();
};

const searchInWikiPages = async () => {
  const searchTerm = wikiSearchText.value.trim() || selectedWikiOption.value;
  if (!searchTerm) return;

  isSearchingWiki.value = true;
  wikiSearchResults.value.clear();

  const baseFiltered = systems.value.filter(
    (s) =>
      (!searchText.value || s.SystemName.toLowerCase().includes(searchText.value.toLowerCase())) &&
      (!filterGalaxy.value || s.Galaxy === filterGalaxy.value) &&
      (!filterRegion.value || s.Region === filterRegion.value) &&
      (!filterUser.value ||
        (s.DiscoveredLink && s.DiscoveredLink.toLowerCase().includes(filterUser.value.toLowerCase())) ||
        (s.Discovered && s.Discovered.toLowerCase().includes(filterUser.value.toLowerCase())) ||
        (s.ResearchTeam && s.ResearchTeam.toLowerCase().includes(filterUser.value.toLowerCase())))
  );

  searchProgress.value = { current: 0, total: baseFiltered.length };

  const searchTermLower = searchTerm.toLowerCase();
  const batchSize = 5;
  const delayBetweenBatches = 2000;

  try {
    for (let i = 0; i < baseFiltered.length; i += batchSize) {
      if (!isSearchingWiki.value) {
        break;
      }

      const batch = baseFiltered.slice(i, i + batchSize);

      const batchPromises = batch.map(async (system) => {
        try {
          const content = await getWikiPageContent(system.SystemName);
          if (content.includes(searchTermLower)) {
            wikiSearchResults.value.add(system.SystemName);
          }
          searchProgress.value.current++;
        } catch (error) {
          console.warn(`Error searching in ${system.SystemName}:`, error);
          searchProgress.value.current++;
        }
      });

      await Promise.all(batchPromises);

      if (i + batchSize < baseFiltered.length) {
        await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
      }
    }

    applyFilters();
  } catch (error) {
    console.error('Error during wiki search:', error);
  } finally {
    isSearchingWiki.value = false;
  }
};

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
  let base = systems.value.filter(
    (s) =>
      (!searchText.value || s.SystemName.toLowerCase().includes(searchText.value.toLowerCase())) &&
      (!filterGalaxy.value || s.Galaxy === filterGalaxy.value) &&
      (!filterRegion.value || s.Region === filterRegion.value) &&
      (!filterUser.value ||
        (s.DiscoveredLink && s.DiscoveredLink.toLowerCase().includes(filterUser.value.toLowerCase())) ||
        (s.Discovered && s.Discovered.toLowerCase().includes(filterUser.value.toLowerCase())) ||
        (s.ResearchTeam && s.ResearchTeam.toLowerCase().includes(filterUser.value.toLowerCase())))
  );

  if (wikiSearchResults.value.size > 0) {
    base = base.filter((s) => wikiSearchResults.value.has(s.SystemName));
  }

  filtered.value = base;
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

watch([searchText, filterGalaxy, filterUser, filterRegion, wikiSearchResults], applyFilters, { deep: true });

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

let scrollTimeout: number | null = null;

const handleScroll = () => {
  if (scrollTimeout) return;

  scrollTimeout = requestAnimationFrame(() => {
    showScrollButton.value = window.scrollY > 300;
    scrollTimeout = null;
  });
};

const scrollToTop = () => {
  const start = window.scrollY;
  const duration = 600;
  let startTime: number | null = null;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start * (1 - easedProgress));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
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

        <div class="filter-container mb-6">
          <div class="filter-header mb-4">
            <h3 class="filter-title">
              <i class="pi pi-filter mr-2"></i>
              Filtros de Búsqueda
            </h3>
          </div>

          <div class="filter-section mb-4">
            <h4 class="filter-section-title">Filtros Básicos</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="filter-field">
                <label class="filter-label">
                  <i class="pi pi-search mr-1"></i>
                  Buscar nombre:
                </label>
                <InputText
                  v-model="searchText"
                  placeholder="Buscar sistema..."
                  class="w-full filter-input"
                />
              </div>
              <div class="filter-field">
                <label class="filter-label">
                  <i class="pi pi-globe mr-1"></i>
                  Galaxia:
                </label>
                <Dropdown
                  v-model="filterGalaxy"
                  :options="uniqueGalaxies"
                  placeholder="Todas las galaxias"
                  showClear
                  class="w-full filter-dropdown"
                />
              </div>
              <div class="filter-field">
                <label class="filter-label">
                  <i class="pi pi-map-marker mr-1"></i>
                  Región:
                </label>
                <Dropdown
                  v-model="filterRegion"
                  :options="uniqueRegions"
                  placeholder="Todas las regiones"
                  showClear
                  class="w-full filter-dropdown"
                />
              </div>
              <div class="filter-field">
                <label class="filter-label">
                  <i class="pi pi-user mr-1"></i>
                  Usuario:
                </label>
                <InputText
                  v-model="filterUser"
                  placeholder="Buscar descubridor..."
                  class="w-full filter-input"
                />
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h4 class="filter-section-title">
              <i class="pi pi-book mr-1"></i>
              Búsqueda en Páginas Wiki
            </h4>
            <div class="wiki-search-container">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="filter-field">
                  <label class="filter-label">Texto personalizado:</label>
                  <InputText
                    v-model="wikiSearchText"
                    placeholder="Escribe aquí..."
                    class="w-full filter-input"
                    :disabled="isSearchingWiki"
                  />
                </div>
                <div class="filter-field">
                  <label class="filter-label">Recursos predefinidos:</label>
                  <Dropdown
                    v-model="selectedWikiOption"
                    filter
                    :options="wikiSearchOptionsSpanish"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Selecciona un recurso..."
                    showClear
                    class="w-full filter-dropdown"
                    :disabled="isSearchingWiki"
                  />
                </div>
                <div class="filter-field search-button-container">
                  <label class="filter-label">&nbsp;</label>
                  <div class="flex gap-2">
                    <Button
                      @click="searchInWikiPages"
                      :disabled="(!wikiSearchText.trim() && !selectedWikiOption) || isSearchingWiki"
                      :loading="isSearchingWiki"
                      class="search-wiki-button flex-1"
                    >
                      <i class="pi pi-search mr-2"></i>
                      Buscar en Wiki
                    </Button>
                    <Button
                      v-if="isSearchingWiki || wikiSearchResults.size > 0"
                      @click="cancelWikiSearch"
                      severity="danger"
                      class="cancel-search-button flex-1"
                    >
                      <i class="pi pi-times mr-2"></i>
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
              <div class="wiki-search-help mt-2">
                <small class="help-text">
                  <i class="pi pi-info-circle mr-1"></i>
                  Busca texto específico en las páginas wiki de los sistemas. Puedes escribir texto personalizado o
                  seleccionar un recurso de la lista.
                </small>
              </div>
            </div>
          </div>
        </div>

        <Panel class="galactic-panel">
          <template #header>
            <h2 class="panel-title">Estadísticas</h2>
          </template>
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
            <p v-if="wikiSearchResults.size > 0">
              📄 Con texto encontrado: <strong>{{ wikiSearchResults.size }}</strong>
            </p>
          </div>
        </Panel>

        <br />

        <div
          v-if="isLoading || isSearchingWiki"
          class="loading-message"
        >
          <i class="pi pi-spinner pi-spin"></i>
          <span v-if="isLoading">Cargando sistemas...</span>
          <span v-else-if="isSearchingWiki"
            >Buscando en páginas wiki... ({{ searchProgress.current }}/{{ searchProgress.total }})</span
          >
        </div>
        <div
          v-else-if="error"
          class="error-message p-error"
        >
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>
        <template v-else-if="!isLoading && !isSearchingWiki">
          <Paginator
            v-model:first="first"
            v-model:rows="rows"
            :totalRecords="totalRecords"
            :rowsPerPageOptions="[6, 12, 18, 24, 30, 36, 48]"
            class="mb-4"
          />

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
                    <div class="flex items-center justify-between">
                      <a
                        :href="`https://nomanssky.fandom.com/wiki/${s.SystemName}`"
                        target="_blank"
                        class="system-link"
                      >
                        <h3 class="update-title">{{ s.SystemName }}</h3>
                      </a>
                    </div>
                    <div class="update-details">
                      <div class="detail-item">
                        <span class="detail-label">Región:</span>
                        <Tag
                          :value="s.Region"
                          class="category-tag"
                        />
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Galaxia:</span>
                        <Tag
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
                  <div class="mt-4 flex justify-center">
                    <a
                      :href="`https://nomanssky.fandom.com/wiki/${s.SystemName}`"
                      target="_blank"
                      class="wiki-card-button"
                    >
                      🔗 Ver en la Wiki
                    </a>
                  </div>
                </div>
              </template>
            </Card>
          </div>

          <Paginator
            v-model:first="first"
            v-model:rows="rows"
            :totalRecords="totalRecords"
            :rowsPerPageOptions="[6, 12, 18, 24, 30, 36, 48]"
            class="mt-4"
          />
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
  --success-color: #10b981;
  --success-background: rgba(16, 185, 129, 0.1);
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
  --success-color: #34d399;
  --success-background: rgba(52, 211, 153, 0.1);
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

.search-wiki-button {
  background: var(--primary-gradient) !important;
  border: none !important;
  color: white !important;
}

.search-wiki-button:hover {
  opacity: 0.9;
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

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

.filter-container {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}

.filter-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}

.filter-section {
  background: var(--space-light);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--border-color);
}

.filter-section-title {
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
}

.filter-field {
  display: flex;
  flex-direction: column;
}

.filter-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  min-height: 1.25rem;
}

.filter-input,
.filter-dropdown {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.filter-input:focus,
.filter-dropdown:focus-within {
  border-color: var(--tag-border);
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
}

.wiki-search-container {
  background: var(--background-primary);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--border-color);
}

.search-button-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.search-wiki-button {
  background: var(--primary-gradient) !important;
  border: none !important;
  color: white !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
  transition: all 0.2s ease !important;
}

.search-wiki-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.search-wiki-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.wiki-search-help {
  background: var(--space-dark);
  border-radius: 6px;
  padding: 0.75rem;
  border-left: 3px solid var(--tag-border);
}

.help-text {
  color: var(--text-secondary);
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .filter-container {
    padding: 1rem;
  }

  .filter-section {
    padding: 0.75rem;
  }

  .wiki-search-container {
    padding: 0.75rem;
  }
}

.cancel-search-button {
  min-width: 44px;
  padding: 0.5rem;
  gap: 0.5rem;
  margin-left: 0.5rem;
}

.cancel-search-button:hover {
  background-color: var(--red-50);
  border-color: var(--red-300);
  color: var(--red-600);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.wiki-card-button {
  background: var(--primary-gradient);
  color: white;
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.wiki-card-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.6);
  opacity: 1;
}
</style>
