import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RSSWikiPageCreator/',
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
          return null;
        },
      },
      input: [
        'index.html',
        'indextest.html',
        'base.html',
        'basecensusno.html',
        'biofrig.html',
        'derelict.html',
        'fauna.html',
        'flora.html',
        'mineral.html',
        'moon.html',
        'multitool.html',
        'planet.html',
        'racetrack.html',
        'sandworm.html',
        'settlement.html',
        'starship.html',
        'system.html',
        'faq.html',
        'glyphgeneratorV2.html',
        'baserenewal.html',
        'census.html',
        'basesdestacadas.html',
        'rsslinks.html',
        'censustable.html',
        'regions.html',
        'cronology.html',
        'fotosdestacadas.html',
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
