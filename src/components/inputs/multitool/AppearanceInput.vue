<script setup lang="ts">
import Panel from 'primevue/panel';
import type { SelectOption } from '@/types/selectInputOptions';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import InputTableItem from '@/components/InputTableItem.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';

const pageData = usePageDataStore();
const { type, name } = storeToRefs(pageData);

const isCollapsed = ref(false);

const primaryColor = ref('');
const secondaryColor = ref('');

const primaryColorMapping: { [key: string]: string } = {
  Azul: 'blue',
  Cromado: 'chrome',
  Crema: 'cream',
  Verde: 'green',
  Gris: 'grey',
  Naranja: 'orange',
  Rosa: 'pink',
  Morado: 'purple',
  Rojo: 'red',
  Bronceado: 'tan',
  'Verde azulado': 'teal',
  Blanco: 'white',
  Amarillo: 'yellow',
};

const mappedprimaryColorMapping: SelectOption[] = Object.entries(primaryColorMapping).map(([label, value]) => ({
  label,
  value,
}));

const description = computed(() => {
  return `${name.value} is a ${primaryColor.value} ${type.value} multi-tool with ${secondaryColor.value} accents.`;
});

watchEffect(() => {
  pageData.appearance = description.value;
});
</script>

<template>
  <Panel
    v-model:collapsed="isCollapsed"
    class="my-4"
    header="Esta sección crea una oración de apariencia predefinida, no es obligatoria."
    toggleable
  >
    <template #toggleicon>
      <span :class="`pi pi-chevron-${isCollapsed ? 'down' : 'up'}`"></span>
    </template>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Color principal:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="primaryColor"
          :aria-labelledby="primaryColor"
          :options="mappedprimaryColorMapping"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Color secundario:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="secondaryColor"
          :aria-labelledby="secondaryColor"
          :options="mappedprimaryColorMapping"
        />
      </template>
    </InputTableItem>

    <!-- <div class="is-flex is-flex-direction-column is-gap-2">
      <TextareaInput v-model="appearance" label="Apariencia:" />
    </div> -->
  </Panel>
</template>

<style scoped>
.census-row :deep(.column) {
  padding-block-end: 0;
}
</style>
