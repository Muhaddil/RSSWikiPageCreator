<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';

type Option = { english: string; spanish: string };

const model = defineModel<string[]>({ required: true });

const options: Option[] = [
  { english: 'Analysis Visor Upgrade', spanish: 'Módulo de escáner' },
  { english: 'Blaze Javelin Upgrade', spanish: 'Módulo de jabalina ígnea' },
  { english: 'Boltcaster Upgrade', spanish: 'Módulo de lanzarrayos' },
  { english: 'Geology Cannon Upgrade', spanish: 'Módulo de cañón geológico' },
  { english: 'Mining Beam Upgrade', spanish: 'Módulo de láser de extracción' },
  { english: 'Neutron Cannon Upgrade', spanish: 'Módulo de cañón de neutrones' },
  { english: 'Plasma Launcher Upgrade', spanish: 'Módulo de lanzador de plasma' },
  { english: 'Pulse Spitter Upgrade', spanish: 'Módulo de lanzador de pulso' },
  { english: 'Scatter Blaster Upgrade', spanish: 'Módulo de cañón de dispersión' },
];
</script>

<template>
  <label for="ms-cities">Mejoras de multiherramienta Clase-S</label>
  <MultiSelect
    id="ms-cities"
    v-model="model"
    :options="options"
    optionLabel="spanish"
    optionValue="english"
    filter
    :maxSelectedLabels="2"
    selectedItemsLabel="Se han seleccionado {0} elementos"
    class="w-full"
  />
</template>
