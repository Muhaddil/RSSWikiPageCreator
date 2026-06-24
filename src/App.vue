<script setup lang="ts">
import MainToolbar from '@/components/MainToolbar.vue';
import { componentName, route } from '@/variables/route';
import { defineAsyncComponent, onMounted, type Component } from 'vue';
import { usePageDataStore } from './stores/pageData';
import FooterToolbar from './components/FooterToolbar.vue';
import { ref } from 'vue';
import packageJson from '../package.json';
import { useSEO } from '@/composables/useSEO';

const pageData = usePageDataStore();

useSEO(route);

onMounted(async () => pageData.initStore());

const RouteComponent = defineAsyncComponent<Component>({
  loader: () => import(`./pages/${componentName}.vue`),
});

const updateAvailable = ref(false);
const currentVersion = packageJson.version;
const remoteVersion = ref('');
const currentTime = ref('');

function updateTime() {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('en-US', { hour12: false });
}

type RawAnnouncement = {
  active?: boolean;
  priority?: number;
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  message?: string;
  link?: { text: string; url: string } | null;
  dismissible?: boolean;
};

type Announcement = {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  link: { text: string; url: string } | null;
  dismissible: boolean;
};

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

const announcements = ref<Announcement[]>([]);
const currentIndex = ref(0);
const isTransitioning = ref(false);
const showProgressBar = ref(false);

const DISMISSED_KEY = 'dismissed_announcements';

