<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedPlanetFauna } from '@/variables/system/planetfauna';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string; isMoon?: boolean }>();

const model = defineModel<string>({ required: true });

const id = useId('planetdescriptors');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Fauna:</label>
        <Explainer
          tooltip="Se puede encontrar en el menú de descubrimiento."
          help-img="planet/fauna"
          help-title="Nivel de fauna de la Luna"
        >
          Se puede encontrar en el menú de descubrimiento.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedPlanetFauna"
        :reset-event="resetEvent"
      />
    </template>
  </InputTableItem>
</template>
