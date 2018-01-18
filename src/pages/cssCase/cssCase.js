// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import Vue from 'common/js/Lib' // Lib 是全局公共配置（公共样式，Vue封装等）
import App from './App' 

import router from './router'

import highlight from 'directive/highlight'

Vue.use(highlight)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted(){
    //this.$router.push('/layoutcase')
  } 
  //template: '<App/>',
  //components: { App }
})
