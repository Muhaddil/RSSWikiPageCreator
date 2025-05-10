<template>
  <a
    :href="url"
    :title="title"
    class="button"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  >
    {{ text }}
    <span
      class="alt-text"
      v-if="!img"
      >{{ imgAlt }}</span
    >
  </a>
</template>

<script setup lang="ts">
import type { PageLinkProps } from '@/types/homePageProps';
import { computed } from 'vue';

const props = defineProps<PageLinkProps>();

const title = computed(() => {
  const vowels = 'aeiou';
  const firstLetter = props.text.slice(0, 1).toLowerCase();
  return `Crea ${vowels.includes(firstLetter) ? 'un' : 'una'} página de ${props.imgAlt}`;
});
</script>

<style scoped lang="scss">
a.button {
  // background-color: var(--boton-backgoundcolor);
  background: no-repeat center center; // No necesitas especificar la URL de la imagen aquí
  background-size: contain; // Esto hará que la imagen cubra todo el botón
  min-height: 300px;
  border: none;
  color: var(--boton-fontcolor);
  font-weight: bold;
  padding: 15px 30px;
  text-decoration: none;
  // border-radius: 5px;
  // box-shadow: 2px 2px 4px rgba(167, 166, 177, 0.5);
  transition: all 0.5s ease;
  margin-bottom: -15px;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    a.button {
      min-height: 350px;
    }
  }

  &:hover {
    // background-color: rgb(197, 0, 1);
    transform: scale(1.2);
  }
}

.alt-text {
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>
