/* 解释：babel各个依赖包
 ** babel-loader：webpack的loader的一种，作用同其他loader一样，实现对特定文件类型的处理
 ** @babel/core：webpack使用babel-loader处理文件时，babel-loader实调用了@babel/core的API，必备的核心库
 ** @babel/preset-env：官方现已建议采用@babel/preset-env实现对ES6语法的转码，相当于es2015, es2016, es2017及最新版本
 ** PS：
 ** 1.babel有几种规则都可以实现对ES6语法的转码
 ** 2.React开发增加@babel/plugin-proposal-decorators和@babel/preset-react；react-hot-loader（热更新）
 ** 3.babel的polyfill和runtime的区别：https://segmentfault.com/q/1010000005596587?from=singlemessage&isappinstalled=1 https://zhuanlan.zhihu.com/p/58624930
 */

module.exports = {
  // 设定转码规则
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  // 解释：@babel/plugin-transform-runtime插件会对使用到 Symbol、Promise、Map 等新类型时，自动且按需进行 polyfill
  // 解释：@babel/plugin-transform-runtime插件由于采用了沙盒（Sandbox）机制，它不会污染全局变量，同时也不会去修改内建类的原型，带来的坏处是它不会 polyfill 原型上的扩展
  plugins: ['@babel/plugin-transform-runtime'],
};
