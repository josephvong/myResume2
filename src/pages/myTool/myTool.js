// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'common/js/Lib'
import App from './App'
import router from './router'
import store from './store' 

import cusLazyLoad from 'base/cusLazy/cuslazyload' // 自定义的懒加载控件函数
Vue.use(cusLazyLoad);  // 使用自定义的 cusLazyLoad 指令

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) 
  //template: '<App/>',
  //components: { App }
})
