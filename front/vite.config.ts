// [NOTE]: The below line is to extending vites configurations with vitest
// taken from here https://vitest.dev/config/
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    reporters: ['default', 'html'], // provides a nice UI ti view my test with vitest-ui, I can see them in the browser (html) and the console (default)
  },
});
