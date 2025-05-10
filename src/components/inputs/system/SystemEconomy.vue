<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedSystemEconomy } from '@/variables/system/systemeconomy';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('systemeconomy');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id="id">Economía del sistema:</label>
        <Explainer
          tooltip="Encontrado en la vista ampliada del mapa de galaxias. Si no muestra nada, es 'Inexplorado'."
          help-title="Economía"
          help-img="system/economy"
        >
          Encontrado en la vista ampliada del mapa de galaxias.<br />
          El botón para ingresar a la vista ampliada se muestra debajo del cuadro con el sistema detalles.<br />Si no
          muestra nada, es "Inexplorado"
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedSystemEconomy"
        optionLabel="label"
        optionGroupLabel="groupLabel"
        optionGroupChildren="items"
        :reset-event="resetEvent"
      />
    </template>
  </InputTableItem>
</template>
