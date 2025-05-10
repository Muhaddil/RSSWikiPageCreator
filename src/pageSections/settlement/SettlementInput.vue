<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import CoordinateInput from '@/components/inputs/CoordinateInput.vue';
import ClassSelect from '@/components/inputs/ClassSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import SystemRace from '@/components/inputs/settlement/SystemRace.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  faction,
  system,
  planet,
  moon,
  axes,
  platform,
  mode,
  docBy,
  populationammount,
  settlementproduction,
  royalclass,
  additionalInfo,
} = storeToRefs(pageData);

const isPopulationAmmountValid = computed(() => {
  return /^\d*$/.test(populationammount.value);
});

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="settlement/settlementName"
    help-title="Nombre del Asentamiento"
    label="Nombre"
    tooltip="Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o)."
  >
    Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
  </SanitisedTextInput>
  <SingleFileUpload
    v-model="image"
    label="Imagen principal"
    help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para completar automáticamente el nombre de la imagen."
  >
    <FileUploadNotice />
  </SingleFileUpload>
  <SanitisedTextInput
    v-model="system"
    label="Nombre del Sistema"
  />
  <SanitisedTextInput
    v-model="planet"
    label="Nombre del Planeta"
    tooltip="Nombre del Planeta O el planeta rodeado por la luna donde se puede encontrar el asentamiento."
  />
  <SanitisedTextInput
    v-model="moon"
    label="Nombre de la Luna"
    tooltip="Si asentamiento está en una luna. Déjalo en blanco si la base está en un planeta."
  />
  <CoordinateInput v-model="axes" />
  <GlyphInput v-model="glyphs" />
  <SystemRace v-model="faction" />
  <ClassSelect v-model="royalclass" />
  <!-- <BaseTypeSelect v-model="type" /> -->
  <!-- <SanitisedTextInput
    v-model="type"
    label="Tipo de la base"
    tooltip="Tipo y propósito de la base."
    help-title="Tipo de Base"
  >
    <div class="dialog-center">
      <ul class="dialog-list">
        <li>Artístico</li>
        <li>Embajada</li>
        <li>Granja</li>
        <li>Cuartel General</li>
        <li>Industrial</li>
        <li>Memorial</li>
        <li>Residencial</li>
      </ul>
    </div>
  </SanitisedTextInput> -->

  <SanitisedTextInput
    v-model="populationammount"
    tooltip="Cantidad de población del asentamiento"
    label="Cantidad de población del asentamiento"
    help-img="settlement/populationAmount"
    help-title="Habitantes"
    :invalid="!isPopulationAmmountValid"
    error-message="Solo numeros"
    maxlength="3"
    >La cantidad de población del asentamiento.</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="settlementproduction"
    tooltip="El producto que produce el asentamiento"
    label="Producción"
    help-img="settlement/settlementProduction"
    help-title="Producción"
    >El producto que produce el asentamiento. <br />
    <b
      >A poder ser mirar el recurso en la wiki inglesa o dejarlo en español y avisar a algun mod en discord para que os
      ayude.</b
    >
  </SanitisedTextInput>

  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />

  <SanitisedTextInput
    v-if="showDiscoveredLink"
    v-model="discoveredlink"
    label="Nombre en la wiki del supervisor:"
  />
  <SanitisedTextInput
    v-if="showDiscovered"
    v-model="discovered"
    label="Alias del supervisor si no tiene wiki:"
  />
  <SanitisedTextInput
    v-model="docBy"
    label="Documentado por (en caso de no ser el supervisor):"
  />

  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional"
  />

  <GalleryInput />
</template>
