<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';

const queryParams = new URLSearchParams(window.location.search);

onMounted(() => {
  if (!queryParams.has('dev')) {
    window.location.href = '/RSSWikiPageCreator/indextest.html';
  }
});

const photos = ref([
  {
    title: 'Crash at the Sky',
    image: 'assets/images/fotosdestacadas/Fk03.webp',
    location: 'Galaxia Euclides - Sistema Desconocido',
    photographer: 'Fran.Korvax',
    equipment: '',
    technique: 'Exposición prolongada multiespectral',
    tags: ['Accidentes espaciales', 'Colores cósmicos', 'HDR multiespectral'],
  },
  {
    title: 'Suns Over The Rings',
    image: 'assets/images/fotosdestacadas/Moonw01.webp',
    location: 'Galaxia Euclides - Sistema Desconocido',
    photographer: 'MoonWatcher',
    equipment: '',
    technique: 'Captura de triple espectro',
    tags: ['Anillos planetarios', 'Amanecer binario', 'Formaciones geológicas'],
  },
  {
    title: 'Levitation',
    image: 'assets/images/fotosdestacadas/Elba03.webp',
    location: 'Galaxia Euclides - Sistema Desconocido',
    photographer: 'ElbaFuria',
    equipment: '',
    technique: 'Captura instantánea de levitación',
    tags: ['Gravedad cero', 'Amanecer alienígena', 'Superficies exoplanetarias'],
  },
  {
    title: 'The Ring',
    image: 'assets/images/fotosdestacadas/MoonW02.webp',
    location: 'Galaxia Desconocida - Sistema Desconocido',
    photographer: 'MoonWatcher',
    equipment: '',
    technique: 'Composición espectral con reconstrucción volumétrica',
    tags: ['Ojo del cosmos', 'Simetría alienígena', 'Horizontes imposibles'],
  },
]);

const isModalOpen = ref(false);
const modalImage = ref('');
const screenWidth = ref(window.innerWidth);

const numVisiblePhotos = computed(() => (screenWidth.value < 768 ? 1 : 2));

const openModal = (image: string) => {
  if (screenWidth.value <= 768) {
    window.open(image, '_blank');
  } else {
    modalImage.value = image;
    isModalOpen.value = true;
  }
};

window.addEventListener('resize', () => {
  if (Math.abs(window.innerWidth - screenWidth.value) > 50) {
    screenWidth.value = window.innerWidth;
    setTimeout(() => location.reload(), 500);
  }
});
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <h1 class="text-4xl font-bold galactic-title">GALERÍA INTERGALÁCTICA</h1>
            <p class="text-stellar-gray mt-2">Colección de las capturas más impresionantes del universo conocido</p>
          </div>
          <div class="rss-logo">
            <img
              src="/assets/images/shared/logo-white.png"
              class="logo-image animate-pulse"
              alt="AstroCam Logo"
            />
          </div>
        </div>

        <Carousel
          :value="photos"
          :numVisible="numVisiblePhotos"
          :numScroll="1"
          circular
          :autoplayInterval="6000"
          class="galactic-carousel"
        >
          <template #item="slotProps">
            <div class="base-card relative">
              <div class="image-container">
                <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.title"
                  class="galactic-image object-cover w-full h-full"
                  @click="openModal(slotProps.data.image)"
                />
              </div>
              <div class="base-info">
                <div class="info-content">
                  <h2 class="text-3xl font-bold mb-2">{{ slotProps.data.title }}</h2>
                  <div class="metadata-container space-y-3">
                    <div class="location-tag">
                      <i class="pi pi-satellite mr-2"></i>
                      <span>{{ slotProps.data.location }}</span>
                    </div>
                    <div class="autor-tag">
                      <i class="pi pi-camera mr-2"></i>
                      <span>{{ slotProps.data.photographer }}</span>
                    </div>
                    <div
                      class="equipment-tag"
                      v-if="slotProps.data.equipment"
                    >
                      <i class="pi pi-microchip mr-2"></i>
                      <span>{{ slotProps.data.equipment }}</span>
                    </div>
                    <div class="flex flex-wrap gap-3 my-4">
                      <Tag
                        v-for="(tag, index) in slotProps.data.tags"
                        :key="index"
                        :value="tag"
                        icon="pi pi-tag"
                        class="tag-style"
                      />
                    </div>
                    <p class="technique-text"><span class="font-bold">Técnica:</span> {{ slotProps.data.technique }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2
              class="text-2xl font-bold"
              style="
                background: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 0 15px rgb(103 232 249 / 30%);
              "
            >
              Certificación Astrofotográfica
            </h2>
          </template>
          <p
            class="m-0 text-stellar-gray w-full"
            :class="{ 'keep-linebreaks': screenWidth >= 768 }"
          >
            Las imágenes aquí exhibidas han sido validadas por el Colegio Intergaláctico de Fotografía Cósmica bajo los
            criterios de:
            <br />
            <span class="text-cyan-300 font-semibold">
              <b>Composición estética, Valor científico y Dominio técnico.</b>
            </span>
            <br /><br />
            Actualización del catálogo: 2567.8.1 (Ciclo Fotónico)
          </p>
        </Panel>
      </div>
    </template>
  </Card>

  <Dialog
    v-model:visible="isModalOpen"
    modal
    :closable="false"
    class="custom-modal"
    style="width: 90vw; height: 90vh"
  >
    <template #header>
      <button
        type="button"
        class="close-modal"
        @click="isModalOpen = false"
      >
        X
      </button>
    </template>
    <a
      :href="modalImage"
      target="_blank"
    >
      <div class="modal-content">
        <img
          :src="modalImage"
          class="modal-image"
        />
      </div>
    </a>
  </Dialog>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --background-primary: #d3d3d3;
  --background-secondary: #f1f1f1;
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --border-color: rgb(99 102 241 / 20%);
  --accent-color: #4f46e5;
  --hover-effect: rgb(79 70 229 / 10%);
  --card-shadow: 0 0 20px rgb(79 70 229 / 10%);
  --panel-background: rgb(255 255 255 / 90%);
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --border-color: rgb(103 232 249 / 20%);
  --accent-color: #67e8f9;
  --hover-effect: rgb(103 232 249 / 30%);
  --card-shadow: 0 0 20px rgb(103 232 249 / 30%);
  --panel-background: rgb(16 23 42 / 80%);
}

