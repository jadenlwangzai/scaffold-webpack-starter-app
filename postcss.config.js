export default {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    },
    cssnano:
      process.env.NODE_ENV === 'production' ? { preset: 'default' } : false,
  },
};
