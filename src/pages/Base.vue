<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import BaseOutput from '@/pageSections/base/baseOutput.vue';
import BaseInput from '@/pageSections/base/BaseInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <BaseInput />
    </template>

    <template #output>
      <BaseOutput />
    </template>
  </PageCreator>
</template>
