<script setup lang="ts">
import MainToolbar from '@/components/MainToolbar.vue';
import { componentName } from '@/variables/route';
import { defineAsyncComponent, onMounted, type Component } from 'vue';
import { usePageDataStore } from './stores/pageData';
import FooterToolbar from './components/FooterToolbar.vue';
import { ref } from 'vue';
import packageJson from '../package.json';
import { SpeedInsights } from "@vercel/speed-insights/vue"

const pageData = usePageDataStore();

onMounted(async () => pageData.initStore());

const RouteComponent = defineAsyncComponent<Component>({
  loader: () => import(`./pages/${componentName}.vue`),
});

const updateAvailable = ref(false);
const currentVersion = packageJson.version;

async function checkForUpdate() {
  try {
    const response = await fetch('https://muhaddil.github.io/RSSWikiPageCreator/version.json', { cache: 'no-store' });
    const remote = await response.json();
    if (remote.version && remote.version !== currentVersion) {
      updateAvailable.value = true;
    }
  } catch (e) {
    // Manejo de error opcional
  }
}

onMounted(() => {
  checkForUpdate();
  setInterval(checkForUpdate, 60 * 1000);
});

function reloadPage() {
  window.location.reload();
}
</script>

<template>
  <header class="header">
    <div style="display: inline-block; text-align: center; width: 100%">
      <div>Versión {{ currentVersion }}</div>
    </div>
    <MainToolbar />
  </header>

  <div
    v-if="updateAvailable"
    class="update-banner"
  >
    <span class="banner-text"> <i class="pi pi-refresh"></i> ¡Nueva versión disponible! </span>
    <button
      class="p-button p-button-sm p-button-outlined"
      @click="reloadPage"
    >
      Actualizar
    </button>
  </div>

  <main class="container main-page-content pt-4 my-5">
    <RouteComponent />
    <div
      class="footer-section"
      v-if="componentName !== 'Faq'"
    >
      <div class="footer-content">
        <i class="pi pi-heart-fill heart-icon"></i>
        <div class="footer-text">
          <span class="footer-title">Creado con pasión y dedicación por</span>
          <a
            href="https://github.com/Muhaddil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="author-name">Muhaddil</span>
          </a>
        </div>
        <i class="pi pi-star-fill star-icon"></i>
      </div>
      <p class="footer-subtitle"></p>
    </div>
  </main>
  <footer
    v-if="componentName !== 'Home'"
    class="full-width"
  >
    <FooterToolbar />
  </footer>
</template>

<style scoped>
.header {
  border-block-end: 1px solid var(--p-toolbar-border-color);
}

footer {
  position: fixed;
  bottom: 0;
  border-block-start: 1px solid var(--p-toolbar-border-color);
}

.main-page-content {
  padding-block-end: 5rem;
}

.footer-section {
  padding: 2rem 1.5rem;
  background: var(--background-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: 2rem;
  text-align: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.heart-icon {
  color: #ef4444;
  font-size: 1.5rem;
  animation: pulse 1.5s infinite;
}

.star-icon {
  color: yellow;
  font-size: 1.2rem;
}

.footer-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-title {
  color: var(--text-secondary);
  font-size: 1.1rem;
  animation: shine 2s infinite;
}

.author-name {
  background: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 1.4rem;
  font-style: italic;
  text-shadow: 0 0 10px rgba(79, 70, 229, 0.7);
}

.footer-subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}

@keyframes pulse {
  /* 0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  } */
}

@keyframes shine {
  0% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }

  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  100% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 0.5rem;
  }

  .author-name {
    font-size: 1.2rem;
  }
}

.update-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface-100);
  color: var(--text-color);
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  margin: 1rem auto;
  max-width: 960px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  animation: slide-fade-in 0.4s ease-out;
  transition: var(--theme-transition);
}

.banner-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.update-btn {
  @apply p-button p-button-sm p-button-outlined;
  transition: all 0.3s ease;
  box-shadow: none;
}

.update-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 8px rgba(100, 108, 255, 0.4);
}

@keyframes slide-fade-in {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
