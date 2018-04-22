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

    //----------------特殊样式分类---------------
    {
      path: '/rgradientcase',   
      name:'径向渐变案例',
      component:_import('gradientCase/rGradientCase'),
      meta:{
        gName:'特殊样式案例'
      } 
    },
    {
      path: '/lgradientcase',   
      name:'线性渐变案例',
      component:_import('gradientCase/lGradientCase'),
      meta:{
        gName:'特殊样式案例'
      } 
    },

    //-----------------css Magic 01-----------------------
    {
      path: '/cssmagic_1',   
      name:'css编码技巧',
      component:_import('cssMgic_1/cssSkillCase'),
      meta:{
        gName:'css Magic 第一章'
      } 
    },

    //-----------------css Magic 02-----------------------
    {
      path: '/cssmagic_2',   
      name:'背景与边框',
      component:_import('cssMgic_2/index'),
      meta:{
        gName:'css Magic 第二章'
      } 
    },
    // --------------------css Magic 03-------------------
    {
      path: '/cssmagic_3',   
      name:'形状',
      component:_import('cssMgic_3/index'),
      meta:{
        gName:'css Magic 第三章'
      } 
    },
    //-----------------css Magic 04-----------------------
    {
      path: '/cssmagic_4',   
      name:'视觉效果',
      component:_import('cssMgic_4/index'),
      meta:{
        gName:'css Magic 第四章'
      } 
    },
    //-----------------css Magic 05-----------------------
    {
      path: '/cssmagic_5',   
      name:'字体排印',
      component:_import('cssMgic_5/index'),
      meta:{
        gName:'css Magic 第五章'
      } 
    },
    //-----------------css Magic 06-----------------------
    {
      path: '/cssmagic_6',   
      name:'用户体验优化',
      component:_import('cssMgic_6/index'),
      meta:{
        gName:'css Magic 第六章'
      } 
    },
    //-----------------css Magic 07-----------------------
    {
      path: '/cssmagic_7_1',   
      name:'结构与布局1',
      component:_import('cssMgic_7/page1'),
      meta:{
        gName:'css Magic 第七章'
      } 
    },
    {
      path: '/cssmagic_7_2',   
      name:'结构与布局2',
      component:_import('cssMgic_7/page2'),
      meta:{
        gName:'css Magic 第七章'
      } 
    },
  ]
})
