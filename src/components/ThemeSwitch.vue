<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { computed } from 'vue';

const isDark = useDark({
  valueDark: 'theme-dark',
  valueLight: 'theme-light',
});

if (!localStorage.getItem('vueuse-color-scheme')) {
  isDark.value = true;
}

const toggleDark = useToggle(isDark);
const icon = computed(() => (isDark.value ? '☀' : '☾'));
const label = computed(() => (isDark.value ? 'LIGHT' : 'DARK'));
</script>

<template>
  <button
    class="theme-switch"
    aria-label="Toggle Theme"
    title="Toggle Theme"
    @click="toggleDark()"
  >
    <span class="theme-icon">{{ icon }}</span>
    <span class="theme-label">{{ label }}</span>
  </button>
</template>

<style scoped>
.theme-switch {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.65rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Orbitron', monospace;
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-switch:hover {
  background: rgba(255, 26, 26, 0.1);
  border-color: rgba(255, 26, 26, 0.5);
  color: #ff1a1a;
  text-shadow: 0 0 5px rgba(255, 26, 26, 0.3);
}

.theme-icon {
  font-size: 0.75rem;
  line-height: 1;
}

.theme-label {
  line-height: 1;
}
</style>
