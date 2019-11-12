module.exports = {
  '{src}/**/*.{js,json}': ['npm run eslint:fix', 'prettier --write', 'git add'],
  '{src}/**/*.{less,css}': [
    'npm run stylelint:fix',
    'prettier --write',
    'git add',
  ],
};
