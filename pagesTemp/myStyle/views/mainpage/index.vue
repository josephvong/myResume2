<template>
  <div class="style-view">
    <ul>
      <li class="case-item" @click="routerGo" data-link="gridview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">九宫格案例</h3>
          <p class="desc">这是一个九宫格的排版案例，包含样式如何实现，其实这个简介不用写那么多，只是为了展示是否可以多行超出省略，然而并未超出，所以就继续添加内容了</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="leftbarview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">左bar的多种实现方式</h3>
          <p class="desc">使用了7种方式仅用一个div标签实现有左边bar样式的区块，还等什么，快来看啊！</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="colorborderview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">background-origin和clip</h3>
          <p class="desc">讲述了盒子模型 Box Model 与 背景 background 相关样式属性的关系，如background-origin 和 backgroun-clip</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="stacklevelview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">dom的层叠顺序</h3>
          <p class="desc">了解了一些 ‘层叠水平’ 和 ‘堆叠上下文’ 的概念</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="reflectview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">倒影实现</h3>
          <p class="desc">使用 inherit，做背景继承</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="textcenterview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">文字单行居中，两行靠右，多行省略</h3>
          <p class="desc">使用 inherit，做背景继承</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="csstabview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">纯css tab 控件</h3>
          <p class="desc"></p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="samehighview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">双列等高</h3>
          <p class="desc">双(多)列登高是 页面 常用布局方法，本例中使用 多种比较通用的方法实现 双列等高</p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="slantlineview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">实现正方形中斜线切歌</h3>
          <p class="desc"></p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="stickybottomview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">粘性底部布局</h3>
          <p class="desc"></p>
        </div>
      </li>
      <li class="case-item" @click="routerGo" data-link="linearbgview">
        <div class="left-icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <div class="right-desc">
          <h3 class="title">渐变背景动画</h3>
          <p class="desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6"> 
//import mGrid from 'base/mGrid/mGrid'
export default {
  name: 'mainPage',
  props:{

  },
  data () {
    return {


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
    routerGo(event){
      let target = event.currentTarget.getAttribute('data-link');
      this.$router.push({
        path:`/${target}`
      })
    },
    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
    //mGrid
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/style/variable"
@import "~common/style/mixin"
.style-view
  font-size 0.28rem
  padding 0.2rem
  .case-item
    display flex
    align-items center
    flex-flow row nowrap
    padding 0.1rem
    margin-bottom 0.1rem
    thin-border-bottom(#cccccc)
    .left-icon
      flex 0 0 1.6rem
      width 1.6rem
      height 1.6rem
      margin-right 0.2rem
      img
        display block
        width 100%
        height 100%
    .right-desc
      display block
      flex 1 1 auto
      overflow hidden

      h3.title
        display block
        width 100%
        line-height 0.6rem
        font-size 0.32rem
        font-weight bold
        no-wrap()
      p.desc
        height 1rem
        line-height 0.33rem
        font-size 0.28rem
        multiline-hide(3)

</style> 




