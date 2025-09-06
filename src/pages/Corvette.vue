<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import corvetteInput from '@/pageSections/corvette/corvetteInput.vue';
import corvetteOutput from '@/pageSections/corvette/corvetteOutput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <corvetteInput />
    </template>

    <template #output>
      <corvetteOutput />
    </template>
  </PageCreator>
</template>
