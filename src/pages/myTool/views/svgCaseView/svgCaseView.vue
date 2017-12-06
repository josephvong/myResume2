<template>
  <transition name="router-fade">
  <div class="svg-case-view">
    <mHeader :isBack="true" text="svg控件"></mHeader>
    <div class="case-wrap">
      <div class="case">
        <h3>圆形进度条</h3>
        <div class="sample">
          <progressCircle ref="progCircleA" :radius="200" :percent="parseInt(circle1)||0"></progressCircle>
        </div>
        <input style="border:1px solid red" type="number" v-model="circle1" />
      </div>
    </div>
    <div class="case-wrap">
      <div class="case">
        <h3>多边形雷达图</h3>
        <div class="sample">
          <radarChart></radarChart>
        </div>
        <input style="border:1px solid red" type="number"  />
      </div>
    </div>
    <div class="case-wrap">
      <!-- <div class="animate" ref="anim" ></div> -->
      <svg class="animate" ref="SVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1"  width='200' height="200" style="" @click="animateGo">
        <circle class="cir" ref="Circle" r="50" cx="50" cy="50" fill="transparent"
                stroke-dasharray="314"
        ><!--  stroke-dasharray="314"  stroke-dashoffset="314" -->
        </circle>
      </svg>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import progressCircle from 'base/progressCircle/progressCircle'
import radarChart from 'base/radarChart/radarChart'

import animations from 'create-keyframe-animation'  // 动画插件

export default {
  name: 'svgCaseView',
  props:{

  },
  data () {
    return {
      circle1:0
    }
  },
  computed:{

  	//-------------------------------
  	/*...mapGetters('sample',{
  		sampleTest:'sampleTest'
  	})*/
  },
  created(){
    //if(this.$refs.Circle){
      //this.Circle = this.$refs.Circle
      //console.log(this.Circle)
    //}
  },
  methods:{
    animateGo(){

      let animation = {
        0:{'stroke-dashoffset':'0'},
        100:{'stroke-dashoffset':'314'}
      }

      animations.registerAnimation({
        name:'move',
        animation,
        presets:{
          duration:400,
          easing:'linear',
        },
      })
      //console.log(document.querySelector('circle.cir'))
      /*setTimeout(()=>{
        animations.runAnimation(this.$refs.circle,'move').then(()=>{
          //alert("A")
          animations.unregisterAnimation('move')  // 取消 动画的注册（动画插件api）
          this.$refs.circle.style.animation = ''
        })
      },100)*/

    }
  	//-----------------------------
  	/*...mapActions({
  		saveSearchHistory:"saveSearchHistory",
  	}),*/
  },
  watch:{

  },
  components:{
    mHeader,
    progressCircle,
    radarChart
  },
  mounted(){
    this.Circle = this.$refs.Circle
      console.log(this.Circle)
    //console.log(this.$refs.Circle)
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
.svg-case-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    padding 0.2rem
    .sample
      width:100%
      text-align center

.animate
  width 2rem
  height 2rem
  margin 0 auto
  background red
  circle
    stroke-width 8px
    transform-origin center
    stroke #FC930F
    transform:scale(0.9)
    //animation: dashOff 2s linear infinite;

@keyframes dashOff
  0%
    stroke-dashoffset 0
  100%
    stroke-dashoffset 314


</style>



