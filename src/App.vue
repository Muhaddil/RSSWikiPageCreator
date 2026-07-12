<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import MainToolbar from '@/components/MainToolbar.vue';
import { componentName, pageformattedName } from '@/variables/route';
import { usePageDataStore } from './stores/pageData';
import FooterToolbar from './components/FooterToolbar.vue';
import { onMounted, ref, computed, provide, watch } from 'vue';
import packageJson from '../package.json';
import { useSEO } from '@/composables/useSEO';
import { useRoute } from 'vue-router';

const pageData = usePageDataStore();
const currentRoute = useRoute();

useSEO();

onMounted(async () => pageData.initStore());

const updateAvailable = ref(false);
const currentVersion = packageJson.version;
const remoteVersion = ref('');
const currentTime = ref('');
const scanlinesEnabled = ref(false);
const isSimplifiedMode = ref(localStorage.getItem('sidebar_simplified') !== 'false');
provide('sidebarSimplified', isSimplifiedMode);

watch(isSimplifiedMode, (val) => {
  localStorage.setItem('sidebar_simplified', String(val));
});

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
    const response = await fetch('/version.json', { cache: 'no-store' });
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

function toggleScanlines() {
  scanlinesEnabled.value = !scanlinesEnabled.value;
}

function reloadPage() {
  window.location.reload();
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

const isHome = computed(() => currentRoute.name === 'home' || currentRoute.path === '/');
</script>

<template>
  <div class="app-layout">
    <Sidebar />

    <div
      class="scanline-overlay"
      v-if="scanlinesEnabled"
    ></div>

    <a
      href="#main-content"
      class="skip-link"
      >Saltar al contenido</a
    >

    <div class="main-area">
      <header
        class="app-header"
        v-if="!isHome"
      >
        <div class="header-left">
          <span class="breadcrumb">ROYAL SPACE SOCIETY // {{ pageformattedName.toUpperCase() }}</span>
        </div>
        <div class="header-center">
          <MainToolbar />
        </div>
        <div class="header-right">
          <button
            class="scanline-toggle"
            @click="toggleScanlines"
            :class="{ active: scanlinesEnabled }"
            title="Alternar efecto VCR"
            aria-label="Alternar efecto VCR"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
                ry="2"
              />
              <line
                x1="8"
                y1="21"
                x2="16"
                y2="21"
              />
              <line
                x1="12"
                y1="17"
                x2="12"
                y2="21"
              />
            </svg>
          </button>
          <span class="system-time">{{ currentTime }}</span>
        </div>
      </header>

      <div
        class="app-header home-header"
        v-if="isHome"
      >
        <div class="header-left">
          <span class="breadcrumb">ROYAL SPACE SOCIETY // DASHBOARD</span>
        </div>
        <div class="header-center"></div>
        <div class="header-right">
          <button
            class="scanline-toggle"
            @click="toggleScanlines"
            :class="{ active: scanlinesEnabled }"
            title="Alternar efecto VCR"
            aria-label="Alternar efecto VCR"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
                ry="2"
              />
              <line
                x1="8"
                y1="21"
                x2="16"
                y2="21"
              />
              <line
                x1="12"
                y1="17"
                x2="12"
                y2="21"
              />
            </svg>
          </button>
          <span class="system-time">{{ currentTime }}</span>
        </div>
      </div>

      <div
        class="tool-name-bar"
        v-if="!isHome && currentRoute.name !== 'tutorial'"
      >
        <span class="tool-name">{{ pageformattedName }} Herramienta</span>
      </div>

      <main
        id="main-content"
        class="app-content"
        :class="{ 'is-home': isHome }"
        tabindex="-1"
      >
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
              aria-label="Close announcement"
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
              href="/#/cronology"
              target="_blank"
              rel="noopener noreferrer"
              class="update-changelog"
            >
              VER CAMBIOS
            </a>
          </div>
          <button
            class="update-btn"
            @click="reloadPage"
          >
            <span>ACTUALIZAR</span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>

        <router-view />

        <div
          class="footer-section"
          v-if="componentName !== 'Faq'"
        >
          <div class="rss-divider"></div>
          <div class="footer-content">
            <div class="footer-text">
              <span class="footer-label">DESARROLLADO POR</span>
              <a
                href="https://nomanssky.fandom.com/wiki/Royal_Space_Society"
                target="_blank"
                class="author-name"
              >
                ROYAL SPACE SOCIETY
              </a>
              <span class="footer-version">v{{ currentVersion }}</span>
            </div>
          </div>
        </div>
      </main>

      <footer
        v-if="componentName !== 'home'"
        class="app-footer"
      >
        <FooterToolbar />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: #0b0b0b;
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
    rgba(255, 255, 255, 0.03) 2px,
    rgba(255, 255, 255, 0.03) 4px
  );
  pointer-events: none;
  z-index: 1000;
  opacity: 1;
  animation: scanline-move 8s linear infinite;
}

@keyframes scanline-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100px;
  }
}

.scanline-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(255, 255, 255, 0.015) 1px,
    rgba(255, 255, 255, 0.015) 2px
  );
  animation: scanline-flicker 0.1s infinite;
}

