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
        <li class="navbar-item">写文章</li>
        <li class="navbar-item">留言箱</li>
        <li class="navbar-item">联系方式</li>
      </ul> 
      <div class="navbar-end user-status">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button success">
                我的微信
              </a>
            </p>
            <p class="control">
              <a class="button warning">
                我的微博
              </a>
            </p>
             <p class="control">
              <a class="button">
                我的github
              </a>
            </p>  
          </div>
        </div> 
        <div class="navbar-item" style="padding-right:0">
          <div class="user-status" >
            <span class="">用户名: joseph</span>
            <span class="">状态：已登录</span>
            <span class="">2017-12-07</span>
          </div>   
        </div> 
      </div>
    </div> 
  </nav>
</div>    
</template>

<script> 
export default {
  name: 'layoutHead',
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
//@import '~style/mixin.styl'
 
 
 
</style>

