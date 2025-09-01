<script setup lang="ts">
import MainToolbar from '@/components/MainToolbar.vue';
import { componentName } from '@/variables/route';
import { defineAsyncComponent, onMounted, type Component } from 'vue';
import { usePageDataStore } from './stores/pageData';
import FooterToolbar from './components/FooterToolbar.vue';
import { ref } from 'vue';
import packageJson from '../package.json';

const pageData = usePageDataStore();

onMounted(async () => pageData.initStore());

const RouteComponent = defineAsyncComponent<Component>({
  loader: () => import(`./pages/${componentName}.vue`),
});

const updateAvailable = ref(false);
const currentVersion = packageJson.version;
const remoteVersion = ref('');

type RawAnnouncement = {
  active?: boolean;
  priority?: number;
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  message?: string;
  link?: { text: string; url: string } | null;
  dismissible?: boolean;
};

type Announcement =
  | {
      show: true;
      type: 'info' | 'warning' | 'error' | 'success';
      title: string;
      message: string;
      link: { text: string; url: string } | null;
      dismissible: boolean;
    }
  | { show: false };

const announcement = ref<Announcement>({ show: false });

async function checkForUpdate() {
  try {
    const response = await fetch('https://muhaddil.github.io/RSSWikiPageCreator/version.json', { cache: 'no-store' });
    const remote = await response.json();
    if (remote.version && remote.version !== currentVersion) {
      remoteVersion.value = remote.version;
      updateAvailable.value = true;
    }
  } catch (e) {
    console.warn('Error comprobando actualizaciones:', e);
  }
}

async function checkForAnnouncements() {
  try {
    const response = await fetch(
      'https://api.github.com/repos/Muhaddil/rsswikipagecreatorannouncements/contents/announcements.json',
      { headers: { Accept: 'application/vnd.github.v3.raw' } }
    );

    if (!response.ok) {
      console.error('❌ Error HTTP:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const list: RawAnnouncement[] = Array.isArray(data.announcements) ? data.announcements : [];
    const active = list.filter((a): a is RawAnnouncement => !!a?.active);

    const chosen = active.sort(
      (a: RawAnnouncement, b: RawAnnouncement) => (a.priority ?? 9999) - (b.priority ?? 9999)
    )[0];

    if (chosen) {
      announcement.value = {
        show: true,
        type: chosen.type || 'info',
        title: chosen.title || '',
        message: chosen.message || '',
        link: chosen.link || null,
        dismissible: chosen.dismissible !== false,
      };
    } else {
      announcement.value = { show: false };
    }
  } catch (e) {
    console.error('Error cargando anuncios:', e);
    announcement.value = { show: false };
  }
}

function dismissAnnouncement() {
  if (announcement.value.show) {
    announcement.value = { show: false };
  }
}

function getAnnouncementIcon(type: string) {
  const icons: Record<string, string> = {
    info: 'pi pi-info-circle',
    warning: 'pi pi-exclamation-triangle',
    error: 'pi pi-times-circle',
    success: 'pi pi-check-circle',
  };
  return icons[type] || icons.info;
}

onMounted(() => {
  checkForUpdate();
  checkForAnnouncements();
  setInterval(checkForUpdate, 60 * 1000);
  setInterval(checkForAnnouncements, 5 * 60 * 1000);
});

function reloadPage() {
  // if ('caches' in window) {
  //   caches.keys().then((names) => {
  //     for (const name of names) {
  //       caches.delete(name);
  //     }
  //   }).finally(() => {
  //     window.location.href = window.location.pathname + '?nocache=' + new Date().getTime();
  //   });
  // } else {
  //   window.location.href = window.location.pathname + '?nocache=' + new Date().getTime();
  // }
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
    v-if="announcement.show"
    :class="['announcement-banner', `announcement-${announcement.type}`]"
  >
    <div class="announcement-content">
      <div class="announcement-icon">
        <i :class="getAnnouncementIcon(announcement.type)"></i>
      </div>
      <div class="announcement-text">
        <h4
          v-if="announcement.title"
          class="announcement-title"
        >
          {{ announcement.title }}
        </h4>
        <p class="announcement-message">{{ announcement.message }}</p>
        <a
          v-if="announcement.link"
          :href="announcement.link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="announcement-link"
        >
          {{ announcement.link.text }}
        </a>
      </div>
    </div>
    <button
      v-if="announcement.dismissible"
      class="announcement-dismiss"
      @click="dismissAnnouncement"
      aria-label="Cerrar anuncio"
    >
      <i class="pi pi-times"></i>
    </button>
  </div>

  <div
    v-if="updateAvailable"
    class="update-banner"
  >
    <div class="banner-content">
      <p class="banner-text">
        <i class="pi pi-refresh"></i>
        ¡Nueva versión disponible! ({{ currentVersion }} → {{ remoteVersion }})
      </p>

      <!-- <p class="banner-text">
        <i class="pi pi-refresh"></i>
        Se ha lanzado la versión {{ remoteVersion }}. ¡Actualiza ahora!
      </p> -->

      <p class="banner-text">
        <i class="pi pi-info-circle"></i>
        Consulta los cambios:
        <a
          href="https://muhaddil.github.io/RSSWikiPageCreator/cronology.html"
          target="_blank"
          rel="noopener noreferrer"
          class="update-link"
        >
          Ver cambios
        </a>
      </p>
    </div>
    <button
      class="p-button p-button-sm p-button-outlined update-btn"
      @click="reloadPage"
    >
      Actualizar ahora
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

.announcement-banner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  margin: 1rem auto;
  max-width: 960px;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  animation: slide-fade-in 0.4s ease-out;
  transition: var(--theme-transition);
}

.announcement-info {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
  color: #1565c0;
}

.announcement-warning {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
  color: #e65100;
}

.announcement-error {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  color: #c62828;
}

.announcement-success {
  background-color: #e8f5e8;
  border-left: 4px solid #4caf50;
  color: #2e7d32;
}

.announcement-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;
}

.announcement-icon {
  font-size: 1.25rem;
  margin-top: 0.125rem;
}

.announcement-text {
  flex: 1;
}

.announcement-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.announcement-message {
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
}

.announcement-link {
  font-weight: 500;
  text-decoration: underline;
  opacity: 0.9;
}

.announcement-link:hover {
  opacity: 1;
}

.announcement-dismiss {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.2s ease;
  margin-left: 1rem;
}

.announcement-dismiss:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
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

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.update-link {
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: underline;
  margin-left: 0.25rem;
}
</style>
