<script setup lang="ts">
import InputRow from '../structure/InputRow.vue';
import { versions } from '../../variables/versions';
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';

const pageData = usePageDataStore();
const { release } = storeToRefs(pageData);
</script>

<template>
  <InputRow>
    <template #label>
      <label>Version:</label>
    </template>

    <template #input>
      <select v-model="release">
        <option
          v-for="(esVersion, enVersion) in versions"
          :value="enVersion"
        >
          {{ esVersion }}
        </option>
      </select>
    </template>
  </InputRow>
</template>
