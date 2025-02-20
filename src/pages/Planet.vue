<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import PlanetOutput from '@/pageSections/planet/PlanetOutput.vue';
import PlanetInput from '@/pageSections/planet/PlanetInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
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
