<template>
  <div class="signin-wrap fix-wrap ">  
     <div class="card" style="width:80%;max-width:480px">
      <header class="card-header">
        <p class="card-header-title" style="text-align:center">
          欢迎注册
        </p> 
      </header>
      <div class="card-content">
        <div class="content">

          <div class="field">
            <label class="label">用户名</label>
            <div class="control">
              <input class="input" type="text" v-model="name" placeholder="请输入用户名">
            </div>
             <p class="warning">{{namenote}}</p>
          </div>

          <div class="field">
            <label class="label">密码</label>
            <div class="control">
              <input class="input" type="password" v-model="password_a" placeholder="输入密码">
            </div>
          </div>

          <div class="field">
            <label class="label">再次输入密码</label>
            <div class="control">
              <input class="input" type="password" v-model="password_b" placeholder="确认密码">
            </div>
             <p class="warning">{{pswnote}}</p>
          </div>

          <div class="field">
            <p class="control" style="text-align:center">
              <a @click="signinClick" class="button is-success">
                注册
              </a>
            </p>
          </div>

        </div>
      </div>
      <footer class="card-footer">
        <router-link to="/user/login" class="card-footer-item">我已注册</router-link>
        <!--<a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a> -->
      </footer>
    </div> 
  </div>
</template>

<script>
import {signinAPI} from 'api/blogAPI/api' // login接口 
export default {
  name: 'Signin',
  props:{

  },
  data () {
    return {
      pswnote:'', // 密码提示
      namenote:'', // 用户名提示
      name:'',
      password_a:'', // 密码
      password_b:''  // 确认密码
    }
  },
  computed:{ 
  },
  created(){

  },
  methods:{
    signinClick(){
      if(!this.name){
        this.namenote = '请输入用户名'
      }
      if(!this.password_a || !this.password_b){
        this.pswnote = '请输入密码'
      }
      if(this.password_a !== this.password_b){
        this.pswnote = '请确认密码相同'
      }
      if(this.name && this.password_a && this.password_b && this.password_a === this.password_b){ 
        this.goSignin({
          name:this.name,
          password:this.password_a,
          role:'user'
        }) 
      } 
    },

    goSignin(obj){
      signinAPI(obj).then((res)=>{
        if(res.success){
          this.$store.dispatch('changeToken',res.token);
          this.$router.push({path:'/'})
        }else{
          console.log(res.message)
        }
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

