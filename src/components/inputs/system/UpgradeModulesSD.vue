<script setup lang="ts">
import MultiSelect from 'primevue/multiselect';

type Option = { english: string; spanish: string };

const model = defineModel<string[]>({ required: true });

const options: Option[] = [
  { english: 'Nothing', spanish: 'Nada' },
  { english: 'Suspicious Launch Thrusters Module', spanish: 'Módulo sospechoso de propulsores de lanzamiento' },
  { english: 'Suspicious Mining Beam Module', spanish: 'Módulo de láser de extracción sospechoso' },
  { english: 'Suspicious Scanner Module', spanish: 'Módulo de escáner sospechoso' },
  { english: 'Suspicious Life Support Module', spanish: 'Módulo de soporte vital sospechoso' },
  { english: 'Suspicious Boltcaster Module', spanish: 'Módulo de lanzarrayos sospechoso' },
  { english: 'Suspicious Hazard Protection Module', spanish: 'Módulo de protección contra peligros' },
  { english: 'Suspicious Movement Module', spanish: 'Módulo de movimiento sospechoso' },
  { english: 'Suspicious Shield Module', spanish: 'Módulo de escudo sospechoso' },
  { english: 'Suspicious Hyperdrive Module', spanish: 'Módulo de hiperturbo sospechoso' },
  { english: 'Suspicious Pulse Engine Module', spanish: 'Módulo de motor de pulso sospechoso' },
  { english: 'Suspicious Starship Shield Module', spanish: 'Módulo de escudo de la nave sospechoso' },
  { english: 'Suspicious Cyclotron Module', spanish: 'Módulo de ciclotrones sospechoso' },
  { english: 'Suspicious Infra-Knife Module', spanish: 'Módulo de infracuchillo sospechoso' },
  { english: 'Suspicious Positron Module', spanish: 'Módulo de positrones sospechoso' },
  { english: 'Suspicious Photon Cannon Module', spanish: 'Módulo de cañón de fotones sospechoso' },
  { english: 'Suspicious Pulse Spitter Module', spanish: 'Módulo de lanzador de pulso sospechoso' },
  { english: 'Suspicious Scatter Blaster Module', spanish: 'Módulo de cañón de dispersión sospechoso' },
  { english: 'Suspicious Blaze Javelin Module', spanish: 'Módulo de jabalina ígnea sospechoso' },
  { english: 'Suspicious Geology Cannon Module', spanish: 'Módulo de cañón geológico sospechoso' },
  { english: 'Suspicious Plasma Launcher Module', spanish: 'Módulo de lanzador de plasma sospechoso' },
  { english: 'Suspicious Neutron Cannon Module', spanish: 'Módulo de cañón de neutrones sospechoso' },
  { english: 'Suspicious Phase Beam Module', spanish: 'Módulo de rayo de fase sospechoso' },
];
</script>

<template>
  <label for="ms-cities">Mejoras del chatarrero Clase-X</label>
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
