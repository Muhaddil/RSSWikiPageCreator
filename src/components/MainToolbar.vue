<script setup lang="ts">
import NavBar from './NavBar.vue';
import { pageformattedName } from '@/variables/route';
import Presets from './Presets.vue';
import Tools from './Tools.vue';

const currentUrl = window.location.pathname;

function isDestPage() {
  return (
    currentUrl.includes('basesdestacadas.html') ||
    currentUrl.includes('rsslinks.html') ||
    currentUrl.includes('cronology.html')
  );
}

function isLinksPage() {
  return (
    currentUrl.includes('rsslinks.html') ||
    currentUrl.includes('feedback.html') ||
    currentUrl.includes('latestupdates.html') ||
    currentUrl.includes('wikiupdates.html') ||
    currentUrl.includes('rsssystems.html')
  );
}
</script>

<template>
  <div
    class="main-toolbar"
    v-if="!isLinksPage()"
  >
    <div class="toolbar-left">
      <NavBar />
    </div>

    <div class="toolbar-center">
      <h1
        v-if="!isDestPage()"
        class="toolbar-title"
      >
        {{ pageformattedName === 'Home' ? 'WIKI PAGE CREATOR' : pageformattedName }}
      </h1>
      <h1
        v-if="isDestPage()"
        class="toolbar-title"
      >
        {{ pageformattedName }}
      </h1>
    </div>

    <div class="toolbar-right">
      <Tools />
      <Presets />
    </div>
  </div>
</template>

<style scoped>
.main-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  padding: 0.5rem 0;
}

.toolbar-left,
.toolbar-right {
  flex: 1;
  display: flex;
  align-items: center;
}

.toolbar-right {
  justify-content: flex-end;
  gap: 0.5rem;
}

.toolbar-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.toolbar-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(0.65rem, 1.2vw, 0.85rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  white-space: nowrap;
  text-align: center;
}

@media (max-width: 900px) {
  .toolbar-center {
    display: none;
  }
}
</style>
