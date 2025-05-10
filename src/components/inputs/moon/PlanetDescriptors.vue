<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedPlanetDescriptors, mappedMoonDescriptors } from '@/variables/system/planetdescriptors';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string; isMoon?: boolean }>();

const model = defineModel<string>({ required: true });

const id = useId('planetdescriptors');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Descripción de la Luna:</label>
        <Explainer
          tooltip="Se puede encontrar en la guía de exploración."
          help-img="planet/planetDesc"
          help-title="Descripción de la Luna"
        >
          Se puede encontrar en la guía de exploración.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="isMoon ? mappedMoonDescriptors : mappedPlanetDescriptors"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
