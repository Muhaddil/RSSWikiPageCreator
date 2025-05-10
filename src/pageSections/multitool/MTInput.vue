<script setup lang="ts">
import { ref, watch, computed, reactive } from 'vue';
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import ClassSelect from '@/components/inputs/ClassSelect.vue';
import InputTableItem from '@/components/InputTableItem.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import CoordinateInput from '@/components/inputs/CoordinateInput.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import AppearanceInput from '@/components/inputs/multitool/AppearanceInput.vue';
import Explainer from '@/components/Explainer.vue';
import type { SelectOption } from '@/types/selectInputOptions';
import Fieldset from 'primevue/fieldset';
import type { CheckboxData } from '@/types/checkboxTypes';
import GridCheckboxWrapper from '@/components/GridCheckboxWrapper.vue';

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
  subtype,
  location,
  savelocation,
  savelocationDF,
  royalclass,
  crystals,
  horns,
  glowtubes,
  slots,
  cost,
  scannerRange,
  appearance,
  damagePotential,
} = storeToRefs(pageData);

const subtypes: {
  [key: string]: { value: string; label: string }[];
} = {
  Pistol: [
    { value: 'Pistol', label: 'Pistola Inicial' },
    { value: 'Standard', label: 'Pistola Estandar' },
  ],
  Rifle: [
    { value: 'Rifle', label: 'SMG' },
    { value: 'Standard (Large)', label: 'SMG (Pequeña)' },
  ],
  Experimental: [
    { value: 'Rifle', label: 'Pistola' },
    { value: 'Rifle (Large)', label: 'Pistola (Pequeña)' },
  ],
  Alien: [
    { value: 'Rifle', label: 'SMG' },
    { value: 'Rifle (Large)', label: 'SMG (Mediana)' },
    { value: 'Pistol', label: 'SMG (Pequeña)' },
  ],
};

const typeMapping: { [key: string]: string } = {
  Pistola: 'Pistol',
  Rifle: 'Rifle',
  Experimental: 'Experimental',
  Alien: 'Alien',
  Royal: 'Royal',
  Centinela: 'Sentinel',
  Atlantida: 'Atlantid',
};

const locationMapping: { [key: string]: string } = {
  'Asentamiento Menor': 'Minor Settlement',
  'Estación Espacial': 'Space Station',
  'Pilar Centinela': 'Sentinel Pillar',
  'Campamento Armónico': 'Harmonic Camp',
  Monolito: 'Monolith',
  'Anomalía Espacial': 'Space Anomaly',
};

const mappedlocationMapping: SelectOption[] = Object.entries(locationMapping).map(([label, value]) => ({
  label,
  value,
}));

const mappedTypeMapping: SelectOption[] = Object.entries(typeMapping).map(([label, value]) => ({
  label,
  value,
}));

const subtypeOptions = ref<SelectOption[]>([]);

const updateSubtypeOptions = (selectedType: string) => {
  if (!selectedType) {
    subtypeOptions.value = [];
    return;
  }

  const mappedType = selectedType;
  subtypeOptions.value = subtypes[mappedType] || [];
};

watch(type, (newType) => {
  updateSubtypeOptions(newType);
});

updateSubtypeOptions(type.value);

watch(location, (newLocation) => {
  if (newLocation === 'Space Station' || newLocation === 'Space Anomaly') {
    planet.value = '';
    moon.value = '';
  }

  if (newLocation === 'Sentinel Pillar') {
    type.value = 'Sentinel';
  }

  if (newLocation === 'Harmonic Camp') {
    type.value = 'Sentinel';
  }

  if (newLocation === 'Monolith') {
    type.value = 'Atlantid';
  }
});

const savelocationMapping = computed(() => {
  if (savelocationDF.value && planet.value && moon.value) {
    return {
      Planeta: `Save and reload on planet [[${savelocationDF.value}]], then fly to moon [[${moon.value}]] of the planet [[${planet.value}]] (${axes.value}).`,
      Luna: `Save and reload on moon [[${savelocationDF.value}]], then fly to moon [[${moon.value}]] of the planet [[${planet.value}]] (${axes.value}).`,
    };
  }

  if (savelocationDF.value && planet.value) {
    return {
      Planeta: `Save and reload on planet [[${savelocationDF.value}]], then fly to planet [[${planet.value}]] (${axes.value}).`,
      Luna: `Save and reload on moon [[${savelocationDF.value}]], then fly to planet [[${planet.value}]] (${axes.value}).`,
    };
  }

  if (planet.value && moon.value) {
    return {
      Planeta: `Save and reload on planet [[${planet.value}]] then fly to moon [[${moon.value}]] (${axes.value}).`,
      Luna: `Save and reload on moon [[${moon.value}]], then fly to planet [[${planet.value}]] (${axes.value}).`,
    };
  }

  if (planet.value) {
    return {
      Planeta: `Save and reload on planet [[${planet.value}]] then fly to coordinates ${axes.value}`,
    };
  }

  return {
    'Estación Espacial': `Save and reload on the space station, then fly to planet [[${planet.value}]] (${axes.value}).`,
    'Anomalía Espacial': `Save and reload on the space anomaly, then fly to planet [[${planet.value}]] (${axes.value}).`,
  };
});

