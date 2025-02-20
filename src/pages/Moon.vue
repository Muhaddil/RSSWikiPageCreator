<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import PlanetOutput from '@/pageSections/moon/PlanetOutput.vue';
import PlanetInput from '@/pageSections/moon/PlanetInput.vue';

import { onMounted } from "vue";
onMounted(() => {
  window.location.href = "/RSSWikiPageCreator/indextest.html";
});
</script>

<template>
  <PageCreator>
    <template #input>
      <PlanetInput />
    </template>

    <template #output>
      <PlanetOutput />
    </template>
  </PageCreator>
</template>
