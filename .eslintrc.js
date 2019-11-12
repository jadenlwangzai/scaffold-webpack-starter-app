module.exports = {
  root: true,
  extends: ['@oyo/eslint-config-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    $: true,
    jsBridge: true,
    VConsole: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
