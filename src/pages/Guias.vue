<script lang="ts">
import { defineComponent, watch, reactive, ref, computed, watchEffect, onMounted, nextTick } from "vue";
import autoAnimate from "@formkit/auto-animate"

export default defineComponent({
  name: "Guides",
  setup() {
    // Datos de las guías
    const guides = ref([
      {
        id: 1,
        title: "Creación de páginas wiki",
        content: `
          <ol>
            <li>Accede al <a href="https://muhaddil.github.io/RSSWikiPageCreator/" target="_blank">creador de páginas</a></li>
            <li>Selecciona el tipo de contenido a crear
              <ul>
                <li>Para sistemas estelares: Usa el formulario azul</li>
                <li>Para bases: Usa el formulario verde</li>
              </ul>
            </li>
            <li>Rellena todos los campos obligatorios (*)</li>
            <li>Haz clic en "Generar código"</li>
            <li>Copia el código resultante y pégalo en la wiki</li>
          </ol>
          <img src="/assets/guide-screenshot.jpg" alt="Ejemplo de formulario" width="300">
        `,
        category: "Básico",
        tags: ["formularios", "wiki"]
      },
      {
        id: 2,
        title: "Registro de sistemas estelares",
        content: `
          <p>Para registrar un sistema estelar:</p>
          <ol>
            <li>Localiza las coordenadas del sistema</li>
            <li>Verifica que esté dentro de las regiones RSS</li>
            <li>Usa el formato: <code>RSS-[Nombre]</code></li>
            <li>Incluye al menos 3 planetas</li>
          </ol>
        `,
        category: "Sistemas",
        tags: ["coordenadas", "nomenclatura"]
      },
      // ... más guías
    ]);

    // Estado de búsqueda y filtrado
    const searchTerm = ref("");
    const currentCategory = ref("all");
    const randomMessage = ref<string>("");
    const messageShown = ref<boolean>(false);

    // Categorías disponibles
    const categories = computed(() => [
      ...new Set(guides.value.map(g => g.category))
    ]);

    // Filtrado de guías
    const filteredGuides = computed(() => {
      return guides.value.filter(guide => {
        const matchesSearch = guide.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          guide.content.toLowerCase().includes(searchTerm.value.toLowerCase());
        const matchesCategory = currentCategory.value === 'all' ||
          guide.category === currentCategory.value;
        return matchesSearch && matchesCategory;
      });
    });

    // Animaciones
    const applyAnimation = async () => {
      await nextTick();
      dropdowns.value.forEach((el) => {
        if (el) autoAnimate(el);
      });
    };

    onMounted(applyAnimation);
    watch(filteredGuides, applyAnimation);

    // Mensajes para búsquedas sin resultados
    const noResultsMessages = [
      "Prueba con términos más generales como 'formulario' o 'wiki'",
      "¿Has probado a filtrar por categoría?",
      "Revisa nuestra documentación técnica para más detalles",
      "Si no encuentras algo, consulta nuestra sección de tutoriales",
      "¿Necesitas ayuda más específica? Contáctanos en Discord"
    ];

    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * noResultsMessages.length);
      return noResultsMessages[randomIndex];
    };

    watchEffect(() => {
      if (searchTerm.value === "") {
        randomMessage.value = "";
        messageShown.value = false;
      } else if (filteredGuides.value.length === 0 && !messageShown.value) {
        randomMessage.value = getRandomMessage();
        messageShown.value = true;
      } else if (filteredGuides.value.length > 0) {
        randomMessage.value = "";
        messageShown.value = false;
      }
    });

    // Estado de las guías abiertas/cerradas
    const showStates = reactive<{ [key: number]: boolean }>({});
    const toggleStep = (id: number) => {
      showStates[id] = !showStates[id];
    };

    // Filtrado por categoría
    const filterCategory = (cat: string) => {
      currentCategory.value = cat;
      searchTerm.value = "";
    };

    // Referencias para animaciones
    const dropdowns = ref<(HTMLElement | null)[]>([]);

    return {
      guides,
      searchTerm,
      filteredGuides,
      randomMessage,
      categories,
      currentCategory,
      filterCategory,
      showStates,
      toggleStep,
      dropdowns
    };
  },
});
</script>

<template>
  <div class="guides-container">
    <header class="guides-header">
      <h1 class="title">📚 Guías de uso</h1>
      <div class="category-filter">
        <button
          v-for="cat in categories"
          @click="filterCategory(cat)"
          :class="{ active: currentCategory === cat }"
        >
          {{ cat }}
        </button>
      </div>
    </header>

    <div class="search-wrapper">
      <div class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" width="20" height="20">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Buscar en guías..."
          class="search-input"
        />
      </div>
    </div>

    <div v-if="randomMessage" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 24 24" width="48" height="48">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
      <p class="empty-message">{{ randomMessage }}</p>
    </div>

    <div class="guides-list">
      <article
        v-for="guide in filteredGuides"
        class="guide-card"
        :class="{ expanded: showStates[guide.id] }"
        ref="dropdowns"
      >
        <header class="card-header" @click="toggleStep(guide.id)">
          <div class="header-content">
            <h3 class="guide-title">{{ guide.title }}</h3>
            <span class="guide-category">{{ guide.category }}</span>
          </div>
          <span class="toggle-icon">{{ showStates[guide.id] ? '−' : '+' }}</span>
        </header>

        <transition name="expand">
          <div v-if="showStates[guide.id]" class="card-content">
            <div v-html="guide.content" class="content-html"></div>
            <footer class="tags-footer">
              <span v-for="tag in guide.tags" class="guide-tag">#{{ tag }}</span>
            </footer>
          </div>
        </transition>
      </article>
    </div>
  </div>
</template>

<style>
:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --background: #f8fafc;
  --text: #1e293b;
  --border: #e2e8f0;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
  --radius: 12px;
  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.guides-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.guides-header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.category-filter {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.category-filter button {
  padding: 0.5rem 1.25rem;
  border: 2px solid var(--border);
  background: white;
  color: var(--text);
  border-radius: 50px;
  font-weight: 500;
  transition: var(--transition);
  cursor: pointer;
}

.category-filter button.active,
.category-filter button:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
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
  color: #94a3b8;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 1rem;
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.guides-list {
  display: grid;
  gap: 1.5rem;
}

.guide-card {
  background: white;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.guide-card.expanded {
  border-color: var(--primary);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  cursor: pointer;
  gap: 1rem;
}

.header-content {
  flex: 1;
}

.guide-title {
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.guide-category {
  display: inline-block;
  background: #e0f2fe;
  color: #0369a1;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
}

.toggle-icon {
  font-size: 1.5rem;
  color: var(--text);
  font-weight: 300;
  min-width: 32px;
  text-align: center;
}

.card-content {
  padding: 0 1.5rem 1.5rem;
}

.content-html {
  color: var(--text);
  line-height: 1.6;
}

.content-html img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

.tags-footer {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.guide-tag {
  background: #f1f5f9;
  color: #64748b;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: var(--radius);
  margin: 2rem 0;
}

.empty-icon {
  color: #94a3b8;
  margin-bottom: 1rem;
}

.empty-message {
  color: #64748b;
  font-size: 1.125rem;
  line-height: 1.5;
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.3s, transform 0.3s;
  transform-origin: top;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: scaleY(0.9);
}

@media (max-width: 640px) {
  .title {
    font-size: 2rem;
  }

  .category-filter button {
    font-size: 0.875rem;
  }

  .guide-title {
    font-size: 1.125rem;
  }
}
</style>
