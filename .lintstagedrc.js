export default {
  'src/**/*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'src/**/*.{css,less}': ['stylelint --fix', 'prettier --write'],
};
