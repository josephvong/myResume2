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
              <input class="input" type="text" placeholder="e.g Alex Smith">
            </div>
          </div>

          <div class="field">
            <label class="label">密码</label>
            <div class="control">
              <input class="input" type="password" placeholder="e.g Alex Smith">
            </div>
          </div>

          <div class="field">
            <label class="label">再次输入密码</label>
            <div class="control">
              <input class="input" type="password" placeholder="">
            </div>
          </div>

          <div class="field">
            <p class="control" style="text-align:center">
              <a href="" class="button is-success">
                注册
              </a>
            </p>
          </div>

        </div>
      </div>
      <footer class="card-footer">
        <router-link to="/login" class="card-footer-item">我已注册</router-link>
        <!--<a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a> -->
      </footer>
    </div> 
  </div>
</template>

<script> 
export default {
  name: 'Signin',
  props:{

  },
  data () {
    return {

    }
  },
  computed:{ 
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
@import './fixwrap.styl'
//@import '~style/mixin.styl' 
</style>