const mappedsavelocationMapping = computed(() => {
  return Object.entries(savelocationMapping.value).map(([label, value]) => ({
    label,
    value,
  }));
});

watch([planet, moon, savelocation], () => {
  if (savelocation.value === 'Luna' || savelocation.value === 'Planeta') {
    if (!savelocationDF.value) {
      savelocationDF.value = savelocation.value === 'Luna' ? moon.value : planet.value;
    }
  }
});

watch(savelocation, (newValue) => {
  const currentOption = mappedsavelocationMapping.value.find((option) => option.value === newValue);

  if (!currentOption) {
    savelocation.value = mappedsavelocationMapping.value[0]?.value || '';
  }
});

const featureCheckboxes: CheckboxData[] = reactive([
  { model: crystals, label: 'Cristales', falseValue: '' },
  { model: horns, label: 'Cuernos', falseValue: '' },
  { model: glowtubes, label: 'Tubos Luminosos', falseValue: '' },
]);

const isDamageValid = computed(() => /^\d*$/.test(damagePotential.value));
const isScannerValid = computed(() => /^\d*$/.test(scannerRange.value));
const isSlotsValid = computed(() => /^\d*$/.test(slots.value));

const originalCost = ref('');

const formatNumberWithCommas = (value: string) => {
  const cleanedValue = value.replace(/[^0-9.]/g, '');

  if (!cleanedValue) return '';

  const [integerPart, decimalPart] = cleanedValue.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

const isCostValid = computed(() => /^\d*$/.test(originalCost.value));

watch(originalCost, (newValue) => {
  cost.value = formatNumberWithCommas(newValue);
});

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="mt/MTName"
    help-title="Nombre de la Multiherranienta"
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

  <InputTableItem v-if="location !== 'Harmonic Camp' && location !== 'Monolith'">
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label>Tipo de Multiherramienta:</label>
        <Explainer
          helpTitle="Tipo de multiherramienta"
          tooltip="El tipo de una multiherramienta se puede ver en la pantalla de comparación."
          helpImg="mt/MTType"
          >El tipo de una multiherramienta se puede ver en la pantalla de comparación.</Explainer
        >
      </div>
    </template>

    <template #input>
      <SelectDropdown
        help-title="Tipo de multiherramienta"
        tooltip="El tipo de una multiherramienta se puede ver en la pantalla de comparación."
        help-image="mt/MTType"
        v-model="type"
        :aria-labelledby="type"
        :options="mappedTypeMapping"
      />
    </template>
  </InputTableItem>

  <InputTableItem v-if="location !== 'Harmonic Camp' && location !== 'Monolith'">
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label>SubTipo de Multiherramienta:</label>
        <Explainer
          helpTitle="SubTipo de Multiherramienta"
          tooltip="El subtipo de una multiherramienta está definido por la forma de la herramienta."
          helpImg="mt/MultitoolDifferentiation"
          >El subtipo de una multiherramienta está definido por la forma de la herramienta.</Explainer
        >
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="subtype"
        :aria-labelledby="subtype"
        :options="subtypeOptions"
      />
    </template>
  </InputTableItem>

  <SanitisedTextInput
    v-model="system"
    label="Sistema"
  />

  <SanitisedTextInput
    v-if="location !== 'Space Station' && location !== 'Space Anomaly'"
    v-model="planet"
    label="Nombre del Planeta"
    tooltip="Nombre del Planeta O el planeta rodeado por la luna donde se puede encontrar la multiherramienta."
  />
  <SanitisedTextInput
    v-if="location !== 'Space Station' && location !== 'Space Anomaly'"
    v-model="moon"
    label="Nombre de la Luna"
    tooltip="Si la multiherramienta está ubicada en una luna. Déjalo en blanco si la base está en un planeta."
  />

  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label>Localización:</label>
        <Explainer tooltip="Dónde se encontró la herramienta."></Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="location"
        :aria-labelledby="location"
        :options="mappedlocationMapping"
      />
    </template>
  </InputTableItem>

  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label>Guardar/recargar tipo de ubicación:</label>
        <Explainer
          helpTitle="Guardar/recargar tipo de ubicación"
          tooltip="Dónde tienes que recargar para que se cargue la herramienta."
        >
          Dónde tienes que recargar para que se cargue la herramienta.<br />Si no está seguro de lo que esto significa,
          lea esto
          <a
            href="https://www.reddit.com/r/NMSGlyphExchange/comments/zmp26o/multitool_spawning_mechanicshunting_guide_by/"
            >guía sobre la mecánica de generación de Multiherramientas</a
          >.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="savelocation"
        :aria-labelledby="savelocation"
        :options="mappedsavelocationMapping"
      />
    </template>
  </InputTableItem>

  <SanitisedTextInput
    v-if="savelocation !== 'Estación Espacial' && location !== 'Anomalía Espacial'"
    v-model="savelocationDF"
    label="Guardar/recargar el nombre de la ubicación"
    tooltip="Nombre del planeta o luna donde hay que recargar para conseguir la MT si es diferente."
  />

  <CoordinateInput v-model="axes" />
  <GlyphInput v-model="glyphs" />

  <ClassSelect v-model="royalclass" />

  <Fieldset
    class="mb-4"
    legend="Add-ons:"
  >
    <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
      <Explainer
        helpTitle="Complementos de las Multiherramientas"
        tooltip="Si la herramienta tiene estas características."
        helpImg="mt/addons"
      >
        Marque las casillas que se aplican a la herramienta.<br />
        Existen ciertas reglas para algunos tipos de MT a fin de calificar para el complemento.<br />
        <a
          href="https://nomanssky.fandom.com/wiki/Multi-Tool_Catalogue#Add-ons"
          data-wiki
          >La información detallada se puede encontrar en la wiki.</a
        >
      </Explainer>
    </div>
    <GridCheckboxWrapper :checkboxes="featureCheckboxes" />
  </Fieldset>

  <SanitisedTextInput
    v-model="slots"
    label="Número de slots:"
    :maxlength="3"
    help-img="mt/slots"
    help-title="Número de slots"
    :invalid="!isSlotsValid"
    error-message="Solo debe contener numeros"
    tooltip="Se puede encontrar en la página de precios."
    >Número de ranuras de la herramienta. Se puede encontrar en la página de precios.</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="originalCost"
    label="Coste:"
    help-img="mt/price"
    help-title="Precio de la multiherramienta"
    :invalid="!isCostValid"
    error-message="Solo debe contener numeros"
    tooltip="Se puede encontrar en la página de precios."
    >Se puede encontrar en la página de precios. Ingrese el precio de compra, no el precio de
    intercambio.</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="damagePotential"
    label="Daño base de la multiherramienta:"
    :invalid="!isDamageValid"
    error-message="Solo debe contener numeros"
    help-img="mt/baseDmg"
    help-title="Daño base de la multiherramienta"
    tooltip="Daño base sin mejoras instaladas."
    >Daño base sin mejoras instaladas. Es necesario desmantelar todas las tecnologías, excepto el escáner y el laser de
    extracción. Tenga cuidado de que no se utilicen ranuras sobrecargadas (azul claro).</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="scannerRange"
    label="Rango base del escáner:"
    :invalid="!isScannerValid"
    error-message="Solo debe contener numeros"
    help-img="mt/baseScan"
    help-title="Rango del Escanes base"
    tooltip="Rango del escaner base sin mejoras instaladas."
    >Rango del escaner base sin mejoras instaladas. Es necesario desmantelar todas las tecnologías, excepto el escáner y
    el laser de extracción. Tenga cuidado de que no se utilicen ranuras sobrecargadas (azul claro).</SanitisedTextInput
  >

  <div><label>Notas: Estas imágenes deben ser del menú de descubrimiento (excepto coordenadas)</label></div>
  <br />
  <SingleFileUpload
    v-model="image"
    label="Guardar/Recargar ubicación"
    help-title="Guardar/Recargar imagen de ubicación"
    help-img="mt/srExample"
    tooltip="Haga clic para ver una imagen de ejemplo."
  >
  </SingleFileUpload>

  <SingleFileUpload
    v-model="image"
    label="Sistema (Gabinete Planetario resaltado)"
    help-title="Guardar/Recargar imagen de ubicación"
    help-img="mt/sysExample"
    tooltip="Haga clic para ver una imagen de ejemplo."
  >
  </SingleFileUpload>

  <SingleFileUpload
    v-model="image"
    label="Gabinete Planetario"
    help-title="Guardar/Recargar imagen de ubicación"
    help-img="mt/srExample"
    tooltip="Haga clic para ver una imagen de ejemplo."
  >
  </SingleFileUpload>

  <SingleFileUpload
    v-model="image"
    label="Coordenadas"
    help-title="Guardar/Recargar imagen de ubicación"
    help-img="mt/coordExample"
    tooltip="Haga clic para ver una imagen de ejemplo."
  >
  </SingleFileUpload>

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
  <PlatformSelect v-model="platform" />
  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <AppearanceInput v-model="appearance" />

  <GalleryInput />
</template>
