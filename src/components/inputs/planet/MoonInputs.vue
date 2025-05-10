<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import SanitisedTextInput from '../SanitisedTextInput.vue';
import { useToast, POSITION } from 'vue-toastification';
import Button from 'primevue/button';

const pageData = usePageDataStore();
const toast = useToast();

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
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

const addPlanet = () => {
  if (planets.value.length < 2) {
    planets.value.push({
      id: planets.value.length,
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
    });
  } else {
    showError('No puedes agregar más de 2 lunas.');
  }
};

const removePlanet = (index: number) => {
  planets.value.splice(index, 1);
};

const generateOutput = (delimiter = ', ') => {
  const output = planets.value.map((planet) => `[[${planet.name}]]`).join(delimiter);
  pageData.generatedOutput = output;
};

watch(
  planets,
  () => {
    generateOutput(', ');
  },
  { deep: true }
);

planets.value.forEach((planet) => {
  watch(
    () => planet.ismoon,
    (newValue) => {
      if (newValue === 'No') {
        planet.descriptors = '';
      } else {
        planet.descriptors = '';
      }
    }
  );
});
</script>

<template>
  <div>
    <Button
      @click="addPlanet"
      v-if="planets.length < 2"
      >Agregar Luna</Button
    >
    <br v-if="planets.length < 2" />
    <br v-if="planets.length < 2" />
    <div
      v-for="(planet, index) in planets"
      :key="planet.id"
    >
      <div class="is-flex is-justify-content is-align-items-center full-width">
        <Button
          @click="removePlanet(index)"
          style="margin-right: 10px; width: 30px; height: 30px; padding: 0"
        >
          X
        </Button>
        <SanitisedTextInput
          v-model="planet.name"
          help-title="Nombre de la luna"
          label="Nombre de la Luna"
          helpImg="planet/planetName"
          tooltip="Se puede encontrar en el menú de descubrimiento"
          class="full-width"
          >Se puede encontrar en el menú de descubrimiento.<br />Introduzca exactamente como se ve en el juego. Cuidado
          con 0 (cero) y O (o).
        </SanitisedTextInput>
      </div>
    </div>
  </div>
  <br v-if="planets.length > 2" />
</template>

<style scoped>
.full-width {
  width: 100%;
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
