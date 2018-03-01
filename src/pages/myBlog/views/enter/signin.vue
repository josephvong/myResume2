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
              <input class="input" type="text" @focus="inputFocus" v-model="name" placeholder="请输入用户名">
            </div>
              
          </div>

          <div class="field">
            <label class="label">密码</label>
            <div class="control">
              <input class="input" type="password" @focus="inputFocus" v-model="password_a" placeholder="输入密码">
            </div>
          </div>

          <div class="field">
            <label class="label">再次输入密码</label>
            <div class="control">
              <input class="input" type="password" @focus="inputFocus" v-model="password_b" placeholder="确认密码">
            </div>
            
          </div>
          <p class="warning">{{warning}}</p>
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
      warning:'',
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
    inputFocus(){

    },
    signinClick(){
      if(!this.name || !this.password_a || !this.password_b){
        this.warning = '请输入用户名和密码'
      } 
      if(this.password_a !== this.password_b){
        this.warning = '请确认密码相同'
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
          this.warning = res.message
        }
      })
    } 
  }, 
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" scope rel="stylesheet/stylus">
@import './fixwrap.styl'
//@import '~style/mixin.styl' 
</style>

