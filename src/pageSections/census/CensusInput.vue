<script setup lang="ts">
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { watchDebounced } from '@vueuse/core';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import DateSelect from '@/components/inputs/DateSelect.vue';
import { debounceDelay } from '@/variables/debounce';

const pageData = usePageDataStore();
const { discovered, discoveredlink, planet, mode, discDate, system, platform, basename, playername, discordname } =
  storeToRefs(pageData);

const showDiscoveredLink = computed(() => !discovered.value);
const showDiscovered = computed(() => !discoveredlink.value);

const isDiscordValid = ref(true);
watchDebounced(
  discordname,
  (newVal) => {
    const hasValidNewTag = /^[a-z0-9._]+$/.test(newVal);
    isDiscordValid.value = !newVal || hasValidNewTag;
  },
  { debounce: debounceDelay }
);
</script>

<template>
  <SanitisedTextInput
    v-model="playername"
    label="Nombre del Jugador"
    tooltip="Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o)."
  >
    Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
  </SanitisedTextInput>
  <SanitisedTextInput
    v-model="discordname"
    label="Nombre de Discord"
    tooltip="Escribe exactamente como se ve en discord. Cuidado con 0 (cero) y O (o)."
    :invalid="!isDiscordValid"
    error-message="Etiqueta de Discord inválida. Por favor da tu nombre de usuario, no tu apodo."
  >
    Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
  </SanitisedTextInput>
  <SanitisedTextInput
    v-model="system"
    label="Nombre de tu Sistema"
    tooltip="Nombre de tu sistema donde tienes tu base principal."
  />

  <SanitisedTextInput
    v-model="planet"
    label="Nombre de tu Planeta"
    tooltip="Nombre de tu planeta o luna donde tienes tu base principal."
  />

  <SanitisedTextInput
    v-model="basename"
    label="Nombre de tu Base"
    tooltip="Nombre de tu base principal."
  />

  <PlatformSelect v-model="platform" />
  <GameModeSelect v-model="mode" />
  <DateSelect
    v-model="discDate"
    label="Fecha de cuando te uniste a la RSS"
  />

  <SanitisedTextInput
    v-if="showDiscoveredLink"
    v-model="discoveredlink"
    label="Nombre en la wiki del descubridor:"
  />
  <SanitisedTextInput
    v-if="showDiscovered"
    v-model="discovered"
    label="Alias del descubridor si no tiene wiki:"
  />
</template>
