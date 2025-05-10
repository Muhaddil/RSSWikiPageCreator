<script setup lang="ts">
import WikiLink from './WikiLink.vue';
import ExternalLink from './ExternalLink.vue';
</script>

<template>
  <p>
    Las imágenes que cargues aquí no se cargarán en la wiki. Esto es solo para completar automáticamente el nombre de la
    imagen. El tamaño máximo de archivo es de 10 MB. Puedes cargar tus imágenes en la wiki en
    <WikiLink
      link="Special:Upload?multiple=true"
      text="Especial:Subir"
    />.
  </p>
  <p>
    Puedes comprimir tus imágenes con el
    <ExternalLink
      link="https://nmscd.com/Image-Compressor/"
      text="Compresor de imágenes"
    />.
  </p>
</template>