@keyframes scanline-flicker {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

.scanline-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.04"/%3E%3C/svg%3E');
  opacity: 0.3;
  animation: noise-shift 0.5s steps(10) infinite;
}

@keyframes noise-shift {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-10px, -10px);
  }
}

.main-area {
  flex: 1;
  margin-left: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.app-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 56px;
  background: #111111;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 100;
}

.header-left {
  flex: 1;
}

.breadcrumb {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.35);
}

.header-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.system-time {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.15em;
}

.scanline-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.scanline-toggle:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

.scanline-toggle.active {
  border-color: #c62828;
  color: #c62828;
  background: rgba(198, 40, 40, 0.1);
}

.mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.mode-toggle:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

.mode-toggle.active {
  border-color: #66ff66;
  color: #66ff66;
  background: rgba(102, 255, 102, 0.1);
}

.tool-name-bar {
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  background: #0b0b0b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.tool-name {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.app-content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.app-content.is-home {
  padding: 0;
}

.app-footer {
  position: sticky;
  bottom: 0;
  background: #111111;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 50;
}

.footer-section {
  padding: 2rem 1.5rem;
  margin-top: 4rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
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
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.author-name {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #c62828;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.2s ease;
}

.author-name:hover {
  color: #ef5350;
}

.footer-version {
  font-family: 'Space Mono', monospace;
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.15em;
  margin-top: 0.15rem;
}

.announcement-container {
  position: relative;
  margin: 0 auto 1.5rem;
  max-width: 900px;
}

.announcement-banner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.875rem 1.125rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid #c62828;
  background: #111111;
  position: relative;
  overflow: hidden;
}

.announcement-banner.transitioning {
  opacity: 0;
  transform: translateX(-20px);
}

.announcement-info {
  border-left-color: rgba(255, 255, 255, 0.3);
}

.announcement-warning {
  border-left-color: #c62828;
}

.announcement-error {
  border-left-color: #c62828;
}

.announcement-success {
  border-left-color: #66ff66;
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
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.3;
}

.announcement-message {
  margin: 0 0 0.5rem;
  line-height: 1.5;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.85rem;
  opacity: 0.9;
}

.announcement-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  text-decoration: none;
  color: #c62828;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(198, 40, 40, 0.3);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.announcement-link:hover {
  background: rgba(198, 40, 40, 0.1);
  border-color: #c62828;
}

.announcement-dismiss {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.5;
  transition: all 0.2s ease;
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: #ffffff;
  font-size: 0.7rem;
  border-radius: var(--border-radius);
}

.announcement-dismiss:hover {
  opacity: 1;
  border-color: #c62828;
  color: #c62828;
}

.announcement-progress {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.progress-dot {
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;
}

.progress-dot:hover {
  background: rgba(255, 255, 255, 0.3);
}

.progress-dot.active {
  background: #c62828;
}

.update-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #111111;
  border: 1px solid rgba(102, 255, 102, 0.2);
  border-left: 3px solid #66ff66;
  border-radius: var(--border-radius);
  padding: 0.875rem 1.125rem;
  margin: 0 auto 1.5rem;
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
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #66ff66;
}

.update-version {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
}

.update-changelog {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  transition: all 0.2s ease;
}

.update-changelog:hover {
  color: #66ff66;
}

.update-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #66ff66;
  color: #0b0b0b;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.update-btn:hover {
  background: #88ff88;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  z-index: 1000;
  padding: 0.6rem 1rem;
  background: #c62828;
  color: #ffffff;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 1rem;
}

:focus-visible {
  outline: 2px solid #c62828;
  outline-offset: 2px;
}

@media (max-width: 900px) {
  .breadcrumb {
    font-size: 0.55rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
  }
}

@media (max-width: 768px) {
  .main-area {
    margin-left: 0;
  }

  .app-header {
    padding: 0 0.75rem;
  }

  .breadcrumb {
    font-size: 0.5rem;
    max-width: 120px;
  }

  .header-center {
    flex: 1;
    justify-content: flex-end;
  }

  .header-right {
    gap: 0.5rem;
  }

  .system-time {
    font-size: 0.6rem;
  }

  .scanline-toggle {
    width: 36px;
    height: 36px;
  }

  .announcement-dismiss {
    width: 32px;
    height: 32px;
  }

  .app-content {
    padding: 1rem;
  }

  .app-content.is-home {
    padding: 0;
  }

  .tool-name-bar {
    padding: 0.5rem 1rem;
  }

  .footer-section {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .breadcrumb {
    max-width: 80px;
    font-size: 0.45rem;
  }

  .header-right {
    gap: 0.35rem;
  }

  .system-time {
    display: none;
  }

  .app-content {
    padding: 0.75rem;
  }

  .app-content.is-home {
    padding: 0;
  }

  .tool-name-bar {
    padding: 0.4rem 0.75rem;
  }

  .tool-name {
    font-size: 0.75rem;
  }

  .footer-section {
    padding: 1rem 0.75rem;
    margin-top: 2rem;
  }
}
</style>
