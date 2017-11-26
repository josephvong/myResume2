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











