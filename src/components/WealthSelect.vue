<script setup lang="ts">
import SelectDropdown from './inputs/SelectDropdown.vue';
import { mappedWealthOptions } from '@/variables/wealth';
import InputTableItem from './InputTableItem.vue';
import { useId } from '@/helpers/id';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('wealth-');
</script>

<template>
  <InputTableItem>
    <template #label>
      <label :id>Riqueza del sistema</label>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedWealthOptions"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
