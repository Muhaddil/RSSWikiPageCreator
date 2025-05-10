<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import CoordinateInput from '@/components/inputs/CoordinateInput.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import StomachContentInput from '@/components/inputs/sandworm/StomachContentInput.vue';
import Class from '@/components/inputs/sandworm/Class.vue';
import AppearonReload from '@/components/inputs/sandworm/AppearonReload.vue';

const pageData = usePageDataStore();
const {
  discovered,
  discoveredlink,
  image,
  glyphs,
  appearonreload,
  system,
  planet,
  moon,
  axes,
  stomachContent,
  mode,
  docBy,
  maxdepth,
  appearance,
  sandwormclass,
  researchteam2,
} = storeToRefs(pageData);

const isMaxDepthValid = computed(() => {
  return /^\d*$/.test(maxdepth.value);
});

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
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

  <Class v-model="sandwormclass" />
  <SanitisedTextInput
    v-model="maxdepth"
    label="Máxima profundidad:"
    :invalid="!isMaxDepthValid"
    error-message="Sólo debe contener números"
  />
  <StomachContentInput v-model="stomachContent" />
  <AppearonReload v-model="appearonreload" />

  <GameModeSelect v-model="mode" />

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
    label="Alias del documentador si no es el descubridor:"
  />
  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <TextareaInput
    v-model="appearance"
    label="Apariencia"
  />

  <GalleryInput />
</template>
