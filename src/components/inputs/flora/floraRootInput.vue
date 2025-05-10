<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedFloraRoots } from '@/variables/flora/roots';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('floraroots');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Estructura de las raices:</label>
        <Explainer
          tooltip="Encontrado en el escaneo de flora."
          help-img="flora/roots"
          help-title="Estructura de las raices"
          >Encontrado en el escaneo de flora.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedFloraRoots"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
