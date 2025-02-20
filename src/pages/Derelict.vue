<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import DerelictOutput from '@/pageSections/derelict/DerelictOutput.vue';
import DerelictInput from '@/pageSections/derelict/DerelictInput.vue';

import { onMounted } from "vue";
onMounted(() => {
  window.location.href = "/RSSWikiPageCreator/indextest.html";
});
</script>

<template>
  <PageCreator>
    <template #input>
      <DerelictInput />
    </template>

    <template #output>
      <DerelictOutput />
    </template>
  </PageCreator>
</template>
