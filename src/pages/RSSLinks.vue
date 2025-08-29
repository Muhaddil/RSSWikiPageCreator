<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { translations, linkData } from '@/variables/links';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

const queryParams = new URLSearchParams(window.location.search);
const language = ref<'en' | 'es'>(queryParams.get('lang') === 'en' ? 'en' : 'es');

type LanguageKey = 'en' | 'es';

const isEpicLanguage = ref<boolean>(false);
const searchQuery = ref<string>('');
const showScrollButton = ref<boolean>(false);

const t = computed(() => translations[language.value as LanguageKey][isEpicLanguage.value ? 'epic' : 'common']);
const links = computed(() => linkData[language.value as LanguageKey][isEpicLanguage.value ? 'epic' : 'common']);

const normalizeText = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const filteredLinks = computed(() => {
  if (!searchQuery.value) return links.value;
  const query = normalizeText(searchQuery.value);
  return links.value.filter((link) => {
    const title = normalizeText(link.title);
    const description = normalizeText(link.description);
    const category = normalizeText(link.category);
    return title.includes(query) || description.includes(query) || category.includes(query);
  });
});

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const languageLabel = computed(() => (language.value === 'es' ? 'Lenguaje Sofisticado' : 'Sophisticated Language'));

window.addEventListener('resize', updateScreenWidth);

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

onMounted(() => {
  // createParticles();
  watch(isEpicLanguage, () => {
    const card = document.querySelector('.galactic-card');
    if (card) {
      card.classList.add('epic-transition');
      setTimeout(() => card.classList.remove('epic-transition'), 1000);
    }
  });
});

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const showRickRollModal = ref(false);
const videoUrl = ref('https://streamable.com/e/qk0vn1?autoplay=1');

const openRickRoll = () => {
  showRickRollModal.value = true;
};

const closeRickRoll = () => {
  showRickRollModal.value = false;
};

// const createParticles = () => {
//   const container = document.querySelector('.particles-container');
//   if (!container) return;

//   for (let i = 0; i < 30; i++) {
//     const particle = document.createElement('div');
//     particle.classList.add('particle');

//     particle.style.left = `${Math.random() * 100}%`;
//     particle.style.top = `${Math.random() * 100}%`;

//     const size = Math.random() * 5 + 2;
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;

//     const duration = Math.random() * 20 + 10;
//     particle.style.animationDuration = `${duration}s`;

