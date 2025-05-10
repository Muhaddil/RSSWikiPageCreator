<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const pageData = usePageDataStore();
const { discovered, discoveredlink, planet, mode, discDate, system, platform, basename, playername, discordname } =
  storeToRefs(pageData);

const profile = ref('');

watch([discovered, discoveredlink], () => {
  if (discoveredlink.value) {
    profile.value = `{{Profile|${discoveredlink.value}}}`;
  } else if (discovered.value) {
    profile.value = `${discovered.value}`;
  } else {
    profile.value = '';
  }
});
</script>

<template>
  <div>
    | {{ playername }} || {{ discordname }} || {{ system }} || {{ planet }} || {{ basename }} || {{ platform }} ||
    {{ mode }} || {{ discDate }} || {{ profile }}
  </div>
  <div>|-</div>
</template>
