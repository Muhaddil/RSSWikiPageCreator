<script setup lang="ts"></script>

<template>
  <div class="tutorial-page">
    <div class="tutorial-embed">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Dp3_Bzqy2fs"
        title="Tutorial RSS WIKI PAGE CREATOR"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.tutorial-page {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.tutorial-embed {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.tutorial-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
}
</style>
