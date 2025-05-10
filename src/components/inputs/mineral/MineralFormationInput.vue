<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedMineralFormation } from '@/variables/mineral/mineralFormation';
import Explainer from '@/components/Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('biomeinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Proceso de formación:</label>
        <Explainer
          tooltip="Encontrado en el escaneo de minerales"
          help-img="mineral/formation"
          help-title="Proceso de formación"
          >Encontrado en el escaneo de minerales.</Explainer
        >
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedMineralFormation"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
