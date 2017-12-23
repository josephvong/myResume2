import Vue from 'vue'
import Router from 'vue-router' 
const _import = require('./_import_' + process.env.NODE_ENV) //
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
      children:[
        {
          path: 'progressview',
          component: _import('progressView/index'),
          name: '进度条'
        },
        {
          path: 'sliderview',
          component: _import('sliderView/sliderView'),
          name: '滚动轮播'
        },
        
        {
          path: 'scrollview',
          component: _import('scrollView/scrollView'),
          name: '滑动组件'
        },
        {
          path: 'selectlistview',
          component: _import('selectListView/selectListView'),
          name: '城市选择'
        }, 
        {
          path: 'svgcaseview',
          component: _import('svgCaseView/svgCaseView'),
          name: 'SVG组件'
        },
        {
          path: 'sidescrollview',
          component: _import('sideScrollView/sideScrollView'),
          name: '侧边滚动'
        },
        {
          path: 'lazyloadview',
          component: _import('lazyLoadView/lazyLoadView'),
          name: '懒加载'
        },
        {
          path: 'searchtoolview',
          component: _import('searchToolView/searchToolView'),
          name: '搜索工具'
        },
        {
          path: 'uploadtoolview',
          component: _import('uploadToolView/uploadToolView'),
          name: '图片上传'
        },
        {
          path: 'bouncelistview',
          component: _import('bounceListView/bounceListView'),
          name: '弹性列表'
        },
        {
          path: 'infiniteview',
          component: _import('infiniteView/infiniteView'),
          name: '无限下拉(非Bscroll)'
        },
        {
          path: 'fallflowview',
          component: _import('fallflow/index'),
          name: '瀑布流'
        },
        {
          path: '3dswitchview',
          component: _import('3dSwitchView/index'),
          name: '图片旋转'
        }
      ]
    }
  ]
})
