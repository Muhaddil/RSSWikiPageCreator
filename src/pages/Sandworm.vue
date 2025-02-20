<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import SandwormOutput from '@/pageSections/sandworm/SandwormOutput.vue';
import SandwormInput from '@/pageSections/sandworm/SandwormInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <SandwormInput />
    </template>

    <template #output>
      <SandwormOutput />
    </template>
  </PageCreator>
</template>
