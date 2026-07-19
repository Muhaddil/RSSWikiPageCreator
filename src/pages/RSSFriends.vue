<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watchEffect, nextTick } from 'vue';
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
  { label: 'Korvax', value: 'Korvax', icon: '/assets/images/friends/holo-korvax.png' },
  { label: 'Gek', value: 'Gek', icon: '/assets/images/friends/holo-gek.png' },
  { label: "Vy'keen", value: "Vy'keen", icon: '/assets/images/friends/holo-vykeen.png' },
  { label: 'Anomalía', value: 'Anomalía', icon: '/assets/images/friends/holo-anomalia.png' },
  { label: 'Autofago', value: 'Autofago', icon: '/assets/images/friends/holo-autofago.png' },
  { label: 'Viajero', value: 'Viajero', icon: '/assets/images/friends/holo-viajero.png' },
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

/* ---------------------------------------------------------------------- */
/*  Realistic 3D tilt + glare                                             */
/* ---------------------------------------------------------------------- */

const cardRef = ref<HTMLElement | null>(null);

const tiltX = ref(0);
const tiltY = ref(0);
const isHovering = ref(false);

const glareX = ref(50);
const glareY = ref(50);
const glareOpacity = ref(0);

let targetTiltX = 0;
let targetTiltY = 0;
let currentTiltX = 0;
let currentTiltY = 0;
let rafId: number | null = null;

const animateTilt = () => {
  const ease = 0.15;
  currentTiltX += (targetTiltX - currentTiltX) * ease;
  currentTiltY += (targetTiltY - currentTiltY) * ease;
  tiltX.value = currentTiltX;
  tiltY.value = currentTiltY;

  const stillMoving = Math.abs(targetTiltX - currentTiltX) > 0.01 || Math.abs(targetTiltY - currentTiltY) > 0.01;

  rafId = stillMoving ? requestAnimationFrame(animateTilt) : null;
};

const handleMouseMove = (event: MouseEvent) => {
  const card = cardRef.value;
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const px = (event.clientX - rect.left) / rect.width;
  const py = (event.clientY - rect.top) / rect.height;

  targetTiltY = (px - 0.5) * 18; // máx 18deg horizontal
  targetTiltX = -(py - 0.5) * 18; // máx 18deg vertical

  glareX.value = px * 100;
  glareY.value = py * 100;
  glareOpacity.value = 0.25;

  isHovering.value = true;

  if (!rafId) rafId = requestAnimationFrame(animateTilt);
};

const handleMouseLeave = () => {
  targetTiltX = 0;
  targetTiltY = 0;
  glareOpacity.value = 0;
  isHovering.value = false;

  if (!rafId) rafId = requestAnimationFrame(animateTilt);
};

const card3DStyle = computed(() => ({
  transform: `rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg) scale(${isHovering.value ? 1.015 : 1})`,
  transformStyle: 'preserve-3d' as const,
  transition: isHovering.value ? 'transform 0.05s linear' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
}));

const glareStyle = computed(() => ({
  background: `radial-gradient(circle at ${glareX.value}% ${glareY.value}%, rgba(255,255,255,0.9), transparent 55%)`,
  opacity: glareOpacity.value,
}));

