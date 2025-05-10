<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedFloraAge } from '@/variables/flora/age';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('floraage');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Edad de la planta:</label>
        <Explainer
          tooltip="Encontrado en el escaneo de flora."
          help-img="flora/age"
          help-title="Edad de la planta"
          >Encontrado en el escaneo de flora.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedFloraAge"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
