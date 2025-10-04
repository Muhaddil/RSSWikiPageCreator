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
  <header class="header">
    <div class="version-display">
      <span class="version-text">v{{ currentVersion }}</span>
    </div>
    <MainToolbar />
  </header>

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
        <span class="update-title">Nueva versión disponible</span>
        <span class="update-version">{{ currentVersion }} → {{ remoteVersion }}</span>
      </div>
      <a
        href="https://muhaddil.github.io/RSSWikiPageCreator/cronology.html"
        target="_blank"
        rel="noopener noreferrer"
        class="update-changelog"
      >
        Ver cambios
      </a>
    </div>
    <button
      class="update-btn"
      @click="reloadPage"
    >
      <span>Actualizar</span>
      <i class="pi pi-arrow-right"></i>
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
  position: relative;
}

.version-display {
  display: inline-block;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 10;
}

.version-text {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: rgb(255 255 255 / 15%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-color);
  border: 1px solid rgb(255 255 255 / 20%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

.version-text:hover {
  background: rgb(255 255 255 / 25%);
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgb(0 0 0 / 15%);
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
  animation: heartbeat 2s infinite;
}

.star-icon {
  color: #fbbf24;
  font-size: 1.2rem;
  animation: twinkle 3s infinite;
}

.footer-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-title {
  color: var(--text-secondary);
  font-size: 1.1rem;
  animation: glow 3s ease-in-out infinite;
}

.author-name {
  background: linear-gradient(45deg, #4f46e5 0%, #1e40af 50%, #7c3aed 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 1.4rem;
  font-style: italic;
  text-shadow: 0 0 10px rgb(79 70 229 / 70%);
  animation: gradient-shift 4s ease-in-out infinite;
  transition: all 0.3s ease;
}

.footer-subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}

.author-name:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 8px rgb(79 70 229 / 50%));
}

.announcement-container {
  position: relative;
  margin: 0.75rem auto;
  max-width: 900px;
}

.announcement-banner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.875rem 1.125rem;
  border-radius: 12px;
  backdrop-filter: blur(20px);
  border: 1px solid rgb(255 255 255 / 10%);
  box-shadow:
    0 8px 32px rgb(0 0 0 / 6%),
    0 1px 0 rgb(255 255 255 / 20%) inset;
  animation: float-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.announcement-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 10%), transparent);
  transition: left 0.8s ease;
}

.announcement-banner:hover::before {
  left: 100%;
}

.announcement-banner:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow:
    0 12px 40px rgb(0 0 0 / 8%),
    0 1px 0 rgb(255 255 255 / 30%) inset;
}

.announcement-banner.transitioning {
  opacity: 0;
  transform: translateX(-20px) scale(0.98);
}

.announcement-info {
  background: linear-gradient(135deg, rgb(59 130 246 / 12%) 0%, rgb(147 197 253 / 8%) 100%);
  border-left: 3px solid rgb(59 130 246 / 40%);
  color: #1e3a8a;
}

.announcement-warning {
  background: linear-gradient(135deg, rgb(245 158 11 / 12%) 0%, rgb(252 211 77 / 8%) 100%);
  border-left: 3px solid rgb(245 158 11 / 40%);
  color: #78350f;
}

.announcement-error {
  background: linear-gradient(135deg, rgb(239 68 68 / 12%) 0%, rgb(252 165 165 / 8%) 100%);
  border-left: 3px solid rgb(239 68 68 / 40%);
  color: #7f1d1d;
}

.announcement-success {
  background: linear-gradient(135deg, rgb(34 197 94 / 12%) 0%, rgb(134 239 172 / 8%) 100%);
  border-left: 3px solid rgb(34 197 94 / 40%);
  color: #14532d;
}

.announcement-content {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  flex: 1;
}

.announcement-icon {
  font-size: 1.125rem;
  margin-top: 0.125rem;
  opacity: 0.8;
  animation: bounce-subtle 2s infinite;
}

.announcement-text {
  flex: 1;
}

.announcement-title {
  margin: 0 0 0.375rem;
  font-size: 1rem;
  font-weight: 700;
  opacity: 1;
  line-height: 1.3;
}

.announcement-message {
  margin: 0 0 0.5rem;
  line-height: 1.5;
  font-size: 0.925rem;
  opacity: 0.95;
  font-weight: 500;
}

.announcement-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  opacity: 0.9;
  font-size: 0.9rem;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.announcement-link:hover {
  opacity: 1;
  background: rgb(255 255 255 / 10%);
  transform: translateX(4px);
}