//     container.appendChild(particle);
//   }
// };

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="particles-container"></div>

  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="header-wrapper">
          <a
            href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society"
            target="_blank"
            class="rss-logo"
          >
            <img
              src="/assets/images/shared/logo-white.png"
              class="logo-image"
              alt="RSS Logo"
            />
          </a>

          <div class="title-container">
            <transition
              name="title-fade"
              mode="out-in"
            >
              <h1
                key="title"
                class="galactic-title"
              >
                <span class="title-text">{{ t.title }}</span>
              </h1>
            </transition>
          </div>

          <div class="subtitle-container">
            <ThemeSwitch />
            <p class="text-stellar-gray">{{ t.subtitle }}</p>
          </div>

          <!-- Buscador -->
          <div class="search-container">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-search"></i>
              </span>
              <InputText
                v-model="searchQuery"
                :placeholder="t.searchPlaceholder || 'Buscar...'"
                class="search-input"
              />
            </div>
          </div>

          <div class="language-toggle">
            <Checkbox
              v-model="isEpicLanguage"
              :binary="true"
              class="epic-checkbox"
            />
            <transition
              name="label-fade"
              mode="out-in"
            >
              <label
                :key="languageLabel"
                class="epic-label"
              >
                {{ languageLabel }}
              </label>
            </transition>
          </div>
        </div>

        <transition-group
          name="card-stagger"
          tag="div"
          class="links-grid"
          :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
          v-if="filteredLinks.length > 0"
        >
          <Card
            v-for="(link, index) in filteredLinks"
            :key="link.url"
            class="link-card"
            :style="{ '--i': index }"
          >
            <template #content>
              <a
                :href="link.url"
                target="_blank"
                class="link-content"
              >
                <div class="flex items-start gap-4">
                  <i
                    :class="link.icon"
                    class="link-icon"
                  ></i>
                  <div>
                    <div class="link-title-container">
                      <span class="link-title">{{ link.title }}</span>
                      <Tag
                        :value="link.category"
                        class="category-tag ml-2 mb-1"
                      />
                    </div>
                    <p class="link-description">{{ link.description }}</p>
                  </div>
                </div>
              </a>
            </template>
          </Card>
        </transition-group>

        <div
          v-else
          class="no-results"
        >
          <i class="pi pi-search"></i>
          <h3>{{ t.noResults || 'No se encontraron resultados' }}</h3>
          <p>{{ t.tryDifferent || 'Intenta con términos diferentes' }}</p>
        </div>

        <Panel class="galactic-panel">
          <template #header>
            <h2 class="panel-title">
              {{ t.accessTitle }}
            </h2>
          </template>
          <p class="panel-content">
            {{ t.accessText }}<br /><br />
            <span class="security-level">{{ t.securityLevel }}</span
            ><br />
            {{ t.systemUpdate }}
          </p>
        </Panel>
      </div>
    </template>
  </Card>

  <transition name="fade">
    <button
      @click="openRickRoll"
      class="scroll-top-button top-right-button"
    >
      <i class="pi pi-wrench"></i>
    </button>
  </transition>

  <Dialog
    v-model:visible="showRickRollModal"
    header="¡Rick Rolleado!"
    :modal="true"
    :closable="true"
    @hide="closeRickRoll"
    :style="{ width: '100vw', height: '100vh' }"
    :content-class="'flex justify-center items-center bg-black'"
  >
    <div
      class="video-wrapper"
      style="position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"
    >
      <iframe
        v-if="showRickRollModal"
        :src="videoUrl"
        title="Rick Roll"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        style="max-width: 100%; max-height: 100%; aspect-ratio: 16 / 9; width: 100%; height: 100%"
      ></iframe>
    </div>
  </Dialog>

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
/* Variables CSS */
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
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  --card-hover-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  --transition-duration: 0.4s;
  --transition-timing: cubic-bezier(0.25, 0.8, 0.25, 1);
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
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  --card-hover-shadow: 0 10px 20px rgba(103, 232, 249, 0.2);
}

/* Estilos principales */
body {
  font-family: 'Montserrat', sans-serif;
  background: var(--background-primary);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: background var(--transition-duration) var(--transition-timing);
  overflow-x: hidden;
  position: relative;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 10000;
}

.particle {
  position: absolute;
  background: rgba(103, 232, 249, 0.4);
  border-radius: 50%;
  animation: float 15s infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  max-width: 1400px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  transition:
    transform 0.6s var(--transition-timing),
    box-shadow 0.6s var(--transition-timing);
}

.galactic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
}

.space-page-container {
  padding: 3rem;
}

.header-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  position: relative;
}

.rss-logo {
  position: absolute;
  top: -2.5rem;
  right: -1rem;
  z-index: 10;
  transition: all 0.5s var(--transition-timing);
}

.logo-image {
  height: 15rem;
  transition:
    transform 0.6s var(--transition-timing),
    filter 0.6s var(--transition-timing);
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.1);
  filter: drop-shadow(0 8px 25px rgba(79, 70, 229, 0.4));
}

.theme-dark .logo-image {
  filter: brightness(0.9) drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
}

.title-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-family: 'Orbitron', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.galactic-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary-gradient);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s var(--transition-timing);
}

.galactic-title:hover::after {
  transform: scaleX(1);
}

.subtitle-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.text-stellar-gray {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 80%;
}

.search-container {
  margin-bottom: 1.5rem;
  position: relative;
  max-width: 500px;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  background: var(--background-secondary);
  color: var(--text-primary);
  transition: all 0.3s var(--transition-timing);
  box-shadow: var(--card-shadow);
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: var(--tag-border);
  box-shadow: 0 0 0 0.2rem var(--hover-effect);
}

.search-container i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  z-index: 10;
}

.language-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: rgba(79, 70, 229, 0.05);
  border-radius: 50px;
  transition: all 0.4s var(--transition-timing);
  margin-top: 0.5rem;
  border: 1px solid var(--border-color);
}