function loadDismissed(): string[] {
  try {
    return JSON.parse(localStorage.getItem(DISMISSED_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveDismissed(ids: string[]) {
  localStorage.setItem(DISMISSED_KEY, JSON.stringify(ids));
}

function generateId(a: RawAnnouncement): string {
  return `${a.title ?? ''}::${a.message ?? ''}`;
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

    const dismissed = loadDismissed();

    const mapped = active.map((a) => {
      const id = generateId(a);
      return {
        id,
        show: true,
        type: a.type || 'info',
        title: a.title || '',
        message: a.message || '',
        link: a.link || null,
        dismissible: a.dismissible !== false,
      };
    });

    announcements.value = mapped.filter((a) => !dismissed.includes(a.id));

    const activeIds = mapped.map((a) => a.id);
    const cleaned = dismissed.filter((id) => activeIds.includes(id));
    if (cleaned.length !== dismissed.length) {
      saveDismissed(cleaned);
    }

    currentIndex.value = 0;
    if (announcements.value.length > 1) {
      showProgressBar.value = true;
    }
  } catch (e) {
    console.error('Error cargando anuncios:', e);
    announcements.value = [];
    currentIndex.value = 0;
  }
}

async function dismissAnnouncement() {
  if (announcements.value.length > 0) {
    const id = announcements.value[currentIndex.value].id;
    const dismissed = loadDismissed();
    if (!dismissed.includes(id)) {
      dismissed.push(id);
      saveDismissed(dismissed);
    }

    isTransitioning.value = true;

    setTimeout(() => {
      announcements.value.splice(currentIndex.value, 1);

      if (currentIndex.value >= announcements.value.length) {
        currentIndex.value = 0;
      }

      if (announcements.value.length <= 1) {
        showProgressBar.value = false;
      }

      isTransitioning.value = false;
    }, 300);
  }
}

async function nextAnnouncement() {
  if (announcements.value.length > 1) {
    isTransitioning.value = true;

    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % announcements.value.length;
      isTransitioning.value = false;
    }, 200);
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
  updateTime();
  setInterval(updateTime, 1000);

  checkForUpdate();
  checkForAnnouncements();

  setInterval(checkForUpdate, 60 * 1000);
  setInterval(checkForAnnouncements, 5 * 60 * 1000);

  setInterval(() => {
    if (announcements.value.length > 1 && !isTransitioning.value) {
      nextAnnouncement();
    }
  }, 8000);
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
  <div class="rss-core-os">
    <div class="scanline-overlay"></div>
    <div class="noise-overlay"></div>

    <header class="rss-header">
      <div class="header-left">
        <span class="system-id">RSS // WCORE OS V{{currentVersion}}</span>
      </div>
      <div class="header-center">
        <MainToolbar />
      </div>
      <div class="header-right">
        <span class="system-time">{{ currentTime }}</span>
      </div>
    </header>

    <div class="system-status-bar">
      <div class="status-item">
        <span class="status-label">SYSTEM</span>
        <span class="status-value ok">ONLINE</span>
      </div>
      <div class="status-item">
        <span class="status-label">NODE</span>
        <span class="status-value">SP-MKD-01</span>
      </div>
      <div class="status-item">
        <span class="status-label">VERSION</span>
        <span class="status-value">v{{ currentVersion }}</span>
      </div>
    </div>

    <main class="rss-main">
      <div
        v-if="announcements.length > 0"
        class="announcement-container"
      >
        <div
          v-for="(announcement, index) in announcements"
          :key="announcement.id"
          v-show="index === currentIndex"
          :class="['announcement-banner', `announcement-${announcement.type}`, { transitioning: isTransitioning }]"
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
                <i class="pi pi-external-link"></i>
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
          v-if="showProgressBar && announcements.length > 1"
          class="announcement-progress"
        >
          <div
            v-for="(_, index) in announcements"
            :key="index"
            :class="['progress-dot', { active: index === currentIndex }]"
            @click="currentIndex = index"
          ></div>
        </div>
      </div>

      <div
        v-if="updateAvailable"
        class="update-banner"
      >
        <div class="update-icon">
          <i class="pi pi-refresh"></i>
        </div>
        <div class="update-content">
          <div class="update-text">
            <span class="update-title">ACTUALIZACIÓN DEL SISTEMA DISPONIBLE</span>
            <span class="update-version">{{ currentVersion }} → {{ remoteVersion }}</span>
          </div>
          <a
            href="https://muhaddil.github.io/RSSWikiPageCreator/cronology.html"
            target="_blank"
            rel="noopener noreferrer"
            class="update-changelog"
          >
            VIEW CHANGES
          </a>
        </div>
        <button
          class="update-btn"
          @click="reloadPage"
        >
          <span>UPDATE</span>
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>

      <RouteComponent />
      <div
        class="footer-section"
        v-if="componentName !== 'Faq'"
      >
        <div class="rss-divider"></div>
        <div class="footer-content">
          <div class="footer-text">
            <span class="footer-label">DEVELOPED BY</span>
            <a
              href="https://nomanssky.fandom.com/wiki/Royal_Space_Society"
              target="_blank"
              class="author-name"
            >
              ROYAL SPACE SOCIETY
            </a>
          </div>
        </div>
      </div>
    </main>

    <footer
      v-if="componentName !== 'Home'"
      class="rss-footer"
    >
      <FooterToolbar />
    </footer>
  </div>
</template>

<style scoped>
.rss-core-os {
  min-height: 100vh;
  position: relative;
  background: #050505;
}

.scanline-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
  z-index: 1000;
  opacity: 0.4;
}

.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 999;
  opacity: 0.5;
}

.rss-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background: rgba(10, 10, 10, 0.95);
  border-bottom: 1px solid rgba(255, 26, 26, 0.3);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-left {
  flex: 1;
}

.system-id {
  font-family: 'Orbitron', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ff1a1a;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.header-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.system-time {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.15em;
}

.system-status-bar {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.35rem 1rem;
  background: rgba(5, 5, 5, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 99;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-label {
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.status-value {
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.1em;
}

.status-value.ok {
  color: #66ff66;
  text-shadow: 0 0 5px rgba(102, 255, 102, 0.3);
}

.rss-main {
  padding-top: 90px;
  padding-bottom: 100px;
  min-height: 100vh;
  width: 100%;
}

.footer-section {
  padding: 2rem 1.5rem;
  margin-top: 4rem;
  text-align: center;
  border-top: 1px solid rgba(255, 26, 26, 0.2);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.footer-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.footer-label {
  font-family: 'Orbitron', monospace;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.author-name {
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 1rem;
  color: #ff1a1a;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-decoration: none;
  transition: all 0.3s ease;
}

.author-name:hover {
  color: #ff3333;
  text-shadow: 0 0 10px rgba(255, 26, 26, 0.5);
}

.rss-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  border-top: 1px solid rgba(255, 26, 26, 0.3);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.announcement-container {
  position: relative;
  margin: 0.75rem auto;
  max-width: 900px;
  padding: 0 1rem;
}

.announcement-banner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.875rem 1.125rem;
  border-radius: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 26, 26, 0.3);
  border-left: 3px solid #ff1a1a;
  background: rgba(10, 10, 10, 0.8);
  position: relative;
  overflow: hidden;
}

.announcement-banner.transitioning {
  opacity: 0;
  transform: translateX(-20px);
}

.announcement-info {
  border-left-color: rgba(255, 255, 255, 0.5);
  background: rgba(10, 10, 10, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

.announcement-warning {
  border-left-color: #ff1a1a;
  background: rgba(10, 10, 10, 0.8);
  color: #ff1a1a;
}

.announcement-error {
  border-left-color: #ff1a1a;
  background: rgba(10, 10, 10, 0.8);
  color: #ff1a1a;
}

.announcement-success {
  border-left-color: #66ff66;
  background: rgba(10, 10, 10, 0.8);
  color: #66ff66;
}

.announcement-content {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  flex: 1;
}

.announcement-icon {
  font-size: 1rem;
  margin-top: 0.125rem;
  opacity: 0.8;
}

.announcement-text {
  flex: 1;
}

.announcement-title {
  margin: 0 0 0.375rem;
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.3;
}

.announcement-message {
  margin: 0 0 0.5rem;
  line-height: 1.5;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  opacity: 0.9;
}

.announcement-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  text-decoration: none;
  color: #ff1a1a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(255, 26, 26, 0.3);
  transition: all 0.3s ease;
}

.announcement-link:hover {
  background: rgba(255, 26, 26, 0.1);
  border-color: #ff1a1a;
}

.announcement-dismiss {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.6;
  transition: all 0.3s ease;
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: #ffffff;
  font-size: 0.7rem;
}

.announcement-dismiss:hover {
  opacity: 1;
  border-color: #ff1a1a;
  color: #ff1a1a;
}

.announcement-progress {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.progress-dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.progress-dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.progress-dot.active {
  background: #ff1a1a;
  box-shadow: 0 0 8px rgba(255, 26, 26, 0.5);
}

.update-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid rgba(102, 255, 102, 0.3);
  border-left: 3px solid #66ff66;
  border-radius: 0;
  padding: 0.875rem 1.125rem;
  margin: 0.75rem auto;
  max-width: 900px;
}

.update-icon {
  font-size: 1rem;
  color: #66ff66;
}

.update-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.update-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.update-title {
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #66ff66;
}

.update-version {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.update-changelog {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.update-changelog:hover {
  color: #66ff66;
}

.update-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #66ff66;
  color: #050505;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.update-btn:hover {
  background: #88ff88;
  box-shadow: 0 0 15px rgba(102, 255, 102, 0.4);
}

@media (max-width: 768px) {
  .rss-header {
    padding: 0.5rem 1rem;
  }

  .system-id {
    font-size: 0.6rem;
  }

  .system-time {
    font-size: 0.7rem;
  }

  .system-status-bar {
    gap: 1rem;
    font-size: 0.6rem;
  }

  .announcement-banner {
    flex-direction: column;
    gap: 0.75rem;
  }

  .announcement-dismiss {
    align-self: flex-end;
    margin-left: 0;
  }

  .update-banner {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }

  .update-content {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .system-status-bar {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .progress-dot {
    width: 8px;
    height: 8px;
  }
}
</style>
