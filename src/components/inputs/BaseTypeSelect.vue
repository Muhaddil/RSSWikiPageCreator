<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '.././InputTableItem.vue';
import SelectDropdown from './SelectDropdown.vue';
import { mappedModeOptions } from '@/variables/base/basetypes';
import Explainer from '.././Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('hemisphere');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Tipo de la base</label>
        <Explainer
          tooltip="Tipo y propósito de la base"
          help-title="Tipo y propósito de la base"
        >
          <div class="dialog-center">
            <ul class="dialog-list">
              <li>Artístico</li>
              <li>Embajada</li>
              <li>Granja</li>
              <li>Cuartel General</li>
              <li>Industrial</li>
              <li>Memorial</li>
              <li>Residencial</li>
            </ul>
          </div>
        </Explainer>
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
