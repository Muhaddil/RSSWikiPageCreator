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
  <div class="columns is-tablet is-gap-2 mx-2">
    <Card class="column is-full-mobile p-0">
      <template #content>
        <Fluid>
          <slot name="input"></slot>
        </Fluid>
      </template>
    </Card>

    <Card
      class="column is-full-mobile p-0 is-family-monospace"
      :class="{ 'is-disabled': !isValid && !isBaseRenewalPage && !isCensusPage }"
    >
      <template #content>
        <Fluid>
          <div
            ref="outputRef"
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
