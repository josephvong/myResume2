import Vue from 'vue'
import Router from 'vue-router' 
const _import = require('./_import_' + process.env.NODE_ENV) //
Vue.use(Router)

import Layout from '../views/layout'
import Enter from '../views/enter/index'
export default new Router({
  routes: [
    /*{
      path: '*',  
      redirect: '/'
    },*/
    {
      path: '/',  
      name:'首次访问',
      component:Enter,
      redirect: '/login',
      children:[
        {
          path: 'login',
          component: _import('enter/login'),
          name: '登录'
        },
        {
          path: 'signin',
          component: _import('enter/signin'),
          name: '注册'
        },
      ]
    },
    {
      path: '/main',  
      name:'主界面',
      component:Layout,
    }
  ]
})
