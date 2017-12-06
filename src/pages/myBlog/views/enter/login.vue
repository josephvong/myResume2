<template>
  <div class="login-wrap fix-wrap"> 
    <div class="card" style="width:80%;max-width:480px">
      <header class="card-header">
        <p class="card-header-title">
          欢迎来到我的博客
        </p> 
      </header>
      <div class="card-content">
        <div class="content">

          <div class="field">
            <label class="label">用户名</label>
            <div class="control">
              <input class="input" @focus="inputFocus" type="text" placeholder="请输入用户名" v-model="name">
            </div>
            <p class="warning">{{namenote}}</p>
          </div>

          <div class="field">
            <label class="label">密码</label>
            <div class="control">
              <input class="input" @focus="inputFocus" type="password" placeholder="" v-model="password">
            </div>
            <p class="warning">{{pswnote}}</p>
          </div>

          <div class="field">
            <p class="control" style="text-align:center">
             <a @click="loginClick" class="button is-success">
                登录
              </a> 
              <!--<router-link to="main"class="button is-success">登录</router-link>-->
            </p>
          </div>

        </div>
      </div>
      <footer class="card-footer">
        <router-link to="/user/signin" class="card-footer-item">我要注册</router-link>
        <router-link to="/" class="card-footer-item">我先看看</router-link>  
        <!--<a href="#" class="card-footer-item">我要注册</a>
        <a href="#" class="card-footer-item">Delete</a> -->
      </footer>
    </div> 
    
  </div>
</template>

<script>
import {loginAPI} from 'api/blogAPI/api' 
export default {
  name: 'Login',
  props:{

  },
  data () {
    return {
      pswnote:'', // 密码提示
      namenote:'', // 用户名提示
      name:'',
      password:'',
    }
  },
  computed:{ 
  },
  created(){

  },
  methods:{
    inputFocus(){
      this.pswnote = ''
      this.namenote = ''
    },
    loginClick(){
      if(!this.name){
        this.namenote = '请输入用户名'
      }
      if(!this.password){
        this.pswnote = '请输入密码'
      }
      if(this.name && this.password){ 
        this.goLogin({
          name:this.name,
          password:this.password
        })
        
      }
    },
    goLogin(obj){ // 登录
      this.$store.dispatch('loginByUsername',{
        ...obj
      }).then((res)=>{
        console.log(res)
        this.getInfo(res.token) 
      }).catch((err)=>{
        console.log(err)
      }) 
    },
    getInfo(token){ // 获取用户想你想
      this.$store.dispatch('getInfoByToken',token).then((res)=>{
        if(res){
          this.$router.push('/')
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  }, 
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './fixwrap.styl'
//@import '~style/mixin.styl' 
</style>