.language-toggle:hover {
  background: rgba(79, 70, 229, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.epic-label {
  display: inline-block;
  position: relative;
  padding: 2px 5px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
}

.links-grid {
  display: grid;
  gap: 1.8rem;
  margin-bottom: 3rem;
}

.link-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  transition:
    transform 0.5s var(--transition-timing),
    box-shadow 0.5s var(--transition-timing),
    border-color 0.3s ease;
  overflow: hidden;
  position: relative;
  height: 100%;
  opacity: 0;
  animation: card-appear 0.8s forwards;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes card-appear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary-gradient);
  opacity: 0;
  transition: opacity 0.4s var(--transition-timing);
  z-index: 0;
}

.link-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--card-hover-shadow);
  border-color: transparent;
}

.link-card:hover::before {
  opacity: 0.08;
}

.link-content {
  color: var(--text-primary);
  text-decoration: none;
  display: block;
  height: 100%;
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.top-right-button {
  top: 2rem;
  right: 2rem;
  bottom: auto;
}

.link-icon {
  color: var(--tag-text);
  font-size: 2.2rem;
  transition: all 0.4s var(--transition-timing);
  margin-bottom: 1rem;
  display: inline-block;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 70, 229, 0.05);
  border-radius: 16px;
}

.link-card:hover .link-icon {
  transform: scale(1.1) rotate(5deg);
  background: rgba(79, 70, 229, 0.1);
}

.link-title {
  font-size: 1.3rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.link-card:hover .link-title {
  color: var(--tag-text);
}

.category-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.8rem;
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
  transition:
    transform 0.3s var(--transition-timing),
    box-shadow 0.3s var(--transition-timing);
}

.link-card:hover .category-tag {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.link-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.link-card:hover .link-description {
  color: var(--text-primary);
}

.galactic-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  transition: all 0.5s var(--transition-timing);
  opacity: 0;
  animation: panel-appear 0.8s forwards 0.4s;
}

@keyframes panel-appear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.galactic-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
  opacity: 0.7;
  border-radius: 4px 4px 0 0;
}

.panel-title {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: -0.5px;
}

.panel-content {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
  padding: 0 1.5rem 1.5rem;
}

.security-level {
  color: var(--tag-text);
  font-weight: 600;
  text-shadow: 0 0 8px rgba(103, 232, 249, 0.3);
  display: inline-block;
  margin-top: 0.8rem;
  position: relative;
}

.security-level::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--tag-border);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s var(--transition-timing);
}

.galactic-panel:hover .security-level::after {
  transform: scaleX(1);
}

.no-results {
  text-align: center;
  padding: 3rem;
  grid-column: 1 / -1;
  opacity: 0.7;
}

.no-results i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.no-results p {
  color: var(--text-secondary);
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

/* Animaciones */
.title-fade-enter-active,
.title-fade-leave-active,
.label-fade-enter-active,
.label-fade-leave-active {
  transition: all 0.5s ease;
}

.title-fade-enter-from,
.title-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.label-fade-enter-from,
.label-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card-stagger-move {
  transition: transform 0.8s ease;
}

.epic-checkbox.p-checkbox.p-highlight .p-checkbox-box {
  animation: checkbox-glow 0.6s ease;
}

@keyframes checkbox-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(103, 232, 249, 0.5);
  }
  50% {
    box-shadow: 0 0 10px 3px rgba(103, 232, 249, 0.5);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(103, 232, 249, 0);
  }
}

.galactic-card.epic-transition {
  animation: epic-transition 1.2s ease;
}

@keyframes epic-transition {
  0% {
    transform: scale(1);
    background: var(--background-primary);
  }
  25% {
    transform: scale(1.005);
    background: linear-gradient(45deg, var(--background-primary) 0%, rgba(103, 232, 249, 0.1) 100%);
  }
  50% {
    transform: scale(1);
    box-shadow: 0 0 30px rgba(103, 232, 249, 0.2);
  }
  100% {
    background: var(--background-primary);
  }
}

.epic-label::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--tag-border);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.epic-checkbox:checked + .epic-label::after {
  transform: scaleX(1);
}

/* Responsive */
@media (max-width: 1200px) {
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  body {
    padding: 1rem;
  }

  .space-page-container {
    padding: 1.5rem;
  }

  .rss-logo {
    position: relative;
    top: 0;
    right: 0;
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
  }

  .logo-image {
    height: 8rem;
    margin: 0 auto;
  }

  .galactic-title {
    font-size: 2rem;
    text-align: center;
  }

  .subtitle-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .text-stellar-gray {
    max-width: 100%;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .scroll-top-button {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}
</style>
