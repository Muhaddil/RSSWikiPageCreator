<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import RacetrackOutput from '@/pageSections/racetrack/racetrackOutput.vue';
import RacetrackInput from '@/pageSections/racetrack/racetrackInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <RacetrackInput />
    </template>

    <template #output>
      <RacetrackOutput />
    </template>
  </PageCreator>
</template>
