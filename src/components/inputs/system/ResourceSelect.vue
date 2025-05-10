<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedResourcesOptions } from '@/variables/system/resources';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string; label: string }>();

const model = defineModel<string>({ required: true });

const id = useId('resourceselectsystem');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>{{ label }}</label>
        <Explainer
          tooltip="Se encuentra en el menú de descubrimiento o en el visor de análisis."
          help-img="planet/resources"
          help-title="Recursos del planeta"
        >
          Se encuentra en el menú de descubrimiento o en el visor de análisis.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedResourcesOptions"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
