const js = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/*',
      'dist/*',
      'examples/*',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        $: true,
        jsBridge: true,
        VConsole: true,
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]; 