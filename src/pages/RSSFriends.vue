<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect, nextTick } from 'vue';
import Card from 'primevue/card';
import FileUpload from 'primevue/fileupload';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import html2canvas from 'html2canvas-pro';
import { regexMatch } from '@/helpers/inputValidation';
import { watchDebounced } from '@vueuse/core';
import { debounceDelay } from '@/variables/debounce';
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import Checkbox from 'primevue/checkbox';

const playerName = ref<string>('');
const playerRace = ref<string>('');
const playerRaceIcon = ref<string>('');
const friendCode = ref<string>('');
const navImage = ref<string>('');
const isWhite = ref<string>('');
const Glyphs = ref<string>('');
const location = ref<string>('');
const usePersonalizedGlyphs = ref<string>('');
const scale = ref<number>(1);
const isDownloading = ref(false);

const PlayerRaces = ref([
  { label: 'Korvax', value: 'Korvax', icon: '/RSSWikiPageCreator/assets/images/friends/holo-korvax.png' },
  { label: 'Gek', value: 'Gek', icon: '/RSSWikiPageCreator/assets/images/friends/holo-gek.png' },
  { label: "Vy'keen", value: "Vy'keen", icon: '/RSSWikiPageCreator/assets/images/friends/holo-vykeen.png' },
  { label: 'Anomalía', value: 'Anomalía', icon: '/RSSWikiPageCreator/assets/images/friends/holo-anomalia.png' },
  { label: 'Autofago', value: 'Autofago', icon: '/RSSWikiPageCreator/assets/images/friends/holo-autofago.png' },
  { label: 'Viajero', value: 'Viajero', icon: '/RSSWikiPageCreator/assets/images/friends/holo-viajero.png' },
]);

const onUpload = (event: any) => {
  const file = event.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      navImage.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const screenWidth = ref(window.innerWidth);
let resizeTimeout: NodeJS.Timeout | null = null;

const updateScreenWidth = () => {
  const newWidth = window.innerWidth;

  if (Math.abs(newWidth - screenWidth.value) > 50) {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      screenWidth.value = newWidth;
    }, 500);
  }
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const updateRaceIcon = () => {
  const race = PlayerRaces.value.find((r) => r.value === playerRace.value);
  playerRaceIcon.value = race ? race.icon : '';
};

const downloadCard = async () => {
  const cardElement = document.querySelector('.rss-card-wrapper') as HTMLElement;
  if (!cardElement) return;

  await nextTick();

  const rect = cardElement.getBoundingClientRect();
  isDownloading.value = true;

  try {
    requestAnimationFrame(async () => {
      try {
        const canvas = await html2canvas(cardElement, {
          scale: scale.value || 1,
          backgroundColor: null,
          useCORS: true,
          width: rect.width,
          height: rect.height,
          logging: false,
        });

        const image = canvas.toDataURL('image/png');
        descargarImagen(image);
      } catch (error) {
        console.error('Error al generar la imagen:', error);
      } finally {
        isDownloading.value = false;
      }
    });
  } catch (error) {
    console.error('Error al descargar la imagen:', error);
    isDownloading.value = false;
  }
};

const descargarImagen = (imagen: string) => {
  const link = document.createElement('a');
  link.href = imagen;
  link.download = 'tarjeta.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

watchEffect(() => (friendCode.value = friendCode.value.toUpperCase()));

const isFriendCodeValid = ref(true);
watchDebounced(
  friendCode,
  (newVal) => {
    const friendCodeRegex = new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/);
    const matchesRegex = regexMatch(newVal, friendCodeRegex);
    isFriendCodeValid.value = !newVal || matchesRegex;
  },
  { debounce: debounceDelay }
);
</script>

