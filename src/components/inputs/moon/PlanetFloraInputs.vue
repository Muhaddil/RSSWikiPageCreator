<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import SanitisedTextInput from '../SanitisedTextInput.vue';
import Panel from 'primevue/panel';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import Checkbox from 'primevue/checkbox';
import { useToast, POSITION } from 'vue-toastification';
import Button from 'primevue/button';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import Explainer from '..//../Explainer.vue';
import floraAgeageIput from '../flora/floraAgeageIput.vue';
import floranutSourceInput from '../flora/floranutSourceInput.vue';
import floraNotesInput from '../flora/floraNotesInput.vue';
import floraRootInput from '../flora/floraRootInput.vue';
import { mappedFloraResources } from '@/variables/flora/resources';

const pageData = usePageDataStore();
const toast = useToast();

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

const faunas = ref<
  Array<{
    id: number;
    name: string;
    image: string;
    hasWikipage: string;
    discovered: string;
    age: string;
    nutsource: string;
    notes: string;
    root: string;
    elements1: string;
    elements2: string;
    elementsall: string;
  }>
>([]);

const addFauna = () => {
  if (faunas.value.length < 25) {
    faunas.value.push({
      id: faunas.value.length,
      name: '',
      image: '',
      hasWikipage: '',
      discovered: '',
      age: '',
      nutsource: '',
      notes: '',
      root: '',
      elements1: '',
      elements2: '',
      elementsall: '',
    });
  } else {
    showError('No puedes agregar más de 25 plantas.');
  }
};

const removeFauna = (index: number) => {
  faunas.value.splice(index, 1);
};

watchEffect(() => {
  faunas.value.forEach((fauna) => {
    if (fauna.elements1 === fauna.elements2) {
      fauna.elements2 = '';
    }

    const formattedElements = [fauna.elements1, fauna.elements2].filter(Boolean).map((element) => `[[${element}]]`);

    fauna.elementsall = formattedElements.join(', ');
  });
});

const generateOutput = () => {
  const output = faunas.value
    .map((fauna) => {
      const formattedName = fauna.hasWikipage === 'Yes' ? `[[${fauna.name}]]` : fauna.name;
      return `|-
||[[File: ${fauna.image || 'nmsMisc_NotAvailable.png'}|150px]] || ${formattedName} || ${fauna.age} || ${fauna.root} || ${fauna.nutsource} || ${fauna.notes} || ${fauna.elementsall} || ${fauna.discovered}`;
    })
    .join('\n');
  pageData.generatedOutputFlora = output;
};

watch(
  faunas,
  () => {
    generateOutput();
  },
  { deep: true }
);
</script>

<template>
  <div>
    <Panel
      class="my-4"
      :header="`Flora:`"
      toggleable
    >
      <Button @click="addFauna">+ Añadir Flora</Button>
      <br />
      <br />
      <div
        v-for="(fauna, index) in faunas"
        :key="fauna.id"
      >
        <Panel
          class="my-4"
          :header="`Planta: ${fauna.name}`"
          toggleable
        >
          <SanitisedTextInput
            v-model="fauna.name"
            help-title="Nombre de la flora"
            label="Nombre de la planta:"
            helpImg="flora/floraName"
            tooltip="Encontrado en el visor de análisis."
            >Encontrado en el visor de análisis.<br />Introduzca exactamente como se ve en el juego. Cuidado con 0
            (cero) y O (o).
          </SanitisedTextInput>

          <SingleFileUpload
            v-model="fauna.image"
            label="Nombre del archivo de la planta:"
            help-title="Subida de Archivo"
            tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
          >
            <FileUploadNotice />
          </SingleFileUpload>

          <floraAgeageIput v-model="fauna.age" />
          <floraRootInput v-model="fauna.root" />
          <floranutSourceInput v-model="fauna.nutsource" />
          <floraNotesInput v-model="fauna.notes" />
          <InputTableItem>
            <template #label>
              <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
                <label>Elemento Primario</label>
                <Explainer
                  :tooltip="`Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.`"
                  :help-img="`flora/element0`"
                  help-title="`Elemento Primario`"
                >
                  Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.</Explainer
                >
              </div>
            </template>

            <template #input>
              <SelectDropdown
                v-model="fauna.elements1"
                :options="mappedFloraResources"
              />
            </template>
          </InputTableItem>

          <InputTableItem>
            <template #label>
              <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
                <label>Elemento Secundario</label>
                <Explainer
                  :tooltip="`Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.`"
                  :help-img="`flora/element1`"
                  help-title="`Elemento Secundario`"
                >
                  Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.</Explainer
                >
              </div>
            </template>

            <template #input>
              <SelectDropdown
                v-model="fauna.elements2"
                :options="mappedFloraResources"
              />
            </template>
          </InputTableItem>

          <SanitisedTextInput
            v-model="fauna.discovered"
            label="Descubridor:"
          />

          <InputTableItem>
            <template #label>
              <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
                <label for="hasWikipage-checkbox">¿Tiene página el la wiki?</label>
              </div>
            </template>
            <template #input>
              <Checkbox
                v-model="fauna.hasWikipage"
                false-value=""
                input-id="hasWikipage-checkbox"
                true-value="Yes"
                binary
              />
            </template>
          </InputTableItem>

          <Button
            v-if="faunas.length >= 1"
            @click="removeFauna(index)"
          >
            Eliminar Flora
          </Button>
        </Panel>
      </div>
    </Panel>
  </div>
</template>

<style scoped>
.planet-container {
  margin-bottom: 20px;
}

.resource-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.resource-select {
  flex: 1;
  margin-right: -10px;
}

.remove-resource-button {
  margin-right: 10px;
}
</style>