.space-page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.custom-modal {
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
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: contain;
}

.custom-carousel :deep(.p-carousel-indicators) {
  padding: 1.5rem 0;
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
}

.galactic-title {
  background: var(--primary-gradient);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.base-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--background-secondary);
}

.base-info {
  backdrop-filter: blur(5px);
  padding: 2rem;
  background: linear-gradient(0deg, rgb(var(--background-primary-rgb), 0.95) 30%, transparent 100%);
  flex: 1;
}

.custom-carousel :deep(.p-carousel-indicator button) {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(103 232 249 / 40%);
  transition: all 0.3s ease;
}

.custom-carousel :deep(.p-carousel-indicator.p-highlight button) {
  background-color: #67e8f9;
  transform: scale(1.3);
}

.close-modal {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

.custom-carousel :deep(.p-carousel-indicators) {
  padding: 1rem 0;
}

.custom-carousel :deep(.p-carousel-indicator button) {
  background-color: #67e8f9;
}

.custom-tag {
  background-color: rgb(103 232 249 / 10%) !important;
  border: 1px solid #67e8f9 !important;
}

.image-container {
  height: auto;
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 30px var(--hover-effect);
}

.galactic-image {
  transition: transform 0.5s ease;
  min-width: 100%;
}

.base-card:hover .galactic-image {
  transform: scale(1.03);
}

.info-content {
  max-width: 1200px;
  margin: 0 auto;
}

.feature-tag {
  transition: all 0.3s ease;
  margin-right: 1%;
}

.galactic-carousel :deep(.p-carousel-viewport) {
  background: transparent !important;
  margin: 0;
  padding: 0;
  border-radius: 15px;
}

.galactic-carousel :deep(.p-carousel-item) {
  display: flex;
  align-items: stretch;
  padding: 0 0.5rem;
}

.galactic-carousel :deep(.p-carousel-items) {
  margin: 0 -0.5rem;
}

.galactic-carousel :deep(.p-carousel-indicators) {
  padding: 1.5rem 0;
}

.galactic-carousel :deep(.p-carousel-indicator button) {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.galactic-carousel :deep(.p-carousel-indicator.p-highlight button) {
  background-color: var(--accent-color);
  transform: scale(1.3);
}

.galactic-panel {
  background: var(--panel-background) !important;
  border: 1px solid var(--border-color) !important;
  backdrop-filter: blur(10px);
}

.text-stellar-gray {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
}

.logo-image {
  height: 150px;
  transition: transform 0.3s ease;
  filter: brightness(var(--logo-brightness, 1));
}

.theme-dark .logo-image {
  --logo-brightness: 0.9;
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

.galactic-title {
  font-size: 2rem;
  line-height: 1.2;
  background: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-stellar-gray {
  font-size: 0.9rem;
  max-width: 500px;
}

.rss-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: -40px;
  height: auto;
  width: auto;
}

@media (width <= 768px) {
  .header-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }

  .rss-logo {
    position: absolute;
    right: -1rem;
    top: -1rem;
    margin-top: 1rem;
  }

  .logo-image {
    height: 60px;
  }

  .galactic-title {
    font-size: 1.8rem;
  }
}
</style>
