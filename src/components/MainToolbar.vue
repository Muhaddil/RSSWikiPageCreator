<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import ThemeSwitch from './ThemeSwitch.vue';
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
  <Toolbar
    class="is-borderless is-radiusless"
    v-if="!isLinksPage()"
  >
    <template #start>
      <NavBar />
    </template>

    <template #center>
      <h1
        v-if="!isDestPage()"
        class="title is-3"
      >
        Royal Space Society Wiki Page Creator{{ pageformattedName === 'Home' ? '' : ` - ${pageformattedName}` }}
      </h1>
      <h1
        v-if="isDestPage()"
        class="title is-3"
      >
        Royal Space Society - {{ pageformattedName }}
      </h1>
    </template>

    <template #end>
      <div class="is-flex is-gap-1">
        <Tools />
        <Presets />
        <ThemeSwitch />
      </div>
    </template>
  </Toolbar>
</template>
