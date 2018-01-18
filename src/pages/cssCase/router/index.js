import Vue from 'vue'
import Router from 'vue-router' 
const _import = require('./_import_' + process.env.NODE_ENV) //
Vue.use(Router)

import layoutCase from '../views/layoutCase'

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/layoutcase'
    }, 
    {
      path: '/layoutcase',   
      name:'整体布局案例',
      component:layoutCase,
      meta:{
        gName:'布局与结构'
      }
      /*children:[
        {
          path: 'progressview',
          component: _import('progressView/index'),
          name: '进度条'
        }
      ]*/
    },
    {
      path: '/flexcase',   
      name:'弹性布局案例',
      component:_import('flexCase/index'),
      meta:{
        gName:'布局与结构'
      } 
    },

    //------------------------------------
    {
      path: '/rgradientcase',   
      name:'径向渐变案例',
      component:_import('gradientCase/rGradientCase'),
      meta:{
        gName:'特殊样式案例'
      } 
    },

  ]
})
