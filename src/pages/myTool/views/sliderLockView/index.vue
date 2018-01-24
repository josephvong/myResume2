<template>
  <transition name="router-fade"> 
  <div class="slider-lock-view" >
    <mHeader :isBack="true" text="滑动解锁"></mHeader>
    <div class="case-wrap">
      <div id="cusSliderLock" >
        <div class="lock-wrap" >
          <div class="slider-lock" ref="sliderLock">
            <!-- <div class="fill-bg"></div> -->
          </div>
          <div class="slider-btn" ref="sliderBtn"
              @touchstart.prevent = 'sliderTouchStart'
              @touchmove.prevent = 'sliderTouchMove'
              @touchend = 'sliderTouchEnd'  
          ></div>
        </div> 
      </div>
     
      
      
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">

import mHeader from 'base/mHeader/mHeader'
import {prefixStyle} from 'common/js/cusFn'
const transform = prefixStyle('transform') 
export default {
  name: 'sliderLockView',
  props:{

  },
  data () {
    return {
      maxWidth:0,
      startWidth:0,
      offsetWidth:0,
      lockOpen:false,
    }
  },
  computed:{

    //-------------------------------
    /*...mapGetters('sample',{
      sampleTest:'sampleTest'
    })*/
  },
  created(){
    this.touch = {} 
  },
  methods:{
    sliderTouchStart(){ // 触摸 开始
      this.touch.initiated = true;
      this.touch.startX = event.touches[0].pageX
      this.touch.left = this.startWidth // 进度的偏移 为 progress 的 clientWidth*/
    },
    sliderTouchMove(){ // 触摸 过程
      if(!this.touch.initiated){return}
      if(this.lockOpen){return}
      const deltaX = event.touches[0].pageX - this.touch.startX // 手指的拖动距离
      //const barWidth = this.$refs.progressBar.clientWidth // 进度条总长度
      this.offsetWidth = Math.min(this.maxWidth,Math.max(0,this.touch.left+deltaX));//手指拖动距离的变化量 最小为0 最大为 barWidth
      this.btnMove(this.offsetWidth)
      /*if(this.isListen){  // 启动实时监听
        this._changePercent();
      }*/

    },
    sliderTouchEnd(){ // 触摸 结束
      this.touch.initiated = false;
      if(this.offsetWidth < this.maxWidth){
        this.offsetWidth = 0
        this.$refs.sliderBtn.style[transform] = `translate3d(0,0,0)`
      } 
    },

    btnMove(offsetWidth){
      this.$refs.sliderBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      if(offsetWidth >= this.maxWidth){
        this.lockOpen = true
        setTimeout(()=>{alert('lock open')},300)
      }
    }
    
  },
  watch:{

  },
  components:{
    mHeader,
  },
  mounted(){
    /*console.log(this.$refs.sliderLock.offsetWidth)
    console.log(this.$refs.sliderBtn.offsetWidth)
    console.log(this.$refs.sliderLock.offsetWidth-this.$refs.sliderBtn.offsetWidth)*/
    this.maxWidth = this.$refs.sliderLock.offsetWidth-this.$refs.sliderBtn.offsetWidth - 3
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
.slider-lock-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    padding 0.1rem

#cusSliderLock
  width 80%    // 自定义
  
  margin 30px auto 
  .lock-wrap
    
    position relative
    width 100%
    height 1rem  // 自定义
    
    //background blue
    .slider-lock 
      width 100%
      height 100%
      border-radius 0.5rem 
      overflow hidden
      background linear-gradient(90deg, #F196A2 , #EA4C6E)
      /*.fill-bg
        height 100%
        width 0.5rem
        //background white*/
    .slider-btn
      position absolute
      left 3px
      top 2px
      bottom 2px
      width 1.2rem
      //height 0.8rem
      border-radius 0.5rem
      background green
      //transform translate3d(0px,0,0)    
        
     
    
    



</style>



