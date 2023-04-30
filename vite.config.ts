import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),eslint()],
  css: {
    postcss,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})