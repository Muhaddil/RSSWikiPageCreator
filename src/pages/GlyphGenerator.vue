<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface RegionOption {
  key: string;
  name: string;
  galaxy: string;
}

const regionsData: Record<string, { name: string; galaxy: string }> = {
  F7EC0D24: { name: 'Bajíos de Uekenbe', galaxy: 'Euclides' },
  '032FE9B0': { name: 'Bajíos de Uklots', galaxy: 'Euclides' },
  FEA34C10: { name: 'Frontera de Eighba', galaxy: 'Euclides' },
  F7EC0D25: { name: 'Xecroften', galaxy: 'Euclides' },
  F8EBDD24: { name: 'Areyas', galaxy: 'Euclides' },
  '0EEC7D10': { name: 'Mar de Ticrops', galaxy: 'Euclides' },
  FBF21696: { name: 'Vacío de Uhcheimri', galaxy: 'Eissentam' },
  F7EC1D24: { name: 'Sector Becheeth', galaxy: 'Euclides' },
  F9F846D8: { name: 'Nebulosa de Emcalh', galaxy: 'Euclides' },
  F6EC0D23: { name: 'Cúmulo de Juhalbe', galaxy: 'Euclides' },
  '0AAEBB96': { name: 'Límite de Larinar', galaxy: 'Euclides' },
  '0266CF95': { name: 'Skitco', galaxy: 'Dimensión de Hilbert' },
  F7EBFD24: { name: 'Bajíos de Udrupi', galaxy: 'Euclides' },
  F7EBFD25: { name: 'Bajíos de Jiessl', galaxy: 'Euclides' },
  FF9B4CB0: { name: 'Vacío de Qudsor', galaxy: 'Eissentam' },
  F7EBFD23: { name: 'Nebulosa de Gumita', galaxy: 'Euclides' },
  FE388B4E: { name: 'Cúmulo de Jajaja', galaxy: 'Budullangr' },
};

const selectedRegionKey = ref('');
const displayedGlyphs = ref<string[]>(Array(12).fill('0'));
const isAnimating = ref(false);
const copied = ref(false);
const lockedGlyphs = ref<number[]>([]);
const hasGenerated = ref(false);

const currentRegion = computed(() => regionsData[selectedRegionKey.value] || { name: '---', galaxy: '---' });

const regionOptions = computed((): RegionOption[] => {
  return Object.entries(regionsData)
    .map(([key, { name, galaxy }]) => ({ key, name, galaxy }))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));
});

const glyphString = computed(() => displayedGlyphs.value.join(''));

const canGenerate = computed(() => selectedRegionKey.value && !isAnimating.value);

const canCopy = computed(() => hasGenerated.value && !isAnimating.value && glyphString.value !== '000000000000');

const randomGlyphChar = (): string => {
  const chars = '0123456789ABCDEF';
  return chars[Math.floor(Math.random() * chars.length)];
};

const generateGlyphsLogic = (regionKey: string): string => {
  let glyphs = '0';
  for (let i = 0; i < 3; i++) {
    glyphs += randomGlyphChar();
  }
  glyphs += regionKey;
  return glyphs.substring(0, 12).padEnd(12, '0');
};

const handleGenerate = async () => {
  if (!canGenerate.value) return;

  isAnimating.value = true;
  hasGenerated.value = false;
  lockedGlyphs.value = [];

  const finalGlyphString = generateGlyphsLogic(selectedRegionKey.value);
  const finalGlyphs = finalGlyphString.split('');

  const lockDuration = 1200;
  const scrambleDuration = 600;
  const lockInterval = lockDuration / 12;

  const scrambleInterval = setInterval(() => {
    displayedGlyphs.value = displayedGlyphs.value.map((_, i) =>
      lockedGlyphs.value.includes(i) ? finalGlyphs[i] : randomGlyphChar()
    );
  }, 50);

  await new Promise((resolve) => setTimeout(resolve, scrambleDuration));
  clearInterval(scrambleInterval);

  for (let i = 0; i < 12; i++) {
    await new Promise((resolve) => setTimeout(resolve, lockInterval));
    lockedGlyphs.value.push(i);
    displayedGlyphs.value = [...displayedGlyphs.value];
    displayedGlyphs.value[i] = finalGlyphs[i];
  }

  await new Promise((resolve) => setTimeout(resolve, 200));

  lockedGlyphs.value = [];
  isAnimating.value = false;
  hasGenerated.value = true;
};

