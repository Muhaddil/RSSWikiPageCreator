<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedSystemStarnum } from '@/variables/system/starnumber';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('biomeinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Numero de estrellas:</label>
        <Explainer
          tooltip="Número de estrellas locales visibles en el espacio."
          help-title="Numero de estrellas"
          help-img="system/numOfStars"
        >
          Número de estrellas locales visibles en el espacio.<br />
          Ingrese al modo Foto, luego presione el botón para rotar la estrella del sistema hacia su cursor.<br />
          Ingresa el número de estrellas que ves.<br />
          Este por ejemplo es 1 estrella:
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedSystemStarnum"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
