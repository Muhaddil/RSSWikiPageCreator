<script setup lang="ts">
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import typeSelect from '@/components/inputs/corvette/typeSelect.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';

const pageData = usePageDataStore();
const {
  name,
  image,
  discovered,
  discoveredlink,
  researchteam2,
  platform,
  mode,
  features2,
  appearance,
  additionalInfo,
  type,
} = storeToRefs(pageData);

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-title="Nombre de la Corbeta"
    label="Nombre de la Corbeta:"
    tooltip="Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."
  >
    Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).
  </SanitisedTextInput>

  <SingleFileUpload
    v-model="image"
    label="Imagen principal"
    help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
  >
    <FileUploadNotice />
  </SingleFileUpload>

  <SanitisedTextInput
    v-if="showDiscoveredLink"
    v-model="discoveredlink"
    label="Nombre en la wiki del constructor:"
  />
  <SanitisedTextInput
    v-if="showDiscovered"
    v-model="discovered"
    label="Alias del constructor si no tiene wiki:"
  />

  <!-- <SanitisedTextInput
    v-model="docBy"
    label="Nombre del documentador si no es el constructor:"
  /> -->

  <typeSelect v-model="type" />
  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />

  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <TextareaInput
    v-model="appearance"
    label="Descripción general de la Corbeta:"
  />

  <TextareaInput
    v-model="features2"
    label="Características de la Corbeta:"
  />

  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional:"
  />

  <GalleryInput />
</template>
