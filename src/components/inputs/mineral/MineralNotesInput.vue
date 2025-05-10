<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedMineralNotes } from '@/variables/mineral/notes';
import Explainer from '../../Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('floranotes');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Notas:</label>
        <Explainer
          tooltip=" Encontrado en el escaneo de minerales."
          help-title="Notas del mineral"
          help-img="mineral/notes"
        >
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedMineralNotes"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
