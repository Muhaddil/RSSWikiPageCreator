<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedSystemStarcolor } from '@/variables/system/starcolor';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('biomeinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Color de la estrella (primaria):</label>
        <Explainer
          tooltip="Color como se ve en el mapa galáctico."
          help-title="Color de estrella"
        >
          Color como se ve en el mapa de galaxias. Asegúrate de no tener ningún filtro activo.<br />
          Los colores suelen correlacionarse con el metal estelar disponible en el sistema:
          <div class="dialog-center">
            <ul class="dialog-list">
              <li>Cobre: Amarillo</li>
              <li>Cadmio: Rojo</li>
              <li>Emerilio: Verde</li>
              <li>Indio: Azul</li>
            </ul>
          </div>
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedSystemStarcolor"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
