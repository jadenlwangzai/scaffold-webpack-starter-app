module.exports = {
  'src/**/*.{js,json,ts,tsx}': ['npm run eslint:fix', 'prettier --write'],
  'src/**/*.{less,css}': ['npm run stylelint:fix', 'prettier --write'],
};
