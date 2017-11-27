<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup"><!--图片 展示 区域 -->
      <slot></slot>  <!--插槽-->
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots"
           :class="{dot:true,active:currentPageIndex == index}"
      ></span>  <!--导航点-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import {addClass} from 'common/js/cusFn'
import BScroll from 'better-scroll'
//import
export default {
  name: 'slider',
  props:{
    loop:{  // 是否可以轮播
      type:Boolean,
      default:true,
    },
    autoPlay:{ // 是否可以自动转
      type:Boolean,
      default:true
    },
    interval:{ // 轮播间隔时间
      type:Number,
      default:3000
    }
  },
  data () {
    return {
       dots:[], // 轮播图导航点
       currentPageIndex:0  // 当前页面
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
    // 定义 slider 的宽 （此函数在 初始化组件 和 屏幕宽度改变时 都会调用）
    _setSliderWidth(isResize){
      this.children = this.$refs.sliderGroup.children // 获取（轮播）容器下面的 子节点组合
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth // slider 根节点的 实际宽度
      // 遍历 轮播容器下面的子节点
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]; // 获取当前遍历的子节点
        addClass(child,'slider-item') // 每个子节点 添加 slider-item 样式类
        child.style.width = sliderWidth+'px'// 给子节点定义宽度（容器总宽度）
        width += sliderWidth // 将子节点 的 宽度 叠加
      }
      if(this.loop && !isResize){ // isResize是监听window.resize事件时传入的值
      // 如果 loop为true（无缝循环）叠加的width要加2个 容器的宽
      // 添加 2sliderW的操作发生在第一次初始化组件时高度定义的过程中，window.resize不做处理
        width += 2*sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },

    _initDotes(){
      this.dots = new Array(this.children.length)
      // 定义 导航点 的长度
    },


    // 组件初始化函数
    _initSlider(){
      this.slider = new BScroll(this.$refs.slider,{  // 初始化 根节点
        scrollX:true,  // 横向 滚动
        scrollY:false,
        momentum:false,  //无拖动惯性
        snap:true, // 捕捉元素，根据滚动的位置 计算出滑动到第几页
        snapLoop:this.loop,  // 对滚动子元素是否进行复制（用于无缝滚动）
        snapThreshold:0.3,  // 手指 拖动 子元素 滑动 的距离， 超过此距离 自动翻页
        snapSpeed:400 // 轮播切换 的 过渡时间
      });

      this.slider.on('scrollEnd',()=>{ // 监听 BScroll 的 scrollEnd 事件
        let pageIndex  = this.slider.getCurrentPage().pageX // 获取 bScroll 转动时 计算出来的 pageX
        if(this.loop){ // 如果 需要无缝循环轮播，
          pageIndex-=1   // 获得 的 pageIndex 要 减 1
        }
        this.currentPageIndex = pageIndex

        if(this.autoPlay){  //在 bscroll 每次滚动停止(scrollEnd)时，如果有自动轮播
          clearTimeout(this.timer);  // 清楚当前的timer 计时器对象0
          this._play();   // 在执行一次 play() 函数，滚动到下一页
        }  // play 函数 控制滚动，当滚动停止时又再次触发 scrollEnd的监听，实现递归
      })
    },


    _play(){
      let pageIndex = this.currentPageIndex +1
      if (this.loop) {
        pageIndex +=1
      }
      this.timer = setTimeout(()=>{
        this.slider.goToPage(pageIndex,0,400)
      },this.interval)
    },
    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
  },
  mounted(){
    // 组件 创建完成，延时0.02s 进行 轮播 的初始化
    setTimeout(()=>{
      this._setSliderWidth();// 定义slider-group 容器 的宽度
      this._initDotes();  // 初始化 导航点
      this._initSlider();  // 初始化 slider
      if(this.autoPlay){   // 自动播放 为true
        this._play()
      }
    },20)

    // 监听 window 的 resize 事件
    window.addEventListener('resize',()=>{
      if(!this.slider){return} // slider 未初始化完成 不处理
      this._setSliderWidth(true)//传参 true ，在函数中忽略 添加 2sliderW 这步操作
      this.slider.refresh() // 调用 bScroll 对 滚动 功能 重加载

    })
  },

  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){
    if(this.autoPlay){
      this._play()
    }
  },

  deactivated(){
    clearTimeout(this.timer)//关闭计时器
  },
  beforeDestroy(){
    clearTimeout(this.timer)// 关闭计时器
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
@import "~style/mixin"
.slider
  width 100%
  position relative
  min-height 1px
  .slider-group
    position relative
    overflow hidden
    text-align center
    width-space nowrap // 避免元素折叠
    .slider-item
      float left
      overflow hidden
      text-align center
      a
        display block
        width 100%
        text-decoration none
      img
        display block
        width 100%
  .dots
    position absolute
    display inline-block
    height 0.16rem
    right 0rem
    bottom 0rem
    font-size 0
    .dot
      display inline-block
      margin 0 0.08rem
      width 0.16rem
      height 0.16rem
      border-radius 50%
      background red//rgba(255, 255, 255, 0.5)
      &.active
        width 0.4rem
        border-radius 0.1rem
        background blue//rgba(255, 255, 255, 0.8)



</style>