const parallaxStyle = (depth: number) => {
  if (!isHovering.value) {
    return {
      transform: 'translateZ(0px)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    };
  }
  const translateZ = depth * 3;
  return {
    transform: `translateZ(${translateZ}px)`,
    transition: 'transform 0.05s linear',
  };
};

/* ---------------------------------------------------------------------- */

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
  if (rafId) cancelAnimationFrame(rafId);
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
    class="p-0 galactic-card rss-card-container"
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

        <br />

        <SanitisedTextInput
          v-model="playerName"
          placeholder="Nombre"
          class="input-text"
          label="Nombre del jugador"
        />

        <br />

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
              style="width: 195px; left: -87px"
            />
          </div>
        </div>

        <template v-if="usePersonalizedGlyphs">
          <br />

          <GlyphInput v-model="Glyphs" />

          <br />

          <SanitisedTextInput
            v-model="location"
            placeholder="Ubicación"
            class="input-text"
            label="Ubicación"
          />
        </template>

        <br />

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
      <div class="card-perspective-container">
        <div
          ref="cardRef"
          class="rss-card-wrapper"
          :style="card3DStyle"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <img
            class="rss-card-background"
            :class="{ 'parallax-layer': true }"
            :style="parallaxStyle(0)"
            :src="
              usePersonalizedGlyphs
                ? isWhite
                  ? '/assets/images/friends/friend-white-noglyphs.png'
                  : '/assets/images/friends/friend-noglyphs.png'
                : isWhite
                  ? '/assets/images/friends/friend-white.png'
                  : '/assets/images/friends/friend.png'
            "
            alt="Tarjeta RSS"
          />

          <div
            class="card-image-container"
            :class="{ 'parallax-layer': true }"
            :style="parallaxStyle(2)"
          >
            <img
              v-if="navImage"
              :src="navImage"
              alt="Imagen subida"
              class="uploaded-image"
            />
          </div>

          <div
            class="card-name-title"
            :class="{ 'parallax-layer': true }"
            :style="parallaxStyle(3)"
          >
            Nombre
          </div>

          <div
            class="card-race-title"
            :class="{ 'parallax-layer': true }"
            :style="parallaxStyle(3)"
          >
            Raza
          </div>

          <img
            class="card-image-marco"
            :class="{ 'parallax-layer': true }"
            :style="parallaxStyle(2)"
            src="/assets/images/friends/marco.png"
            alt="Tarjeta RSS"
          />

          <div
            class="card-name-field"
            :class="{ 'text-black': isWhite, 'text-white': !isWhite, 'parallax-layer': true }"
            :style="parallaxStyle(4)"
          >
            {{ playerName }}
          </div>

          <div
            class="card-race-field"
            :class="{ 'text-black': isWhite, 'text-white': !isWhite, 'parallax-layer': true }"
            :style="parallaxStyle(4)"
          >
            {{ playerRace }}
          </div>

          <div
            class="card-glyphs-field"
            v-if="usePersonalizedGlyphs"
            :class="{ 'text-black': isWhite, 'text-white': !isWhite, 'parallax-layer': true }"
            :style="parallaxStyle(5)"
          >
            {{ Glyphs }}
          </div>

          <div
            class="card-location-field"
            v-if="usePersonalizedGlyphs"
            :class="{ 'text-black': isWhite, 'text-white': !isWhite, 'parallax-layer': true }"
            :style="parallaxStyle(5)"
          >
            {{ location }}
          </div>

          <div
            class="card-friend-code-field"
            :class="{ 'text-black': isWhite, 'text-white': !isWhite, 'parallax-layer': true }"
            :style="parallaxStyle(3)"
          >
            {{ friendCode }}
          </div>

          <div
            class="card-race-icon-field"
            :class="{ 'parallax-layer': true }"
            :style="parallaxStyle(6)"
          >
            <img
              v-if="playerRaceIcon"
              :src="playerRaceIcon"
              alt="Icono de raza"
              class="race-icon"
            />
          </div>

          <div
            class="card-glare"
            :style="glareStyle"
          ></div>
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
    class="p-0 galactic-card rss-card-container"
    v-if="screenWidth <= 768"
  >
    <template #content>
      <h1>Esta página solo está disponible en pantallas de escritorio.</h1>
    </template>
  </Card>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #ff1a1a 0%, #990000 100%);
  --secondary-gradient: linear-gradient(45deg, #ff1a1a 0%, #cc0000 100%);
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --background-primary: #050505;
  --background-secondary: #0a0a0a;
  --border-color: rgba(255, 26, 26, 0.15);
  --hover-effect: rgba(255, 26, 26, 0.1);
  --tag-background: rgba(255, 26, 26, 0.1);
  --tag-border: #ff1a1a;
  --tag-text: #ff1a1a;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #ff1a1a 0%, #990000 100%);
  --secondary-gradient: linear-gradient(45deg, #ff1a1a 0%, #cc0000 100%);
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --background-primary: #050505;
  --background-secondary: #0a0a0a;
  --border-color: rgba(255, 26, 26, 0.15);
  --hover-effect: rgba(255, 26, 26, 0.1);
  --tag-background: rgba(255, 26, 26, 0.1);
  --tag-border: #ff1a1a;
  --tag-text: #ff1a1a;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

.rss-card-container {
  padding: 1rem;
  position: relative;
  color: var(--text-primary);
}

.card-perspective-container {
  perspective: 1200px;
}

.rss-card-wrapper {
  position: relative;
  width: 100%;
  min-height: 400px;
  background: transparent;
  will-change: transform;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.rss-card-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  pointer-events: none;
  transition: box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 0;
}

.parallax-layer {
  will-change: transform;
  pointer-events: none;
}

.card-glare {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 2000;
  transition: opacity 0.3s ease;
}

.rss-card-background {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0;
}

.card-image-container {
  position: absolute;
  top: 183px;
  left: 50px;
  width: 234px;
  height: 300px;
  /* border: 2px solid #ff1a1a; */
  border-radius: 65px;
  overflow: hidden;
  font-family: NMSFuturaProBook;
}

.card-image-marco {
  position: absolute;
  top: 165px;
  left: 32px;
  width: 274px;
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
  font-family: NMSFuturaProBook;
  color: var(--text-primary);
}

.card-name-title {
  position: absolute;
  top: 210px;
  left: 300px;
  font-size: 2.2rem;
  font-family: NMSFuturaProBook;
  color: #ff1a1a;
}

.card-glyphs-field {
  position: absolute;
  top: 440px;
  left: 300px;
  font-size: 1.3rem;
  font-family: NMS-Glyphs-Mono;
  color: var(--text-primary);
}

.card-location-field {
  position: absolute;
  top: 465px;
  left: 340px;
  font-size: 0.9rem;
  max-width: 180px;
  font-family: NMSFuturaProBook;
  color: var(--text-primary);
}

.card-race-title {
  position: absolute;
  top: 310px;
  left: 300px;
  font-size: 2.2rem;
  font-family: NMSFuturaProBook;
  color: #ff1a1a;
}

.card-race-field {
  position: absolute;
  top: 355px;
  left: 300px;
  width: 200px;
  font-size: 1.8rem;
  font-family: NMSFuturaProBook;
  color: var(--text-primary);
}

.card-race-icon-field {
  position: absolute;
  bottom: 35px;
  right: 55px;
  width: 75px;
}

.card-friend-code-field {
  position: absolute;
  bottom: 20px;
  left: 60px;
  font-size: 2rem;
  font-family: NMSFuturaProBook;
  color: var(--text-primary);
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
  width: 200px;
  background: var(--primary-gradient) !important;
  border: none !important;
  color: white !important;
  font-family: 'Orbitron', monospace !important;
  font-weight: 700 !important;
  font-size: 0.75rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.15em !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 0 !important;
  cursor: pointer;
}

.download-button:hover:not(:disabled) {
  box-shadow: 0 0 20px rgba(255, 26, 26, 0.4);
  transform: translateY(-2px);
}

.download-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.download-button:disabled::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
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
