<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import SystemOutput from '@/pageSections/system/SystemOutput.vue';
import SystemInput from '@/pageSections/system/SystemInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <SystemInput />
    </template>

    <template #output>
      <SystemOutput />
    </template>
  </PageCreator>
</template>
