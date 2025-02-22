<script setup lang="ts">
import { ref, computed } from 'vue';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';

// const queryParams = new URLSearchParams(window.location.search);

// onMounted(() => {
//   if (!queryParams.has("dev")) {
//    window.location.href = "/RSSWikiPageCreator/indextest.html";
//   }
// });

const bases = ref([
  {
    name: 'Mamadisimo City',
    image: 'assets/images/basesdestacadas/Mamadisimocity.webp',
    location: 'Galaxia Euclides - Sistema Urticalia',
    author: 'Lider Mamadisimo',
    description: 'Capital intergaláctica de la Royal Space Society con instalaciones de investigación avanzada y centro de comercio interestelar.',
    features: ['Tecnología', 'Comercio', 'Investigación']
  },
  {
    name: 'RSS UfoPrime',
    image: 'assets/images/basesdestacadas/Ufoprime.webp',
    location: 'Galaxia Euclides - Sistema Urticalia',
    author: 'Olivello',
    description: 'Nave principal de la Royal Space Society, donde se coordinan todos los movimientos estratégicos.',
    features: ['Artística', 'Tecnología']
  },
  {
    name: 'RSS Santuario de la Progenie Maldita',
    image: 'assets/images/basesdestacadas/Progenie.webp',
    location: 'Galaxia Euclides - Sistema Desconocido',
    author: 'MoonWatcher75',
    description: 'Una ciudad acogedora para los miembros de la Royal Space Society.',
    features: ['Comunidad', 'Arquitectura']
  },
  {
    name: 'Suburbios de Cobaltonia',
    image: 'assets/images/basesdestacadas/ASC1.webp',
    location: 'Galaxia Euclides - Sistema Okubak-Sha VII',
    author: 'Abella_84',
    description: 'Un lugar tranquilo y pacífico para los viajeros intergalácticos.',
    features: ['Comunidad', 'Arquitectura']
  },
  {
    name: 'RSS CrisCrosApleSoS - GOAT',
    image: 'assets/images/basesdestacadas/Ccas01.webp',
    location: 'Galaxia Euclides - RSS Sagittarius',
    author: 'CrisCrosApleSoS',
    description: 'La base parece un gran carguero, con dos cuernos largos de color azul. También hay acceso al interior.',
    features: ['Memorial', 'Arquitectura']
  },
  {
    name: 'RSS Library',
    image: 'assets/images/basesdestacadas/Lib5.webp',
    location: 'Galaxia Euclides - Urticalia',
    author: 'FranCGC',
    description: 'Un grandioso templo del conocimiento, donde la arquitectura imponente se fusiona con los asombrosos descubrimientos que resguarda en su interior.',
    features: ['Descanso', 'Arquitectura']
  },
  {
    name: 'Iglesia de la Santa Mamadisimidad',
    image: 'assets/images/basesdestacadas/Iglesia.webp',
    location: 'Galaxia Euclides - Urticalia',
    author: 'Olivello',
    description: 'La Iglesia de la Santa Mamadisimidad es un imponente templo de amplias dimensiones, cuya entrada alargada da la bienvenida a los fieles.',
    features: ['Historia', 'Arte religioso', 'Ambiente solemne']
  },
]);

const isModalOpen = ref(false);
const modalImage = ref('');
const screenWidth = ref(window.innerWidth);
let resizeTimeout: NodeJS.Timeout | null = null;

const updateScreenWidth = () => {
  const newWidth = window.innerWidth;

  if (Math.abs(newWidth - screenWidth.value) > 50) {
    screenWidth.value = newWidth;

    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      location.reload();
    }, 500);
  }
};

window.addEventListener('resize', updateScreenWidth);

const numVisibleBases = computed(() => (screenWidth.value < 768 ? 1 : 2));

