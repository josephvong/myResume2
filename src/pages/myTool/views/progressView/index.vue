<template>
  <transition name="router-fade">
  <div class="progress-view">
    <mHeader :isBack="true" text="进度条"></mHeader>
    <div class="case-wrap">
      <h3 class='title'>进度条1</h3> 
      <div class="progress-wrap">
        <progressBar :percent="rate/100" :isListen="isListen" @percentChange="rateChange"></progressBar>
      </div>
      <input v-model="rate" type="number" style="border:1px solid red; margin-top:10px" />
     <!--  <input  type="button" value='test' @click="percentChange" /> -->
      <p>{{rate}}</p>
    </div>
    <div class="desc">
      <p>布局</p>
      <ul>
        <li>1.根节点 progress-bar 高60px ，宽默认（100%）</li>
        <li>2.内部 inner 容器 高 4px 宽默认，底色浅黑，除了作为容器外，还作为进度条未完成部分的背景</li>
        <li>3.inner里面是 progress（进度条显示）和 btn-wrap (按钮的容器)</li>
        <li>4.progress 绝对定位 宽度为0，根据控件的事件动态计算高度</li>
        <li>5.btn-wrap 绝对定位到 inner的 左边头部，用于存放 拖动的 btn</li>
        <li>6.btn 拖动时，是根据 手指的触摸移动距离 计算btn 的 translate（btn-wrap不变）,并且计算progress的宽度</li>
      </ul>
      <br/>
      <p>JS 逻辑</p>
      <ul>
        <li>1.触摸拖动三部曲：监听 touchStart touchMove touchEnd</li>
        <li>2.触摸事件对象 event.touches[0], 里面包含 触摸时 的 pageXY各个值</li>
        <li>3.touchStart 事件 开始 创建 touch {} (组件内全局)对象 用来存放 触摸的数据</li>
        <li>4.touch 对象 key: ititiated(拖动开始)，startX(拖动的X坐标), left(进度条的变化长度) </li>
        <li>5.拖动过程通过 touch 对象内的数据，动态改变 btn 节点的位置和 progress的宽</li>
        <li>6.根据 拖动变化，计算 percent 值</li>
        <li>7.btn 的transition 使用 prefixStyle() （自定义）函数 进行兼容性处理 </li>
      </ul>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import progressBar from 'base/progressBar/progressBar'
export default {
  name: 'progressView',
  props:{

  },
  data () {
    return { 
      rate : 0,
      isListen:true 
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
    rateChange(percent){
      this.rate = Math.round(percent*100)
    },
     
    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
    mHeader,progressBar
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
@import "~common/style/mixin"
.router-fade-enter-active,.router-fade-leave-active
  transition all 0.5s
.router-fade-enter,.router-fade-leave-to
  transform:translate3d(100%,0,0)
.progress-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    padding 0.2rem
    .title
      font-size 0.4rem
      margin-bottom 0.1rem
    .progress-wrap
      width:100%
      padding 0 0.6rem
      border 1px solid red
      //height 0.5rem
      //background red
  .desc
    padding 0 0.2rem
    

</style>



