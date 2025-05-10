<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedPlanetWeather } from '@/variables/system/planetweather';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string; isMoon?: boolean }>();

const model = defineModel<string>({ required: true });

const id = useId('planetweather');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Clima del planeta:</label>
        <Explainer
          tooltip="Se puede encontrar en el menú de descubrimiento."
          help-img="planet/weather"
          help-title="El tiempo del planeta"
        >
          Se puede encontrar en el menú de descubrimiento.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedPlanetWeather"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
