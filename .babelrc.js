export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'defaults and fully supports es6-module',
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
