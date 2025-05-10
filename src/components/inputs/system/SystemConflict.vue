<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedSystemConflict } from '@/variables/system/systemconflict';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('systemeconomy');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id="id">Conflicto del sistema:</label>
        <Explainer
          tooltip="Encontrado en la vista ampliada del mapa galáctico."
          help-title="Conflicto"
          help-img="system/conflict"
        >
          Encontrado en la vista ampliada del mapa galáctico.<br />
          El botón para ingresar a la vista ampliada se muestra debajo del cuadro con los detalles del sistema..<br />
          Si no muestra nada, es "Abandonado" o "Inexplorado". Esto se puede determinar mirando el valor de la facción.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :filter="true"
        :aria-labelledby="id"
        :options="mappedSystemConflict"
        optionLabel="label"
        optionGroupLabel="groupLabel"
        optionGroupChildren="items"
        :reset-event="resetEvent"
      />
    </template>
  </InputTableItem>
</template>
