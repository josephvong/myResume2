import router from './router'
import store from './store'

import {getToken} from 'common/js/cache/localCache'
const TokenKey = 'USERTOKEN'

// 全局路由导航守卫
router.beforeEach((to,from,next)=>{ 
  if(getToken(TokenKey)){ // token存在，用户已经登录
    if(to.path==='/user/login'){ // 如果去登录
      next({path:'/'})  // 无需登录 直接跳至首页
    }else{
      next()
    }
  }else{
    next()
  }
})