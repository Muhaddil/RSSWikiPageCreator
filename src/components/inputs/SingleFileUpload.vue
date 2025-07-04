<script setup lang="ts">
import { useId } from '@/helpers/id';
import { maxFileSize } from '@/variables/wikiLimits';
import type { FileUploadSelectEvent } from 'primevue/fileupload';
import FileUpload from 'primevue/fileupload';
import InputText from 'primevue/inputtext';
import InputTableItem from '../InputTableItem.vue';
import { useDropZone, useElementBounding, useEventListener, watchDebounced } from '@vueuse/core';
import InputGroup from 'primevue/inputgroup';
import { computed, ref } from 'vue';
import Explainer from '../Explainer.vue';
import { debounceDelay } from '@/variables/debounce';
import ExternalLink from '../ExternalLink.vue';
import InvalidInput from '../InvalidInput.vue';
import Dialog from 'primevue/dialog';
import WikiLink from '@/helpers/WikiLink.vue';

defineProps<{
  label: string;
  tooltip?: string;
  helpImg?: string;
  helpTitle?: string;
}>();

const model = defineModel<string>({ required: true });
const showInfoModal = ref(false);
const isTooLarge = ref(false);
const hasFileEnding = ref(true);

const isInvalid = computed(() => isTooLarge.value || !hasFileEnding.value);

useEventListener(document, 'reset', () => (isTooLarge.value = false));

watchDebounced(model, (newVal) => (hasFileEnding.value = !newVal || newVal.includes('.')), {
  debounce: debounceDelay,
});

const hasSeenInfoModal = ref(localStorage.getItem('hasSeenInfoModal') === 'true');

function onUpload(e: FileUploadSelectEvent) {
  const file = e.files[0];
  if (!(file instanceof File)) return;

  if (!hasSeenInfoModal.value) {
    showInfoModal.value = true;
    hasSeenInfoModal.value = true;
    localStorage.setItem('hasSeenInfoModal', 'true');
  }

  updateFile([file]);
}

function updateFile(files: File[] | null) {
  const file = files?.[0];
  if (!file) return;
  const fileSize = file.size;
  const fileIsTooBig = fileSize > maxFileSize;
  isTooLarge.value = fileIsTooBig;
  if (fileIsTooBig) return;
  const fileName = file.name;
  model.value = fileName;
}

const id = useId('file-upload-');

const dropzone = ref<HTMLDivElement | null>(null);
const inputWrapper = ref<HTMLDivElement | null>(null);
const textInput = ref();

const { isOverDropZone } = useDropZone(dropzone, {
  onDrop: updateFile,
  // specify the types of data to be received.
  dataTypes: (types) => types.every((type) => type.startsWith('image/')),
  // control multi-file drop
  multiple: false,
  // whether to prevent default behavior for unhandled events
  preventDefaultForUnhandled: true,
});

const { height } = useElementBounding(textInput);
const halfHeight = computed(() => height.value / 2);

const { width } = useElementBounding(inputWrapper);
const smallContainerWidth = 200;
const isSmallScreen = computed(() => width.value <= smallContainerWidth);
</script>

<template>
  <div ref="dropzone">
    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label :for="id">{{ label }}</label>
          <Explainer
            v-if="tooltip"
            :help-img
            :help-title
            :tooltip
          >
            <slot></slot>
          </Explainer>
        </div>
      </template>

      <template #input>
        <div ref="inputWrapper">
          <Dialog
            v-model:visible="showInfoModal"
            modal
            header="Atención"
            :closable="true"
          >
            <span>
              No olvides subir tu foto a la wiki en
              <WikiLink
                link="Special:Upload?multiple=true"
                text="Especial:Subir"
              />. El botón de carga solo completa automáticamente el nombre de la imagen en el código, no se carga
              automáticamente en la wiki.
            </span>
            <div class="mt-3">
              <span class="has-text-weight-bold">NOTA</span>: Puede acceder a esta ventana emergente en cualquier
              momento haciendo clic en "?" junto al botón de carga de la imagen principal.
            </div>
          </Dialog>

          <InvalidInput
            :invalid="isInvalid"
            :top="`${halfHeight}px`"
            :move-left="isSmallScreen ? undefined : '5.5rem'"
          >
            <component
              :class="{ 'is-flex is-flex-direction-column is-gap-1': isSmallScreen }"
              :is="isSmallScreen ? 'div' : InputGroup"
            >
              <InputText
                v-model="model"
                :id
                :invalid="isInvalid"
                ref="textInput"
                size="small"
              />
              <FileUpload
                :class="{ 'p-button-outlined': !isOverDropZone }"
                accept="image/*"
                class="p-button-sm upload-button"
                mode="basic"
                auto
                custom-upload
                chooseLabel="Elegir"
                @select="onUpload"
              />
            </component>

            <template
              #errorMessage
              v-if="isTooLarge"
            >
              Este archivo es demasiado grande para subirlo a la wiki. El tamaño máximo es de 10 MB. Comprime tu archivo
              aquí:
              <ExternalLink
                link="https://nmscd.com/Image-Compressor/"
                text="Compresor de imágenes"
              />
            </template>

            <template
              #errorMessage
              v-else-if="!hasFileEnding"
              >¡El archivo no tiene extensión de archivo (es decir, .jpg, .png)!</template
            >
          </InvalidInput>
        </div>
      </template>
    </InputTableItem>
  </div>
</template>

<style scoped>
:deep(.upload-button) {
  --p-inputgroup-addon-border-radius: 0;
}
</style>
