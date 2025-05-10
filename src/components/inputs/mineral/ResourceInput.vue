<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedMineralResources } from '@/variables/mineral/resources';
import Explainer from '..//../Explainer.vue';
import { usePageDataStore } from '../../../stores/pageData';
import { storeToRefs } from 'pinia';

defineProps<{ resetEvent?: string; label: string; index: number }>();

const pageData = usePageDataStore();
const { elements } = storeToRefs(pageData);

const id = useId('resourcesMineral');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id="id">{{ label }}</label>
        <Explainer
          :tooltip="`Encontrado en el escaneo de mineral. Dejar vacío si no está en la lista.`"
          :help-img="`mineral/element${index}`"
          :help-title="`${label}`"
        >
          Encontrado en el escaneo de mineral. Dejar vacío si no está en la lista.</Explainer
        >
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="elements[index]"
        :aria-labelledby="id"
        :options="mappedMineralResources"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
