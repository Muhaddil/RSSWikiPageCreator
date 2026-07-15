<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    goHome();
  }
}
</script>

<template>
  <div class="not-found">
    <div class="not-found-container">
      <div class="error-code">
        <span class="code-bracket">[</span>
        <span class="code-number">404</span>
        <span class="code-bracket">]</span>
      </div>

      <div class="error-divider"></div>

      <h1 class="error-title">SECTOR DESCONOCIDO</h1>

      <p class="error-description">
        La página que buscas no existe en nuestros registros de navegación.
        <br />
        Puede que haya sido reubicada, eliminada, o que las coordenadas introducidas sean incorrectas.
      </p>

      <div class="error-actions">
        <button
          class="action-btn primary"
          @click="goHome"
        >
          <i class="pi pi-home"></i>
          <span>IR AL DASHBOARD</span>
        </button>
        <button
          class="action-btn secondary"
          @click="goBack"
        >
          <i class="pi pi-arrow-left"></i>
          <span>VOLVER ATRÁS</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
}

.not-found-container {
  text-align: center;
  max-width: 520px;
}

.error-code {
  font-family: 'Space Mono', monospace;
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.code-bracket {
  color: rgba(255, 255, 255, 0.15);
}

.code-number {
  color: #c62828;
  text-shadow: 0 0 30px rgba(198, 40, 40, 0.3);
}

.error-divider {
  width: 60px;
  height: 2px;
  background: rgba(198, 40, 40, 0.5);
  margin: 0 auto 1.5rem;
}

.error-title {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem;
}

.error-description {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 2rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius);
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
}

.action-btn.primary {
  background: rgba(198, 40, 40, 0.15);
  border-color: rgba(198, 40, 40, 0.3);
  color: #ef5350;
}

.action-btn.primary:hover {
  background: rgba(198, 40, 40, 0.25);
  border-color: #c62828;
  color: #ff6f6f;
}

.action-btn.secondary {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.5);
}

.action-btn.secondary:hover {
  border-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.8);
}
</style>
