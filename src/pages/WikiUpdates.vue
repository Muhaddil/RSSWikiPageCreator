<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

interface WikiUpdate {
  title: string;
  timestamp: string;
  user: string;
  comment: string;
  pageid: number;
  revid: number;
  old_revid: number;
}

const updates = ref<WikiUpdate[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const maxResults = ref<number>(50);
const searchUser = ref<string>('');
const useEnglishWiki = ref(false);
const showScrollButton = ref<boolean>(false);

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

const apiBaseUrl = computed(() =>
  useEnglishWiki.value ? 'https://nomanssky.fandom.com/api.php' : 'https://nomanssky.fandom.com/es/api.php'
);

const maxResultsOptions = ref([
  { value: 25, label: '25 resultados' },
  { value: 50, label: '50 resultados' },
  { value: 100, label: '100 resultados' },
  { value: 200, label: '200 resultados' },
  { value: 300, label: '300 resultados' },
  { value: 400, label: '400 resultados' },
  { value: 500, label: '500 resultados' },
]);

const fetchUpdates = async () => {
  try {
    isLoading.value = true;
    error.value = null;

    const params = new URLSearchParams({
      action: 'query',
      list: 'recentchanges',
      rcprop: 'title|timestamp|user|comment|ids|flags|loginfo|revid|old_revid',
      rclimit: maxResults.value.toString(),
      rcshow: '!bot',
      rcdir: 'older',
      format: 'json',
      origin: '*',
      ...(searchUser.value && { rcuser: searchUser.value }),
    });

    const response = await fetch(`${apiBaseUrl.value}?${params.toString()}`);

    if (!response.ok) throw new Error('Error en la API de la wiki');

    const data = await response.json();

    if (data.error) throw new Error(data.error.info);

    updates.value = data.query.recentchanges.map((change: any) => ({
      title: change.title,
      timestamp: change.timestamp,
      user: change.user,
      comment: change.comment || '(sin comentario)',
      pageid: change.pageid,
      revid: change.revid,
      old_revid: change.old_revid,
    }));
  } catch (err) {
    error.value = 'Error al cargar actualizaciones';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  await fetchUpdates();
});

watch(useEnglishWiki, () => {
  fetchUpdates();
});

watch(maxResults, () => {
  fetchUpdates();
});

const formatWikiLink = (title: string) => {
  return title.trim().replace(/\s+/g, '_').replace(/\//g, '_');
};

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const updateTime = new Date(timestamp);
  const diff = now.getTime() - updateTime.getTime();

  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `Hace ${minutes} min`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Hace ${hours} h`;

  const days = Math.floor(hours / 24);
  return `Hace ${days} días`;
};

const formatDateSpanish = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
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
                  <span class="title-text">Actualizaciones Recientes - Wiki {{ useEnglishWiki ? 'EN' : 'ES' }}</span>
                </h1>
              </div>
            </div>
            <p class="text-stellar-gray mt-2">
              Últimos cambios en la wiki {{ useEnglishWiki ? 'inglesa' : 'española' }} de No Man's Sky
            </p>
          </div>
          <p class="text-stellar-gray mt-2"><ThemeSwitch style="margin-right: 2rem" /></p>
        </div>

        <div class="filter-container mb-6 p-4 bg-space-dark rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-6 text-stellar-blue font-medium">Resultados:</label>
              <Dropdown
                v-model="maxResults"
                :options="maxResultsOptions"
                optionLabel="label"
                optionValue="value"
                class="w-full ml-2"
                :pt="{
                  root: { class: 'bg-space-light border-space-blue' },
                  input: { class: 'text-stellar-light' },
                  trigger: { class: 'bg-space-blue' },
                }"
              />
            </div>
            <div>
              <label class="block mb-2">Filtrar por usuario:</label>
              <div class="flex">
                <InputText
                  v-model="searchUser"
                  placeholder="Nombre de usuario"
                  class="w-full"
                />
                <button
                  @click="fetchUpdates"
                  class="p-button p-component ml-2"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
          <div>
            <label class="block mb-2">
              <input
                type="checkbox"
                v-model="useEnglishWiki"
                class="mr-2"
              />
              Consultar wiki en inglés
            </label>
          </div>
        </div>

        <Panel class="galactic-panel">
          <template #header>
            <h2 class="panel-title">Información de Actualizaciones</h2>
          </template>
          <div class="panel-content">
            <p>
              Total de cambios recientes: <strong>{{ updates.length }}</strong>
            </p>
            <p class="update-info mt-2">Actualizado: {{ new Date().toLocaleString('es-ES') }}</p>
          </div>
        </Panel>

        <br />

        <div
          v-if="isLoading"
          class="loading-message"
        >
          <i class="pi pi-spinner pi-spin"></i> Cargando actualizaciones...
        </div>
        <div
          v-else-if="error"
          class="error-message p-error"
        >
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>

        <div
          v-else
          class="grid gap-4"
          :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
        >
          <Card
            v-for="(update, index) in updates"
            :key="index"
            class="update-card"
          >
            <template #content>
              <div class="p-4">
                <div class="flex flex-column gap-3">
                  <div class="flex align-items-center gap-2">
                    <h3 class="update-title">{{ update.title }}</h3>
                    <Tag
                      :value="formatTimeAgo(update.timestamp)"
                      severity="info"
                      class="time-tag"
                    />
                  </div>

                  <div class="update-details">
                    <div class="detail-item">
                      <span class="detail-label">Usuario:</span>
                      <span class="detail-value">{{ update.user }}</span>
                    </div>

                    <div class="detail-item">
                      <span class="detail-label">Fecha:</span>
                      <span class="detail-value">{{ formatDateSpanish(update.timestamp) }}</span>
                    </div>

                    <div class="comment-box mt-3 p-3 bg-space-light rounded">
                      <span class="detail-label">Comentario:</span>
                      <p class="mt-1">{{ update.comment }}</p>
                    </div>
                  </div>

                  <div class="mt-3">
                    <a
                      :href="`https://nomanssky.fandom.com/${useEnglishWiki ? '' : 'es/'}wiki/${formatWikiLink(update.title)}`"
                      target="_blank"
                      class="wiki-link"
                    >
                      <i class="pi pi-external-link"></i> Ver página en la wiki
                    </a>
                    <span class="mx-2">|</span>
                    <a
                      :href="`https://nomanssky.fandom.com/${useEnglishWiki ? '' : 'es/'}wiki/${formatWikiLink(update.title)}?diff=${update.revid}&oldid=${update.old_revid}`"
                      target="_blank"
                      class="wiki-link"
                    >
                      <i class="pi pi-history"></i> Ver cambios
                    </a>
                  </div>
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
  font-size: 0.8rem;
  margin-left: 0.2rem;
}

.time-tag {
  background: rgba(79, 70, 229, 0.2) !important;
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

.comment-box {
  background: var(--space-light);
  border-left: 3px solid var(--tag-border);
}

.wiki-link {
  color: var(--tag-text);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: opacity 0.2s;
}

.wiki-link:hover {
  opacity: 0.8;
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
</style>
