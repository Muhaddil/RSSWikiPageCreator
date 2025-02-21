<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';

type Option = { english: string; spanish: string };

const model = defineModel<string[]>({ required: true });

const options: Option[] = [
  { english: 'Defence Systems Upgrade', spanish: 'Módulo de escudo' },
  { english: 'Life Support Upgrade', spanish: 'Módulo de soporte vital' },
  { english: 'Movement System Upgrade', spanish: 'Módulo de movimiento' },
  { english: 'Radiation Protection Module', spanish: 'Módulo de protección radiactiva' },
  { english: 'Thermal Protection Module (Cold)', spanish: 'Módulo de protección térmica (Frio)' },
  { english: 'Thermal Protection Module (Heat)', spanish: 'Módulo de protección térmica (Calor)' },
  { english: 'Toxic Protection Module', spanish: 'Módulo de protección tóxica' },
  { english: 'Underwater Protection Module', spanish: 'Módulo de protección submarina' },
];
</script>

<template>
  <label for="ms-cities">Comerciante de modulos de exotraje Clase-S</label>
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
