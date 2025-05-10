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
// import { useToast, POSITION } from 'vue-toastification';
import Button from 'primevue/button';
import PlanetSentinels from './PlanetSentinels.vue';
import PlanetFlora from './PlanetFlora.vue';
import PlanetFauna from './PlanetFauna.vue';
import { storeToRefs } from 'pinia';

const pageData = usePageDataStore();
const { planetnum, moonnum } = storeToRefs(pageData);
// const toast = useToast();

// function showError(message: string) {
//   toast.error(message, {
//     position: POSITION.BOTTOM_RIGHT,
//   });
// }

const getPlanetLabel = (isMoon: string, isGigant: string) => {
  return isMoon === 'Yes' ? 'Nombre de la luna' : isGigant === 'Yes' ? 'Nombre del gigante' : 'Nombre del planeta';
};

const getPlanetLabelTitle = (isMoon: string, isGigant: string) => {
  return isMoon === 'Yes' ? 'Luna' : isGigant === 'Yes' ? 'Gigante' : 'Planeta';
};

const isFaunaTotalValid = computed(() => planets.value.every((planet) => /^\d*$/.test(planet.faunatotal)));

interface Planet {
  id: number;
  name: string;
  image: string;
  imagelandscape: string;
  biome: string;
  descriptors: string;
  ismoon: string;
  isgigant: string;
  resources: string[];
  weather: string;
  sentinels: string;
  faunatotal: string;
  flora: string;
  fauna: string;
}

const planets = ref<Planet[]>([]);

// const addPlanet = () => {
//   if (planets.value.length < 16) {
//     planets.value.push({
//       id: planets.value.length,
//       name: '',
//       image: '',
//       biome: '',
//       descriptors: '',
//       ismoon: '',
//       isgigant: '',
//       resources: ['', '', ''],
//       weather: '',
//       sentinels: '',
//       faunatotal: '',
//       flora: '',
//       fauna: '',
//     });
//   } else {
//     showError('No puedes agregar más de 6 planetas.');
//   }
// };

// const removePlanet = (index: number) => {
//   planets.value.splice(index, 1);
// };

const addResource = (planetIndex: number) => {
  if (planets.value[planetIndex].resources.length < 6) {
    planets.value[planetIndex].resources.push('');
  }
};

const removeResource = (planetIndex: number, resourceIndex: number) => {
  planets.value[planetIndex].resources.splice(resourceIndex, 1);
};

const generateOutput = () => {
  const output = planets.value
    .map((planet) => {
      return `|-
|[[File:${planet.image || 'nmsMisc_NotAvailable.png'}|150px]]
|[[File:${planet.imagelandscape || 'nmsMisc_NotAvailable.png'}|150px]]
|[[${planet.name}]]
|{{Biome|${planet.biome}}}<hr>${planet.descriptors}
|${planet.resources.map((resource) => `[[${resource}]]`).join('<br>')}
|${planet.weather}
|${planet.sentinels}
|${planet.flora}
|${planet.fauna} (${planet.faunatotal})`;
    })
    .join('\n');
  pageData.generatedOutput = output;
};

watch(
  planets,
  () => {
    generateOutput();
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

watch(
  [planetnum, moonnum],
  ([newPlanetnum, newMoonnum]) => {
    const planetCount = Number(newPlanetnum) || 0;
    const moonCount = Number(newMoonnum) || 0;

    const currentPlanets = planets.value.filter((planet) => planet.ismoon === 'No');
    const currentMoons = planets.value.filter((planet) => planet.ismoon === 'Yes');

    const currentPlanetCount = currentPlanets.length;
    const currentMoonCount = currentMoons.length;

    if (planetCount > currentPlanetCount) {
      const planetsToAdd = planetCount - currentPlanetCount;
      for (let i = 0; i < planetsToAdd; i++) {
        planets.value.push({
          id: planets.value.length,
          name: '',
          image: '',
          imagelandscape: '',
          biome: '',
          descriptors: '',
          ismoon: 'No',
          isgigant: '',
          resources: ['', '', ''],
          weather: '',
          sentinels: '',
          faunatotal: '',
          flora: '',
          fauna: '',
        });
      }
    } else if (planetCount < currentPlanetCount) {
      const planetsToRemove = currentPlanetCount - planetCount;
      for (let i = 0; i < planetsToRemove; i++) {
        const index = planets.value.findIndex((planet) => planet.ismoon === 'No');
        if (index !== -1) planets.value.splice(index, 1);
      }
    }

    if (moonCount > currentMoonCount) {
      const moonsToAdd = moonCount - currentMoonCount;
      for (let i = 0; i < moonsToAdd; i++) {
        planets.value.push({
          id: planets.value.length,
          name: '',
          image: '',
          imagelandscape: '',
          biome: '',
          descriptors: '',
          ismoon: 'Yes',
          isgigant: '',
          resources: ['', '', ''],
          weather: '',
          sentinels: '',
          faunatotal: '',
          flora: '',
          fauna: '',
        });
      }
    } else if (moonCount < currentMoonCount) {
      const moonsToRemove = currentMoonCount - moonCount;
      for (let i = 0; i < moonsToRemove; i++) {
        const index = planets.value.findIndex((planet) => planet.ismoon === 'Yes');
        if (index !== -1) planets.value.splice(index, 1);
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <!-- <Button @click="addPlanet">Agregar Planeta</Button>
    <br />
    <br /> -->
    <div
      v-for="(planet, index) in planets"
      :key="planet.id"
    >
      <Panel
        class="my-4"
        :header="`${getPlanetLabelTitle(planet.ismoon, planet.isgigant)} ${index + 1}: ${planet.name}`"
        toggleable
      >
        <SanitisedTextInput
          v-model="planet.name"
          help-title="Nombre del planeta/luna"
          :label="getPlanetLabel(planet.ismoon, planet.isgigant)"
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

        <InputTableItem>
          <template #label>
            <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
              <label for="isgigant-checkbox">¿Es un gigante gaseoso?</label>
            </div>
          </template>
          <template #input>
            <Checkbox
              v-model="planet.isgigant"
              false-value="No"
              input-id="isgigant-checkbox"
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
          :isGiant="planet.isgigant === 'Yes'"
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

        <!-- <Button v-if="planets.length > 1" @click="removePlanet(index)">
          Eliminar Planeta
        </Button> -->
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
