<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { reactive, computed } from 'vue';
import Fieldset from 'primevue/fieldset';
import type { CheckboxData } from '@/types/checkboxTypes';
import GridCheckboxWrapper from '@/components/GridCheckboxWrapper.vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import CoordinateInput from '@/components/inputs/CoordinateInput.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import FeatureInput from '@/components/inputs/FeatureInput.vue';
import BaseTypeSelect from '@/components/inputs/BaseTypeSelect.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  type,
  system,
  planet,
  moon,
  axes,
  platform,
  mode,
  researchteam2,
  farm,
  geobay,
  landingpad,
  terminal,
  arena,
  racetrack,
  layout,
  features,
  additionalInfo,
  docBy,
} = storeToRefs(pageData);

const featureCheckboxes: CheckboxData[] = reactive([
  { model: farm, label: 'Granja' },
  { model: geobay, label: 'Geobahías' },
  { model: landingpad, label: 'Plataforma de Aterrizaje' },
  { model: terminal, label: 'Terminal' },
  { model: arena, label: 'Arena' },
  { model: racetrack, label: 'Pista de Carreras' },
]);

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="base/baseName"
    help-title="Nombre de la Base"
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
    label="Sistema"
  />
  <SanitisedTextInput
    v-model="planet"
    label="Nombre del Planeta"
    tooltip="Nombre del Planeta O el planeta rodeado por la luna donde se puede encontrar la base."
  />
  <SanitisedTextInput
    v-model="moon"
    label="Nombre de la Luna"
    tooltip="Si la base está ubicada en una luna. Déjalo en blanco si la base está en un planeta."
  />
  <CoordinateInput v-model="axes" />
  <GlyphInput v-model="glyphs" />
  <BaseTypeSelect v-model="type" />
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

  <Fieldset
    class="mb-4"
    legend="Características"
  >
    <GridCheckboxWrapper :checkboxes="featureCheckboxes" />
  </Fieldset>

  <SanitisedTextInput
    v-if="showDiscoveredLink"
    v-model="discoveredlink"
    label="Nombre en la wiki del constructor"
  />
  <SanitisedTextInput
    v-if="showDiscovered"
    v-model="discovered"
    label="Alias del constructor si no hay wiki"
  />
  <SanitisedTextInput
    v-model="docBy"
    label="Documentado por (en caso de no ser el constructor):"
  />

  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />

  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <div class="is-flex is-flex-direction-column is-gap-2">
    <TextareaInput
      v-model="layout"
      label="Distribución de la Base"
    />
    <!-- <TextareaInput
      v-model="features"
      label="Características de la Base"
    /> -->
    <FeatureInput v-model="features" />
    <TextareaInput
      v-model="additionalInfo"
      label="Información Adicional"
    />
  </div>

  <GalleryInput />
</template>

