<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedModeOptions } from '@/variables/fauna/hemispheres';
import Explainer from '..//../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('hemisphere');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Hemisferio:</label>
        <Explainer
          tooltip="Encontrado en el menú de descubrimiento de criaturas. Si no se proporciona ningún hemisferio, deje la entrada vacía."
        >
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