const copyToClipboard = async () => {
  if (!canCopy.value) return;

  try {
    await navigator.clipboard.writeText(glyphString.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch (err) {
    console.error('Error al copiar:', err);
  }
};

watch(selectedRegionKey, () => {
  displayedGlyphs.value = Array(12).fill('0');
  lockedGlyphs.value = [];
  hasGenerated.value = false;
  copied.value = false;
});
</script>

<template>
  <div class="glyph-card">
    <div class="particles">
      <div
        v-for="i in 20"
        :key="i"
        class="particle"
        :style="{
          '--delay': `${Math.random() * 5}s`,
          '--duration': `${5 + Math.random() * 10}s`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
        }"
      ></div>
    </div>

    <div class="card-header">
      <div class="icon-badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <h2>Generador de Glifos</h2>
      <p class="subtitle">Coordenadas precisas del portal galáctico</p>
    </div>

    <div class="card-body">
      <div class="input-group">
        <label for="region-select">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle
              cx="12"
              cy="10"
              r="3"
            />
          </svg>
          Región Galáctica
        </label>
        <div class="select-wrapper">
          <select
            id="region-select"
            v-model="selectedRegionKey"
          >
            <option
              value=""
              disabled
            >
              Selecciona una región...
            </option>
            <option
              v-for="option in regionOptions"
              :key="option.key"
              :value="option.key"
            >
              {{ option.name }} • {{ option.galaxy }}
            </option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
      </div>

      <button
        class="generate-btn"
        :disabled="!canGenerate"
        @click="handleGenerate"
      >
        <span class="btn-content">
          <svg
            v-if="!isAnimating"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <div
            v-else
            class="loader"
          ></div>
          {{ isAnimating ? 'CALCULANDO' : 'GENERAR GLIFOS' }}
        </span>
      </button>

      <div
        class="output-area"
        :class="{ active: selectedRegionKey }"
      >
        <div class="glyphs-container">
          <div
            v-for="(glyph, index) in displayedGlyphs"
            :key="index"
            class="glyph-box"
            :class="{
              glowing: !isAnimating && selectedRegionKey,
              locked: lockedGlyphs.includes(index),
              animating: isAnimating,
            }"
            :style="{ '--index': index }"
          >
            <span class="glyph-char">{{ glyph }}</span>
            <div class="glyph-hex-hint">{{ glyph }}</div>
            <div
              v-if="lockedGlyphs.includes(index)"
              class="lock-indicator"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          v-if="selectedRegionKey"
          class="copy-btn"
          @click="copyToClipboard"
          :class="{ copied: copied }"
          :disabled="!canCopy"
        >
          <svg
            v-if="!copied"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect
              x="9"
              y="9"
              width="13"
              height="13"
              rx="2"
              ry="2"
            />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {{ copied ? '¡Copiado!' : 'Copiar Código' }}
        </button>

        <div
          class="info-row"
          v-if="selectedRegionKey"
        >
          <div class="info-item">
            <div class="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                />
              </svg>
            </div>
            <span class="label">Región</span>
            <span class="value">{{ currentRegion.name }}</span>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
            </div>
            <span class="label">Galaxia</span>
            <span class="value">{{ currentRegion.galaxy }}</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="card-footer"
      v-if="selectedRegionKey && !isAnimating"
    >
      <div class="tip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <line
            x1="12"
            y1="16"
            x2="12"
            y2="12"
          />
          <line
            x1="12"
            y1="8"
            x2="12.01"
            y2="8"
          />
        </svg>
        Usa estos glifos en el portal para viajar a esta región
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'NMS-Glyphs';
  src: url('@/assets/fonts/NMS-Glyphs-Mono.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.glyph-card {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #f1f5f9;
  --background-secondary: #ffffff;
  --border-color: rgb(99 102 241 / 15%);
  --hover-effect: rgb(99 102 241 / 10%);
  --accent-color: #4f46e5;
  --accent-glow: rgba(79, 70, 229, 0.3);
  --card-shadow: 0 4px 6px rgb(0 0 0 / 5%);
  --card-hover-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  --transition-duration: 0.4s;
  --transition-timing: cubic-bezier(0.25, 0.8, 0.25, 1);
}