.announcement-dismiss {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  opacity: 0.6;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.announcement-dismiss:hover {
  opacity: 1;
  background: rgb(0 0 0 / 8%);
  transform: scale(1.1) rotate(90deg);
}

.announcement-progress {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding: 0 1rem;
}

.progress-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(0 0 0 / 20%);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.progress-dot:hover {
  transform: scale(1.2);
  background: rgb(0 0 0 / 40%);
}

.progress-dot.active {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  transform: scale(1.3);
  box-shadow: 0 0 12px rgb(79 70 229 / 40%);
}

.progress-dot.active::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgb(79 70 229 / 30%);
  animation: pulse-ring 2s infinite;
}

.update-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgb(16 185 129 / 8%) 0%, rgb(52 211 153 / 5%) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgb(16 185 129 / 15%);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin: 0.75rem auto;
  max-width: 900px;
  box-shadow:
    0 8px 32px rgb(16 185 129 / 8%),
    0 1px 0 rgb(255 255 255 / 10%) inset;
  animation: slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.update-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgb(16 185 129 / 10%), transparent);
  transition: left 1s ease;
}

.update-banner:hover::before {
  left: 100%;
}

.update-banner:hover {
  transform: translateY(-3px);
  box-shadow:
    0 16px 48px rgb(16 185 129 / 12%),
    0 1px 0 rgb(255 255 255 / 20%) inset;
}

.update-icon {
  font-size: 1.5rem;
  color: #10b981;
  animation: rotate-pulse 3s infinite;
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
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-color);
}

.update-version {
  font-size: 0.825rem;
  color: var(--text-color-secondary);
  font-family: 'JetBrains Mono', monospace;
}

.update-changelog {
  font-size: 0.825rem;
  color: #10b981;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.update-changelog:hover {
  opacity: 1;
  text-decoration: underline;
}

.update-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 12px rgb(16 185 129 / 20%);
}

.update-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgb(16 185 129 / 30%);
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
}

.update-btn:active {
  transform: translateY(0) scale(0.98);
}

@keyframes float-in {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }

  60% {
    opacity: 0.8;
    transform: translateY(5px) scale(1.01);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }

  60% {
    opacity: 0.8;
    transform: translateY(-5px) scale(1.01);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  25% {
    opacity: 0.7;
    transform: scale(1.1) rotate(5deg);
  }

  50% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  75% {
    opacity: 0.8;
    transform: scale(1.1) rotate(-5deg);
  }
}

@keyframes glow {
  0%,
  100% {
    text-shadow: 0 0 5px rgb(255 255 255 / 20%);
  }

  50% {
    text-shadow: 0 0 20px rgb(255 255 255 / 40%);
  }
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes rotate-pulse {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }

  25% {
    transform: rotate(90deg) scale(1.1);
  }

  50% {
    transform: rotate(180deg) scale(1);
  }

  75% {
    transform: rotate(270deg) scale(1.1);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@media (width <= 768px) {
  .footer-content {
    flex-direction: column;
    gap: 0.5rem;
  }

  .author-name {
    font-size: 1.2rem;
  }

  .announcement-banner {
    margin: 0.5rem 1rem;
    padding: 0.75rem 1rem;
  }

  .update-banner {
    margin: 0.5rem 1rem;
    padding: 0.875rem 1rem;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }

  .update-content {
    align-items: center;
  }

  .version-text {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
}

@media (width <= 480px) {
  .announcement-banner {
    flex-direction: column;
    gap: 0.75rem;
  }

  .announcement-dismiss {
    align-self: flex-end;
    margin-left: 0;
  }

  .announcement-progress {
    margin-top: 0.5rem;
  }

  .progress-dot {
    width: 10px;
    height: 10px;
  }
}

@media (prefers-color-scheme: dark) {
  .announcement-banner {
    border-color: rgb(255 255 255 / 10%);
    box-shadow:
      0 8px 32px rgb(0 0 0 / 30%),
      0 1px 0 rgb(255 255 255 / 10%) inset;
  }

  .update-banner {
    border-color: rgb(16 185 129 / 15%);
    box-shadow:
      0 8px 32px rgb(16 185 129 / 8%),
      0 1px 0 rgb(255 255 255 / 8%) inset;
  }

  .version-text {
    background: rgb(0 0 0 / 30%);
    border-color: rgb(255 255 255 / 15%);
    color: rgb(255 255 255 / 90%);
  }

  .announcement-info {
    color: #60a5fa;
  }

  .announcement-warning {
    color: #fbbf24;
  }

  .announcement-error {
    color: #f87171;
  }

  .announcement-success {
    color: #4ade80;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.announcement-dismiss:focus-visible,
.update-btn:focus-visible,
.progress-dot:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}
</style>
