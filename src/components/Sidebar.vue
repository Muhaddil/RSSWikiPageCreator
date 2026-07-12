<script setup lang="ts">
import { ref, watch, onMounted, computed, inject } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const logo =
  'https://raw.githubusercontent.com/Muhaddil/RSSWikiPageCreator/refs/heads/main/public/assets/images/shared/logo-white.png';

const COLLAPSE_KEY = 'sidebar_collapsed';
const isCollapsed = ref(localStorage.getItem(COLLAPSE_KEY) === 'true');
const isSimplified = inject<import('vue').Ref<boolean>>('sidebarSimplified')!;

watch(isCollapsed, (val) => {
  localStorage.setItem(COLLAPSE_KEY, String(val));
  document.documentElement.style.setProperty('--sidebar-width', val ? '60px' : '270px');
});

onMounted(() => {
  document.documentElement.style.setProperty('--sidebar-width', isCollapsed.value ? '60px' : '270px');
});

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}

const mobileOpen = ref(false);

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
}

function closeMobile() {
  mobileOpen.value = false;
}

watch(currentRoute, () => {
  mobileOpen.value = false;
});

function toggleMode() {
  isSimplified.value = !isSimplified.value;
}

const simplifiedItems = [
  { label: 'Panel', icon: 'home', route: 'home', url: '/' },
  { label: 'Tutorial', icon: 'tutorial', route: 'tutorial', url: '/tutorial' },
  { label: 'Sistemas', icon: 'system', route: 'system', url: '/system' },
  { label: 'Planetas', icon: 'planet', route: 'planet', url: '/planet' },
  { label: 'Bases', icon: 'base', route: 'base', url: '/base' },
  { label: 'Volver al Atlas', icon: 'atlas', route: 'atlas', url: 'https://nomanssky.fandom.com/wiki/Atlas' },
];

const allMenuItems = [
  { label: 'Panel', icon: 'home', route: 'home', url: '/' },
  { label: 'Sistemas', icon: 'system', route: 'system', url: '/system' },
  { label: 'Planetas', icon: 'planet', route: 'planet', url: '/planet' },
  { label: 'Lunas', icon: 'moon', route: 'moon', url: '/moon' },
  { label: 'Bases (Censo)', icon: 'base', route: 'base', url: '/base' },
  { label: 'Bases (Normal)', icon: 'base', route: 'basecensusno', url: '/basecensusno' },
  { label: 'Fauna', icon: 'fauna', route: 'fauna', url: '/fauna' },
  { label: 'Gusano de Arena', icon: 'sandworm', route: 'sandworm', url: '/sandworm' },
  { label: 'Flora', icon: 'flora', route: 'flora', url: '/flora' },
  { label: 'Minerales', icon: 'mineral', route: 'mineral', url: '/mineral' },
  { label: 'Naves', icon: 'starship', route: 'starship', url: '/starship' },
  { label: 'Multiherramientas', icon: 'multitool', route: 'multitool', url: '/multitool' },
  { label: 'Cargueros Abandonados', icon: 'derelict', route: 'derelict', url: '/derelict' },
  { label: 'Fragata Orgánica', icon: 'biofrig', route: 'biofrig', url: '/biofrig' },
  { label: 'Corbetas', icon: 'corvette', route: 'corvette', url: '/corvette' },
  { label: 'Asentamientos', icon: 'settlement', route: 'settlement', url: '/settlement' },
  { label: 'Circuitos', icon: 'racetrack', route: 'racetrack', url: '/racetrack' },
  { label: 'Censo', icon: 'census', route: 'census', url: '/census' },
  { label: 'Actualización de Base', icon: 'baserenewal', route: 'baserenewal', url: '/baserenewal' },
  { label: 'Generador de Glifos', icon: 'glyphgenerator', route: 'glyphgenerator', url: '/glyphgenerator' },
  { label: 'Preguntas Frecuentes', icon: 'faq', route: 'faq', url: '/faq' },
];

const menuItems = computed(() => (isSimplified.value ? simplifiedItems : allMenuItems));

