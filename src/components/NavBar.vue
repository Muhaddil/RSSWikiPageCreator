<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';

const sandwormLink = ref('');
const faunaLink = ref('');
const planetLink = ref('');
const moonLink = ref('');
const isIndexPage = ref('');

const isVercel = ref(false);

onMounted(() => {
  const currentUrl = window.location.href;

  if (currentUrl.includes('.html')) {
    isIndexPage.value = 'something';
  }

  if (currentUrl.includes('.vercel.app')) {
    isVercel.value = true;
  }

  if (currentUrl.includes('fauna.html')) {
    sandwormLink.value = 'sandworm.html';
  }

  if (currentUrl.includes('sandworm.html')) {
    faunaLink.value = 'fauna.html';
  }

  if (currentUrl.includes('planet.html')) {
    moonLink.value = 'moon.html';
  }

  if (currentUrl.includes('moon.html')) {
    planetLink.value = 'planet.html';
  }
});
</script>

<template>
  <Button
    v-if="!isIndexPage"
    :href="'https://muhaddil.github.io/'"
    as="a"
    icon="pi pi-arrow-left"
    label="Ver Otras Páginas"
    link
  />
  <Button
    v-if="!isIndexPage"
    :href="'rsslinks.html'"
    as="a"
    icon="pi pi-arrow-right"
    label="Portal Comunidad"
    link
  />
  <Button
    v-if="isIndexPage"
    :href="isVercel ? '/' : '/RSSWikiPageCreator/'"
    as="a"
    icon="pi pi-arrow-left"
    label="Volver al Menu Principal"
    link
  />

  <Button
    v-if="sandwormLink"
    :href="sandwormLink"
    as="a"
    icon="pi pi-arrow-right"
    label="Ir a Gusano de arena"
    link
  />
  <Button
    v-if="faunaLink"
    :href="faunaLink"
    as="a"
    icon="pi pi-arrow-right"
    label="Ir a Fauna"
    link
  />
  <Button
    v-if="moonLink"
    :href="moonLink"
    as="a"
    icon="pi pi-arrow-right"
    label="Lunas"
    link
  />
  <Button
    v-if="planetLink"
    :href="planetLink"
    as="a"
    icon="pi pi-arrow-right"
    label="Planetas"
    link
  />
</template>
