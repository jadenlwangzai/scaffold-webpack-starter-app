module.exports = {
  plugins: [
    // postcss-import resolves @import rules, must come first
    require('postcss-import'),
    // postcss-preset-env includes autoprefixer and transforms modern CSS
    require('postcss-preset-env'),
  ],
};
