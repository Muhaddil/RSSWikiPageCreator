<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedModeOptions } from '@/variables/fauna/ecosystems';
import Explainer from '..//../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('ecosystem');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Ecosistema:</label>
        <Explainer tooltip="Seleccione un ecosistema para filtrar los géneros de criaturas."> </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedModeOptions"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