const iconMap: Record<string, string> = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  system: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>`,
  planet: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  base: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  fauna: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/></svg>`,
  sandworm: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16c0-2-2.2-4.5-5-6-2.8 1.5-5 3.8-5 6a5 5 0 0 0 10 0Z"/><path d="M12 4c1.5 0 3 .5 3 2"/><path d="M9 4c-1.5 0-3 .5-3 2"/><circle cx="10" cy="9" r="1"/><circle cx="14" cy="9" r="1"/></svg>`,
  flora: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 .5 20 .5s-1.5 3-1 7c.3 2.8-1.5 5.5-4 6.5"/><path d="M11 20v-6"/></svg>`,
  mineral: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 16-2 6 4-8h4l-6-4-2 8"/><path d="M10 16 8 8l6-4H10L8 8"/></svg>`,
  starship: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  multitool: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  derelict: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>`,
  biofrig: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/></svg>`,
  corvette: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
  settlement: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-4V6l-4 8H6"/><path d="M20 14H10"/><path d="M14 20H6"/><path d="M6 10V6h4"/></svg>`,
  racetrack: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m17 6-2.5-2.5"/><path d="m14 8-1-1"/><path d="m7 18 2.5 2.5"/><path d="m3.5 14.5.5.5"/><path d="m20 9 .5.5"/><path d="m6.5 12.5 1 1"/><path d="m16.5 10.5 1 1"/><path d="m10 16 1.5 1.5"/></svg>`,
  census: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  baserenewal: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`,
  glyphgenerator: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  faq: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  tutorial: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  atlas: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  import: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>`,
  expand: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  collapse: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
};

function getIcon(name: string) {
  return iconMap[name] || iconMap['base'];
}

const isActive = (itemRoute: string) => {
  if (itemRoute === 'home' && (currentRoute.path === '/' || currentRoute.name === 'home')) return true;
  return currentRoute.name === itemRoute;
};

function getHref(itemRoute: string) {
  if (itemRoute === 'home') return '/';
  return `/${itemRoute}`;
}
</script>

<template>
  <button
    class="mobile-menu-toggle"
    @click="toggleMobile"
    :aria-label="mobileOpen ? 'Cerrar menú' : 'Abrir menú'"
    :aria-expanded="mobileOpen"
    aria-controls="main-sidebar"
  >
    <svg
      v-if="!mobileOpen"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line
        x1="18"
        y1="6"
        x2="6"
        y2="18"
      />
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
      />
    </svg>
  </button>

  <div
    v-if="mobileOpen"
    class="sidebar-backdrop"
    @click="closeMobile"
    aria-hidden="true"
  ></div>

  <aside
    id="main-sidebar"
    class="sidebar"
    :class="{ collapsed: isCollapsed, 'mobile-open': mobileOpen }"
  >
    <div class="sidebar-top">
      <div class="sidebar-logo">
        <img
          :src="logo"
          alt="RSS Logo"
          class="logo-img"
        />
        <span
          class="logo-text"
          v-show="!isCollapsed"
          >RSS WIKI PAGE CREATOR</span
        >
      </div>

      <button
        class="sidebar-toggle"
        @click="toggleCollapse"
        :title="isCollapsed ? 'Expandir barra lateral' : 'Contraer barra lateral'"
        :aria-label="isCollapsed ? 'Expandir barra lateral' : 'Contraer barra lateral'"
      >
        <svg
          v-if="!isCollapsed"
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
          <path d="m11 17-5-5 5-5" />
          <path d="m18 17-5-5 5-5" />
        </svg>
        <svg
          v-else
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
          <path d="m6 17 5-5-5-5" />
          <path d="m13 17 5-5-5-5" />
        </svg>
      </button>

      <nav
        class="sidebar-nav"
        aria-label="Navegación principal"
      >
        <template
          v-for="item in menuItems"
          :key="item.route"
        >
          <a
            v-if="item.url.startsWith('http')"
            :href="item.url"
            class="nav-item"
            :title="isCollapsed ? item.label : undefined"
          >
            <span
              class="nav-icon"
              v-html="getIcon(item.icon)"
            ></span>
            <span
              class="nav-label"
              v-show="!isCollapsed"
              >{{ item.label }}</span
            >
          </a>
          <router-link
            v-else
            :to="getHref(item.route)"
            class="nav-item"
            :class="{ active: isActive(item.route) }"
            :title="isCollapsed ? item.label : undefined"
          >
            <span
              class="nav-icon"
              v-html="getIcon(item.icon)"
            ></span>
            <span
              class="nav-label"
              v-show="!isCollapsed"
              >{{ item.label }}</span
            >
          </router-link>
        </template>
      </nav>
    </div>

    <div class="sidebar-bottom">
      <button
        class="mode-toggle"
        @click="toggleMode"
        :title="isSimplified ? 'Cambiar a modo completo' : 'Cambiar a modo simplificado'"
        :aria-label="isSimplified ? 'Cambiar a modo completo' : 'Cambiar a modo simplificado'"
      >
        <span
          class="nav-icon"
          v-html="isSimplified ? iconMap.expand : iconMap.collapse"
        ></span>
        <span
          class="nav-label"
          v-show="!isCollapsed"
          >{{ isSimplified ? 'Modo Completo' : 'Modo Simple' }}</span
        >
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background: #111111;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  z-index: 200;
  overflow: hidden;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-top {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  min-height: 52px;
}

