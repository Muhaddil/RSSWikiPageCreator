<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import SanitisedTextInput from '../SanitisedTextInput.vue';
import Panel from 'primevue/panel';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import BiomeInput from '@/components/inputs/system/BiomeInput.vue';
import PlanetDescriptors from '@/components/inputs/system/PlanetDescriptors.vue';
import PlanetWeather from '@/components/inputs/system/PlanetWeather.vue';
import ResourceSelect from '@/components/inputs/system/ResourceSelect.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import Checkbox from 'primevue/checkbox';
import InputTableItem from '../../InputTableItem.vue';
import Button from 'primevue/button';
import PlanetSentinels from './PlanetSentinels.vue';
import PlanetFlora from './PlanetFlora.vue';
import PlanetFauna from './PlanetFauna.vue';
import { storeToRefs } from 'pinia';

interface Planet {
  id: number;
  name: string;
  image: string;
  imagelandscape: string;
  biome: string;
  descriptors: string;
  ismoon: string;
  resources: string[];
  weather: string;
  sentinels: string;
  faunatotal: string;
  flora: string;
  fauna: string;
}

const pageData = usePageDataStore();
const { planetnum, moonnum } = storeToRefs(pageData);

const planets = ref<Planet[]>([]);

// Optimización de la lógica de generación de planetas y lunas
const updatePlanetsAndMoons = () => {
  const planetNum = Number(planetnum.value);
  const moonNum = Number(moonnum.value);

  // Solo realizamos cambios si los números han cambiado
  const currentPlanetCount = planets.value.filter((p) => p.ismoon === 'No').length;
  const currentMoonCount = planets.value.filter((p) => p.ismoon === 'Yes').length;

  let changesMade = false;

  if (planetNum !== currentPlanetCount) {
    const newPlanets = Array.from({ length: planetNum - currentPlanetCount }, (_, index) => ({
      id: planets.value.length + index,
      name: '',
      image: '',
      imagelandscape: '',
      biome: '',
      descriptors: '',
      ismoon: 'No',
      resources: ['', '', ''],
      weather: '',
      sentinels: '',
      faunatotal: '',
      flora: '',
      fauna: '',
    }));
    planets.value.push(...newPlanets);
    changesMade = true;
  }

  if (moonNum !== currentMoonCount) {
    const newMoons = Array.from({ length: moonNum - currentMoonCount }, (_, index) => ({
      id: planets.value.length + index,
      name: '',
      image: '',
      imagelandscape: '',
      biome: '',
      descriptors: '',
      ismoon: 'Yes',
      resources: ['', '', ''],
      weather: '',
      sentinels: '',
      faunatotal: '',
      flora: '',
      fauna: '',
    }));
    planets.value.push(...newMoons);
    changesMade = true;
  }

  return changesMade;
};

// Optimización de la generación de salida: actualizar solo cuando haya cambios significativos
const generateOutput = () => {
  const output = planets.value
    .map((planet) => {
      return `|-
|[[File:${planet.image || 'nmsMisc_NotAvailable.png'}|150px]]
|[[File:${planet.imagelandscape || 'nmsMisc_NotAvailable.png'}|150px]]
|[[${planet.name}]]
|{{Biome|${planet.biome}}}<hr>${planet.descriptors}
|${planet.resources.map((resource: string) => `[[${resource}]]`).join('<br>')}
|${planet.weather}
|${planet.sentinels}
|${planet.flora}
|${planet.fauna} (${planet.faunatotal})`;
    })
    .join('\n');

  // Solo actualizamos la salida si ha cambiado
  if (pageData.generatedOutput !== output) {
    pageData.generatedOutput = output;
  }
};

// Mejorar el rendimiento de `watch`: solo se activa cuando hay cambios relevantes
watch(
  [planetnum, moonnum],
  () => {
    if (updatePlanetsAndMoons()) {
      generateOutput();
    }
  },
  { immediate: true }
);

const getPlanetLabel = (isMoon: string) => {
  return isMoon === 'Yes' ? 'Nombre de la luna' : 'Nombre del planeta';
};

