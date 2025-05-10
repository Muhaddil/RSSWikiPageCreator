<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import ExocraftTableInput from '@/components/inputs/racetrack/ExocraftTableInput.vue';
import CoordinateInput from '@/components/inputs/CoordinateInput.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';

const pageData = usePageDataStore();
const {
  name,
  image,
  discovered,
  discoveredlink,
  axes,
  researchteam2,
  system,
  planet,
  moon,
  glyphs,
  platform,
  mode,
  features2,
  appearance,
  additionalInfo,
  exocraftTable,
  docBy,
} = storeToRefs(pageData);

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="base/baseName"
    help-title="Nombre del Circuito"
    label="Nombre del Circuito:"
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
    v-model="system"
    label="Nombre del sistema:"
  />

  <SanitisedTextInput
    v-model="planet"
    label="Nombre del planeta:"
    tooltip="Nombre del planeta O el planeta alrededor del cual orbita la luna donde se encuentra la criatura."
  />

  <SanitisedTextInput
    v-model="moon"
    label="Nombre de la luna (si la planta está en la luna):"
    tooltip="Si la criatura está ubicada en una luna. Déjelo en blanco si la planta está en un planeta."
  />

  <CoordinateInput v-model="axes" />
  <GlyphInput v-model="glyphs" />

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

  <ExocraftTableInput v-model="exocraftTable" />

  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />

  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <TextareaInput
    v-model="appearance"
    label="Descripción general de la pista:"
  />

  <TextareaInput
    v-model="features2"
    label="Características del Circuito:"
  />

  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional:"
  />

  <GalleryInput />
</template>
