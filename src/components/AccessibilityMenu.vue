<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

interface AccessibilityPreferences {
  reducedMotion: boolean;
  colorblindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';
  textSize: '75' | '90' | '100' | '110' | '125' | '150';
  highContrast: boolean;
  textSpacing: boolean;
  emphasizeLinks: boolean;
  hideImages: boolean;
  enhancedFocus: boolean;
  reducedTransparency: boolean;
}

const STORAGE_KEY = 'accessibility_preferences';

const isOpen = ref(false);
const preferences = ref<AccessibilityPreferences>({
  reducedMotion: false,
  colorblindMode: 'none',
  textSize: '100',
  highContrast: false,
  textSpacing: false,
  emphasizeLinks: false,
  hideImages: false,
  enhancedFocus: false,
  reducedTransparency: false,
});

const accessibilityClasses = computed(() => {
  const classes: string[] = [];

  if (preferences.value.reducedMotion) {
    classes.push('accessibility-reduced-motion');
  }

  if (preferences.value.colorblindMode !== 'none') {
    classes.push(`accessibility-${preferences.value.colorblindMode}`);
  }

  if (preferences.value.textSize !== '100') {
    classes.push(`accessibility-text-${preferences.value.textSize}`);
  }

  if (preferences.value.highContrast) {
    classes.push('accessibility-high-contrast');
  }

  if (preferences.value.textSpacing) {
    classes.push('accessibility-text-spacing');
  }

  if (preferences.value.emphasizeLinks) {
    classes.push('accessibility-emphasize-links');
  }

  if (preferences.value.hideImages) {
    classes.push('accessibility-hide-images');
  }

  if (preferences.value.enhancedFocus) {
    classes.push('accessibility-enhanced-focus');
  }

  if (preferences.value.reducedTransparency) {
    classes.push('accessibility-reduced-transparency');
  }

  return classes;
});

function loadPreferences() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      preferences.value = { ...preferences.value, ...parsed };
    }
  } catch (e) {
    console.warn('Error loading accessibility preferences:', e);
  }
}

function savePreferences() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences.value));
  } catch (e) {
    console.warn('Error saving accessibility preferences:', e);
  }
}

function applyClasses() {
  const target = document.querySelector('.app-content') ?? document.querySelector('.app-layout');

  if (target) {
    const allClasses = [
      'accessibility-reduced-motion',
      'accessibility-protanopia',
      'accessibility-deuteranopia',
      'accessibility-tritanopia',
      'accessibility-achromatopsia',
      'accessibility-text-75',
      'accessibility-text-90',
      'accessibility-text-100',
      'accessibility-text-110',
      'accessibility-text-125',
      'accessibility-text-150',
      'accessibility-high-contrast',
      'accessibility-reduced-transparency',
    ];

    allClasses.forEach((cls) => target.classList.remove(cls));

    accessibilityClasses.value.forEach((cls) => target.classList.add(cls));
  }
}

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

function resetAll() {
  preferences.value = {
    reducedMotion: false,
    colorblindMode: 'none',
    textSize: '100',
    highContrast: false,
    textSpacing: false,
    emphasizeLinks: false,
    hideImages: false,
    enhancedFocus: false,
    reducedTransparency: false,
  };
}

watch(
  preferences,
  () => {
    savePreferences();
    applyClasses();
  },
  { deep: true }
);

