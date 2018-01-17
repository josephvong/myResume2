import Vue from 'vue'
import Router from 'vue-router' 
const _import = require('./_import_' + process.env.NODE_ENV) //
Vue.use(Router)

import mainPage from '../views/mainpage'

export default new Router({
  routes: [
    /*{
      path: '*',  
      redirect: '/'
    },*/
    {
      path: '/',  
      name:'首页',
      component:mainPage 
    },
    {
      path: '/gridview',
      component:_import('cssViews/gridView'),
    },
    {
      path: '/leftbarview',  
      component: _import('cssViews/leftBarView'),
    },
    {
      path: '/colorborderview',
      component:_import('cssViews/colorBorderView'),
    },
    {
      path:'/stacklevelview',
      component:_import('cssViews/stackLevelView'),
    },
    {
      path:'/reflectview',
      component:_import('cssViews/reflectView'),
    },
    {
      path:'/textcenterview',
      component:_import('cssViews/textCenterView'),
    },
    {
      path:'/csstabview',
      component:_import('cssViews/cssTabView'),
    },
    {
      path:'/samehighview',
      component:_import('cssViews/sameHighView'),
    },
    {
      path:'/slantlineview',
      component:_import('cssViews/slantLineView'),
    },
    {
      path:'/stickybottomview',
      component:_import('cssViews/stickyBottomView'),
    },
    {
      path:'/linearbgview',
      component:_import('cssViews/linearBgView'),
    },
    {
      path:'/stickyview',
      component:_import('cssViews/stickyView/index'),
    }
  ]
})
