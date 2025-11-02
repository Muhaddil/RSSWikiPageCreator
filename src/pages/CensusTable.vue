<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Paginator from 'primevue/paginator';
import Dropdown from 'primevue/dropdown';
import { fetchCensusData, fetchBaseImageUrls } from '@/api/api';
import type { CensusQueryData, ImageUrls } from '@/api/api';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

interface ExtendedCensusQueryData extends CensusQueryData {
  imageUrl?: ImageUrls | null;
}

// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });

const API_COOLDOWN_MS = 30000;
const STORAGE_KEYS = {
  BASES: 'rss_census_bases',
  LAST_FETCH: 'rss_last_fetch_timestamp',
  YEAR_FILTER: 'rss_year_filter',
};

const bases = ref<ExtendedCensusQueryData[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const CIVILIZATION = 'Royal Space Society';
const selectedYear = ref<string>('');
const usePagination = ref(true);
const first = ref(0);
const rows = ref(12);
const showScrollButton = ref<boolean>(false);
const canUpdate = ref(true);
const cooldownTimer = ref(0);

const rowsOptions = [
  { label: '6 por página', value: 6 },
  { label: '12 por página', value: 12 },
  { label: '27 por página', value: 27 },
  { label: '48 por página', value: 48 },
];

const paginatedBases = computed(() => {
  if (!usePagination.value) return bases.value;
  return bases.value.slice(first.value, first.value + rows.value);
});

const paginationOptions = [
  { label: 'Sí, usar paginación', value: true },
  { label: 'No, mostrar todo', value: false },
];

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

const loadFromLocalStorage = () => {
  try {
    const storedBases = localStorage.getItem(STORAGE_KEYS.BASES);
    // const storedYear = localStorage.getItem(STORAGE_KEYS.YEAR_FILTER);
    const lastFetch = localStorage.getItem(STORAGE_KEYS.LAST_FETCH);

    if (storedBases) {
      bases.value = JSON.parse(storedBases);
    }

    // if (storedYear) {
    //   selectedYear.value = storedYear;
    // }

    selectedYear.value = '';

    if (lastFetch) {
      const timeSinceLastFetch = Date.now() - parseInt(lastFetch);
      if (timeSinceLastFetch < API_COOLDOWN_MS) {
        canUpdate.value = false;
        startCooldownTimer(API_COOLDOWN_MS - timeSinceLastFetch);
      }
    }
  } catch (err) {
    console.error('Error loading from localStorage:', err);
  }
};

const saveToLocalStorage = () => {
  try {
    localStorage.setItem(STORAGE_KEYS.BASES, JSON.stringify(bases.value));
    localStorage.setItem(STORAGE_KEYS.LAST_FETCH, Date.now().toString());
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
};

const startCooldownTimer = (duration: number) => {
  canUpdate.value = false;
  cooldownTimer.value = Math.ceil(duration / 1000);

  const timer = setInterval(() => {
    cooldownTimer.value--;

    if (cooldownTimer.value <= 0) {
      clearInterval(timer);
      canUpdate.value = true;
      cooldownTimer.value = 0;
    }
  }, 1000);
};

const fetchBases = async (offset = 0, year?: string) => {
  try {
    const newBases = (await fetchCensusData(CIVILIZATION, offset, year)) as ExtendedCensusQueryData[];

    const basesToProcess = newBases;

    await Promise.all(
      basesToProcess.map(async (base) => {
        try {
          base.imageUrl = await fetchBaseImageUrls(base._pageName);
        } catch (err) {
          console.warn(`No se pudo cargar imagen para ${base._pageName}`);
          base.imageUrl = null;
        }
      })
    );

    if (offset === 0) {
      bases.value = newBases;
    } else {
      bases.value = [...bases.value, ...newBases];
    }

    saveToLocalStorage();

    if (newBases.length === 500) {
      await fetchBases(offset + 500, year);
    }
  } catch (err) {
    error.value = 'Error al cargar las bases';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

const updateBases = async () => {
  if (!canUpdate.value) {
    error.value = `Espera ${cooldownTimer.value} segundos antes de actualizar`;
    return;
  }

  bases.value = [];
  isLoading.value = true;
  error.value = null;

  startCooldownTimer(API_COOLDOWN_MS);

  await fetchBases(0, selectedYear.value);
};

onMounted(async () => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  window.addEventListener('scroll', handleScroll);

  isLoading.value = true;

  loadFromLocalStorage();

  if (bases.value.length === 0 || canUpdate.value) {
    console.log('Fetched bases from wiki');
    await fetchBases(0);
  }

  isLoading.value = false;
});

const formatWikiLink = (name: string) => {
  return name.trim().replace(/\s+/g, '_').replace(/\//g, '_');
};

const openModal = (image: string) => {
  window.open(image, '_blank');
};

const onRowsChange = () => {
  first.value = 0;
};

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// const clearLocalStorage = () => {
//   localStorage.removeItem(STORAGE_KEYS.BASES);
//   localStorage.removeItem(STORAGE_KEYS.LAST_FETCH);
//   localStorage.removeItem(STORAGE_KEYS.YEAR_FILTER);
//   bases.value = [];
//   selectedYear.value = '';
//   canUpdate.value = true;
//   cooldownTimer.value = 0;
// };

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
              <div class="rss-logo">
                <img
                  src="/assets/images/shared/logo-white.png"
                  class="logo-image"
                  alt="RSS Logo"
                />
              </div>
            </a>
            <div class="header-container">
              <div class="title-theme-container">
                <h1 class="galactic-title">
                  <span class="title-text">Censo de Bases - Royal Space Society</span>
                </h1>
              </div>
            </div>
            <p class="text-stellar-gray mt-2">Explora las bases espaciales de la Royal Space Society</p>
          </div>
        </div>

        <div class="filter-container mb-6">
          <div class="filter-row">
            <div class="year-filter">
              <label
                for="yearInput"
                class="filter-label"
              >
                <i class="pi pi-calendar mr-2"></i>
                Año del censo:
              </label>
              <div class="input-group">
                <InputText
                  id="yearInput"
                  type="number"
                  v-model="selectedYear"
                  placeholder="Ej. 2023"
                  class="year-input"
                />
                <Button
                  @click="updateBases"
                  icon="pi pi-search"
                  label="Filtrar"
                  class="filter-btn"
                  :loading="isLoading"
                  :disabled="!canUpdate"
                />
              </div>
            </div>

            <div class="pagination-filter">
              <label class="filter-label">
                <i class="pi pi-list mr-2"></i>
                Paginación:
              </label>
              <Dropdown
                v-model="usePagination"
                :options="paginationOptions"
                optionLabel="label"
                optionValue="value"
                class="pagination-dropdown"
              />
            </div>

            <div
              class="rows-filter"
              v-if="usePagination"
            >
              <label class="filter-label">
                <i class="pi pi-th-large mr-2"></i>
                Elementos:
              </label>
              <Dropdown
                v-model="rows"
                :options="rowsOptions"
                optionLabel="label"
                optionValue="value"
                class="rows-dropdown"
                @change="onRowsChange"
              />
            </div>
          </div>

          <div class="flex justify-between items-center mt-3">
            <div
              class="filter-info"
              v-if="bases.length > 0"
            >
              <span class="info-text">
                <i class="pi pi-database mr-1"></i>
                Total: {{ bases.length }} bases
                <i class="pi pi-cloud ml-2 mr-1"></i>
                <span>(Guardadas localmente)</span>
              </span>
            </div>

            <div class="flex">
              <Button
                @click="updateBases"
                icon="pi pi-refresh"
                label="Actualizar"
                class="update-btn mr-2 mt-2 last:mr-0 last:mt-0"
                :loading="isLoading"
                :disabled="!canUpdate"
                severity="help"
              />

              <Button
                v-if="!canUpdate"
                :label="`Esperar ${cooldownTimer}s`"
                class="cooldown-btn last:mr-0 last:mt-0"
                severity="secondary"
                disabled
              />

              <!-- <Button
                @click="clearLocalStorage"
                icon="pi pi-trash"
                label="Limpiar Cache"
                class="clear-btn"
                severity="danger"
                outlined
              /> -->
            </div>
          </div>
        </div>

        <Paginator
          v-if="usePagination && bases.length > rows"
          :first="first"
          :rows="rows"
          :totalRecords="bases.length"
          @page="
            (e) => {
              first = e.first;
              rows = e.rows;
            }
          "
          class="mb-4"
        />

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="panel-title">Información del Censo</h2>
          </template>
          <div class="panel-content">
            <p>
              Total de bases registradas: <strong>{{ bases.length }}</strong>
              <span
                v-if="bases.length > 0"
                class="storage-indicator"
              >
                <i class="pi pi-cloud ml-2"></i> Datos en cache
              </span>
            </p>
            <p class="security-level mt-2">
              Nivel de seguridad:
              <Tag
                value="Clasificado RSS"
                severity="info"
                class="category-tag"
              />
            </p>
            <p class="update-info">
              Última actualización: {{ new Date().toLocaleDateString() }}
              <br />
              <small>Límite API: 2 consultas por minuto</small>
            </p>
          </div>
        </Panel>

        <br />

        <div
          v-if="isLoading"
          class="loading-message"
        >
          <i class="pi pi-spinner pi-spin"></i> Cargando bases espaciales...
        </div>

        <div
          v-else-if="error"
          class="error-message p-error"
        >
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>

        <div
          v-else-if="bases.length === 0"
          class="empty-message"
        >
          <i class="pi pi-info-circle"></i> No se encontraron bases
        </div>

        <div
          v-else
          class="grid gap-4"
          :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
        >
          <Card
            v-for="(base, index) in paginatedBases"
            :key="index"
            class="link-card"
          >
            <template #content>
              <div class="p-4 base-content">
                <div class="flex flex-column gap-3">
                  <div class="flex align-items-center gap-2">
                    <h3 class="base-title">{{ base.Name }}</h3>
                    <Tag
                      :value="base.Platform"
                      severity="info"
                      class="category-tag"
                    />
                  </div>
                  <div class="base-details">
                    <div class="detail-item">
                      <span class="detail-label">Jugador:</span>
                      <span class="detail-value">{{ base.CensusPlayer }}</span>
                    </div>
                    <div class="detail-item">
                      <span class="detail-label">Sistema:</span>
                      <span class="detail-value">{{ base.System }}</span>
                    </div>
                    <div class="flex gap-2">
                      <Tag
                        :value="base.Mode"
                        severity="success"
                        class="category-tag"
                      />
                      <Tag
                        :value="`Llegada: ${base.CensusArrival}`"
                        severity="warning"
                        class="category-tag"
                      />
                      <Tag
                        :value="`Renovación: ${base.CensusRenewal}`"
                        severity="danger"
                        class="category-tag"
                      />
                    </div>
                  </div>
                  <Panel
                    v-if="base.Name"
                    class="builder-panel mt-3"
                  >
                    <template #header>
                      <span class="builder-link-header">Enlaces de la Base</span>
                    </template>
                    <div class="panel-content-with-image">
                      <a
                        :href="`https://nomanssky.fandom.com/wiki/${formatWikiLink(base._pageName)}`"
                        target="_blank"
                        class="builder-link"
                      >
                        <i class="pi pi-external-link"></i> Ver detalles de construcción
                      </a>
                      <img
                        v-if="base.imageUrl"
                        :src="base.imageUrl.panel"
                        alt="Imagen de la base"
                        class="panel-base-image"
                        @click="openModal(`https://nomanssky.fandom.com/wiki/${formatWikiLink(base._pageName)}`)"
                      />
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
  --border-color: rgb(99 102 241 / 15%);
  --hover-effect: rgb(99 102 241 / 10%);
  --tag-background: rgb(79 70 229 / 10%);
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
  --border-color: rgb(103 232 249 / 15%);
  --hover-effect: rgb(103 232 249 / 20%);
  --tag-background: rgb(103 232 249 / 10%);
  --tag-border: #67e8f9;
  --tag-text: #67e8f9;
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.filter-card {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
  box-shadow: 0 2px 8px var(--hover-effect) !important;
}

.filter-content {
  padding: 1.5rem;
}

.filter-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.filter-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filter-label {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.filter-input-group {
  display: flex;
  gap: 0.75rem;
}

.filter-input {
  flex: 1;
  min-width: 0;
}

.filter-button {
  white-space: nowrap;
}

.pagination-dropdown {
  width: 100%;
  min-width: 200px;
}

.dropdown-value,
.dropdown-option {
  display: flex;
  align-items: center;
  color: var(--text-primary);
}

.filter-info {
  display: flex;
  gap: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.info-item {
  display: flex;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.paginator-container {
  display: flex;
  justify-content: center;
}

.custom-paginator {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 8px;
}

@media (width <= 768px) {
  .filter-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .filter-input-group {
    flex-direction: column;
  }

  .filter-info {
    flex-direction: column;
    gap: 0.75rem;
  }

  .pagination-dropdown {
    min-width: unset;
  }
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
  top: 1rem;
  height: auto;
  width: auto;
}

.logo-image {
  height: 9rem;
  transition: transform 0.3s ease;
  filter: brightness(var(--logo-brightness, 1));
}

.theme-dark .logo-image {
  --logo-brightness: 0.9;
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

@media (width <= 768px) {
  .rss-logo {
    position: absolute;
    right: 0.1rem;
    top: 0.5rem;
    margin-top: 1rem;
    width: 0;
    height: 0;
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

.update-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cooldown-btn {
  background-color: #6c757d !important;
  border-color: #6c757d !important;
}

.clear-btn {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}

.storage-indicator {
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 500;
}

.empty-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.filter-container {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
}

.filter-row {
  display: flex;
  gap: 2rem;
  align-items: end;
  margin-bottom: 1rem;
}

.year-filter,
.pagination-filter {
  flex: 1;
}

.filter-label {
  display: block;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.input-group {
  display: flex;
  gap: 0.75rem;
}

.year-input {
  flex: 1;
  min-width: 120px;
}

.filter-btn {
  white-space: nowrap;
}

.pagination-dropdown {
  width: 100%;
  min-width: 180px;
}

.filter-info {
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.info-text {
  color: var(--text-secondary);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
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
  box-shadow: 0 4px 20px rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.scroll-top-button:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 6px 25px rgb(0 0 0 / 30%);
}

@media (width <= 768px) {
  .filter-row {
    flex-direction: column;
    gap: 1rem;
  }

  .input-group {
    flex-direction: column;
  }

  .filter-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .pagination-dropdown {
    min-width: unset;
  }
}

.rows-filter {
  flex: 1;
}

.rows-dropdown {
  width: 100%;
  min-width: 140px;
}

.filter-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 2rem;
  align-items: end;
  margin-bottom: 1rem;
}

@media (width <= 1024px) {
  .filter-row {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .rows-filter {
    grid-column: 1 / -1;
  }
}

@media (width <= 768px) {
  .filter-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
