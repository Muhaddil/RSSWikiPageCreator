<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import BioFrigOutput from '@/pageSections/biofrig/BioFrigOutput.vue';
import BioFrigInput from '@/pageSections/biofrig/BioFrigInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <BioFrigInput />
    </template>

    <template #output>
      <BioFrigOutput />
    </template>
  </PageCreator>
</template>
