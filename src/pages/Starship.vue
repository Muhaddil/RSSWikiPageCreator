<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import StarshipOutput from '@/pageSections/starship/StarshipOutput.vue';
import StarshipInput from '@/pageSections/starship/StarshipInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <StarshipInput />
    </template>

    <template #output>
      <StarshipOutput />
    </template>
  </PageCreator>
</template>