.theme-dark .glyph-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0f172a;
  --background-secondary: #1e293b;
  --border-color: rgb(103 232 249 / 15%);
  --hover-effect: rgb(103 232 249 / 20%);
  --accent-color: #67e8f9;
  --accent-glow: rgba(103, 232, 249, 0.3);
  --card-shadow: 0 4px 6px rgb(0 0 0 / 20%);
  --card-hover-shadow: 0 10px 20px rgb(103 232 249 / 20%);
}

* {
  box-sizing: border-box;
}

.glyph-card {
  position: relative;
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 900px;
  margin: 2rem auto;
  box-shadow: 0 20px 50px rgb(0 0 0 / 15%);
  color: var(--text-primary);
  font-family:
    'Montserrat',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  overflow: hidden;
  animation: cardEntrance 0.6s ease-out;
  transition:
    transform var(--transition-duration) var(--transition-timing),
    box-shadow var(--transition-duration) var(--transition-timing);
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glyph-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgb(0 0 0 / 20%);
}

.theme-dark .glyph-card:hover {
  box-shadow: 0 25px 60px rgb(103 232 249 / 15%);
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.15;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: radial-gradient(circle, var(--accent-color), transparent);
  border-radius: 50%;
  animation: float var(--duration, 10s) var(--delay, 0s) infinite ease-in-out;
  left: var(--x, 50%);
  top: var(--y, 50%);
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }

  50% {
    transform: translate(calc(50px * cos(var(--index, 1))), calc(50px * sin(var(--index, 1)))) scale(1.5);
    opacity: 1;
  }
}

.card-header {
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
}

.icon-badge {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: var(--hover-effect);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  animation: iconPulse 3s ease-in-out infinite;
  transition: all var(--transition-duration) var(--transition-timing);
}

@keyframes iconPulse {
  0%,
  100% {
    box-shadow: 0 0 20px var(--accent-glow);
  }

  50% {
    box-shadow: 0 0 30px var(--accent-glow);
  }
}

.card-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: titleShimmer 3s ease-in-out infinite;
  background-size: 200% 200%;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

@keyframes titleShimmer {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.card-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary-gradient);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s var(--transition-timing);
}

.card-header h2:hover::after {
  transform: scaleX(1);
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.input-group {
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.input-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.input-group label svg {
  color: var(--accent-color);
}

.select-wrapper {
  position: relative;
}

select {
  width: 100%;
  appearance: none;
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px 20px;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.3s var(--transition-timing);
  font-family: inherit;
  box-shadow: var(--card-shadow);
}

select:hover {
  border-color: var(--accent-color);
  background: var(--background-secondary);
}

select:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.2rem var(--hover-effect);
}

select option {
  background: var(--background-secondary);
  color: var(--text-primary);
  padding: 12px;
}

.select-arrow {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--accent-color);
  pointer-events: none;
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

select:focus + .select-arrow {
  transform: translateY(-50%) rotate(180deg);
}

.generate-btn {
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 12px;
  background: var(--primary-gradient);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all var(--transition-duration) var(--transition-timing);
  position: relative;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  z-index: 1;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.generate-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.generate-btn:hover::before {
  left: 100%;
}

.generate-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--card-hover-shadow);
}

.generate-btn:active:not(:disabled) {
  transform: translateY(0);
}

.generate-btn:disabled {
  background: var(--background-secondary);
  color: var(--text-secondary);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  border: 1px solid var(--border-color);
  opacity: 0.6;
}

.loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.output-area {
  margin-top: 2.5rem;
  opacity: 0.3;
  transform: scale(0.98);
  transition: all 0.5s var(--transition-timing);
  position: relative;
  z-index: 1;
}

.output-area.active {
  opacity: 1;
  transform: scale(1);
}

.glyphs-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
  margin-bottom: 2rem;
  background: var(--background-secondary);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
}

.glyph-box {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--background-primary);
  transition: all 0.3s var(--transition-timing);
  position: relative;
  border: 1px solid var(--border-color);
  animation: glyphAppear 0.5s ease-out backwards;
  animation-delay: calc(var(--index) * 0.05s);
}

@keyframes glyphAppear {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.glyph-char {
  font-family: 'NMS-Glyphs', 'Courier New', monospace;
  font-size: 2rem;
  color: var(--text-primary);
  line-height: 1;
  transition: all 0.3s ease;
}

.glyph-hex-hint {
  font-size: 0.65rem;
  color: var(--text-secondary);
  margin-top: 4px;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  opacity: 0.6;
}

.glyph-box.animating {
  animation: shake 0.1s infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-2px);
  }

  75% {
    transform: translateX(2px);
  }
}

.glyph-box.locked {
  background: var(--hover-effect);
  border-color: var(--accent-color);
  animation: lockPulse 0.3s ease-out;
}

@keyframes lockPulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.lock-indicator {
  position: absolute;
  top: 2px;
  right: 2px;
  color: var(--accent-color);
  animation: lockRotate 0.3s ease-out;
}

@keyframes lockRotate {
  from {
    transform: rotate(-90deg) scale(0);
  }

  to {
    transform: rotate(0) scale(1);
  }
}

.glyph-box.glowing {
  background: var(--hover-effect);
  border: 1px solid var(--accent-color);
  box-shadow: 0 0 20px var(--accent-glow);
}

.glyph-box.glowing .glyph-char {
  color: var(--accent-color);
  text-shadow: 0 0 10px var(--accent-glow);
  animation: glyphPulse 2s ease-in-out infinite;
}

@keyframes glyphPulse {
  0%,
  100% {
    text-shadow: 0 0 10px var(--accent-glow);
  }

  50% {
    text-shadow: 0 0 20px var(--accent-glow);
  }
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 12px 24px;
  background: var(--hover-effect);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  color: var(--accent-color);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s var(--transition-timing);
  margin: 0 auto 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--card-shadow);
}

.copy-btn:hover:not(:disabled) {
  background: var(--hover-effect);
  border-color: var(--accent-color);
  box-shadow: var(--card-hover-shadow);
  transform: translateY(-2px);
}

.copy-btn:disabled {
  background: var(--background-secondary);
  border-color: var(--border-color);
  color: var(--text-secondary);
  cursor: not-allowed;
  opacity: 0.5;
}

.copy-btn.copied {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #22c55e;
}

.info-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem;
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s var(--transition-timing);
  box-shadow: var(--card-shadow);
}

.info-item:hover {
  background: var(--background-secondary);
  border-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: var(--card-hover-shadow);
}

.info-icon {
  color: var(--accent-color);
  margin-bottom: 0.25rem;
}

.info-item .label {
  font-size: 0.7rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.info-item .value {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 700;
  text-align: center;
}

.card-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.tip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--hover-effect);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  text-align: center;
  box-shadow: var(--card-shadow);
}

.tip svg {
  color: var(--accent-color);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .glyph-card {
    padding: 1.5rem;
    border-radius: 20px;
  }

  .card-header h2 {
    font-size: 1.75rem;
  }

  .glyphs-container {
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    padding: 1rem;
  }

  .glyph-char {
    font-size: 1.5rem;
  }

  .info-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .glyph-card {
    padding: 1rem;
    margin: 1rem;
  }

  .card-header h2 {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .glyphs-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }

  .glyph-char {
    font-size: 1.25rem;
  }

  .glyph-hex-hint {
    font-size: 0.55rem;
  }
}
</style>
