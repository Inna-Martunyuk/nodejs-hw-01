import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly', 
      },
    },
    plugins: { js },
    extends: ['js/recommended'],
  },
]);
