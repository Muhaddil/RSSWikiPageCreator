<script setup lang="ts">
import  MultiSelect from 'primevue/multiselect';

type Option = { english: string; spanish: string };

const model = defineModel<string[]>({ required: true });

const options: Option[] = [
    { english: 'Cyclotron Ballista Upgrade', spanish: 'Módulo de ciclotrones' },
    { english: 'Deflector Shield Upgrade', spanish: 'Módulo de escudo de la nave' },
    { english: 'Hyperdrive Upgrade', spanish: 'Módulo de hiperturbo' },
    { english: 'Infra-Knife Accelerator Upgrade', spanish: 'Módulo de infracuchillo' },
    { english: 'Launch Thruster Upgrade', spanish: 'Módulo de propulsores de lanzamiento' },
    { english: 'Phase Beam Upgrade', spanish: 'Módulo de rayo de fase' },
    { english: 'Photon Cannon Upgrade', spanish: 'Módulo de cañón de fotones' },
    { english: 'Positron Ejector Upgrade', spanish: 'Módulo de positrones' },
    { english: 'Pulse Engine Upgrade', spanish: 'Módulo de motor de pulso' },
    { english: 'Reactor Core', spanish: 'Reactor' }
  ];
</script>

<template>
      <label for="ms-cities">Comerciante de modulos de nave Clase-S</label>
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
