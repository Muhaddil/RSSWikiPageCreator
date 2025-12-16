<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import type { GalleryFileItem } from '@/types/gallery';
import { maxFileSize } from '@/variables/wikiLimits';
import { useDropZone } from '@vueuse/core';
import { storeToRefs } from 'pinia';
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
  dataTypes: (types) => types.every((type) => type.startsWith('image/')),
  multiple: true,
  preventDefaultForUnhandled: true,
});

function onFileInputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const files = Array.from(target.files || []);
  onDrop(files);
  target.value = '';
}
</script>

<template>
  <div class="is-flex is-flex-direction-column is-gap-2 mt-5">
    <p v-if="tooLargeFiles.length" class="error-message">
      <template v-if="tooLargeFiles.length === 1">
        El archivo <strong>{{ tooLargeFiles[0] }}</strong> es demasiado grande para subirlo (máx. 10MB).
      </template>
      <template v-else>
        Los siguientes archivos son demasiado grandes para subirlos (máx. 10MB):
        <ul>
          <li v-for="file in tooLargeFiles" :key="file">
            {{ file }}
          </li>
        </ul>
      </template>
      Comprime tu archivo aquí:
      <ExternalLink link="https://nmscd.com/Image-Compressor/" text="Compresor de imágenes" />
    </p>

    <div ref="dropzone" :class="['upload-container', { 'is-over': isOverDropZone }]">
      <input type="file" id="file-input" accept="image/*" multiple @change="onFileInputChange" style="display: none" />
      <label for="file-input" class="upload-button">
        <i class="pi pi-plus"></i>
        Añadir archivos
      </label>

      <div class="upload-text">
        <p>Suelte los archivos de la galería aquí</p>
      </div>
    </div>

    <Dialog v-model:visible="showInfoModal" modal header="Atención" :closable="true">
      <span>
        Las imágenes seleccionadas <strong>no se subirán automáticamente</strong> a la wiki. Este selector solo agrega
        las imágenes al formulario actual.
      </span>
      <div class="mt-3">
        Para subir imágenes a la wiki, ve a
        <WikiLink link="Special:Upload?multiple=true" text="Especial:Subir" />
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

.upload-container {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  transition: all 0.3s;
}

.upload-container.is-over {
  border-color: #a855f7;
  background-color: rgba(168, 85, 247, 0.1);
}

.upload-button {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #a855f7;
  border-radius: 6px;
  background: transparent;
  color: #a855f7;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.upload-button:hover {
  background: rgba(168, 85, 247, 0.1);
}

.upload-button i {
  font-size: 1rem;
}

.upload-text {
  text-align: center;
}

.upload-text p {
  margin: 0;
}
</style>