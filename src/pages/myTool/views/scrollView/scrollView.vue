<template>
  <transition name="router-fade">
  <div class="scroll-view">
    <mHeader :isBack="true" text="滑动组件（下拉刷新）"></mHeader>
    <div class="pull-scroll-wrap">  <!--下拉功能 组件 的 根节点-->
      <div class="up-loading"><!--下拉加载 功能 顶部 loading 标志 （绝对定位，位于底层） -->
        <loading></loading>
      </div>  
      <scrollerY class="pull-down-scroll" :pulldown="true" @pulldown="scrollPullDown" :listData="testList"> <!--使用 滚动组件 -->
        <div class="content-wrap"><!--滚动组件 内的 内容 根节点（所有内容放在里面），背景白，覆盖住 loading标志-->
          <ul>  
            <li v-for="i in testList">{{i}}</li>
          </ul>
        </div> 
      </scrollerY>
    </div> 
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import scrollerY from 'base/scrollerY/scrollerY'
import loading from 'base/loading/loading'  
export default {
  name: 'scrollView',
  props:{

  },
  data () {
    return {
      testList:[1,2,3,4,5]
    }
  },
  computed:{

    //-------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
      searchHistory:'searchHistory'
    })*/
  },
  created(){

  },
  methods:{
    scrollPullDown(){
      let a = Math.random()
      setTimeout(()=>{
        this.testList.unshift(a)
      },300) 
    }

    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
    mHeader, scrollerY , loading
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
@import "~style/mixin"
.router-fade-enter-active,.router-fade-leave-active
  transition all 0.5s
.router-fade-enter,.router-fade-leave-to
  transform:translate3d(100%,0,0)
.scroll-view
  line-height 0.34rem
  font-size 0.28rem 
  /* 带header子页面 固定样式（fix定位,paddingTop 0.8rem bottom 0.98rem, overflow auto,并设置webkitScroll的滑动效果 ）*/
  sub-page-head() 
  .pull-scroll-wrap // 子页面 下 第一个子节点 作为 scroll 组件的根节点（或者组件的父容器）  
    position relative  // 相对定位
    height 100%    // height 设置为 100% “sub-page” div 的 内容区域 
    .up-loading     // 下拉刷新功能 的 
      position absolute 
      left 50%
      top 0 
      transform translate3d(-50%,0,0)  
    .pull-down-scroll  // 滚动组件 的样式
      height 100%     // 滚动组件 需要固定高度
      overflow hidden // 超出隐藏
      z-index 2         
      .content-wrap // scroll 组件 slot 里面的唯一一个子节点（所有内容放在里面）
        background white
        min-height 102%  // 在pulldown 刷新组件里面，需要设置 最小高度>100% 让scroll组件可以使用pulldown功能
        li
          line-height 0.6rem
          font-size 0.32rem
          border-bottom 1px solid #ccc

 

 
</style>



