<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import ResourceSelect from '@/components/inputs/system/ResourceSelect.vue';

const pageData = usePageDataStore();

function getResourceData() {
  const resources = {
    Copper: 'Cu',
    Cadmium: 'Cd',
    Emeril: 'Em',
    Indium: 'In',
    'Activated Copper': 'Cu+',
    'Activated Cadmium': 'Cd+',
    'Activated Emeril': 'Em+',
    'Activated Indium': 'In+',
    Ammonia: 'NH3',
    Dioxite: 'CO2',
    Paraffinium: 'Pf',
    Phosphorus: 'P',
    Pyrite: 'Py',
    Uranium: 'U',
    Silver: 'Ag',
    Gold: 'Au',
    'Magnetised Ferrite': 'Fe++',
    Sodium: 'Na',
    Cobalt: 'Co',
    Salt: 'NaCl',
    'Star Bulb': 'Sb',
    'Cactus Flesh': 'Cc',
    'Gamma Root': 'Gr',
    'Fungal Mould': 'Ml',
    'Frost Crystal': 'Fc',
    Solanium: 'So',
    Mordite: 'Mo',
    Faecium: 'Fa',
    'Ancient Bones': 'Ab',
    'Salvageable Scrap': 'Sa',
    'Rusted Metal': 'Jn',
    Basalt: 'B',
  } as const;
  return resources;
}

const planets = ref([
  {
    id: 0,
    name: '',
    image: '',
    imagelandscape: '',
    biome: '',
    descriptors: '',
    ismoon: '',
    resources: ['', '', ''],
    weather: '',
    sentinels: '',
    faunatotal: '',
    flora: '',
    fauna: '',
  },
]);

const addResource = (planetIndex: number) => {
  if (planets.value[planetIndex].resources.length < 6) {
    planets.value[planetIndex].resources.push('');
  }
};

const removeResource = (planetIndex: number, resourceIndex: number) => {
  planets.value[planetIndex].resources.splice(resourceIndex, 1);
};

const generateGeneralOutput = () => {
  const allResources = planets.value.flatMap((planet) => planet.resources).filter((resource) => resource);

  const resourceListOutput = generateResourceList(allResources);
  const chemicalSymbolsOutput = generateChemicalSymbols(allResources);

  pageData.resourceListOutput = resourceListOutput;
  pageData.chemicalSymbolsOutput = chemicalSymbolsOutput;
};

watch(
  planets,
  () => {
    generateGeneralOutput();
  },
  { deep: true }
);

function generateResourceList(resources: string[]): string {
  const uniqueResources = Array.from(new Set(resources));
  return (
    `The following resources can be found on this moon:\n` +
    uniqueResources.map((resource) => `* {{ilink|${resource}}}`).join('\n')
  );
}

function generateChemicalSymbols(resources: string[]): string {
  const resourceData = getResourceData();
  const uniqueResources = Array.from(new Set(resources));
  return uniqueResources
    .map((resource) => `[[${resourceData[resource as keyof typeof resourceData] || resource}]]`)
    .join(', ');
}
</script>

<template>
  <Panel
    class="my-4"
    header="Recursos"
    toggleable
  >
    <div
      v-for="(planet, index) in planets"
      :key="planet.id"
      class="planet-container"
    >
      <div
        v-for="(resource, resourceIndex) in planet.resources"
        :key="resourceIndex"
        class="resource-container"
      >
        <div
          id="resource"
          style="display: none"
        >
          {{ resource }}
        </div>
        <Button
          v-if="planet.resources.length > 3"
          @click="removeResource(index, resourceIndex)"
          icon="pi pi-times"
          severity="danger"
          size="small"
          class="remove-resource-button"
          aria-label="Eliminar recurso"
        />
        <ResourceSelect
          v-model="planet.resources[resourceIndex]"
          label="Nombre del recurso:"
          class="resource-select"
        />
      </div>
      <Button
        severity="danger"
        size="small"
        @click="addResource(index)"
        :disabled="planet.resources.length >= 6"
      >
        Agregar Recurso
      </Button>
    </div>
  </Panel>
</template>

<style scoped>
.planet-container {
  margin-bottom: 20px;
}

.resource-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.resource-select {
  flex: 1;
  margin-right: -10px;
}

.remove-resource-button {
  margin-right: 10px;
}
</style>
