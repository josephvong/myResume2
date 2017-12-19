import Vue from 'vue'
import Router from 'vue-router' 
const _import = require('./_import_' + process.env.NODE_ENV)  
Vue.use(Router)
import store from '../store'

import Layout from '../views/layout'
import Enter from '../views/enter/index'
export default new Router({
  routes: [
    /*{
      path: '*',  
      redirect: '/'
    },*/
    {
      path: '/user',  
      name:'登录注册',
      component:Enter,
      redirect: '/user/login',
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
      path: '/',  
      name:'主界面',
      component:Layout, 
      redirect:'/main',
      children:[
        {
          name:'文章编写',
          path:'articleedit',
          component:_import('editor/arteditor')
        }, 
        {
          name:'留言编写',
          path:'infoedit',
          component:_import('editor/mdEditor')
        },
        {
          name:'主页',
          path:'main',
          component:_import('main/index')
        },
        {
          name:'文章列表',
          path:'artlist/:tag',  
          component:_import('artList/index')
        }, 
        {
          name:'文章',
          path:'article/:article_id', 
          component:_import('article/index')
        }, 
      ],
      beforeEnter(from,to,next){ // 每次进入 主界面 前 先判断 有没有登录 
        if(store.getters.token){
          store.dispatch('getInfoByToken',store.getters.token).then((res)=>{ 
            next()
          }).catch((err)=>{
            console.log('未登录')
            next()
          })
        }else{
          next()
        }
      }
    }, 
  ]
})
