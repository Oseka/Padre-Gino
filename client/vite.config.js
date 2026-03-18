import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  base: '/Padre-Gino/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/public': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/Padre-Gino/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // This ensures the backend gets "/api/..." instead of "/Padre-Gino/api/..."
        rewrite: (path) => path.replace(/^\/Padre-Gino/, ''),
      },
    }, // This brace was missing in your snippet
  },
  plugins: [TanStackRouterVite(), react()],
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
