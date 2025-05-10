<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, reactive, watch } from 'vue';
import ClassSelect from '@/components/inputs/ClassSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import Fieldset from 'primevue/fieldset';
import type { CheckboxData } from '@/types/checkboxTypes';
import GridCheckboxWrapper from '@/components/GridCheckboxWrapper.vue';
import Explainer from '@/components/Explainer.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  royalclass,
  system,
  researchteam2,
  otherupgrades,
  hyperdrive,
  fuel,
  roomNumber,
  derelictEnemies,
  docBy,
} = storeToRefs(pageData);

const isroomNumberValid = computed(() => /^\d*$/.test(roomNumber.value));
const isHyperdriveValid = computed(() => /^\d*$/.test(hyperdrive.value));
const isOtherUpgradesValid = computed(() => /^\d*$/.test(otherupgrades.value));
const isFuelValid = computed(() => /^\d*$/.test(fuel.value));

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);

const rogueAI = '';
const minifiend = '';
const gJellyFish = '';

const enemiesCheckboxes: CheckboxData[] = reactive([
  { model: rogueAI, label: 'Seguridad Automática', falseValue: '', trueValue: 'Rogue AI' },
  { model: minifiend, label: 'Cuernos', falseValue: '', trueValue: '[[Minifiend]]' },
  { model: gJellyFish, label: 'Tubos Luminosos', falseValue: '', trueValue: '[[Green Jellyfish]]' },
]);

const selectedEnemies = computed(() => {
  const rawCheckboxes = enemiesCheckboxes;

  return rawCheckboxes
    .filter((checkbox) => checkbox.model)
    .map((checkbox) => checkbox.trueValue)
    .join(', ');
});

watch(selectedEnemies, (newValue) => {
  derelictEnemies.value = newValue;
});
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="derelict/freighterName"
    help-title="Nombre del Carguero"
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

  <GlyphInput v-model="glyphs" />
  <ClassSelect v-model="royalclass" />

  <Fieldset
    class="mb-4"
    legend="Add-ons:"
  >
    <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
      <Explainer
        helpTitle="Enemigos de cargueros abandonados"
        tooltip="Si el carguero tiene estos enemigos."
        helpImg="derelict/enemies"
      >
        Si el carguero tiene estos enemigos.<br />
        Marque las casillas que se aplican al carguero abandonado.
      </Explainer>
    </div>
    <GridCheckboxWrapper :checkboxes="enemiesCheckboxes" />
  </Fieldset>

  <SanitisedTextInput
    v-model="roomNumber"
    maxlength="2"
    label="Número de habitaciones:"
    :invalid="!isroomNumberValid"
    error-message="Solo debe contener números"
    help-img="derelict/zones"
    help-title="Número de habitaciones"
    tooltip="Número de habitaciones como se ve en la parte inferior derecha."
    >Número de habitaciones en el carguero. Se puede ver en la parte inferior derecha de la pantalla. Puede obtener la
    superposición presionando H.
  </SanitisedTextInput>

  <SanitisedTextInput
    v-model="hyperdrive"
    label="Hiperturbo:"
    :invalid="!isHyperdriveValid"
    error-message="Solo debe contener números"
    maxlength="3"
    help-img="derelict/hyperdrive"
    help-title="Hiperturbo Upgrade Bonus"
    tooltip="Estadística de la mejora del hiperturbo."
    >Estadística de distancia de mejora del hiperturbo. Esto siempre será el mismo para un carguero
    determinado.</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="fuel"
    label="Combustible:"
    :invalid="!isFuelValid"
    error-message="Solo debe contener números"
    maxlength="2"
    help-img="derelict/fuel"
    help-title="Bonificación por la mejora de combustible de fragata"
    tooltip="Estadísticas de la mejora del combustible de la fragata."
    >Estadística de la mejora del combustible de la fragata. Esto siempre será el mismo para un carguero
    determinado.</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="otherupgrades"
    label="Otras mejoras:"
    :invalid="!isOtherUpgradesValid"
    error-message="Solo debe contener números"
    maxlength="2"
    help-img="derelict/fuel"
    help-title="Otras bonificaciones de mejora de fragata"
    tooltip="Estadísticas de las mejoras de fragatas que no son combustible ni el hiperturbo."
    >Estadística de las mejoras de fragata para módulos no relacionados con el hiperturbo y el consumo de combustible.
    Esto siempre será lo mismo para un carguero determinado y sus módulos de mejora.</SanitisedTextInput
  >

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

  <GalleryInput />
</template>
