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
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #fff;
  --background-secondary: #f8fafc;
  --border-color: rgb(99 102 241 / 15%);
  --hover-effect: rgb(99 102 241 / 10%);
  --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%);

  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --border-color: rgb(103 232 249 / 15%);
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
