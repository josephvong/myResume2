import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

import Layout from '../views/layout'

export default new Router({
  routes: [
    {
      path: '*',  
      redirect: '/'
    },
    {
      path: '/',  
      //redirect: '/main',
      name:'首页',
      component:Layout,
      children:[]
    }
  ]
})
