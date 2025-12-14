<script setup lang="ts">
import Card from 'primevue/card';
import Fluid from 'primevue/fluid';
import { usePageDataStore } from '@/stores/pageData';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const pageData = usePageDataStore();
const outputRef = ref<HTMLElement | null>(null);
let observer: MutationObserver | null = null;

onMounted(() => {
  if (outputRef.value) {
    observer = new MutationObserver(() => {
      pageData.setOutputContent(outputRef.value?.innerText || '');
    });
    observer.observe(outputRef.value, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    pageData.setOutputContent(outputRef.value.innerText || '');
  }
});

const isValid = computed(() => {
  return !!(pageData.outputContent && pageData.name && pageData.glyphs && pageData.image && pageData.regionData.region);
});

const currentUrl = window.location.pathname;
const isBaseRenewalPage = currentUrl.includes('baserenewal.html');
const isCensusPage = currentUrl.includes('census.html');

const shouldShowValidation = computed(() => {
  return !isValid.value && !isBaseRenewalPage && !isCensusPage;
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <div class="modern-container">
    <div class="cards-wrapper">
      <div class="card-enhanced input-card">
        <div class="card-accent"></div>
        <div class="card-header">
          <div class="header-icon input-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <div class="header-content">
            <h3 class="card-title">Entrada</h3>
            <p class="card-description">Introduce los datos necesarios</p>
          </div>
        </div>
        <div class="card-body">
          <Card class="prime-card">
            <template #content>
              <Fluid>
                <slot name="input"></slot>
              </Fluid>
            </template>
          </Card>
        </div>
      </div>

      <div
        class="card-enhanced output-card"
        :class="{ 'card-disabled': shouldShowValidation }"
      >
        <div class="card-accent output-accent"></div>
        <div class="card-header">
          <div class="header-icon output-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div class="header-content">
            <h3 class="card-title">Resultado</h3>
            <p class="card-description">Visualiza el output generado</p>
          </div>
        </div>

        <div
          v-if="shouldShowValidation"
          class="validation-banner"
        >
          <div class="validation-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line
                x1="12"
                y1="9"
                x2="12"
                y2="13"
              />
              <line
                x1="12"
                y1="17"
                x2="12.01"
                y2="17"
              />
            </svg>
          </div>
          <div class="validation-content">
            <strong class="validation-title">Completa los campos requeridos</strong>
            <p class="validation-message">Para visualizar el resultado necesitas completar: nombre, glifos e imágen.</p>
          </div>
        </div>

        <div class="card-body">
          <Card class="prime-card is-family-monospace">
            <template #content>
              <Fluid>
                <div
                  ref="outputRef"
                  class="output-content"
                  :class="{ 'output-disabled': shouldShowValidation }"
                >
                  <slot name="output"></slot>
                </div>
              </Fluid>
            </template>
          </Card>
        </div>
      </div>
    </div>

    <div class="extra-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modern-container {
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .modern-container {
    padding: 1rem;
  }
}

.card-enhanced {
  position: relative;
  border-radius: calc(var(--border-radius) * 2);
  background: var(--input-background);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: border-color 0.2s ease;
}

/* .card-enhanced:focus-within {
  border-color: var(--border-color-focus);
  outline: 2px solid var(--outline-color);
  outline-offset: 2px;
} */

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--link-color);
  border-radius: calc(var(--border-radius) * 2) calc(var(--border-radius) * 2) 0 0;
  animation: accentGlow 3s ease-in-out infinite;
}

@keyframes accentGlow {
  0%,
  100% {
    opacity: 1;
    filter: brightness(1);
  }
  50% {
    opacity: 0.85;
    filter: brightness(1.1);
  }
}

.output-accent {
  background: linear-gradient(90deg, var(--link-color) 0%, var(--link-hover-color) 100%);
  animation: accentSlide 4s ease-in-out infinite;
}

@keyframes accentSlide {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.card-disabled {
  opacity: 0.85;
}

.card-disabled .card-accent {
  background: var(--border-color);
  animation: none;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  background: var(--footer-backgroundcolor);
  border-bottom: 1px solid var(--table-border-color);
}

.header-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: calc(var(--border-radius) * 1.5);
  background: var(--input-background);
  border: 2px solid var(--link-color);
  color: var(--link-color);
  transition: all 0.3s ease;
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-2px) rotate(1deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  75% {
    transform: translateY(-2px) rotate(-1deg);
  }
}

