import 'babel-polyfill' // es6 语法兼容补丁 一定要放到最开始
import 'url-search-params-polyfill'
import 'style/index.styl'
import Vue from 'vue'
import FastClick from "fastclick"
import VueLazyload from 'vue-lazyload'
//import vConsole from 'vconsole'
FastClick.attach(document.body);

Vue.use(VueLazyload,{
  loading:require('common/assets/img/jizhi.png')
})

export default Vue











