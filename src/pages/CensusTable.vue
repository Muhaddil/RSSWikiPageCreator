<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import { fetchCensusData, fetchBaseImageUrls } from '@/api/api';
import type { CensusQueryData, ImageUrls } from '@/api/api';
import InputText from 'primevue/inputtext';

interface ExtendedCensusQueryData extends CensusQueryData {
  imageUrl?: ImageUrls | null;
}

// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });

const bases = ref<ExtendedCensusQueryData[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const CIVILIZATION = 'Royal Space Society';
const selectedYear = ref<string>('');

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

const fetchBases = async (offset = 0, year?: string) => {
  try {
    const newBases = (await fetchCensusData(CIVILIZATION, offset, year)) as ExtendedCensusQueryData[];

    await Promise.all(
      newBases.map(async (base) => {
        base.imageUrl = await fetchBaseImageUrls(base._pageName);
      })
    );

    bases.value = [...bases.value, ...newBases];

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
  bases.value = [];
  isLoading.value = true;
  error.value = null;
  await fetchBases(0, selectedYear.value);
};

onMounted(async () => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  await fetchBases(0, selectedYear.value);
});

const formatWikiLink = (name: string) => {
  return name.trim().replace(/\s+/g, '_').replace(/\//g, '_').replace(/:/g, ':').replace(/'/g, "'");
};

// const isModalOpen = ref(false);
// const modalImage = ref('');

// const openModal = (image: string) => {
//   if (screenWidth.value <= 768) {
//     window.open(image, '_blank');
//   } else {
//     modalImage.value = image;
//     isModalOpen.value = true;
//   }
// };

const openModal = (image: string) => {
  window.open(image, '_blank');
};
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

        <div class="filter-container mb-4 flex items-center">
          <label
            for="yearInput"
            class="mr-2"
            >Selecciona el año del censo:</label
          >
          <InputText
            id="yearInput"
            type="number"
            v-model="selectedYear"
            placeholder="Ej. 2023"
            class="p-inputtext"
          />
          <button
            @click="updateBases"
            class="p-button p-component ml-2"
          >
            Filtrar
          </button>
        </div>

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="panel-title">Información del Censo</h2>
          </template>
          <div class="panel-content">
            <p>
              Total de bases registradas: <strong>{{ bases.length }}</strong>
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
          v-else
          class="grid gap-4"
          :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
        >
          <Card
            v-for="(base, index) in bases"
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
          <!-- <Dialog v-model:visible="isModalOpen" modal :closable="false" class="custom-modal"
            style="width: 90vw; height: 90vh;">
            <template #header>
              <button type="button" class="close-modal" @click="isModalOpen = false">X</button>
            </template>
            <a :href="modalImage" target="_blank">
              <div class="modal-content">
                <img :src=modalImage class="modal-image" alt="Imagen del modal" loading="lazy" decoding="async" />
                </img>
              </div>
            </a>
          </Dialog> -->
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
  --border-color: rgba(103, 232, 249, 0.15);
  --hover-effect: rgba(103, 232, 249, 0.2);
  --tag-background: rgba(103, 232, 249, 0.1);
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

/* .custom-modal {
  width: 90vw !important;
  height: 90vh !important;
}

.custom-modal .p-dialog-content {
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.modal-image {
  width: 90%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  image-rendering: crisp-edges;
} */

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
  top: 2rem;
  height: auto;
  width: auto;
}

.logo-image {
  height: 11rem;
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
