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
      input: 'index.html',
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    allowedHosts: [
      '.github.io',
      'localhost',
      '.trycloudflare.com',
    ],
  },
});
