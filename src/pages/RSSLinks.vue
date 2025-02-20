<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import { translations, linkData } from '@/variables/links';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

onMounted(() => {
  window.location.href = "/RSSWikiPageCreator/indextest.html";
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

const gridColumns = computed(() => screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3);
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society" target="_blank">
              <div class="rss-logo">
                <img src="/assets/images/basesdestacadas/RSS-Logo.webp" class="logo-image" alt="RSS Logo" />
              </div>
            </a>
            <div class="header-container">
              <div class="title-theme-container">
                <h1 class="galactic-title">
                  <span class="title-text">{{ t.title }}</span>
                </h1>
              </div>
            </div>
              <p class="text-stellar-gray mt-2"><ThemeSwitch style="margin-right: 2rem;"/>{{ t.subtitle }}</p>
              <br />
              <div class="flex items-center gap-2 language-toggle">
                <Checkbox v-model="isEpicLanguage" :binary="true" style="margin-right: 8px;" />
                <label class="text-sm" style="margin-right: 8px;">{{ getLabel(language) }}</label>
              </div>
            </div>
          </div>

          <div class="grid gap-4" :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`">
            <Card v-for="(link, index) in links" :key="index" class="link-card">
              <template #content>
                <a :href="link.url" target="_blank" class="link-content">
                  <div class="flex items-start gap-4 p-4">
                    <i :class="link.icon" class="link-icon"></i>
                    <div>
                      <div class="flex items-center gap-2 mb-2">
                        {{ link.title }}
                        <Tag :value="link.category" class="category-tag" />
                      </div>
                      <p class="link-description">{{ link.description }}</p>
                    </div>
                  </div>
                </a>
              </template>
            </Card>
          </div>

          <Panel class="galactic-panel mt-6">
            <template #header>
              <h2 class="panel-title">
                {{ t.accessTitle }}
              </h2>
            </template>
            <p class="panel-content">
              {{ t.accessText }}<br><br>
              <span class="security-level">{{ t.securityLevel }}</span><br>
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  top: 3%;
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
    width: 60px;
    height: 40px;
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
