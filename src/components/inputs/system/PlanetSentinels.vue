<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedPlanetSentinels } from '@/variables/system/planetsentinels';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string; isMoon?: boolean }>();

const model = defineModel<string>({ required: true });

const id = useId('planetdescriptors');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Centinelas:</label>
        <Explainer
          tooltip="Se puede encontrar en el menú de descubrimiento."
          help-img="planet/sentinels"
          help-title="Nivel planetario de los centinelas"
        >
          Se puede encontrar en el menú de descubrimiento.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedPlanetSentinels"
        optionLabel="label"
        optionGroupLabel="groupLabel"
        optionGroupChildren="items"
        :reset-event="resetEvent"
        filter
      />
    </template>
  </InputTableItem>
</template>