const openModal = (image: string) => {
  if (screenWidth.value <= 768) {
    window.open(image, '_blank');
  } else {
    modalImage.value = image;
    isModalOpen.value = true;
  }
};
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society" target="_blank">
              <div class="rss-logo">
                <img src="/assets/images/basesdestacadas/RSS-Logo.webp" class="logo-image animate-pulse"
                  alt="RSS Logo" />
              </div>
            </a>
            <h1 class="text-4xl font-bold galactic-title">BASES ESTELARES DESTACADAS</h1>
            <p class="text-stellar-gray mt-2">
              Catálogo de las instalaciones más impresionantes del universo conocido
            </p>
          </div>
        </div>

        <Carousel :value="bases" :numVisible="numVisibleBases" :numScroll="1" circular :autoplayInterval="6000"
          class="galactic-carousel">
          <template #item="slotProps">
            <div class="base-card relative">
              <div class="image-container">
                <img :src="slotProps.data.image" :alt="slotProps.data.name"
                  class="galactic-image object-cover w-full h-full" @click="openModal(slotProps.data.image)" />
              </div>
              <div class="base-info">
                <div class="info-content">
                  <h2 class="text-4xl font-bold mb-2">{{ slotProps.data.name }}</h2>
                  <div class="location-tag">
                    <i class="pi pi-map-marker mr-2"></i>
                    <span>{{ slotProps.data.location }}</span>
                  </div>
                  <div class="autor-tag">
                    <i class="pi pi-user mr-2"></i>
                    <span>{{ slotProps.data.author }}</span>
                  </div>
                  <div class="flex flex-wrap gap-3 my-4">
                    <Tag v-for="(feature, index) in slotProps.data.features" :key="index" :value="feature"
                      icon="pi pi-caret-right" class="feature-tag" />
                  </div>
                  <p class="description-text">{{ slotProps.data.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </Carousel>

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="text-2xl font-bold"
              style="background: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 15px rgba(103, 232, 249, 0.3);">
              Registro Galáctico</h2>
          </template>
          <p class="m-0 text-stellar-gray w-full" :class="{ 'keep-linebreaks': screenWidth >= 768 }">
            Las bases aquí mostradas han sido certificadas por la Royal Space Society según los criterios de:
            <br />
            <span class="text-cyan-300 font-semibold">
              <b>Innovación tecnológica, Valor científico y Diseño arquitectónico</b>
            </span>.
            <br />
            <br />
            Actualización estelar: 18/7/2567 (Ciclo Korvax)
          </p>
        </Panel>
      </div>
    </template>
  </Card>

  <Dialog v-model:visible="isModalOpen" modal :closable="false" class="custom-modal" style="width: 90vw; height: 90vh;">
    <template #header>
      <button type="button" class="close-modal" @click="isModalOpen = false">X</button>
    </template>
    <a :href="modalImage" target="_blank">
      <div class="modal-content">
        <img :src="modalImage" class="modal-image" />
        </img>
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
  --border-color: rgba(99, 102, 241, 0.2);
  --accent-color: #4f46e5;
  --hover-effect: rgba(79, 70, 229, 0.1);
  --card-shadow: 0 0 20px rgba(79, 70, 229, 0.1);
  --panel-background: rgba(255, 255, 255, 0.9);
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --border-color: rgba(103, 232, 249, 0.2);
  --accent-color: #67e8f9;
  --hover-effect: rgba(103, 232, 249, 0.3);
  --card-shadow: 0 0 20px rgba(103, 232, 249, 0.3);
  --panel-background: rgba(16, 23, 42, 0.8);
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
  -webkit-background-clip: text;
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
  background: linear-gradient(0deg, rgba(var(--background-primary-rgb), 0.95) 30%, transparent 100%);
  flex: 1;
}

.custom-carousel :deep(.p-carousel-indicator button) {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(103, 232, 249, 0.4);
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
  background-color: rgba(103, 232, 249, 0.1) !important;
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

.location-tag {
  @apply text-blue-300 font-mono text-sm mb-3 flex items-center;
}

.feature-tag {
  @apply bg-transparent border border-cyan-400 text-cyan-300 rounded-full;
  transition: all 0.3s ease;
  margin-right: 1%;
}

.feature-tag:hover {
  @apply bg-cyan-900 border-cyan-300;
}

.description-text {
  @apply text-gray-200 text-lg max-w-2xl leading-relaxed;
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
  -webkit-background-clip: text;
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

@media (max-width: 768px) {
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
