<template>
  <div class="layout-wrap">  
    <div class="layout-head">  <!--固定头部-->
       <layoutHead></layoutHead>
    </div>
    <div class="layout-banner hero ">
      <div class="hero-body" > 
        <div class="hero-content container">
          <div class="left">
            <h1 class="title">Joseph 的 博客</h1>
            <h2 class="subtitle">这是一个 我的 博客</h2>
          </div>
          <div class="right">
            <img :src="require('common/images/jizhi.png')" alt="">
            <div class="desc">这是一个机智的描述 blablablablablablabla</div>
          </div>  
        </div> 
      </div> 
    </div>
    <div class="layout-submenu"> 
      <input type="checkbox" id="expressSubmenu">
      <div class="container"> 
        <label for="expressSubmenu" class="show-sub navbar-burger" >
          <span></span> <span></span> <span></span>
        </label>

        <nav class="level" >
          <p class="level-item ">
            <a class="link is-info">首页</a>
          </p>
          <p class="level-item ">
            <a class="link is-info">分类A</a>
          </p>
          
          <p class="level-item ">
            <a class="link is-info">分类B</a>
          </p>
          <p class="level-item ">
            <a class="link is-info">分类C</a>
          </p>
          <p class="level-item ">
            <a class="link is-info">首页</a>
          </p>
          <p class="level-item ">
            <a class="link is-info">分类A</a>
          </p>
          
          <p class="level-item ">
            <a class="link is-info">分类B</a>
          </p>
          <p class="level-item ">
            <a class="link is-info">分类C</a>
          </p>
        </nav>
      </div>
    </div>  
    <div class="container">  
      
      <div class="layout-main">
        router-view (article list)
        <ul>
          <li v-for="i in 300">{{i}}</li>
        </ul>
      </div>
      <div class="layout-foot">
        footer 
      </div>
    </div>
    <div class="side-layer">
      hide header
    </div>
  </div>
</template>

<script>
import layoutHead from './layoutHead.vue' 
export default {
  name: 'Layout',
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
  components:{
    layoutHead
  }, 
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
.layout-wrap
  width 100%
  padding-top 3.5rem
  .layout-head
    position: fixed
    left 0
    top 0
    width 100% 
    background white
    z-index 10
  .layout-banner
    background orange
    .hero-content
      display flex
      align-items center
      .left
        flex 1 1 auto
        width 60%
        text-align center
      .right
        flex 0 0 320px
        width 320px
        display flex
        align-items center
        height 120px
        padding 10px
        border 1px solid white
        border-radius 10px
        img
          display block
          height 100%
          margin-right 10px
        .desc
          flex 1 1 auto
  .layout-submenu
    width 100%
    input[type="checkbox"]
      display none 
    .container
      position:relative; 
      max-height:3.5rem
      overflow hidden
      transition all 0.5s 
      .show-sub
        margin:0 auto;
        display none
      .level
        width:100%; 
        z-index:5;
        line-height:3rem 
    input[type="checkbox"]:checked ~ .container
      max-height 100rem
      
@media only screen and (max-width : 768px)  
  .layout-banner .hero-body .hero-content .left//屏幕小于 768px
    flex 0 0 100%
    width 100%
  .layout-banner .hero-body .hero-content .right//屏幕小于 768px
    display none
    
  .layout-submenu .container .show-sub
    display block !important 
    
 
  
         
</style>

