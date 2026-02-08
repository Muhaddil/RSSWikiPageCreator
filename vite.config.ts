import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import lightningcss from 'vite-plugin-lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/RSSWikiPageCreator/',
  plugins: [
    vue(),
    lightningcss({
      lightningcssOptions: {
        errorRecovery: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not dead'],
        },
      },
    }),
  ],

  css: {
    transformer: 'lightningcss',
  },

  build: {
    cssMinify: 'lightningcss',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
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
        'glyphgenerator.html',
        'baserenewal.html',
        'census.html',
        'basesdestacadas.html',
        'rsslinks.html',
        'censustable.html',
        'regions.html',
        'cronology.html',
        'fotosdestacadas.html',
        'rssfriends.html',
        'guias.html',
        'feedback.html',
        'latestupdates.html',
        'wikiupdates.html',
        'rsssystems.html',
        'corvette.html',
      ],
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
