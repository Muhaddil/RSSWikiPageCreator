<script setup lang="ts">
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';
import InputRow from '../structure/InputRow.vue';
import ErrorMessage from './ErrorMessage.vue';
import { computed } from 'vue';
import Explanation from '../structure/Explanation.vue';
import WikiLink from '../structure/WikiLink.vue';

const validGlyphsRegex = /[0-9A-F]/;
const maxGlyphLength = 12;

const pageData = usePageDataStore();
const { glyphs, isValidGlyphs } = storeToRefs(pageData);

function addGlyph(e: Event) {
  if (
    !e.target ||
    !(
      e.target instanceof HTMLButtonElement ||
      (e.target instanceof HTMLElement && e.target.parentElement instanceof HTMLButtonElement)
    )
  )
    return;
  const buttonElement = e.target instanceof HTMLButtonElement ? e.target : e.target.parentElement;
  if (buttonElement instanceof HTMLButtonElement && glyphs.value.length < maxGlyphLength)
    glyphs.value += buttonElement.value;
}

function deleteGlyph() {
  glyphs.value = glyphs.value.slice(0, -1);
}

function lintGlyphs() {
  glyphs.value = glyphs.value
    .toUpperCase()
    .split('')
    .filter((char: string) => validGlyphsRegex.test(char))
    .join('');
}

const numberToGlyph = (n: number) => n.toString(16).toUpperCase(); // NoSonar this is dec to hex
const isInvalidGlyphs = computed(() => glyphs.value.length === maxGlyphLength && !isValidGlyphs.value);

</script>

<template>
  <InputRow>
    <template #label>
      <div class="label-combo">
        <label for="portalglyphsInput">Glifos:</label>
        <button
          class="button is-small is-danger"
          type="button"
          id="glyphDeleteButton"
          @click="deleteGlyph"
        >
          &larr; Borrar
        </button>
      </div>
      <Explanation img="shared/glyphs">
        Encontrado en modo foto. Los glifos son específicos de cada planeta.        <template #heading>Glifos del portal</template>
        <template #content>
          Encontrado en modo foto. Los glifos son específicos de cada planeta.
          <iframe
            src="https://nmspar.vercel.app/"
            sandbox="allow-scripts allow-same-origin"
            title="Glyph Reader"
            class="explanation-embed"
            width="450"
            height="300"
            >Lector de glifos</iframe
          >
        </template>
      </Explanation>
    </template>

    <template #input>
      <input
        :class="{ 'error-input': isInvalidGlyphs }"
        class="glyphs-input"
        id="portalglyphsInput"
        type="text"
        maxlength="12"
        v-model="glyphs"
        @input="lintGlyphs"
      />

      <ErrorMessage
        v-if="isInvalidGlyphs"
        class="error"
        >No es una región valida de la RSS, por favor mira las
        <WikiLink
          link="Regions_RSS"
          text="regiones de la RSS"
        /> para obtener una lista de regiones validas.</ErrorMessage>
    </template>
  </InputRow>
  <InputRow>
    <div id="portalglyphButtons">
      <button
        v-for="n in 16"
        class="button"
        type="button"
        :id="'glyphButton' + n"
        :value="numberToGlyph(n - 1)"
        @click="addGlyph"
      >
        <span class="glyph icon is-small">{{ numberToGlyph(n - 1) }}</span>
      </button>
    </div>

    <output
      name="portalglyphs"
      id="portalglyphsPreview"
      class="glyph"
      >{{ glyphs }}</output
    >
  </InputRow>
</template>
