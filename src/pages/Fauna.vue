<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import faunaOutput from '@/pageSections/fauna/faunaOutput.vue';
import faunaInput from '@/pageSections/fauna/faunaInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <faunaInput />
    </template>

    <template #output>
      <faunaOutput />
    </template>
  </PageCreator>
</template>
