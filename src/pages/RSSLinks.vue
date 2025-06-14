<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import { translations, linkData } from '@/variables/links';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

onMounted(() => {
  if (!queryParams.has('dev')) {
    window.location.href = '/RSSWikiPageCreator/indextest.html';
  }
});

const queryParams = new URLSearchParams(window.location.search);
const language = ref<'en' | 'es'>(queryParams.get('lang') === 'en' ? 'en' : 'es');

type LanguageKey = 'en' | 'es';

const isEpicLanguage = ref<boolean>(false);

const t = computed(() => translations[language.value as LanguageKey][isEpicLanguage.value ? 'epic' : 'common']);
const links = computed(() => linkData[language.value as LanguageKey][isEpicLanguage.value ? 'epic' : 'common']);

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const getLabel = (language: 'en' | 'es'): string => {
  return language === 'es' ? 'Lenguaje Sofisticado' : 'Sophisticated Language';
};

window.addEventListener('resize', updateScreenWidth);

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

onMounted(() => {
  watch(isEpicLanguage, () => {
    const card = document.querySelector('.galactic-card');
    if (card) {
      card.classList.add('epic-transition');
      setTimeout(() => card.classList.remove('epic-transition'), 1000);
    }
  });
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
            </div>
            <p class="text-stellar-gray mt-2"><ThemeSwitch style="margin-right: 2rem" />{{ t.subtitle }}</p>
            <br />
            <div class="flex items-center gap-2 language-toggle">
              <Checkbox
                v-model="isEpicLanguage"
                :binary="true"
                class="epic-checkbox"
                style="margin-right: 8px"
              />
              <transition
                name="label-fade"
                mode="out-in"
              >
                <label
                  :key="getLabel(language)"
                  class="text-sm epic-label"
                  style="margin-right: 8px"
                >
                  {{ getLabel(language) }}
                </label>
              </transition>
            </div>
          </div>
        </div>

        <transition-group
          name="card-stagger"
          tag="div"
          class="grid gap-4"
          :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
        >
          <Card
            v-for="(link, index) in links"
            :key="index"
            class="link-card"
          >
            <template #content>
              <a
                :href="link.url"
                target="_blank"
                class="link-content"
              >
                <div class="flex items-start gap-4 p-4">
                  <i
                    :class="link.icon"
                    class="link-icon"
                  ></i>
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      {{ link.title }}
                      <Tag
                        :value="link.category"
                        class="category-tag"
                      />
                    </div>
                    <p class="link-description">{{ link.description }}</p>
                  </div>
                </div>
              </a>
            </template>
          </Card>
        </transition-group>

        <Panel class="galactic-panel mt-6">
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

.link-content {
  color: var(--text-primary);
}

.link-content:hover {
  color: var(--tag-text);
}

.link-icon {
  color: var(--tag-text);
  font-size: 1.5rem;
}

.galactic-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.panel-title {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.security-level {
  color: var(--tag-text);
  font-weight: 600;
}

.rss-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: 2%;
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

.card-stagger-move {
  transition: transform 0.8s ease;
}

.card-stagger-enter-active {
  transition: all 0.5s ease;
  transition-delay: calc(0.1s * var(--i));
}

.card-stagger-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
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

.epic-label {
  display: inline-block;
  position: relative;
  padding: 2px 5px;
  transition: all 0.3s ease;
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
</style>
