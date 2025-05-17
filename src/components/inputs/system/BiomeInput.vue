<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedFloraBiome } from '@/variables/flora/biomes';
import Explainer from '@/components/Explainer.vue';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('biomeinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Bioma</label>
        <Explainer
          tooltip="Se puede determinar por características planetarias"
          help-title="Bioma Planetario"
        >
          Puede determinarse a partir de características planetarias como el clima, las plantas cosechables o los
          recursos disponibles.<br />
          Consulte la
          <a
            href="https://nomanssky.fandom.com/es/wiki/Bioma"
            rel="noreferrer"
            target="_blank"
            >página wiki de Bioma</a
          >
          para obtener más información.
        </Explainer>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedFloraBiome"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
