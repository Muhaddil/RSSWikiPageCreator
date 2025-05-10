<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import DateSelect from '@/components/inputs/DateSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import ResourceInput from '@/components/inputs/mineral/ResourceInput.vue';
import MineralFormationInput from '@/components/inputs/mineral/MineralFormationInput.vue';
import MineralNotesInput from '@/components/inputs/mineral/MineralNotesInput.vue';
import { numberErrorComponent } from '@/common';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  system,
  planet,
  moon,
  researchteam2,
  orgName,
  appearance,
  notes,
  discDate,
  polymorphic,
  metalContent,
  formation,
  docBy,
} = storeToRefs(pageData);

// watch(metalContent, (newValue) => {
//   if (newValue && !newValue.includes('%')) {
//     pageData.metalContent = `${newValue}%`;
//   }
// });

const isContentInvalid = computed(() => numberErrorComponent(metalContent.value) !== '');
const isPolymorphicInvalid = computed(() => numberErrorComponent(polymorphic.value) !== '');

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="mineral/mineralName"
    help-title="Nombre del Mineral"
    label="Nombre del Mineral:"
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
    v-model="orgName"
    label="Nombre original antes de registrar (si está disponible):"
  />

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

  <GlyphInput v-model="glyphs" />

  <SanitisedTextInput
    v-model="metalContent"
    label="Contenido de metales:"
    tooltip="Encontrado en el escaneo de minerales."
    help-img="mineral/content"
    help-title="Contenido metálico"
    :invalid="isContentInvalid"
    error-message="Sólo debe contener números"
    maxlength="2"
    >Encontrado en el escaneo de minerales.</SanitisedTextInput
  >

  <MineralFormationInput v-model="formation" />
  <MineralNotesInput v-model="notes" />

  <SanitisedTextInput
    v-model="polymorphic"
    label="Polimórfico (número de instancias):"
    maxlength="2"
    :invalid="isPolymorphicInvalid"
    error-message="Sólo debe contener números"
    help-title="Polimorfismo"
    tooltip="Cuántos modelos diferentes de este mineral se descubrieron."
    >A veces, varios modelos de minerales tienen el mismo nombre. Esto se llama "polimorfismo". Introduzca el número de
    cuantos modelos minerales diferentes tenían este nombre.
  </SanitisedTextInput>

  <ResourceInput
    label="Elemento Primario"
    :index="0"
  />
  <ResourceInput
    label="Elemento Secundario"
    :index="1"
  />

  <DateSelect
    v-model="discDate"
    label="Fecha del descubrimiento"
  />

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

  <!-- <GameModeSelect v-model="mode" /> -->

  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <TextareaInput
    v-model="appearance"
    label="Apariencia:"
  />

  <!--
  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional:"
  /> -->

  <GalleryInput />
</template>