<template>
  <Card
    class="rss-card-container"
    v-if="screenWidth > 768"
  >
    <template #content>
      <div class="upload-section">
        <div class="columns is-mobile mb-0">
          <div class="column is-flex is-align-items-center">
            <label>¿En blanco?</label>
          </div>
          <div class="column is-flex">
            <Checkbox
              v-model="isWhite"
              true-value="true"
              false-value=""
              class="input-text"
              style="width: 185px; left: -12px"
              binary
            />
          </div>
        </div>

        <div class="columns is-mobile mb-0">
          <div class="column is-flex is-align-items-center">
            <label>¿Usar ubicación personalizada?</label>
          </div>
          <div class="column is-flex">
            <Checkbox
              v-model="usePersonalizedGlyphs"
              true-value="true"
              false-value=""
              class="input-text"
              style="width: 185px; left: -12px"
              binary
            />
          </div>
        </div>

        <SanitisedTextInput
          :model-value="scale.toString()"
          @update:model-value="scale = Math.min(Number($event) || 1, 10)"
          placeholder="Número"
          class="input-text"
          label="Escala de salida de la foto"
          tooltip="La escala máxima es 10"
        />

        <SanitisedTextInput
          v-model="playerName"
          placeholder="Nombre"
          class="input-text"
          label="Nombre del jugador"
        />

        <div class="columns is-mobile mb-0">
          <div class="column is-flex is-align-items-center">
            <label>Raza del Jugador</label>
          </div>
          <div class="column is-flex">
            <SelectDropdown
              v-model="playerRace"
              :options="PlayerRaces.map((r) => r.value)"
              @update:model-value="updateRaceIcon"
              class="input-text"
              style="width: 185px; left: -12px"
            />
          </div>
        </div>

        <GlyphInput
          v-model="Glyphs"
          v-if="usePersonalizedGlyphs"
        />

        <SanitisedTextInput
          v-model="location"
          v-if="usePersonalizedGlyphs"
          placeholder="Ubicación"
          class="input-text"
          label="Ubicación"
        />

        <SanitisedTextInput
          v-model="friendCode"
          placeholder="Código de amigo"
          class="input-text"
          label="Código de amigo"
          :invalid="!isFriendCodeValid"
          error-message="Formato de código de amigo incorrecto"
        />

        <br />

        <FileUpload
          mode="basic"
          name="navImage"
          :auto="true"
          :customUpload="true"
          @uploader="onUpload"
          accept="image/*"
          chooseLabel="Subir imagen"
        >
          <template #content>
            <FileUploadNotice />
          </template>
        </FileUpload>
      </div>

      <br />
      <div
        ref="cardElement"
        class="rss-card-wrapper"
      >
        <img
          class="rss-card-background"
          :src="
            usePersonalizedGlyphs
              ? isWhite
                ? '/RSSWikiPageCreator/assets/images/friends/friend-white-noglyphs.png'
                : '/RSSWikiPageCreator/assets/images/friends/friend-noglyphs.png'
              : isWhite
                ? '/RSSWikiPageCreator/assets/images/friends/friend-white.png'
                : '/RSSWikiPageCreator/assets/images/friends/friend.png'
          "
          alt="Tarjeta RSS"
        />

        <div class="card-image-container">
          <img
            v-if="navImage"
            :src="navImage"
            alt="Imagen subida"
            class="uploaded-image"
          />
        </div>

        <div class="card-name-title">Nombre</div>

        <div class="card-race-title">Raza</div>

        <img
          class="card-image-marco"
          src="/assets/images/friends/marco.png"
          alt="Tarjeta RSS"
        />

        <div
          class="card-name-field"
          :class="{ 'text-black': isWhite, 'text-white': !isWhite }"
        >
          {{ playerName }}
        </div>

        <div
          class="card-race-field"
          :class="{ 'text-black': isWhite, 'text-white': !isWhite }"
        >
          {{ playerRace }}
        </div>

        <div
          class="card-glyphs-field"
          v-if="usePersonalizedGlyphs"
          :class="{ 'text-black': isWhite, 'text-white': !isWhite }"
        >
          {{ Glyphs }}
        </div>

        <div
          class="card-location-field"
          v-if="usePersonalizedGlyphs"
          :class="{ 'text-black': isWhite, 'text-white': !isWhite }"
        >
          {{ location }}
        </div>

        <div
          class="card-friend-code-field"
          :class="{ 'text-black': isWhite, 'text-white': !isWhite }"
        >
          {{ friendCode }}
        </div>

        <div class="card-race-icon-field">
          <img
            v-if="playerRaceIcon"
            :src="playerRaceIcon"
            alt="Icono de raza"
            class="race-icon"
          />
        </div>
      </div>

      <br />
      <div class="download-section">
        <Button
          @click="downloadCard"
          class="download-button"
          :disabled="isDownloading"
          :loading="isDownloading"
          style="color: white"
        >
          <template #icon>
            <ProgressSpinner
              v-if="isDownloading"
              class="pi pi-spin pi-spinner"
            />
          </template>
          {{ isDownloading ? 'Generando imagen...' : 'Descargar Carta' }}
        </Button>
      </div>
      <br />
      <br />
      <br />
      <h2><i>Imágenes creadas por paux1926.</i></h2>
    </template>
  </Card>

  <Card
    class="rss-card-container"
    v-if="screenWidth <= 768"
  >
    <template #content>
      <h1>Esta página solo está disponible en pantallas de escritorio.</h1>
    </template>
  </Card>
