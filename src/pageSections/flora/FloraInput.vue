<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import DateSelect from '@/components/inputs/DateSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import ResourceInput from '@/components/inputs/flora/ResourceInput.vue';
import BiomeInput from '@/components/inputs/flora/BiomeInput.vue';
import floraAgeageInput from '@/components/inputs/flora/floraAgeageIput.vue';
import floraNotesInput from '@/components/inputs/flora/floraNotesInput.vue';
import floraRootInput from '@/components/inputs/flora/floraRootInput.vue';
import floranutSourceInput from '@/components/inputs/flora/floranutSourceInput.vue';

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
  mode,
  researchteam2,
  orgName,
  appearance,
  notes,
  discDate,
  polymorphic,
  biome,
  roots,
  nutrients,
  docBy,
  age,
} = storeToRefs(pageData);

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="flora/floraName"
    help-title="Nombre de la Planta"
    label="Nombre de la Planta:"
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

  <BiomeInput v-model="biome" />
  <floraAgeageInput v-model="age" />
  <floraRootInput v-model="roots" />
  <floranutSourceInput v-model="nutrients" />
  <floraNotesInput v-model="notes" />

  <SanitisedTextInput
    v-model="polymorphic"
    label="Polimórfico (número de instancias):"
    maxlength="2"
    help-title="Polimorfismo"
    tooltip="Si la criatura está ubicada en una luna. Déjelo en blanco si la planta está en un planeta."
    >A veces, varios modelos de flora tienen el mismo nombre. Esto se llama "polimorfismo". Introduzca el número de
    cuantos modelos de flora diferentes tenían este nombre.
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

  <GameModeSelect v-model="mode" />

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
