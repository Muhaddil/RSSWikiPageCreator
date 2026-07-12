<script setup lang="ts">
import { pageformattedName } from '@/variables/route';
import Presets from './Presets.vue';
import Tools from './Tools.vue';
</script>

<template>
  <div class="main-toolbar">
    <div class="toolbar-center">
      <h1 class="toolbar-title">
        {{ pageformattedName }}
      </h1>
    </div>

    <div class="toolbar-right">
      <Tools />
      <Presets />
    </div>
  </div>
</template>

<style scoped>
.main-toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
}

.toolbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.toolbar-title {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: clamp(0.8rem, 1.5vw, 1.1rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin: 0;
  white-space: nowrap;
  text-align: center;
}

@media (max-width: 900px) {
  .toolbar-center {
    display: none;
  }
}
</style>
