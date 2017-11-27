// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import Vue from 'common/js/Lib' // Lib 是全局公共配置（公共样式，Vue封装等）
import App from './App'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App), 
  //template: '<App/>',
  //components: { App }
})
