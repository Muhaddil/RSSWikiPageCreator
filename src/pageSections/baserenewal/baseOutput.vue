<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';

const pageData = usePageDataStore();
const { censusrenewal } = storeToRefs(pageData);
</script>

<template>
  <pre class="formatted-text">{{ censusrenewal }}</pre>
</template>

<style scoped>
.formatted-text {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
</style>
