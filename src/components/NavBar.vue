<script setup lang="ts">
import { ref, onMounted } from 'vue';

const sandwormLink = ref('');
const faunaLink = ref('');
const planetLink = ref('');
const moonLink = ref('');
const isIndexPage = ref('');

const isVercel = ref(false);

onMounted(() => {
  const currentUrl = window.location.href;

  if (currentUrl.includes('.html')) {
    isIndexPage.value = 'something';
  }

  if (currentUrl.includes('.vercel.app')) {
    isVercel.value = true;
  }

  if (currentUrl.includes('/fauna')) {
    sandwormLink.value = '/sandworm';
  }

  if (currentUrl.includes('/sandworm')) {
    faunaLink.value = '/fauna';
  }

  if (currentUrl.includes('/planet')) {
    moonLink.value = '/moon';
  }

  if (currentUrl.includes('/moon')) {
    planetLink.value = '/planet';
  }
});
</script>

<template>
  <nav class="nav-bar">
    <a
      v-if="!isIndexPage"
      href="https://muhaddil.github.io/"
      target="_blank"
      class="nav-link"
    >
      <span class="nav-icon">&#9664;</span>
      <span class="nav-text">OTRAS PÁGINAS</span>
    </a>
    <a
      v-if="!isIndexPage"
      href="/rsslinks"
      class="nav-link"
    >
      <span class="nav-text">PORTAL</span>
      <span class="nav-icon">&#9654;</span>
    </a>
    <a
      v-if="isIndexPage"
      :href="isVercel ? '/' : '/RSSWikiPageCreator/'"
      class="nav-link"
    >
      <span class="nav-icon">&#9664;</span>
      <span class="nav-text">MENU PRINCIPAL</span>
    </a>

    <a
      v-if="sandwormLink"
      :href="sandwormLink"
      class="nav-link"
    >
      <span class="nav-text">GUSANO DE ARENA</span>
      <span class="nav-icon">&#9654;</span>
    </a>
    <a
      v-if="faunaLink"
      :href="faunaLink"
      class="nav-link"
    >
      <span class="nav-text">FAUNA</span>
      <span class="nav-icon">&#9654;</span>
    </a>
    <a
      v-if="moonLink"
      :href="moonLink"
      class="nav-link"
    >
      <span class="nav-text">LUNAS</span>
      <span class="nav-icon">&#9654;</span>
    </a>
    <a
      v-if="planetLink"
      :href="planetLink"
      class="nav-link"
    >
      <span class="nav-text">PLANETAS</span>
      <span class="nav-icon">&#9654;</span>
    </a>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.65rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Orbitron', monospace;
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(255, 26, 26, 0.1);
  border-color: rgba(255, 26, 26, 0.5);
  color: #ff1a1a;
  text-shadow: 0 0 5px rgba(255, 26, 26, 0.3);
}

.nav-icon {
  font-size: 0.5rem;
  line-height: 1;
}

.nav-text {
  line-height: 1;
}

@media (max-width: 600px) {
  .nav-bar {
    gap: 0.15rem;
  }

  .nav-link {
    padding: 0.25rem 0.4rem;
    font-size: 0.5rem;
  }
}
</style>