.output-icon {
  border-color: var(--link-hover-color);
  color: var(--link-hover-color);
  animation: iconFloat 3s ease-in-out infinite 0.5s;
}

.header-icon svg {
  animation: iconRotate 8s linear infinite;
}

@keyframes iconRotate {
  0%,
  90%,
  100% {
    transform: rotate(0deg);
  }
  95% {
    transform: rotate(5deg);
  }
}

.output-icon svg {
  animation: iconPulse 4s ease-in-out infinite;
}

@keyframes iconPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.header-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.025em;
  line-height: 1.3;
}

.card-description {
  font-size: 0.875rem;
  color: var(--placeholder-color);
  margin: 0;
  line-height: 1.4;
}

.validation-banner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.75rem;
  background: linear-gradient(135deg, hsl(45deg 100% 97%) 0%, hsl(45deg 100% 95%) 100%);
  border-top: 1px solid var(--table-border-color);
  border-bottom: 3px solid hsl(45deg 100% 70%);
  animation: slideDown 0.3s ease-out;
}

html.theme-dark .validation-banner {
  background: linear-gradient(135deg, hsl(45deg 40% 20%) 0%, hsl(45deg 35% 18%) 100%);
  border-bottom-color: hsl(45deg 60% 50%);
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
}

.validation-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: hsl(45deg 100% 88%);
  color: hsl(35deg 90% 40%);
  border: 2px solid hsl(45deg 100% 70%);
  animation: validationPulse 2s ease-in-out infinite;
}

html.theme-dark .validation-icon {
  background: hsl(45deg 50% 30%);
  color: hsl(45deg 100% 70%);
  border-color: hsl(45deg 60% 50%);
}

@keyframes validationPulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 hsla(45deg, 100%, 50%, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 6px hsla(45deg, 100%, 50%, 0);
  }
}

.validation-content {
  flex: 1;
  min-width: 0;
}

.validation-title {
  display: block;
  font-size: 0.938rem;
  font-weight: 600;
  color: hsl(35deg 90% 30%);
  margin: 0 0 0.375rem 0;
  line-height: 1.3;
}

html.theme-dark .validation-title {
  color: hsl(45deg 100% 80%);
}

.validation-message {
  font-size: 0.813rem;
  color: hsl(35deg 50% 40%);
  margin: 0;
  line-height: 1.5;
}

html.theme-dark .validation-message {
  color: hsl(45deg 40% 70%);
}

.card-body {
  padding: 1.75rem;
}

.prime-card {
  border-radius: var(--border-radius);
  border: 1px solid var(--table-border-color);
  background: var(--input-section-background);
  transition: border-color 0.2s ease;
}

.output-content {
  min-height: 150px;
  transition:
    opacity 0.2s ease,
    filter 0.2s ease;
}

.output-disabled {
  user-select: none;
  opacity: 0.4;
  filter: grayscale(50%) blur(1px);
  pointer-events: none;
  position: relative;
}

.output-disabled::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 12px,
    var(--table-border-color) 12px,
    var(--table-border-color) 14px
  );
  opacity: 0.15;
  pointer-events: none;
  border-radius: var(--border-radius);
  animation: diagonalSlide 20s linear infinite;
}

@keyframes diagonalSlide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

.extra-content {
  margin-top: 2rem;
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .card-header {
    padding: 1.25rem 1.5rem;
  }

  .header-icon {
    width: 42px;
    height: 42px;
  }

  .validation-banner {
    padding: 1rem 1.5rem;
    gap: 0.875rem;
  }

  .validation-icon {
    width: 36px;
    height: 36px;
  }

  .validation-title {
    font-size: 0.875rem;
  }

  .validation-message {
    font-size: 0.75rem;
  }

  .card-body {
    padding: 1.5rem;
  }

  .card-description {
    font-size: 0.813rem;
  }
}

@media print {
  .card-enhanced {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #ccc;
  }

  .validation-banner {
    display: none;
  }

  .card-accent {
    height: 2px;
  }
}

@media (prefers-contrast: high) {
  .card-enhanced {
    border-width: 2px;
  }

  .validation-banner {
    border-width: 2px;
  }

  .header-icon {
    border-width: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-accent,
  .header-icon,
  .header-icon svg,
  .validation-icon,
  .output-disabled::before {
    animation: none !important;
  }
}
</style>
