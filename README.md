# jstack
本项目是JavaScript开发技术栈, 作为一个前端开发初学者来讲，个人觉得从vue cli脚手架程序入门是个很不多的选择。

## javascript开发技术栈
- 前端框架vue: https://cn.vuejs.org/
- 组件状态管理: https://vuex.vuejs.org/zh-cn/
- css预处理框架: 
```
> npm install sass-loader sass --save-dev
> npm install scss-loader scss --save-dev
```
```
 <style lang="scss">
 /* write SASS! */
 </style>
  
 <style src="./styles/global.less" lang="less"></style>
```
- 单元测试: https://facebook.github.io/jest/docs/en/getting-started.html
- e2e测试：http://nightwatchjs.org/
- 打包、混淆: webpack
- 文档生成：jsdoc
- ui框架：element-ui
- 代码规范：eslint
- 数据流双向绑定: vue-resource
- 压力测试：http://dejavue.co/

## 兼容性方案
- es5-shim: https://github.com/es-shims/es5-shim

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

详细内容参考 [webpack使用指南](http://vuejs-templates.github.io/webpack/) and [vue-loader](http://vuejs.github.io/vue-loader).
