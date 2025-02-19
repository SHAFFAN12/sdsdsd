import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': '*',
      'Cross-Origin-Embedder-Policy': '*',
    },
    hmr: {
      overlay: false
    }
  }
});
