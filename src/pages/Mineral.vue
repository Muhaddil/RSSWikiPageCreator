<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import MineralOutput from '@/pageSections/mineral/MineralOutput.vue';
import MineralInput from '@/pageSections/mineral/MineralInput.vue';

import { onMounted } from "vue";
onMounted(() => {
  window.location.href = "/RSSWikiPageCreator/indextest.html";
});
</script>

<template>
  <PageCreator>
    <template #input>
      <MineralInput />
    </template>

    <template #output>
      <MineralOutput />
    </template>
  </PageCreator>
</template>
