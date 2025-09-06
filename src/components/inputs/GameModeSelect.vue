<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../InputTableItem.vue';
import SelectDropdown from './SelectDropdown.vue';
import { mappedModeOptions } from '@/variables/gamemodes';
import Explainer from '../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('gamemode-');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Modo de juego</label>
        <Explainer
          tooltip="Modo de juego de la partida."
          help-img="shared/gamemode"
          help-title="Modo de juego"
        >
          Modo de juego de la partida.<br />Encontrado en el menú principal:
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedModeOptions"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
