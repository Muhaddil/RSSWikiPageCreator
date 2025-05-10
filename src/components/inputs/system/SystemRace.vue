<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedSystemRace } from '@/variables/system/systemrace';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('systemraceinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Facción del sistema:</label>
        <Explainer
          tooltip="Encontrado en la vista ampliada del mapa de galaxias. Si no muestra nada, es 'Inexplorado'."
          help-title="Facción"
          help-img="system/faction"
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
        :options="mappedSystemRace"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
