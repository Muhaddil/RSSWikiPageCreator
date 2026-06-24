<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const show = ref(false);

const handleScroll = () => {
  show.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <transition name="scroll-fade">
    <button
      v-if="show"
      @click="scrollToTop"
      class="scroll-top-btn"
      aria-label="Volver arriba"
    >
      <i class="pi pi-arrow-up"></i>
    </button>
  </transition>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid rgba(255, 26, 26, 0.5);
  color: #ff1a1a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.scroll-top-btn:hover {
  background: rgba(255, 26, 26, 0.1);
  box-shadow: 0 0 15px rgba(255, 26, 26, 0.3);
  transform: translateY(-2px);
}

.scroll-fade-enter-active,
.scroll-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
