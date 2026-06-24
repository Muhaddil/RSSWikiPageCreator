<script setup lang="ts">
import Card from 'primevue/card';
import Fluid from 'primevue/fluid';
import { usePageDataStore } from '@/stores/pageData';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const pageData = usePageDataStore();
const outputRef = ref<HTMLElement | null>(null);
let observer: MutationObserver | null = null;

onMounted(() => {
  if (outputRef.value) {
    observer = new MutationObserver(() => {
      pageData.setOutputContent(outputRef.value?.innerText || '');
    });

    observer.observe(outputRef.value, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    pageData.setOutputContent(outputRef.value.innerText || '');
  }
});

const isValid = computed(() => {
  return !!(pageData.outputContent && pageData.name && pageData.glyphs && pageData.regionData.region);
});

const currentUrl = window.location.pathname;
const isBaseRenewalPage = currentUrl.includes('baserenewal.html');
const isCensusPage = currentUrl.includes('census.html');

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <div class="grid-container">
    <Card class="galactic-card input-card">
      <template #content>
        <Fluid>
          <div class="card-content">
            <slot name="input"></slot>
          </div>
        </Fluid>
      </template>
    </Card>

    <Card
      class="galactic-card output-card"
      :class="{ 'is-disabled': !isValid && !isBaseRenewalPage && !isCensusPage }"
    >
      <template #content>
        <Fluid>
          <div
            ref="outputRef"
            class="output-content"
            :style="!isValid && !isBaseRenewalPage && !isCensusPage ? { userSelect: 'none', opacity: 0.5 } : {}"
          >
            <slot name="output"></slot>
          </div>
        </Fluid>
      </template>
    </Card>
  </div>

  <!--This is for extra content like album entry or category modules-->
  <slot></slot>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #ff1a1a 0%, #990000 100%);
  --secondary-gradient: linear-gradient(45deg, #ff1a1a 0%, #cc0000 100%);
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --background-primary: #050505;
  --background-secondary: #0a0a0a;
  --border-color: rgba(255, 26, 26, 0.15);
  --hover-effect: rgba(255, 26, 26, 0.1);
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #ff1a1a 0%, #990000 100%);
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --background-primary: #050505;
  --background-secondary: #0a0a0a;
  --border-color: rgba(255, 26, 26, 0.15);
}

.grid-container {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem;
}

.card-content {
  padding: 1.5rem;
}

.output-content {
  font-family: 'Courier New', monospace;
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.input-card:hover,
.output-card:hover {
  /* transform: translateY(-3px); */
  box-shadow: 0 0 20px var(--hover-effect);
}

.is-disabled {
  opacity: 0.6;
  filter: grayscale(0.8);
  pointer-events: none;
}

@media (width <= 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }

  .card-content {
    padding: 1rem;
  }
}
</style>
