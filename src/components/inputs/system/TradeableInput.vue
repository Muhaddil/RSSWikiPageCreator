<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import SanitisedTextInput from '../SanitisedTextInput.vue';
import Panel from 'primevue/panel';
import Explainer from '@/components/Explainer.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedSystemTradeables } from '@/variables/system/systemtradeables';
import InputTableItem from '../../InputTableItem.vue';
import Button from 'primevue/button';
import { useToast, POSITION } from 'vue-toastification';
import { useConfirm } from 'primevue/useconfirm';

const pageData = usePageDataStore();
const toast = useToast();
const confirm = useConfirm();

const tradeables = ref([{
  id: 0,
  name: '',
  price: '',
}]);

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

const addPlanet = () => {
  if (tradeables.value.length < 5) {
    tradeables.value.push({
      id: tradeables.value.length,
      name: '',
      price: '',
    });
  } else {
    showError('No puedes agregar más de 5 tradeables.');
  }
};

const removePlanet = (index: number) => {
  tradeables.value.splice(index, 1);
};

const tradeTerminal = () => {
  const output = tradeables.value.map((tradeable) => {
    return `|-
|{{ilink|${tradeable.name}}} || {{Units}} ${tradeable.price}`;
  }).join('\n');
  pageData.tradeTerminal = output;
};

const isPriceValid = (price: string) => /^\d*$/.test(price.replace(/,/g, ''));

const formatPrice = (price: string) => {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

watch(tradeables, (newTradeables) => {
  newTradeables.forEach((tradeable) => {
    tradeable.price = formatPrice(tradeable.price.replace(/,/g, ''));
  });
  tradeTerminal();
}, { deep: true });

const getLabelFromValue = (value: string) => {
  const found = mappedSystemTradeables.find(option => option.value === value);
  return found ? found.label : value;
};

function showConfirmDialog(index: number) {
  confirm.require({
    message: '¿Estás seguro de que quieres borrar este tradeable?',
    header: 'Confirmar Borrar',
    icon: 'pi pi-exclamation-triangle',
    accept: () => removePlanet(index),
    acceptProps: {
      class: 'p-button-danger',
    },
    reject: () => {
      // Do nothing
    },
  });
}
</script>

<template>
  <div>
    <Button @click="addPlanet">Agregar Tradeable</Button>
    <br />
    <br />
    <div v-for="(tradeable, index) in tradeables" :key="tradeable.id">
      <Panel class="my-4" :header="`Tradeable ${index + 1}: ${getLabelFromValue(tradeable.name)}`" toggleable>
        <InputTableItem>
          <template #label>
            <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
              <label id="tradeables">Nombre del tradeable:</label>
              <Explainer tooltip="Se pueden encontrar en la estación espacial." help-img="system/tradeables"
                help-title="Objetos comercializables de la estación espacial">
                Se pueden encontrar en la estación espacial en el Terminal de comercio.<br>
                Incluya solo bienes comercializables (artículos con fondo blanco en la parte superior)
              </Explainer>
            </div>
          </template>

          <template #input>
            <SelectDropdown v-model="tradeable.name" aria-labelledby="tradeables" :options="mappedSystemTradeables"
              filter />
          </template>
        </InputTableItem>

        <SanitisedTextInput
          v-model="tradeable.price"
          label="Precio del tradeable:"
          :invalid="!isPriceValid(tradeable.price)"
          error-message="Solo números válidos sin símbolos especiales">
        </SanitisedTextInput>

        <Button @click="showConfirmDialog(index)">
          Eliminar Tradeable
        </Button>
      </Panel>
    </div>
  </div>
</template>

<style scoped>
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
