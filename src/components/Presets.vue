<script setup lang="ts">
import Button from 'primevue/button';
import { nextTick, ref, watch } from 'vue';
import { defaultValuesKey } from '@/variables/localStorageKeys';
import { mappedWealthOptions } from '@/variables/wealth';
import Fluid from 'primevue/fluid';
import GlyphInput from './inputs/GlyphInput.vue';
import WealthSelect from './WealthSelect.vue';
import PlatformSelect from './inputs/PlatformSelect.vue';
import DialogWrapper from './DialogWrapper.vue';
import SanitisedTextInput from './inputs/SanitisedTextInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { syncRefs, useCloned } from '@vueuse/core';
import { emitGlobalEvent } from '@/helpers/event';
import { defaultData } from '@/variables/preset';

const isOpen = ref(false);

// I spent hours trying to figure out how to get this working. Now it works. Don't touch it.
const pageData = usePageDataStore();
const { presetData: storedPresetData } = storeToRefs(pageData);

const { cloned: clonedPresetData, sync } = useCloned(storedPresetData);

const presetData = ref(clonedPresetData.value);

syncRefs(clonedPresetData, presetData);

watch(isOpen, sync);

const resetEvent = 'preset-reset';

function storeData() {
  const jsonString = JSON.stringify(presetData.value);
  localStorage.setItem(defaultValuesKey, jsonString);
  pageData.$patch({ presetData: presetData.value });
  hideDialog();
}

function restoreDefaults() {
  // This must be Object.assign(), it cannot be `presetData.value = structuredClone(defaultData)`. I tested it. Believe me.
  Object.assign(presetData.value, structuredClone(defaultData));
  nextTick(() => emitGlobalEvent(resetEvent));
}

function hideDialog() {
  isOpen.value = false;
}
</script>

<template>
  <Button
    aria-label="Predeterminados"
    icon="pi pi-sliders-h"
    title="Valores predeterminados globales"
    @click="isOpen = true"
  />

  <DialogWrapper
    v-model="isOpen"
    :closable="false"
    pt:footer:class="is-flex-wrap-wrap is-justify-content-center is-gap-1"
  >
    <template #header>
      <h2 class="title is-4 has-text-centered mb-0 full-width">Valores de precarga globales</h2>
    </template>

    <Fluid class="mt-5">
      <SanitisedTextInput
        v-if="!presetData.discovered"
        v-model="presetData.discoveredlink"
        :initial-value="presetData.discoveredlink"
        :reset-event
        label="Nombre en el wiki del descubridor"
      />
      <SanitisedTextInput
        v-if="!presetData.discoveredlink"
        v-model="presetData.discovered"
        :initial-value="presetData.discovered"
        :reset-event
        label="Alias del descubridor si no hay wiki"
      />
      <SanitisedTextInput
        v-model="presetData.documenterName"
        :initial-value="presetData.documenterName"
        :reset-event
        label="Alias del documentador si no es descubridor"
      />
      <SanitisedTextInput
        v-model="presetData.system"
        :initial-value="presetData.system"
        :reset-event
        label="Nombre del sistema"
      />
      <SanitisedTextInput
        v-model="presetData.planet"
        :initial-value="presetData.planet"
        :reset-event
        label="Nombre del planeta"
      />
      <SanitisedTextInput
        v-model="presetData.moon"
        :initial-value="presetData.moon"
        :reset-event
        label="Nombre de la luna"
      />
      <PlatformSelect
        v-model="presetData.platform"
        :reset-event
      />

      <SanitisedTextInput
        v-model="presetData.researchteam2"
        label="Departamento: (Opcional)"
      />

      <WealthSelect
        v-model="presetData.wealth"
        :options="mappedWealthOptions"
        :reset-event
      />

      <!--Ese no-explain es necesario, de lo contrario causaría un error con la lógica de prevención de cambios en el diseño en el DialogWrapper-->
      <GlyphInput
        v-model="presetData.glyphs"
        no-explain
      />
    </Fluid>

    <template #footer>
      <Button
        severity="success"
        label="Establecer"
        @click="storeData"
      />
      <Button
        severity="danger"
        label="Cancelar"
        @click="hideDialog"
      />
      <Button
        severity="warn"
        label="Restaurar predeterminados"
        @click="restoreDefaults"
      />
    </template>
  </DialogWrapper>
</template>
