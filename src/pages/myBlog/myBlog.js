// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'common/js/Lib'
import App from './App' 
import router from './router' 
import store from './store'

import './permission'

//=======================

//========================

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