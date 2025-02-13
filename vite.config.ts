import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RSSWikiPageCreator/',
  plugins: [vue()],
  // test: {
  //   environment: 'happy-dom',
  //   browser: {
  //     provider: 'webdriverio',
  //     enabled: true,
  //     headless: true,
  //     name: 'chrome',
  //   },
  //   coverage: {
  //     include: ['src/**.{ts,vue}', 'src/**/**.{ts,vue}'],
  //     exclude: ['src/api/**/**.ts', 'src/**/**.d.ts'],
  //     clean: true,
  //     all: true,
  //   },
  // },
  build: {
    rollupOptions: {
      input: [
        'index.html',
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
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
