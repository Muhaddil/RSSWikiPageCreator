<script setup lang="ts">
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import DateSelect from '@/components/inputs/DateSelect.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watchEffect, onMounted } from 'vue';
import InputTableItem from '@/components/InputTableItem.vue';
import SanitisedTextInput from './SanitisedTextInput.vue';
import { watchDebounced } from '@vueuse/core';
import { debounceDelay } from '@/variables/debounce';
import { isValidHttpUrl, regexMatch } from '@/helpers/inputValidation';
import TextInput from './TextInput.vue';
import Explainer from '@/components/Explainer.vue';

const pageData = usePageDataStore();
const { censusplayer, censussocial, censusreddit, censusdiscord, censusfriend, censusarrival, censusshow } =
  storeToRefs(pageData);

const isCollapsed = ref(false);

// validate Discord name format
const isDiscordValid = ref(true);
watchDebounced(
  censusdiscord,
  (newVal) => {
    const hasValidNewTag = /^[a-z0-9._]+$/.test(newVal);
    isDiscordValid.value = !newVal || hasValidNewTag;
  },
  { debounce: debounceDelay }
);

onMounted(() => {
  if (!censusshow.value) {
    censusshow.value = 'Y';
  }
});

// fix reddit input (remove leading 'u/')
watchEffect(() => {
  if (censusreddit.value.toLowerCase().startsWith('u/')) censusreddit.value = censusreddit.value.substring(2);
});

// validate Reddit name format
const isRedditValid = computed(() => !censusreddit.value.includes(' '));

// capitalise friend code
watchEffect(() => (censusfriend.value = censusfriend.value.toUpperCase()));

// validate friend code format
const isFriendCodeValid = ref(true);
watchDebounced(
  censusfriend,
  (newVal) => {
    const friendCodeRegex = new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/);
    const matchesRegex = regexMatch(newVal, friendCodeRegex);
    isFriendCodeValid.value = !newVal || matchesRegex;
  },
  { debounce: debounceDelay }
);

// validate social link
const isSocialLinkValid = ref(true);
watchDebounced(
  censussocial,
  (newVal) => (isSocialLinkValid.value = !newVal || isValidHttpUrl(newVal) || newVal.startsWith('{{')),
  { debounce: debounceDelay }
);
</script>

<template>
  <Panel
    v-model:collapsed="isCollapsed"
    class="my-4"
    header="Censo"
    toggleable
  >
    <template #toggleicon>
      <span :class="`pi pi-chevron-${isCollapsed ? 'down' : 'up'}`"></span>
    </template>
    <SanitisedTextInput
      v-model="censusplayer"
      help-img="base/playerName"
      help-title="Nombre del Jugador"
      label="Nombre en el juego"
      tooltip="Tu nombre en el juego"
      >Tu nombre en el juego. No incluyas los títulos del juego.
    </SanitisedTextInput>
    <SanitisedTextInput
      v-if="!censussocial"
      v-model="censusreddit"
      :invalid="!isRedditValid"
      error-message="El nombre de Reddit no debe incluir espacios"
      label="Nombre de Reddit"
      tooltip='Tu nombre de Reddit. "u/" no es necesario'
    />
    <SanitisedTextInput
      v-if="!censusreddit"
      v-model="censussocial"
      :invalid="!isSocialLinkValid"
      error-message="Por favor proporciona el enlace completo"
      label="Nombre en redes sociales"
      tooltip="Perfil en redes sociales si no tienes Reddit (Facebook, Instagram, Wiki, etc). Pon aquí el enlace completo"
    />
    <SanitisedTextInput
      v-model="censusdiscord"
      :invalid="!isDiscordValid"
      error-message="Etiqueta de Discord inválida. Por favor da tu nombre de usuario, no tu apodo."
      label="Nombre de Discord"
      tooltip="Tu nombre de Discord. Por favor ingresa tu nombre de usuario, no tu apodo"
    />
    <TextInput
      v-model="censusfriend"
      :invalid="!isFriendCodeValid"
      error-message="Formato de código de amigo incorrecto"
      help-img="base/friendCode"
      help-title="Código de Amigo NMS"
      label="Código de amigo"
      tooltip="Se puede encontrar en las Opciones"
    >
      Puedes encontrar tu código de amigo en Opciones &rarr; Red &rarr; Ver Lista de Amigos de No Man's Sky &rarr;
      Mostrar mi Código de Amigo de No Man's Sky
    </TextInput>
    <DateSelect
      v-model="censusarrival"
      label="Fecha de llegada a la RSS"
      tooltip="La fecha en la que te uniste a la Royal Space Society"
    />
    <InputTableItem class="census-row">
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label for="census-checkbox">Crear entrada de censo</label>
          <Explainer
            tooltip="Si se quiere crear una entrada en el censo para esta base, marque esta casilla."
            help-title="¿Añadir al censo?"
          >
            Marque la casilla si quiere que esta base aparezca en el censo de la RSS.
            <br />
            <br />
            <strong>Nota importante:</strong> Solo se puede tener una base en el censo por cuenta de jugador.
          </Explainer>
        </div>
      </template>
      <template #input>
        <Checkbox
          v-model="censusshow"
          false-value=""
          input-id="census-checkbox"
          true-value="Y"
          binary
        />
      </template>
    </InputTableItem>
  </Panel>
</template>

<style scoped>
.census-row :deep(.column) {
  padding-block-end: 0;
}
</style>
