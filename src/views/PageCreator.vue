<script setup lang="ts">
import Card from 'primevue/card';
import Fluid from 'primevue/fluid';
import { usePageDataStore } from '@/stores/pageData';
import { useValidationStore } from '@/stores/validation';
import { ref, onMounted, onUnmounted } from 'vue';

const pageData = usePageDataStore();
const validation = useValidationStore();

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

      <div class="card-enhanced output-card">
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
          <Transition name="badge-fade">
            <div
              v-if="validation.shouldShowValidation"
              class="header-badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
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
              {{ validation.missingFields.length }} campo{{
                validation.missingFields.length !== 1 ? 's' : ''
              }}
              pendiente{{ validation.missingFields.length !== 1 ? 's' : '' }}
            </div>
          </Transition>
        </div>

        <div class="card-body">
          <Card class="prime-card is-family-monospace">
            <template #content>
              <Fluid>
                <div class="output-wrapper">
                  <div
                    ref="outputRef"
                    class="output-content"
                    :class="{ 'output-blurred': validation.shouldShowValidation }"
                  >
                    <slot name="output"></slot>
                  </div>

                  <Transition name="overlay-fade">
                    <div
                      v-if="validation.shouldShowValidation"
                      class="validation-overlay"
                    >
                      <div class="overlay-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                          />
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
                      <p class="overlay-title">{{ validation.bannerTitle }}</p>
                      <p class="overlay-message">{{ validation.bannerMessage }}</p>
                      <div class="overlay-chips">
                        <span
                          v-for="field in validation.missingFields"
                          :key="field.key"
                          class="overlay-chip"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                            />
                            <line
                              x1="12"
                              y1="8"
                              x2="12"
                              y2="12"
                            />
                            <line
                              x1="12"
                              y1="16"
                              x2="12.01"
                              y2="16"
                            />
                          </svg>
                          {{ field.label }}
                        </span>
                      </div>
                    </div>
                  </Transition>
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

.card-enhanced {
  position: relative;
  border-radius: calc(var(--border-radius) * 2);
  background: var(--input-background);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: border-color 0.2s ease;
}

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

.card-body {
  padding: 1.75rem;
}

.prime-card {
  border-radius: var(--border-radius);
  border: 1px solid var(--table-border-color);
  background: var(--input-section-background);
  transition: border-color 0.2s ease;
}

.output-wrapper {
  position: relative;
  min-height: 150px;
}

.output-content {
  transition:
    opacity 0.25s ease,
    filter 0.25s ease;
}

.output-blurred {
  opacity: 0.2;
  filter: blur(5px);
  user-select: none;
  pointer-events: none;
}

.validation-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  border-radius: var(--border-radius);
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 12px,
    var(--table-border-color) 12px,
    var(--table-border-color) 14px
  );
  pointer-events: none;
}

.overlay-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: var(--footer-backgroundcolor);
  color: var(--link-color);
  flex-shrink: 0;
  animation: overlayPulse 2.5s ease-in-out infinite;
}

@keyframes overlayPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

.overlay-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0;
  line-height: 1.3;
}

.overlay-message {
  font-size: 0.8rem;
  color: var(--placeholder-color);
  margin: 0;
  line-height: 1.5;
  max-width: 280px;
}

.overlay-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: center;
  pointer-events: none;
}

.overlay-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0.2rem 0.625rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--footer-backgroundcolor);
  color: var(--link-color);
  border: 1px solid var(--border-color);
  white-space: nowrap;
  pointer-events: none;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.2s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.header-badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 500;
  background: var(--footer-backgroundcolor);
  color: var(--link-color);
  border: 1px solid var(--border-color);
  white-space: nowrap;
  flex-shrink: 0;
  pointer-events: none;
}

.badge-fade-enter-active,
.badge-fade-leave-active {
  transition: opacity 0.2s ease;
}

.badge-fade-enter-from,
.badge-fade-leave-to {
  opacity: 0;
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
  .cards-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .modern-container {
    padding: 1rem;
  }
  .card-header {
    padding: 1.25rem 1.5rem;
  }
  .card-body {
    padding: 1.5rem;
  }

  .header-icon {
    width: 42px;
    height: 42px;
  }

  .card-description {
    font-size: 0.813rem;
  }
  .overlay-title {
    font-size: 0.825rem;
  }
  .overlay-message {
    font-size: 0.75rem;
  }
}

@media print {
  .card-enhanced {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #ccc;
  }

  .validation-overlay {
    display: none;
  }

  .output-blurred {
    opacity: 1;
    filter: none;
  }

  .card-accent {
    height: 2px;
  }
}

@media (prefers-contrast: high) {
  .card-enhanced {
    border-width: 2px;
  }
  .header-icon {
    border-width: 3px;
  }
  .overlay-chip {
    border-width: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-accent,
  .header-icon,
  .header-icon svg,
  .overlay-icon {
    animation: none !important;
  }
}
</style>
