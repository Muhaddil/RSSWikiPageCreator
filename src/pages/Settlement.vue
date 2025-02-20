<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import SettlementOutput from '@/pageSections/settlement/SettlementOutput.vue';
import SettlementInput from '@/pageSections/settlement/SettlementInput.vue';

// import { onMounted } from "vue";
// onMounted(() => {
//   window.location.href = "/RSSWikiPageCreator/indextest.html";
// });
</script>

<template>
  <PageCreator>
    <template #input>
      <SettlementInput />
    </template>

    <template #output>
      <SettlementOutput />
    </template>
  </PageCreator>
</template>
