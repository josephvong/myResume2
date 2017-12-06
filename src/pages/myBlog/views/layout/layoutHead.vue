<template>
<!--固定头部--> 
<div class="container"><!--头部内容居中容器-->
  <nav class="navbar " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a> 
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-start tool-menu">
        <li class="navbar-item" v-if="role!='guest'">写文章</li>
        <li class="navbar-item" v-if="role=='guest'">留言箱</li>
        <li class="navbar-item">联系方式</li>
        <li class="navbar-item">我的GitHub</li>
      </ul> 
      <div class="navbar-end user-status">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link v-if="role=='guest'" to="/user" class="button success" >
                登录/注册 
              </router-link>
              <a v-if="role!='guest'" class="button success">
                重新登录 
              </a>
            </p>
               
          </div>
        </div> 
        <div class="navbar-item" style="padding-right:0">
          <div class="user-status" >
            <span class="">你好:{{name}}</span> 
            <span>{{role}}</span>
          </div>   
        </div> 
      </div>
    </div> 
  </nav>
</div>    
</template>

<script>
import {mapGetters } from 'vuex' 
export default {
  name: 'layoutHead',
  props:{

  },
  data () {
    return {

    }
  },
  computed:{ 
    //---------------------------------
    ...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      name: 'name',
      role: 'role'
    }) 
  },
  created(){

  },
  methods:{
     
  }, 
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
 
 
 
</style>

