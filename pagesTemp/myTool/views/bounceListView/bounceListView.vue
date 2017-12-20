<template>
  <transition name="router-fade">
  <div class="bounce-list-view">
    <div ref="bgImg" class="bg-image">
      <div class="play-wrap">
      </div>
    </div>

    <div ref="layer" class="bg-layer"></div> <!--弹性list 的背景遮盖层 -->

    <!--滚动列表组件， 组件中列表的向上偏移量控制 背景layer 的向上偏移(translateY)-->
    <scrollerY class="list" ref="list" :listenScroll="true" :probeType="3"
               @scroll = 'onScroll'
    > <!--滚动列表监听 scroll 事件-->
      <div class="list-wrap">
        <ul>
          <li v-for="i in 80">{{i}}</li>
        </ul>
      </div>
    </scrollerY> 
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import {prefixStyle} from 'common/js/cusFn'
const RESERVED_HEIGHT = 80 //滚动遮盖的预留高度
const transform = prefixStyle('transform') // 自动添加 前缀的transform

import mHeader from 'base/mHeader/mHeader'
import scrollerY from 'base/scrollerY/scrollerY'
export default {
  name: 'bounceListView',
  props:{

  },
  data () {
    return {
      scrollY : 0
    }
  },
  computed:{

    //-------------------------------

  },
  activated(){

  },
  created(){

  },
  methods:{ 
    onScroll(pos){
      this.scrollY = pos.y
    }
    //-----------------------------
    /*...mapActions('search',{
      deleteSearchHistory:'deleteSearchHistory'
    }),*/
  },
  watch:{
    scrollY(newY){
      //取 scroll组件的向上偏移量 与 遮罩层当前向上偏移量 之间 的较小值
      let translateY = Math.max(this.minTranslateY,newY) //this.minTranslateY 就是layer节点的 向上偏移移量

      //将layer 和 scroll 两个 向上偏移量中较大的 一个（上面定义的 translateY变量）来定义 layer的 transformY值（让其向上偏移） 
      this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`

      let zIndex = 0
      let scale = 1
      let blur = 0
      let precent = Math.abs(newY/this.imageHeight) // 上移的（相对与banner高度）百分比

      // newY > 0 scroll向下拉动到列表顶部尽头
      if(newY>0){
        scale = 1+precent // 设置 scale 比率 > 1, 并且scale增大的比率为 scroll组件posY 和 banenr高度的百分比 
        zIndex = 10
      }else{  // newY < 0 scroll 组件 的 列表 向上偏移
        blur = Math.min(20,precent*20) // 模糊都根据 precent 增高
      }
      
      // newY < this.minTranslateY 是在 列表上滚时 超过最小顶部距离 的 状态
      // 在超过此距离时 设置 各种dom节点 的样式 遮住 列表超出的部分

      if(newY < this.minTranslateY){ // 当scroll组件的 posY（向上偏移量）超过layer的向上偏移量后
        // 调整 banner 的 样式 来 遮住 list 向上 滚动时超过 layer 的部分 
        zIndex = 10
        this.$refs.bgImg.style.paddingTop = '0%';
        this.$refs.bgImg.style.height = RESERVED_HEIGHT +'px';
      }else{
        this.$refs.bgImg.style.paddingTop = '70%';
        this.$refs.bgImg.style.height = 0 +'px';
      }

      
      this.$refs.bgImg.style.zIndex = zIndex;
      this.$refs.bgImg.style[transform] = `scale(${scale})`;
    }
  },
  components:{
    mHeader, scrollerY
  },
  mounted(){
    //全部dom生成后，定义 scroll 组件的 高度， 通过定义top值来实现（scroll组件 fix定位，并bottom为0） 
    this.$refs.list.$el.style.top = this.$refs.bgImg.clientHeight+'px'
    //全部dom生成后，用变量记录顶部图片容器的高度
    this.imageHeight = this.$refs.bgImg.clientHeight
    //全部dom生成后，用变量计算 遮罩层（上移遮盖作用）的最大上升高度（translateY的最小值）
    this.minTranslateY = -this.$refs.bgImg.clientHeight + RESERVED_HEIGHT // banner高度 去除 预留高度（RESERVED_H）
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
.bounce-list-view
  position fixed
  left 0
  right 0
  top 0
  bottom 0.98rem
  background yellow  
  .bg-image
    position relative
    width 100%
    height 0
    padding-top 70%
    background no-repeat
    background-position 0 0
    background-size cover
    background-image url("https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000")
  .bg-layer
    position relative
    height 100%
    background blue
  .list
    position fixed
    bottom 0.98rem // 滚动列表 的top在组件mounted 中设置 
    width 100%  
    background blue
    .list-wrap
      padding 0.2rem 0.3rem
      li
        width 100%
  



    //transform




</style>



