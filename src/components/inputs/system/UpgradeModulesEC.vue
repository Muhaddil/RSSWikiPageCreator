<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';

type Option = { english: string; spanish: string };

const model = defineModel<string[]>({ required: true });

const options: Option[] = [
  { english: 'Exocraft Boosters Upgrade', spanish: 'Mejora del módulo de aceleración de exonave' },
  { english: 'Exocraft Mining Laser Upgrade', spanish: 'Módulo de láser de exonave' },
  { english: 'Mounted Cannon Upgrade', spanish: 'Módulo de cañón de exonave' },
  { english: 'Fusion Engine Upgrade', spanish: 'Módulo de motor de exonave' },
  { english: 'Exocraft Boosters Upgrade', spanish: 'Módulo de potencia de exonave' },
  { english: 'Humboldt Drive Upgrade', spanish: 'Módulo de motor de Humboldt' },
  { english: 'Minotaur Cannon Upgrade', spanish: 'Módulo de cañón del Minotauro' },
  { english: 'Daedalus Engine Upgrade', spanish: 'Módulo de motor del Minotauro' },
  { english: 'Minotaur Laser Upgrade', spanish: 'Módulo de láser del Minotauro' },
  { english: 'Nautilon Cannon Upgrade', spanish: 'Módulo de cañón de Nautilo' },
];
</script>

<template>
  <label for="ms-cities">Comerciante de modulos de exonave Clase-S</label>
  <MultiSelect
    id="ms-cities"
    v-model="model"
    :options="options"
    optionLabel="spanish"
    optionValue="english"
    filter
    :maxSelectedLabels="3"
    selectedItemsLabel="Se han seleccionado {0} elementos"
    class="w-full"
  />
</template>
