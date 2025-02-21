<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';
import InputTableItem from '../../InputTableItem.vue';

type Option = { english: string; spanish: string };

const model = defineModel<string[]>({ required: true });

const options: Option[] = [
  { english: 'Pilgrim', spanish: 'Peregrina' },
  { english: 'Nomad', spanish: 'Nómada' },
  { english: 'Roamer', spanish: 'Vagabundo' },
  { english: 'Colossus', spanish: 'Coloso' },
  { english: 'Nautilon', spanish: 'Nautilo' },
  { english: 'Starship', spanish: 'Nave Estelar' },
  { english: 'Roamer', spanish: 'Vagabundo' },
  { english: 'Minotaur', spanish: 'Minotauro' },
];
</script>

<!-- <template>
      <label for="exocraftTable">Adecuado para:</label>
      <MultiSelect
        id="exocraftTable"
        v-model="model"
        :options="options"
        optionLabel="spanish"
        optionValue="english"
        filter
        :maxSelectedLabels="2"
        selectedItemsLabel="Se han seleccionado {0} elementos"
        class="w-full"
      />
</template> -->

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label for="exocraftTable">Adecuado para:</label>
      </div>
    </template>

    <template #input>
      <MultiSelect
        id="exocraftTable"
        v-model="model"
        :options="options"
        optionLabel="spanish"
        optionValue="english"
        filter
        :maxSelectedLabels="2"
        selectedItemsLabel="Se han seleccionado {0} elementos"
        class="w-full"
      />
    </template>
  </InputTableItem>
</template>
