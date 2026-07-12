<script setup lang="ts">
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
  <div class="page-creator">
    <div class="column column-input">
      <div class="column-header">
        <div class="column-icon input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
        </div>
        <div class="column-title-group">
          <h3 class="column-title">ENTRADA</h3>
          <p class="column-description">Introduce la información requerida</p>
        </div>
      </div>
      <div class="column-body">
        <slot name="input"></slot>
      </div>
    </div>

    <div class="column column-output">
      <div class="column-header">
        <div class="column-icon output-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        </div>
        <div class="column-title-group">
          <h3 class="column-title">RESULTADO</h3>
          <p class="column-description">Resultado generado</p>
        </div>
        <Transition name="badge-fade">
          <div
            v-if="validation.shouldShowValidation"
            class="header-badge"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            {{ validation.missingFields.length }} campo{{ validation.missingFields.length !== 1 ? 's' : '' }} faltante{{ validation.missingFields.length !== 1 ? 's' : '' }}
          </div>
        </Transition>
      </div>

      <div class="column-body">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </div>
              <p class="overlay-title">{{ validation.bannerTitle }}</p>
              <p class="overlay-message">{{ validation.bannerMessage }}</p>
              <div class="overlay-chips">
                <span
                  v-for="field in validation.missingFields"
                  :key="field.key"
                  class="overlay-chip"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  {{ field.label }}
                </span>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <div class="extra-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page-creator {
  display: grid;
  grid-template-columns: 2fr 1.6fr;
  gap: 1.5rem;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.column {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
}

.column-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.column-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  border-radius: var(--border-radius);
}

.input-icon {
  border-color: rgba(198, 40, 40, 0.4);
  color: #c62828;
}

.output-icon {
  border-color: rgba(239, 83, 80, 0.4);
  color: #ef5350;
}

.column-title-group {
  flex: 1;
}

.column-title {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #ffffff;
  margin: 0 0 0.15rem;
}

.column-description {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
}

.column-body {
  padding: 1.25rem;
  flex: 1;
  overflow-y: auto;
}

.output-wrapper {
  position: relative;
  min-height: 150px;
}

.output-content {
  transition:
    opacity 0.2s ease,
    filter 0.2s ease;
}

.output-blurred {
  opacity: 0.15;
  filter: blur(4px);
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
    transparent 10px,
    rgba(255, 255, 255, 0.03) 10px,
    rgba(255, 255, 255, 0.03) 12px
  );
  pointer-events: none;
}

.overlay-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #111111;
  color: #c62828;
  flex-shrink: 0;
}

.overlay-title {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.overlay-message {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
  line-height: 1.5;
  max-width: 280px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.overlay-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
  pointer-events: none;
}

.overlay-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0.2rem 0.5rem;
  border-radius: var(--border-radius);
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  background: #0b0b0b;
  color: #c62828;
  border: 1px solid rgba(198, 40, 40, 0.3);
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
  gap: 4px;
  padding: 3px 8px;
  border-radius: var(--border-radius);
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  background: rgba(198, 40, 40, 0.1);
  color: #c62828;
  border: 1px solid rgba(198, 40, 40, 0.3);
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
  grid-column: 1 / -1;
  margin-top: 0.5rem;
}

@media (max-width: 900px) {
  .page-creator {
    grid-template-columns: 1fr 1.2fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .page-creator {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .column-body {
    padding: 0.875rem;
  }

  .column-header {
    padding: 0.75rem 0.875rem;
  }

  .header-badge {
    font-size: 0.55rem;
    padding: 2px 6px;
  }
}

@media (max-width: 480px) {
  .column-body {
    padding: 0.75rem;
  }

  .column-header {
    padding: 0.625rem 0.75rem;
    gap: 0.5rem;
  }

  .column-icon {
    width: 28px;
    height: 28px;
  }

  .column-title {
    font-size: 0.6rem;
  }

  .column-description {
    font-size: 0.5rem;
  }

  .header-badge {
    font-size: 0.5rem;
    padding: 1px 4px;
    gap: 2px;
  }
}

@media print {
  .column {
    break-inside: avoid;
  }

  .validation-overlay {
    display: none;
  }

  .output-blurred {
    opacity: 1;
    filter: none;
  }
}
</style>