.collapsed .sidebar-logo {
  justify-content: center;
  padding: 1rem 0;
}

.logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  opacity: 1;
}

.logo-text {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.35rem 0.75rem;
  padding: 0.35rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.sidebar-toggle:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.03);
}

.collapsed .sidebar-toggle {
  margin: 0.35rem auto;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
}

.sidebar-nav::-webkit-scrollbar {
  width: 3px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  transition: all 0.2s ease;
  border-left: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
}

.collapsed .nav-item {
  justify-content: center;
  padding: 0.55rem 0;
  border-left: none;
}

.nav-item:hover {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.03);
}

.nav-item.active {
  color: #ffffff;
  background: rgba(198, 40, 40, 0.15);
  border-left-color: #c62828;
}

.collapsed .nav-item.active {
  border-left: none;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

.nav-item.active .nav-icon {
  opacity: 1;
  color: #c62828;
}

.nav-label {
  white-space: nowrap;
  line-height: 1;
  overflow: hidden;
}

.sidebar-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.5rem 0;
}

.mode-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.55rem 1.25rem;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.mode-toggle:hover {
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.03);
}

.collapsed .mode-toggle {
  justify-content: center;
  padding: 0.55rem 0;
}

.sidebar-actions-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 1.25rem 0.4rem;
}

.sidebar-actions {
  display: flex;
  flex-direction: column;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}

.collapsed .action-item {
  justify-content: center;
  padding: 0.5rem 0;
}

.action-item:hover {
  color: #c62828;
  background: rgba(198, 40, 40, 0.08);
}

.action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

.action-item:hover .action-icon {
  opacity: 1;
}

.action-label {
  white-space: nowrap;
  line-height: 1;
  overflow: hidden;
}

.mobile-menu-toggle {
  display: none;
}

.sidebar-backdrop {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 300;
    width: 40px;
    height: 40px;
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: all 0.2s ease;
  }

  .mobile-menu-toggle:hover {
    border-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }

  .sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 199;
  }

  .sidebar {
    width: var(--sidebar-width);
    transform: translateX(-100%);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 200;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .logo-text,
  .nav-label,
  .action-label,
  .sidebar-actions-label {
    display: inline;
  }

  .sidebar-logo {
    justify-content: flex-start;
    padding: 1rem 1.25rem;
  }

  .nav-item {
    justify-content: flex-start;
    padding: 0.55rem 1.25rem;
  }

  .action-item {
    justify-content: flex-start;
    padding: 0.5rem 1.25rem;
  }

  .mode-toggle {
    justify-content: flex-start;
    padding: 0.55rem 1.25rem;
  }

  .sidebar-toggle {
    display: flex;
  }
}
</style>
