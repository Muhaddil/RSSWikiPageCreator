<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import {
  mappedPlanetDescriptors,
  mappedMoonDescriptors,
  mappedGiantDescriptors,
} from '@/variables/system/planetdescriptors';
import Explainer from '../../Explainer.vue';
// import getDescriptorData from '@/datalists/planetDatalists';

defineProps<{ resetEvent?: string; isMoon?: boolean; isGiant?: boolean; biome: string }>();

const model = defineModel<string>({ required: true });

const id = useId('planetdescriptors');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Descripción del planeta:</label>
        <Explainer
          tooltip="Se puede encontrar en la guía de exploración."
          help-img="planet/planetDesc"
          help-title="Descripción del planeta"
        >
          Se puede encontrar en la guía de exploración.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="isMoon ? mappedMoonDescriptors : isGiant ? mappedGiantDescriptors : mappedPlanetDescriptors"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
