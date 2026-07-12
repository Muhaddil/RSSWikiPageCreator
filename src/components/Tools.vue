<script setup lang="ts">
import { ref, type ComponentInstance } from 'vue';
import Menu from 'primevue/menu';
import Button from 'primevue/button';

const menu = ref<ComponentInstance<typeof Menu> | null>(null);

const items = [
  {
    label: 'Herramientas',
    items: [
      {
        label: 'Actualizador Censo RSS',
        url: '/baserenewal',
      },
      {
        label: 'Entrada Censo RSS',
        url: '/census',
      },
      {
        label: 'FAQ',
        url: '/faq',
      },
      {
        label: 'Generador de Glifos de la RSS',
        url: '/glyphgenerator',
      },
      {
        label: 'Compresor de imágenes',
        url: 'https://nmscd.com/Image-Compressor/',
      },
      {
        label: 'Lector de glifos',
        url: 'https://nmspar.vercel.app/',
      },
      {
        label: 'Decodificador de portal',
        url: 'https://nmsportals.github.io/',
      },
    ],
  },
];

const toggle = (event: Event) => menu.value?.toggle(event);
</script>

<template>
  <Button
    aria-controls="overlay-menu"
    aria-haspopup="true"
    icon="pi pi-wrench"
    title="Herramientas"
    @click="toggle"
  />

  <Menu
    :model="items"
    :popup="true"
    id="overlay-menu"
    ref="menu"
  >
    <template #item="{ item, props }">
      <a
        v-bind="props.action"
        :href="item.url"
        rel="noopener noreferrer"
        target="_blank"
        >{{ item.label }}</a
      >
    </template>
  </Menu>
</template>
