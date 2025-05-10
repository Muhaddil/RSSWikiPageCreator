<script setup lang="ts">
import { ref, watch, computed, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
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
import MineralFormationInput from '@/components/inputs/mineral/MineralFormationInput.vue';
import MineralNotesInput from '@/components/inputs/mineral/MineralNotesInput.vue';
import { numberErrorComponent } from '@/common';
import { mappedMineralResources } from '@/variables/mineral/resources';

const pageData = usePageDataStore();
const { elements } = storeToRefs(pageData);

const toast = useToast();

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

watchEffect(() => {
  if (elements.value[0] === elements.value[1]) elements.value[1] = '';
});

const faunas = ref<
  Array<{
    id: number;
    name: string;
    image: string;
    hasWikipage: string;
    discovered: string;
    notes: string;
    elements1: string;
    elements2: string;
    elementsall: string;
    metalContent: string;
    formation: string;
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
      notes: '',
      formation: '',
      elements1: '',
      elements2: '',
      elementsall: '',
      metalContent: '',
    });
  } else {
    showError('No puedes agregar más de 25 minerales.');
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

watch(
  () => faunas.value.map((fauna) => fauna.metalContent),
  (newValues) => {
    faunas.value.forEach((fauna, index) => {
      const newValue = newValues[index];
      if (newValue && !newValue.includes('%')) {
        fauna.metalContent = `${newValue}%`;
      }
    });
  },
  { deep: true }
);

const generateOutput = () => {
  const output = faunas.value
    .map((fauna) => {
      const formattedName = fauna.hasWikipage === 'Yes' ? `[[${fauna.name}]]` : fauna.name;
      return `|-
||[[File: ${fauna.image || 'nmsMisc_NotAvailable.png'}|150px]] || ${formattedName} || ${fauna.metalContent} || ${fauna.formation} || ${fauna.notes} || ${fauna.elementsall} || ${fauna.discovered}`;
    })
    .join('\n\n');
  pageData.generatedOutputMinerals = output;
};

watch(
  faunas,
  () => {
    generateOutput();
  },
  { deep: true }
);

const isContentInvalid = computed(() => faunas.value.some((fauna) => numberErrorComponent(fauna.metalContent) !== ''));
</script>

<template>
  <div>
    <Panel
      class="my-4"
      :header="`Minerales:`"
      toggleable
    >
      <Button @click="addFauna">+ Añadir Mineral</Button>
      <br />
      <br />
      <div
        v-for="(fauna, index) in faunas"
        :key="fauna.id"
      >
        <Panel
          class="my-4"
          :header="`Mineral: ${fauna.name}`"
          toggleable
        >
          <SanitisedTextInput
            v-model="fauna.name"
            help-title="Nombre del mineral"
            label="Nombre del mineral:"
            helpImg="mineral/mineralName"
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

          <SanitisedTextInput
            v-model="fauna.metalContent"
            label="Contenido de metales:"
            tooltip="Encontrado en el escaneo de minerales."
            help-img="mineral/content"
            help-title="Contenido metálico"
            :invalid="isContentInvalid"
            error-message="Sólo debe contener números"
            maxlength="2"
            >Encontrado en el escaneo de minerales.</SanitisedTextInput
          >

          <MineralFormationInput v-model="fauna.formation" />
          <MineralNotesInput v-model="fauna.notes" />

          <InputTableItem>
            <template #label>
              <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
                <label>Elemento Primario</label>
                <Explainer
                  :tooltip="`Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.`"
                  :help-img="`mineral/element0`"
                  help-title="`Elemento Primario`"
                >
                  Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.</Explainer
                >
              </div>
            </template>

            <template #input>
              <SelectDropdown
                v-model="fauna.elements1"
                :options="mappedMineralResources"
              />
            </template>
          </InputTableItem>

          <InputTableItem>
            <template #label>
              <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
                <label>Elemento Secundario</label>
                <Explainer
                  :tooltip="`Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.`"
                  :help-img="`mineral/element1`"
                  help-title="`Elemento Secundario`"
                >
                  Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.</Explainer
                >
              </div>
            </template>

            <template #input>
              <SelectDropdown
                v-model="fauna.elements2"
                :options="mappedMineralResources"
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
