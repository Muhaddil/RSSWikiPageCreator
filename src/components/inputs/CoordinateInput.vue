<script setup lang="ts">
import { ref } from 'vue';
import SanitisedTextInput from './SanitisedTextInput.vue';
import { validateCoords } from '@/helpers/inputValidation';
import { watchDebounced } from '@vueuse/core';
import { debounceDelay } from '@/variables/debounce';

const model = defineModel<string>({ required: true });

const invalid = ref(false);

watchDebounced(model, (newVal) => (invalid.value = !validateCoords(newVal)), { debounce: debounceDelay });
</script>

<template>
  <SanitisedTextInput
    v-model="model"
    :invalid
    error-message="Formato de coordenadas no válido"
    label="Coordenadas planetarias"
    placeholder="+0.00, -0.00"
    maxlength="16"
    tooltip="Lo encontrarás usando tu visor de análisis O en el tablero de tu nave."
    help-title="Coordenadas planetarias"
    help-img="shared/axes"
  >
    Lo encontrarás usando tu visor de análisis O en el tablero de tu nave.
  </SanitisedTextInput>
</template>
