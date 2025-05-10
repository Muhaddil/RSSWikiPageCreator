<script setup lang="ts">
import { ref, computed, watch, reactive, watchEffect, onMounted, nextTick } from 'vue';
import autoAnimate from '@formkit/auto-animate';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import { guides } from '@/variables/guides/guides';

const searchTerm = ref('');
const currentCategory = ref('all');

const categories = computed(() => [...new Set(guides.value.map((g) => g.category))]);

const filteredGuides = computed(() => {
  return guides.value.filter((guide) => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.value.toLowerCase());
    const matchesCategory = currentCategory.value === 'all' || guide.category === currentCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const dropdowns = ref<(HTMLElement | null)[]>([]);
const applyAnimation = async () => {
  await nextTick();
  dropdowns.value.forEach((el) => {
    if (el) autoAnimate(el);
  });
};

onMounted(applyAnimation);
watch(filteredGuides, applyAnimation);

const noResultsMessages = [
  "Prueba con términos más generales como 'formulario' o 'wiki'",
  '¿Has probado a filtrar por categoría?',
  'Revisa nuestra documentación técnica para más detalles',
  'Si no encuentras algo, consulta nuestra sección de tutoriales',
  '¿Necesitas ayuda más específica? Contáctanos en Discord',
];

const randomMessage = ref('');
const messageShown = ref(false);

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * noResultsMessages.length);
  return noResultsMessages[randomIndex];
};

watchEffect(() => {
  if (searchTerm.value === '') {
    randomMessage.value = '';
    messageShown.value = false;
  } else if (filteredGuides.value.length === 0 && !messageShown.value) {
    randomMessage.value = getRandomMessage();
    messageShown.value = true;
  } else if (filteredGuides.value.length > 0) {
    randomMessage.value = '';
    messageShown.value = false;
  }
});

const showStates = reactive<{ [key: number]: boolean }>({});
const toggleStep = (id: number) => {
  showStates[id] = !showStates[id];
};

const filterCategory = (cat: string) => {
  currentCategory.value = cat;
  searchTerm.value = '';
};
</script>

<template>
  <div class="guides-container">
    <header class="guides-header">
      <h1 class="galactic-title">
        <span class="title-text">📚 Guías de uso</span>
      </h1>
      <div class="category-filter">
        <button
          @click="filterCategory('all')"
          :class="{ active: currentCategory === 'all' }"
          class="galactic-button"
        >
          Mostrar todas
        </button>
        <button
          v-for="cat in categories"
          @click="filterCategory(cat)"
          :class="{ active: currentCategory === cat }"
          class="galactic-button"
        >
          {{ cat }}
        </button>
      </div>
    </header>

    <div class="search-wrapper">
      <div class="search-box">
        <svg
          class="search-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Buscar en guías..."
          class="search-input galactic-input"
        />
      </div>
    </div>

    <div
      v-if="randomMessage"
      class="empty-state galactic-panel"
    >
      <i class="pi pi-info-circle empty-icon"></i>
      <p class="empty-message">{{ randomMessage }}</p>
    </div>

    <div class="guides-grid">
      <Panel
        v-for="guide in filteredGuides"
        :key="guide.id"
        :toggleable="true"
        class="guide-card"
        :class="{ expanded: showStates[guide.id] }"
        @toggle="toggleStep(guide.id)"
        collapsed
      >
        <template #header>
          <div class="card-header">
            <div class="header-content">
              <h3 class="guide-title">{{ guide.title }}</h3>
              <Tag
                :value="guide.category"
                class="category-tag"
              />
            </div>
          </div>
        </template>

        <img
          alt="Imagen de cabecera de la guía"
          :src="guide.headerImage"
          class="guide-image header-image"
        />

        <ol class="guide-steps">
          <li
            v-for="(step, index) in guide.steps"
            :key="index"
            class="step-item"
          >
            <div
              class="step-text"
              v-html="step.text"
            ></div>
            <img
              v-if="step.image"
              :src="step.image"
              :alt="`Paso ${index + 1}`"
              class="step-image"
            />
          </li>
        </ol>

        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button
              label="Cancelar"
              severity="secondary"
              outlined
              class="w-full"
            />
            <Button
              label="Guardar"
              class="w-full"
            />
          </div>
        </template>
      </Panel>
    </div>
  </div>
</template>

<style>
:root {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #ffffff;
  --background-secondary: #f8fafc;
  --border-color: rgba(79, 70, 229, 0.15);
  --hover-effect: rgba(99, 102, 241, 0.1);
  --tag-background: rgba(79, 70, 229, 0.1);
  --tag-border: #4f46e5;
  --tag-text: #4f46e5;
}

.theme-dark {
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

.guides-container {
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.category-filter {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.galactic-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: var(--background-secondary);
  color: var(--text-primary);
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.galactic-button.active,
.galactic-button:hover {
  background: var(--primary-gradient);
  color: white;
  box-shadow: 0 0 15px var(--hover-effect);
}

.search-wrapper {
  margin: 2rem 0;
}

.search-box {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
}

.galactic-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--background-secondary);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.galactic-input:focus {
  border-color: var(--tag-border);
  box-shadow: 0 0 15px var(--hover-effect);
}

.guides-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.guide-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding: 1rem;
  /* Evita que el contenido quede pegado al borde */
}

.guide-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.guide-title {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.category-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.75rem;
}

.header-image {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.guide-steps {
  list-style: decimal;
  padding: 1rem;
  margin: 0;
}

.step-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--background-primary);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.step-text {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.step-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.empty-state {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.empty-icon {
  color: var(--tag-text);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.empty-message {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.step-text ul {
  padding-left: 20px;
  list-style-type: disc;
}

.step-text li {
  margin-bottom: 0.5rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 8px;
  margin: 1rem 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
