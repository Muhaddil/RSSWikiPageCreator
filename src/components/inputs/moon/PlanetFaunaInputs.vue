<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import SanitisedTextInput from '../SanitisedTextInput.vue';
import Panel from 'primevue/panel';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import HemisphereSelect from '@/components/inputs/fauna/HemisphereSelect.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import Checkbox from 'primevue/checkbox';
import { useToast, POSITION } from 'vue-toastification';
import Button from 'primevue/button';
import RaritySelect from '@/components/inputs/fauna/RaritySelect.vue';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import Explainer from '..//../Explainer.vue';
import ActivitySelect from '@/components/inputs/fauna/ActivitySelect.vue';
import EcosystemSelect from '@/components/inputs/fauna/EcosystemSelect.vue';
import creatureData from '@/miscLogic/creatureData';

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
    hemisphere: string;
    rarity: string;
    ecosystem: string;
    activity: string;
    genus: string;
    weight: string;
    height: string;
    hasWikipage: string;
    discovered: string;
  }>
>([]);

const addFauna = () => {
  if (faunas.value.length < 25) {
    faunas.value.push({
      id: faunas.value.length,
      name: '',
      image: '',
      hemisphere: '',
      rarity: '',
      ecosystem: '',
      activity: '',
      genus: '',
      weight: '',
      height: '',
      hasWikipage: '',
      discovered: '',
    });
  } else {
    showError('No puedes agregar más de 25 criaturas.');
  }
};

const removeFauna = (index: number) => {
  faunas.value.splice(index, 1);
};

const generateOutput = () => {
  const output = faunas.value
    .map((fauna) => {
      const formattedName = fauna.hasWikipage === 'Yes' ? `[[${fauna.name}]]` : fauna.name;
      return `|-
|[[File: ${fauna.image || 'nmsMisc_NotAvailable.png'}|150px]] || ${formattedName} || ${fauna.rarity} / ${fauna.ecosystem} / ${fauna.activity} || [[${fauna.genus}]] || ${fauna.height}m || ${fauna.weight}kg`;
    })
    .join('\n\n');
  pageData.generatedOutputFauna = output;
};

watch(
  faunas,
  () => {
    generateOutput();
  },
  { deep: true }
);

const genera = ref<string[]>([]);
const selectedGenus = ref<string>('');
const produces = ref<string[]>([]);

watch(
  () => faunas.value.map((fauna) => fauna.ecosystem),
  (newEcosystems) => {
    genera.value = [
      ...new Set(newEcosystems.flatMap((ecosystem) => Object.keys(creatureData.ecosystems[ecosystem] || {}))),
    ];
  }
);

watch(selectedGenus, (newGenus) => {
  faunas.value.map((fauna) => {
    if (newGenus && fauna.ecosystem) {
      produces.value = creatureData.ecosystems[fauna.ecosystem][newGenus]?.produces || [];
    }
  });
});

const formattedGenera = computed(() => {
  return genera.value.map((genus) => ({
    label: genus,
    value: genus,
  }));
});
</script>

<template>
  <div>
    <Panel
      class="my-4"
      :header="`Fauna:`"
      toggleable
    >
      <Button @click="addFauna">+ Añadir Fauna</Button>
      <br />
      <br />
      <div
        v-for="(fauna, index) in faunas"
        :key="fauna.id"
      >
        <Panel
          class="my-4"
          :header="`Criatura: ${fauna.name}`"
          toggleable
        >
          <SanitisedTextInput
            v-model="fauna.name"
            help-title="Nombre de la criatura"
            label="Nombre de la criatura:"
            helpImg="creature/creatureName"
            tooltip="Se puede encontrar en el menú de descubrimiento"
            >Se puede encontrar en el menú de descubrimiento.<br />Introduzca exactamente como se ve en el juego.
            Cuidado con 0 (cero) y O (o).
          </SanitisedTextInput>

          <SingleFileUpload
            v-model="fauna.image"
            label="Nombre del archivo de la criatura:"
            help-title="Subida de Archivo"
            tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."
          >
            <FileUploadNotice />
          </SingleFileUpload>

          <HemisphereSelect v-model="fauna.hemisphere" />
          <RaritySelect v-model="fauna.rarity" />
          <EcosystemSelect v-model="fauna.ecosystem" />
          <ActivitySelect v-model="fauna.activity" />
          <InputTableItem>
            <template #label>
              <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
                <label>Género:</label>
                <Explainer tooltip="Encontrado en el menú de descubrimiento de criaturas."> </Explainer>
              </div>
            </template>

            <template #input>
              <SelectDropdown
                v-model="fauna.genus"
                :options="formattedGenera"
              />
            </template>
          </InputTableItem>

          <SanitisedTextInput
            v-model="fauna.weight"
            label="Peso en KG:"
            maxlength="5"
            placeholder="1.5"
            tooltip="Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'."
            help-img="creature/creatureWeight"
            help-title="Peso de la criatura"
          />

          <SanitisedTextInput
            v-model="fauna.height"
            label="Altura en M:"
            maxlength="5"
            placeholder="1.5"
            tooltip="Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'."
            help-img="creature/creatureHeight"
            help-title="Altura de la criatura"
          />

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
            Eliminar Criatura
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
