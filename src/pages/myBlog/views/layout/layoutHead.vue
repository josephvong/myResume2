<template>
<!--固定头部--> 
<div class="container"><!--头部内容居中容器-->
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a> 
      <div class="navbar-burger" @click="sliderOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-start tool-menu">
        <router-link class="navbar-item" to="/articleedit" v-if="role=='admin'">写文章</router-link>
        <li class="navbar-item" v-if="role=='admin'">权限</li>
        <li class="navbar-item" v-if="role=='user'">留言箱</li>
        <li class="navbar-item" v-if="role!='guest'">个人</li>  
        <li class="navbar-item">我的GitHub</li>
      </ul> 
      <div class="navbar-end user-status">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link v-if="role=='guest'" to="/user" class="button success" >
                登录/注册 
              </router-link>
              <a @click="logoutClick" v-if="role!='guest'" class="button success">
                退出登录
              </a>
            </p>
               
          </div>
        </div> 
        <div class="navbar-item" style="padding-right:0">
          <div class="user-status" >
            <span class="">你好:{{name}}</span> 
            <span>权限:{{role}}</span>
          </div>   
        </div> 
      </div>
    </div> 
  </nav>
  <!--过度组件-->
  <transition name="slider" @after-enter="sliderAfterEnter" > 
  <div class="slider" v-show="sliderShow" @click="sliderClose">
    <div class="slider-wrap" ref="sliderWrap"
      @click.stop
      @touchstart="slidTouchStart" 
      @touchmove="slidTouchMove"
      @touchend="slidTouchEnd"
      @transitionend="transEndHandle"
    >
      <div class="top" >
        <div class="user">
          <h3>{{name}}</h3>
          <p>权限:{{role}}</p>
        </div>
        <div class="access">  
          <a @click="routerGo('user')" v-if="role=='guest'" class="button success "  >
             登录/注册 
          </a> 
          <a @click="logoutClick" v-if="role!='guest'" class="button  success">
            退出登录
          </a>
        </div>
      </div>
      <aside class="menu">
        <p class="menu-label">
          功能菜单
        </p>
        <ul class="menu-list"> 
          <li @click="routerGo('articleedit')"> 
            <a class="navbar-item"  v-if="role=='admin'"> 写文章 </a>
          </li>
          <li v-if="role=='user'" @click="routerGo('')"><a> 留言箱 </a></li>
          <li v-if="role=='admin'" @click="routerGo('')"><a> 权限 </a></li>
          <li v-if="role!='guest'" @click="routerGo('')"><a> 个人 </a></li>
          <li @click="routerGo('')"><a> 我的GitHub </a></li> 
        </ul> 
      </aside>  
    </div>
  </div>
  </transition>
</div>    
</template>

<script>
import {prefixStyle} from 'common/js/cusFn'
import {mapGetters, mapActions } from 'vuex' 
const TRANSFORM =  prefixStyle('transform');
const TRANSITION = prefixStyle('transition');
export default {
  name: 'layoutHead',
  props:{

  },
  data () {
    return {
      sliderShow:false, // 整体侧边模块 显示隐藏
      startX:0,         // 触摸起始X
      touchMove:0,    // 滑动距离
      sliderWHide:false,  // 侧边菜单 是否隐藏 
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
    logoutClick(){
      this.$store.dispatch('toRemoveToken');
      this.$router.push({path:'/'})
      setTimeout(()=>{
        if(this.sliderShow){
          this.sliderClose()
        } 
      },10)
    },
    routerGo(link){ 
      this.$router.push({path:`/${link}`})
      setTimeout(()=>{
        if(this.sliderShow){
          this.sliderClose()
        } 
      },10)
    },
    //================滑动收起======================
    sliderClose(){// 关闭 slider ( 侧边栏添加 收起动画)
      this.$refs.sliderWrap.style[TRANSITION]=`transform 0.3s` 
      this.$refs.sliderWrap.style[TRANSFORM]=`translate3d(-100%,0,0)`
      this.sliderWHide = true 
    },
    sliderOpen(){ // 开启 slider （预先设置侧边栏的位移和transition）
      this.$refs.sliderWrap.style[TRANSITION]=`transform 0.3s` 
      this.$refs.sliderWrap.style[TRANSFORM]=`translate3d(-100%,0,0)`
      this.sliderShow = true 
    },
    sliderAfterEnter(){ // 背景 enter 钩子 过度组件进入后，控制侧边栏位移显示  
      this.$refs.sliderWrap.style[TRANSFORM]=`translate3d(0,0,0)` // 侧边栏 切入 
      this.sliderWHide = false 
    },

    slidTouchStart(event){
      //event.preventDefault() 
      const oTouch = event.touches[0]
      this.startX = oTouch.clientX?oTouch.clientX:oTouch.pageX 
    },
    slidTouchMove(event){
      //event.preventDefault()
      const oTouch = event.touches[0];
      let startX = this.startX;
      let nowX = oTouch.clientX?oTouch.clientX:oTouch.pageX 
      
      this.touchMove = -(startX-nowX)>0?0:-(startX-nowX)
      this.test = `${TRANSFORM}:translate3d(${-(startX-nowX)}px,0,0)`
      this.$refs.sliderWrap.style[TRANSFORM]=`translate3d(${this.touchMove}px,0,0)`

    },
    slidTouchEnd(event){
      this.$refs.sliderWrap.style[TRANSITION]=`transform 0.5s` 
      if(this.touchMove<-90){  
        this.$refs.sliderWrap.style[TRANSFORM]=`translate3d(-100%,0,0)`
        this.sliderWHide = true 
      }else{
        this.$refs.sliderWrap.style[TRANSFORM]=`translate3d(0,0,0)`
      }
    },
    transEndHandle(){ 
      this.$refs.sliderWrap.style[TRANSITION]=null
      if(this.sliderWHide){
        this.sliderShow = false
        this.sliderWHide = false
      }
    }

  }, 
  mounted(){ 
    
  }
}
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
.slider-enter-active,.slider-leave-active
  transition opacity 0.2s
  .slider-wrap
    opacity 1
.slider-enter,.slider-leave-to
  opacity 0
  .slider-wrap
    opacity 1
  
.slider
  position fixed
  left 0
  top 0
  bottom 0
  right 0
  z-index 10
  background rgba(0,0,0,0.4)
  .slider-wrap
    position absolute
    width 80%
    height 100%
    padding 10px 
    background white 
    overflow-y scroll
    -webkit-overflow-scrolling: touch;
    //transition:transform 0.3s 
    .top
      margin-bottom 1rem
      .user
        text-align center
        padding 1rem 0
        h3 
          font-size 1.8rem
          font-weight 700
        p  
          line-height 1.6rem
          font-size 1.2rem
      .access
        display flex 
        padding 0 1rem   
        justify-content space-around
 
</style>