</template>

<style scoped>
.rss-card-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
}

.rss-card-wrapper {
  position: relative;
  width: 100%;
  min-height: 400px;
  background: transparent;
}

.rss-card-background {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-image-container {
  position: absolute;
  top: 175px;
  left: 50px;
  width: 225px;
  height: 295px;
  border: 2px solid #e00;
  border-radius: 65px;
  overflow: hidden;
  font-family: 'NMSFuturaProBook';
}

.card-image-marco {
  position: absolute;
  top: 158px;
  left: 32px;
  width: 265px;
  height: auto;
  border-radius: 65px;
  z-index: 1000;
}

.uploaded-image {
  height: 100%;
  object-fit: cover;
}

.card-name-field {
  position: absolute;
  top: 250px;
  left: 300px;
  width: 200px;
  font-size: 1.8rem;
  font-family: 'NMSFuturaProBook';
}

.card-name-title {
  position: absolute;
  top: 205px;
  left: 300px;
  font-size: 2.2rem;
  font-family: 'NMSFuturaProBook';
  color: rgb(168, 0, 0);
}

.card-glyphs-field {
  position: absolute;
  top: 440px;
  left: 300px;
  font-size: 1.3rem;
  font-family: 'NMS-Glyphs-Mono';
}

.card-location-field {
  position: absolute;
  top: 410px;
  left: 290px;
  font-size: 0.9rem;
  max-width: 180px;
  font-family: 'NMSFuturaProBook';
}

.card-race-title {
  position: absolute;
  top: 305px;
  left: 300px;
  font-size: 2.2rem;
  font-family: 'NMSFuturaProBook';
  color: rgb(168, 0, 0);
}

.card-race-field {
  position: absolute;
  top: 345px;
  left: 300px;
  width: 200px;
  font-size: 1.8rem;
  font-family: 'NMSFuturaProBook';
}

.card-race-icon-field {
  position: absolute;
  bottom: 25px;
  right: 53px;
  width: 75px;
}

.card-friend-code-field {
  position: absolute;
  bottom: 20px;
  left: 60px;
  font-size: 2rem;
  font-family: 'NMSFuturaProBook';
}

.input-text {
  width: 100%;
}

.upload-section {
  margin-top: 2rem;
}

.text-black {
  color: black;
}

.text-white {
  color: white;
}

.download-button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 150px;
}

.download-button:disabled {
  opacity: 0.8;
  background-color: var(--primary-color);
  cursor: not-allowed;
}

.download-button:disabled::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  100% {
    left: 100%;
  }
}

.pi-spinner {
  margin-right: 0.5rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
