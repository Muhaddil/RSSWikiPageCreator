<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { ref, watch, computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import DateSelect from '@/components/inputs/DateSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import PlanetDescriptors from '@/components/inputs/planet/PlanetDescriptors.vue';
import BiomeInput from '@/components/inputs/planet/BiomeInput.vue';
import InputTableItem from '../../components/InputTableItem.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';
// import Explainer from '@/components/Explainer.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import PlanetResourceInputs from '@/components/inputs/planet/PlanetResourceInputs.vue';
import PlanetSentinels from '@/components/inputs/planet/PlanetSentinels.vue';
import MoonInputs from '@/components/inputs/planet/MoonInputs.vue';
import PlanetWeather from '@/components/inputs/planet/PlanetWeather.vue';
import PlanetFauna from '@/components/inputs/planet/PlanetFauna.vue';
import PlanetFlora from '@/components/inputs/planet/PlanetFlora.vue';
import { mapOptions } from '@/helpers/selectMapping';
import type { SelectOption } from '@/types/selectInputOptions';
import PlanetFaunaInputs from '@/components/inputs/moon/PlanetFaunaInputs.vue';
import PlanetFloraInputs from '@/components/inputs/moon/PlanetFloraInputs.vue';
import PlanetMineralInputs from '@/components/inputs/moon/PlanetMineralInputs.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  atmosphere,
  mode,
  orgName,
  additionalInfo,
  discDate,
  Planetdescriptors,
  docBy,
  biome,
  sentinels,
  weather,
  faunaNum,
  platform,
  docDate,
  navImage,
  system,
  fauna,
  terrain,
  flora,
  researchteam2,
} = storeToRefs(pageData);

const systemplanets = ref([]);

const originalFaunaNum = ref('');

const formatNumberWithCommas = (value: string) => {
  const cleanedValue = value.replace(/[^0-9.]/g, '');

  if (!cleanedValue) return '';

  const [integerPart, decimalPart] = cleanedValue.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

const isCostValid = computed(() => /^\d*$/.test(originalFaunaNum.value));

watch(originalFaunaNum, (newValue) => {
  faunaNum.value = formatNumberWithCommas(newValue);
});

const terrainMapping = {
  Pangeano: 'Pangean',
  Continental: 'Continental',
  Semioceánico: 'Semi-Oceanic',
};

const mappedterrainMapping: SelectOption[] = mapOptions(terrainMapping);

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="planet/planetName"
    help-title="Nombre del Planeta"
    label="Nombre del Planeta:"
    tooltip="Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."
  >
    Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).
  </SanitisedTextInput>
  <SanitisedTextInput
    v-model="orgName"
    label="Nombre original antes de registrar (si está disponible):"
  />

  <SingleFileUpload
    v-model="image"
    label="Imagen principal:"
    help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
  >
    <FileUploadNotice />
  </SingleFileUpload>

  <SingleFileUpload
    v-model="navImage"
    label="Nombre de la imagen principal:"
    help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
  >
    <FileUploadNotice />
  </SingleFileUpload>

  <SanitisedTextInput
    v-model="system"
    help-img="planet/planetName"
    help-title="Nombre del Sistema"
    label="Nombre del Sistema:"
    tooltip="Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."
  >
    Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).
  </SanitisedTextInput>

  <GlyphInput v-model="glyphs" />

  <BiomeInput v-model="biome" />
  <MoonInputs v-model="systemplanets" />
  <PlanetDescriptors v-model="Planetdescriptors" />
  <SanitisedTextInput
    v-model="atmosphere"
    label="Atmósfera del planeta:"
    tooltip="Se puede encontrar en la guía de exploración."
    help-img="planet/atmosphere"
    help-title="Atmósfera del planeta"
    >Se puede encontrar en la guía de exploración.</SanitisedTextInput
  >
  <InputTableItem>
    <template #label>
      <label>Terreno del planeta:</label>
    </template>

    <template #input>
      <SelectDropdown
        v-model="terrain"
        :aria-labelledby="terrain"
        :options="mappedterrainMapping"
      />
    </template>
  </InputTableItem>
  <PlanetWeather v-model="weather" />
  <PlanetResourceInputs />
  <PlanetSentinels v-model="sentinels" />

  <PlanetFlora v-model="flora" />
  <PlanetFauna v-model="fauna" />
  <SanitisedTextInput
    v-model="originalFaunaNum"
    label="Número de Fauna:"
    help-img="planet/faunaNum"
    help-title="Número de fauna del planeta"
    :invalid="!isCostValid"
    error-message="Solo debe contener numeros"
    tooltip="Se puede encontrar en el menú de descubrimiento."
    >Se puede encontrar en el menú de descubrimiento.
  </SanitisedTextInput>

  <PlanetFaunaInputs />
  <PlanetFloraInputs />
  <PlanetMineralInputs />

  <DateSelect
    v-model="discDate"
    label="¿Cuándo se descubrió este planeta?"
  ></DateSelect>
  <DateSelect
    v-model="docDate"
    label="¿Cuándo se documentó este planeta?"
  />
  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />
  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />
  <SanitisedTextInput
    v-if="showDiscoveredLink"
    v-model="discoveredlink"
    label="Nombre en la wiki del descubridor:"
  />
  <SanitisedTextInput
    v-if="showDiscovered"
    v-model="discovered"
    label="Alias del descubridor si no tiene wiki:"
  />
  <SanitisedTextInput
    v-model="docBy"
    label="Nombre del documentador si no es el descubridor:"
  />

  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional:"
  />

  <GalleryInput />
</template>
