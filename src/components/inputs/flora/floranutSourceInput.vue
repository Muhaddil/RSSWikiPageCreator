<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedFloraNutSource } from '@/variables/flora/nutsource';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('floranutsource');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Estructura de las raices:</label>
        <Explainer
          tooltip="Encontrado en el escaneo de flora."
          help-img="flora/nutSource"
          help-title="Fuente de nutrientes"
          >Encontrado en el escaneo de flora.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedFloraNutSource"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
