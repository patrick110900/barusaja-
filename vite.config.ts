import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // hanya jika lucide-react bermasalah
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    sourcemap: true, // bantu debugging di Vercel
  },
  server: {
    port: 3000,
  },
});