const getPlanetLabelTitle = (isMoon: string) => {
  return isMoon === 'Yes' ? 'Luna' : 'Planeta';
};

const isFaunaTotalValid = computed(() => planets.value.every((planet) => /^\d*$/.test(planet.faunatotal)));

// Funciones para gestionar recursos de planetas
const addResource = (planetIndex: number) => {
  if (planets.value[planetIndex].resources.length < 6) {
    planets.value[planetIndex].resources.push('');
  }
};

const removeResource = (planetIndex: number, resourceIndex: number) => {
  planets.value[planetIndex].resources.splice(resourceIndex, 1);
};
</script>

<template>
  <div>
    <div
      v-for="(planet, index) in planets"
      :key="planet.id"
    >
      <Panel
        class="my-4"
        :header="`${getPlanetLabelTitle(planet.ismoon)} ${index + 1}: ${planet.name}`"
        toggleable
      >
        <SanitisedTextInput
          v-model="planet.name"
          help-title="Nombre del planeta/luna"
          :label="getPlanetLabel(planet.ismoon)"
          helpImg="planet/planetName"
          tooltip="Se puede encontrar en el menú de descubrimiento"
          >Se puede encontrar en el menú de descubrimiento.<br />Introduzca exactamente como se ve en el juego. Cuidado
          con 0 (cero) y O (o).
        </SanitisedTextInput>

        <SingleFileUpload
          v-model="planet.image"
          label="Nombre del archivo del planeta:"
          help-title="Subida de Archivo"
          tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
        >
          <FileUploadNotice />
        </SingleFileUpload>

        <SingleFileUpload
          v-model="planet.imagelandscape"
          label="Nombre del archivo de paisaje:"
          help-title="Subida de Archivo"
          tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
        >
          <FileUploadNotice />
        </SingleFileUpload>

        <InputTableItem>
          <template #label>
            <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
              <label for="ismoon-checkbox">¿Es una luna?</label>
            </div>
          </template>
          <template #input>
            <Checkbox
              v-model="planet.ismoon"
              false-value="No"
              input-id="ismoon-checkbox"
              true-value="Yes"
              binary
            />
          </template>
        </InputTableItem>

        <BiomeInput v-model="planet.biome" />
        <PlanetDescriptors
          :biome="planet.biome"
          v-model="planet.descriptors"
          :isMoon="planet.ismoon === 'Yes'"
        />

        <Panel
          class="my-4"
          header="Recursos"
          toggleable
        >
          <div
            v-for="(resource, resourceIndex) in planet.resources"
            :key="resourceIndex"
            class="resource-container"
          >
            <Button
              v-if="planet.resources.length > 3"
              @click="removeResource(index, resourceIndex)"
              icon="pi pi-times"
              class="remove-resource-button"
              aria-label="Eliminar recurso"
            />
            <ResourceSelect
              v-model="planet.resources[resourceIndex]"
              label="Nombre del recurso:"
              class="resource-select"
            />

            <div
              id="resource"
              style="display: none"
            >
              {{ resource }}
            </div>
          </div>
          <Button
            @click="addResource(index)"
            :disabled="planet.resources.length >= 6"
            >Agregar Recurso</Button
          >
        </Panel>

        <br />
        <PlanetWeather v-model="planet.weather" />
        <PlanetSentinels v-model="planet.sentinels" />
        <PlanetFlora v-model="planet.flora" />
        <PlanetFauna v-model="planet.fauna" />

        <SanitisedTextInput
          v-model="planet.faunatotal"
          help-title="Numero de fauna"
          label="Numero de fauna"
          helpImg="planet/faunaNum"
          maxlength="2"
          :invalid="!isFaunaTotalValid"
          tooltip="Se puede encontrar en el menú de descubrimiento"
          error-message="Solo numeros"
          >Se puede encontrar en el menú de descubrimiento.
        </SanitisedTextInput>
      </Panel>
    </div>
  </div>
</template>

<style scoped>
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
