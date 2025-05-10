<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedPlanetSentinels } from '@/variables/system/planetsentinels';
import Explainer from '../../Explainer.vue';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

defineProps<{ resetEvent?: string; isMoon?: boolean }>();
const model = defineModel<string>({ required: true });
const id = useId('planetdescriptors');

const pageData = usePageDataStore();
const { sentinelInfo, sentinels } = storeToRefs(pageData);

const groupToFrase: Record<string, string> = {
  Bajo: `[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels don't present an immediate threat.`,
  Alto: `[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.`,
  Agresivo: `[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.`,
  Corruptos: `[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.`,
};

watch(model, (newValue) => {
  const group = mappedPlanetSentinels.find((group) => group.items.some((item) => item.value === newValue))?.groupLabel;

  if (group && groupToFrase[group]) {
    sentinelInfo.value = groupToFrase[group].replace('{sentinels}', sentinels.value);
  } else {
    sentinelInfo.value = '';
  }
});
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Nivel centinela de la Luna:</label>
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
