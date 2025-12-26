import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'node18',
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'main',
    },
    rollupOptions: {
      external: [
        // keep node built-ins external
        'fs',
        'path',
        'http',
        'crypto',
      ],
    },
  },
});
