<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import DateSelect from '@/components/inputs/DateSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import StarcolorInput from '@/components/inputs/system/StarcolorInput.vue';
import StarNumberInput from '@/components/inputs/system/StarNumberInput.vue';
import InputTableItem from '@/components/InputTableItem.vue';
import Checkbox from 'primevue/checkbox';
import Explainer from '@/components/Explainer.vue';
import SystemRace from '@/components/inputs/system/SystemRace.vue';
import SystemEconomy from '@/components/inputs/system/SystemEconomy.vue';
import SystemConflict from '@/components/inputs/system/SystemConflict.vue';
import WealthSelect from '@/components/WealthSelect.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import PlanetInputs from '@/components/inputs/system/PlanetInputs.vue';
import PlanetInputsExtra from '@/components/inputs/system/PlanetInputsExtra.vue';
import TradeableInput from '@/components/inputs/system/TradeableInput.vue';
import UpgradeModules from '@/components/inputs/system/UpgradeModules.vue';
import UpgradeModulesSS from '@/components/inputs/system/UpgradeModulesSS.vue';
import UpgradeModulesEC from '@/components/inputs/system/UpgradeModulesEC.vue';
import UpgradeModulesES from '@/components/inputs/system/UpgradeModulesES.vue';
import UpgradeModulesSD from '@/components/inputs/system/UpgradeModulesSD.vue';
// import { translateText } from '@/common';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  color,
  distance,
  mode,
  multiplestars,
  orgName,
  additionalInfo,
  planetnum,
  discDate,
  moonnum,
  water,
  dissonant,
  faction,
  docBy,
  economy,
  stellarclass,
  wealth,
  economysell,
  economybuy,
  conflict,
  platform,
  docDate,
  navImage,
  ssImage,
  modulesMT,
  modulesSS,
  modulesEC,
  modulesES,
  modulesSD,
  extraInfo,
} = storeToRefs(pageData);

const systemplanets = ref([]);

const isDistanceValid = computed(() => {
  if (!distance.value) return true;
  const regex = /^\d+([.,]\d+)?$/;
  return regex.test(distance.value);
});

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);

function ensurePercentage(value: string): string {
  if (!value.endsWith('%')) {
    return `${value}%`;
  }
  return value;
}

watch(economysell, (newValue) => {
  if (newValue && !newValue.endsWith('%')) {
    economysell.value = ensurePercentage(newValue);
  }
});

watch(economybuy, (newValue) => {
  if (newValue && !newValue.endsWith('%')) {
    economybuy.value = ensurePercentage(newValue);
  }
});

// const translatedInfo = ref('');

