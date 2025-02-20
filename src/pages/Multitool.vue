<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import MTOutput from '@/pageSections/multitool/MTOutput.vue';
import MTInput from '@/pageSections/multitool/MTInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <MTInput />
    </template>

    <template #output>
      <MTOutput />
    </template>
  </PageCreator>
</template>