onMounted(() => {
  loadPreferences();
  applyClasses();
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu();
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

import { onUnmounted } from 'vue';
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div class="accessibility-menu-container">
    <!-- Accessibility Button -->
    <button
      class="accessibility-toggle"
      @click="toggleMenu"
      :class="{ active: isOpen }"
      title="Opciones de accesibilidad"
      aria-label="Abrir menú de accesibilidad"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
        />
        <line
          x1="12"
          y1="2"
          x2="12"
          y2="4"
        />
        <line
          x1="12"
          y1="20"
          x2="12"
          y2="22"
        />
        <line
          x1="2"
          y1="12"
          x2="4"
          y2="12"
        />
        <line
          x1="20"
          y1="12"
          x2="22"
          y2="12"
        />
      </svg>
    </button>

    <!-- Accessibility Menu Panel -->
    <Transition name="accessibility-fade">
      <div
        v-if="isOpen"
        class="accessibility-panel"
        role="dialog"
        aria-label="Opciones de accesibilidad"
      >
        <div class="accessibility-header">
          <h3 class="accessibility-title">ACCESIBILIDAD</h3>
          <button
            class="accessibility-close"
            @click="closeMenu"
            aria-label="Cerrar menú de accesibilidad"
          >
            <i class="pi pi-times"></i>
          </button>
        </div>

        <div class="accessibility-content">
          <!-- Animations -->
          <div class="accessibility-section">
            <h4 class="accessibility-section-title">Animaciones</h4>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.reducedMotion"
              />
              <span class="accessibility-option-label">Animaciones reducidas</span>
            </label>
          </div>

          <!-- Colorblind Mode -->
          <div class="accessibility-section">
            <h4 class="accessibility-section-title">Modo daltónico</h4>
            <div class="accessibility-radio-group">
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.colorblindMode"
                  value="none"
                />
                <span class="accessibility-option-label">Ninguno</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.colorblindMode"
                  value="protanopia"
                />
                <span class="accessibility-option-label">Protanopía (rojo)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.colorblindMode"
                  value="deuteranopia"
                />
                <span class="accessibility-option-label">Deuteranopía (verde)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.colorblindMode"
                  value="tritanopia"
                />
                <span class="accessibility-option-label">Tritanopía (azul)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.colorblindMode"
                  value="achromatopsia"
                />
                <span class="accessibility-option-label">Acromatopsia (escala de grises)</span>
              </label>
            </div>
          </div>

          <!-- Text Size -->
          <div class="accessibility-section">
            <h4 class="accessibility-section-title">Tamaño de texto</h4>
            <div class="accessibility-radio-group">
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.textSize"
                  value="75"
                />
                <span class="accessibility-option-label">Muy pequeño (75%)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.textSize"
                  value="90"
                />
                <span class="accessibility-option-label">Pequeño (90%)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.textSize"
                  value="100"
                />
                <span class="accessibility-option-label">Normal (100%)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.textSize"
                  value="110"
                />
                <span class="accessibility-option-label">Grande (110%)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.textSize"
                  value="125"
                />
                <span class="accessibility-option-label">Muy grande (125%)</span>
              </label>
              <label class="accessibility-option">
                <input
                  type="radio"
                  v-model="preferences.textSize"
                  value="150"
                />
                <span class="accessibility-option-label">Enorme (150%)</span>
              </label>
            </div>
          </div>

          <!-- Display Options -->
          <div class="accessibility-section">
            <h4 class="accessibility-section-title">Visualización</h4>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.highContrast"
              />
              <span class="accessibility-option-label">Alto contraste</span>
            </label>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.textSpacing"
              />
              <span class="accessibility-option-label">Espaciado de texto aumentado</span>
            </label>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.emphasizeLinks"
              />
              <span class="accessibility-option-label">Enfatizar enlaces</span>
            </label>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.hideImages"
              />
              <span class="accessibility-option-label">Ocultar imágenes</span>
            </label>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.enhancedFocus"
              />
              <span class="accessibility-option-label">Indicador de foco mejorado</span>
            </label>
            <label class="accessibility-option">
              <input
                type="checkbox"
                v-model="preferences.reducedTransparency"
              />
              <span class="accessibility-option-label">Reducir transparencia</span>
            </label>
          </div>

          <!-- Reset Button -->
          <div class="accessibility-section">
            <button
              class="accessibility-reset-btn"
              @click="resetAll"
            >
              <i class="pi pi-refresh"></i>
              <span>Restablecer todo</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Overlay -->
    <Transition name="accessibility-fade">
      <div
        v-if="isOpen"
        class="accessibility-overlay"
        @click="closeMenu"
      ></div>
    </Transition>
  </div>
</template>

<style scoped>
.accessibility-menu-container {
  position: relative;
}

.accessibility-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.accessibility-toggle:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

.accessibility-toggle.active {
  border-color: #c62828;
  color: #c62828;
  background: rgba(198, 40, 40, 0.1);
}

.accessibility-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  max-width: 500px;
  width: calc(100% - 2rem);
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  z-index: 9999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.accessibility-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.accessibility-title {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #c62828;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
}

.accessibility-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.accessibility-close:hover {
  border-color: #c62828;
  color: #c62828;
}

.accessibility-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.accessibility-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.accessibility-section-title {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0;
}

.accessibility-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: background 0.2s ease;
}

.accessibility-option:hover {
  background: rgba(255, 255, 255, 0.03);
}

.accessibility-option input[type='checkbox'],
.accessibility-option input[type='radio'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #c62828;
  flex-shrink: 0;
}

.accessibility-option-label {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  user-select: none;
}

.accessibility-radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.accessibility-reset-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.accessibility-reset-btn:hover {
  border-color: #c62828;
  color: #c62828;
  background: rgba(198, 40, 40, 0.1);
}

.accessibility-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  backdrop-filter: blur(4px);
}

/* Transitions */
.accessibility-fade-enter-active,
.accessibility-fade-leave-active {
  transition: opacity 0.2s ease;
}

.accessibility-fade-enter-from,
.accessibility-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .accessibility-panel {
    max-width: calc(100% - 1.5rem);
    padding: 1.25rem;
  }

  .accessibility-title {
    font-size: 0.75rem;
  }

  .accessibility-option-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .accessibility-panel {
    max-width: calc(100% - 1rem);
    padding: 1rem;
  }

  .accessibility-title {
    font-size: 0.7rem;
  }

  .accessibility-section-title {
    font-size: 0.6rem;
  }

  .accessibility-option-label {
    font-size: 0.75rem;
  }
}
</style>
