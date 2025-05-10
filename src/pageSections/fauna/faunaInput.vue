<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { watch, computed } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import creatureData from '@/miscLogic/creatureData';
import EcosystemSelect from '@/components/inputs/fauna/EcosystemSelect.vue';
import HemisphereSelect from '@/components/inputs/fauna/HemisphereSelect.vue';
import RaritySelect from '@/components/inputs/fauna/RaritySelect.vue';
import GenusSelect from '@/components/inputs/fauna/GenusSelect.vue';
import ActivitySelect from '@/components/inputs/fauna/ActivitySelect.vue';
import GenderSelect from '@/components/inputs/fauna/GenderSelect.vue';
import BehavioursSelect from '@/components/inputs/fauna/BehavioursSelect.vue';
import DietSelect from '@/components/inputs/fauna/DietSelect.vue';
import NotesSelect from '@/components/inputs/fauna/NotesSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';

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
  genus,
  hemisphere,
  rarity,
  ecosystem,
  activity,
  gender2,
  behaviour,
  gender,
  height,
  height2,
  weight,
  weight2,
  diet,
  docBy,
  produces,
  notes,
} = storeToRefs(pageData);

const isSecondGenderVisible = computed(() => {
  return gender2.value !== '' && gender2.value !== gender.value;
});

watch(genus, (newGenus) => {
  if (newGenus && ecosystem.value) {
    produces.value = creatureData.ecosystems[ecosystem.value][newGenus]?.produces || [];
  }
});

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="creature/creatureName"
    help-title="Nombre de la criatura"
    label="Nombre de la criatura:"
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

  <EcosystemSelect v-model="ecosystem" />
  <HemisphereSelect v-model="hemisphere" />
  <RaritySelect v-model="rarity" />
  <GenusSelect v-model="genus" />
  <ActivitySelect v-model="activity" />

  <GenderSelect
    v-model="gender"
    label="Género:"
  />

  <GenderSelect
    v-model="gender2"
    label="Género 2 (si tiene):"
  />

  <BehavioursSelect v-model="behaviour" />
  <DietSelect v-model="diet" />
  <NotesSelect v-model="notes" />

  <SanitisedTextInput
    v-model="weight"
    label="Peso en KG:"
    maxlength="5"
    placeholder="1.5"
    tooltip="Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'."
    help-img="creature/creatureWeight"
    help-title="Peso de la criatura"
  />

  <SanitisedTextInput
    v-if="isSecondGenderVisible"
    v-model="weight2"
    label="Peso del género 2: (si hay)"
    maxlength="5"
    placeholder="1.5"
    tooltip="Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'."
    help-img="creature/creatureWeight"
    help-title="Peso de la criatura"
  />

  <SanitisedTextInput
    v-model="height"
    label="Altura en M:"
    maxlength="5"
    placeholder="1.5"
    tooltip="Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'."
    help-img="creature/creatureHeight"
    help-title="Altura de la criatura"
  />

  <SanitisedTextInput
    v-if="isSecondGenderVisible"
    v-model="height2"
    label="Altura del género 2: (si hay)"
    maxlength="5"
    placeholder="1.5"
    tooltip="Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'."
    help-img="creature/creatureHeight"
    help-title="Altura de la criatura"
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

  <GameModeSelect v-model="mode" />

  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <SanitisedTextInput
    v-model="docBy"
    label="Nombre del documentador si no es el descubridor:"
  />

  <TextareaInput
    v-model="appearance"
    label="Apariencia:"
  />

  <GalleryInput />
</template>
