<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import type { GalleryFileItem } from '@/types/gallery';
import { maxFileSize } from '@/variables/wikiLimits';
import { useDropZone } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import FileUpload, { type FileUploadSelectEvent } from 'primevue/fileupload';
import { ref } from 'vue';
import GalleryPreview from './GalleryPreview.vue';
import ExternalLink from '../../ExternalLink.vue';
import Dialog from 'primevue/dialog';
import WikiLink from '@/helpers/WikiLink.vue';

const pageData = usePageDataStore();
const { galleryFiles } = storeToRefs(pageData);
const tooLargeFiles = ref<string[]>([]);
const showInfoModal = ref(false);
const hasSeenInfoModal = ref(localStorage.getItem('hasSeenInfoModal-Gallery') === 'true');

let id = 0;

function onUpload(e: FileUploadSelectEvent) {
  const files: unknown = e.files;
  if (!Array.isArray(files)) return;

  tooLargeFiles.value = [];

  const validFiles: GalleryFileItem[] = files
    .filter((file) => {
      if (!(file instanceof File)) return false;
      if (file.size > maxFileSize) {
        tooLargeFiles.value.push(file.name);
        return false;
      }
      return true;
    })
    .map((file) => ({
      file,
      id: id++,
      desc: '',
    }));

  if (!hasSeenInfoModal.value && validFiles.length) {
    showInfoModal.value = true;
    hasSeenInfoModal.value = true;
    localStorage.setItem('hasSeenInfoModal-Gallery', 'true');
  }

  if (validFiles.length) {
    galleryFiles.value.unshift(...validFiles);
  }
}

function onDrop(files: File[] | null) {
  if (!files) return;

  tooLargeFiles.value = [];

  const validFiles: GalleryFileItem[] = files
    .filter((file) => {
      if (file.size > maxFileSize) {
        tooLargeFiles.value.push(file.name);
        return false;
      }
      return true;
    })
    .map((file) => ({
      file,
      id: id++,
      desc: '',
    }));

  if (!hasSeenInfoModal.value && validFiles.length) {
    showInfoModal.value = true;
    hasSeenInfoModal.value = true;
    localStorage.setItem('hasSeenInfoModal-Gallery', 'true');
  }

  if (validFiles.length) {
    galleryFiles.value.unshift(...validFiles);
  }
}

const dropzone = ref<HTMLDivElement | null>(null);

const { isOverDropZone } = useDropZone(dropzone, {
  onDrop,
  // specify the types of data to be received.
  dataTypes: (types) => types.every((type) => type.startsWith('image/')),
  // control multi-file drop
  multiple: true,
  // whether to prevent default behavior for unhandled events
  preventDefaultForUnhandled: true,
});
</script>

<template>
  <div class="is-flex is-flex-direction-column is-gap-2 mt-5">
    <p
      v-if="tooLargeFiles.length"
      class="error-message"
    >
      <template v-if="tooLargeFiles.length === 1">
        El archivo <strong>{{ tooLargeFiles[0] }}</strong> es demasiado grande para subirlo (máx. 10MB).
      </template>
      <template v-else>
        Los siguientes archivos son demasiado grandes para subirlos (máx. 10MB):
        <ul>
          <li
            v-for="file in tooLargeFiles"
            :key="file"
          >
            {{ file }}
          </li>
        </ul>
      </template>
      Comprime tu archivo aquí:
      <ExternalLink
        link="https://nmscd.com/Image-Compressor/"
        text="Compresor de imágenes"
      />
    </p>

    <FileUpload
      :maxFileSize="maxFileSize"
      :show-cancel-button="false"
      :show-upload-button="false"
      accept="image/*"
      auto
      custom-upload
      multiple
      @select="onUpload"
    >
      <template #header>
        <div
          class="full-width"
          ref="dropzone"
        >
          <FileUpload
            :class="{ 'p-button-outlined': !isOverDropZone }"
            :maxFileSize="maxFileSize"
            accept="image/*"
            choose-label="Añadir archivos"
            auto
            custom-upload
            mode="basic"
            multiple
            @select="onUpload"
          />
        </div>
      </template>
      <template #empty>
        <div class="is-flex is-justify-content-center is-align-items-center my-5">
          <p>Suelte los archivos de la galería aquí</p>
        </div>
      </template>
    </FileUpload>

    <Dialog
      v-model:visible="showInfoModal"
      modal
      header="Atención"
      :closable="true"
    >
      <span>
        Las imágenes seleccionadas <strong>no se subirán automáticamente</strong> a la wiki. Este selector solo agrega
        las imágenes al formulario actual.
      </span>
      <div class="mt-3">
        Para subir imágenes a la wiki, ve a
        <WikiLink
          link="Special:Upload?multiple=true"
          text="Especial:Subir"
        />
        y súbelas manualmente.
      </div>
      <div class="mt-3">
        <span class="has-text-weight-bold">NOTA</span>: Las imágenes agregadas aquí deben el mismo nombre que las que
        subas a la wiki. Si no, el formulario completará automáticamente el nombre de la imagen incorrectamente.
      </div>
    </Dialog>

    <GalleryPreview />
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