// watch(translatedInfo, async (newValue) => {
//   if (newValue) {
//     additionalInfo.value = await translateText(newValue, 'en');
//   } else {
//     additionalInfo.value = '';
//   }
// });
</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="system/systemName"
    help-title="Nombre del sistema"
    label="Nombre del sistema:"
    tooltip="Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."
  >
    Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).
  </SanitisedTextInput>
  <SanitisedTextInput
    v-model="orgName"
    label="Nombre original antes de registrar (si está disponible):"
  />

  <SingleFileUpload
    v-model="image"
    label="Imagen principal:"
    help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
  >
    <FileUploadNotice />
  </SingleFileUpload>

  <SingleFileUpload
    v-model="navImage"
    label="Imagen del mapa galáctico:"
  >
    <FileUploadNotice />
  </SingleFileUpload>

  <div v-if="faction !== 'Uncharted'">
    <SingleFileUpload
      v-model="ssImage"
      label="Nombre de la imagen de la estación espacial:"
    >
      <FileUploadNotice />
    </SingleFileUpload>
  </div>

  <GlyphInput v-model="glyphs" />

  <StarNumberInput v-model="multiplestars" />
  <StarcolorInput v-model="color" />

  <SanitisedTextInput
    v-model="stellarclass"
    maxlength="4"
    label="Clase estelar:"
    tooltip="Encontrado en el mapa galáctico."
    help-title="Clase estelar"
    help-img="system/stellarClass"
    >Ingrese al modo Foto, luego presione el botón para rotar la estrella del sistema hacia su cursor.<br />
    Introduce el número de estrellas que ves.</SanitisedTextInput
  >

  <SanitisedTextInput
    v-model="distance"
    label="Distancia al centro:"
    tooltip="Encontrado en el mapa de galaxias. Haga clic aquí para obtener una guía sobre cómo obtener un valor preciso."
    help-title="Distancia al centro"
    error-message="Formato incorrecto, el formato correcto debe ser '319.487'"
    :invalid="!isDistanceValid"
  >
    En el mapa de galaxias, mueve la cámara <span class="is-italic">muy</span> cerca de la estrella.<br />
    Debes desenfocar el sistema para poder acercarte lo suficiente a la estrella. Si básicamente estás dentro de la
    estrella, esa es la posición correcta.<br />
    Luego podrá leer el valor de la distancia al centro en la parte superior izquierda.<br /><br />
    Antecedentes: esta es la distancia de la <span class="is-italic">cámara</span> al centro, no la distancia real del
    <span class="is-italic">sistema</span> al centro.<br />
    En PC, puedes usar
    <a
      href="https://www.nexusmods.com/nomanssky/mods/2203"
      rel="noopener noreferrer"
      target="_blank"
      >Galaxy Center Distance</a
    >
    mod para obtener la distancia al centro con precisión en la parte superior del mapa de galaxias.
  </SanitisedTextInput>

  <SanitisedTextInput
    v-model="planetnum"
    label="Número de planetas:"
    maxlength="1"
  />
  <SanitisedTextInput
    v-model="moonnum"
    label="Número de lunas:"
    maxlength="1"
  />

  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label for="water-checkbox">¿Agua en el sistema?</label>
        <Explainer
          tooltip="Encontrado en el mapa de galaxias. Si no muestra Agua, no hay agua"
          help-img="system/water"
          help-title="Agua"
          >Encontrado en el mapa de galaxias. Si no muestra "Agua", no hay agua.</Explainer
        >
      </div>
    </template>
    <template #input>
      <Checkbox
        v-model="water"
        false-value="No"
        input-id="water-checkbox"
        true-value="Yes"
        binary
      />
    </template>
  </InputTableItem>

  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label for="dissonant-checkbox">¿Sistema disonante?</label>
        <Explainer
          tooltip="Encontrado en el mapa de galaxias. Si no muestra Disonante, no es disonante."
          help-img="system/dissonant"
          help-title="Disonante"
          >Encontrado en el mapa de galaxias. Si no muestra "Disonante", no marque la caja.</Explainer
        >
      </div>
    </template>
    <template #input>
      <Checkbox
        v-model="dissonant"
        false-value="No"
        input-id="dissonant-checkbox"
        true-value="Yes"
        binary
      />
    </template>
  </InputTableItem>

  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label for="extrainfo-checkbox">¿Planetas Completos?</label>
        <Explainer tooltip="Si quieres que los planetas tengan informacion extra."></Explainer>
      </div>
    </template>
    <template #input>
      <Checkbox
        v-model="extraInfo"
        false-value=""
        input-id="extrainfo-checkbox"
        true-value="Yes"
        binary
      />
    </template>
  </InputTableItem>

  <PlanetInputs
    v-model="systemplanets"
    v-if="!extraInfo"
  />
  <PlanetInputsExtra
    v-model="systemplanets"
    v-if="extraInfo"
  />
  <SystemRace v-model="faction" />
  <SystemEconomy v-model="economy" />

  <SanitisedTextInput
    v-model="economysell"
    label="Economía Vender:"
    tooltip="Encontrado en la vista ampliada del mapa galáctico"
    help-img="system/e-sell"
    help-title="Economía-Vender"
  >
    Encontrado en la vista ampliada del mapa galáctico.<br />El botón para ingresar a la vista ampliada se muestra
    debajo del cuadro con los detalles del sistema.</SanitisedTextInput
  >
  <SanitisedTextInput
    v-model="economybuy"
    label="Economía Comprar:"
    tooltip="Encontrado en la vista ampliada del mapa galáctico"
    help-img="system/e-buy"
    help-title="Economía-Comprar"
  >
    Encontrado en la vista ampliada del mapa galáctico.<br />El botón para ingresar a la vista ampliada se muestra
    debajo del cuadro con los detalles del sistema.</SanitisedTextInput
  >

  <WealthSelect v-model="wealth" />
  <SystemConflict v-model="conflict" />

  <DateSelect
    v-model="discDate"
    label="¿Cuándo se descubrió este sistema?"
  />
  <DateSelect
    v-model="docDate"
    label="¿Cuándo se documentó este sistema?"
  />
  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />
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

  <div v-if="faction !== 'Uncharted' && wealth !== 'Black Market'">
    <TradeableInput />

    <UpgradeModulesES v-model="modulesES" />
    <UpgradeModules v-model="modulesMT" />
    <UpgradeModulesSS v-model="modulesSS" />
    <UpgradeModulesEC v-model="modulesEC" />
    <UpgradeModulesSD v-model="modulesSD" />
  </div>

  <div v-if="faction !== 'Uncharted' && wealth === 'Black Market'">
    <UpgradeModulesSD v-model="modulesSD" />
  </div>
  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional:"
  />

  <GalleryInput />
</template>
