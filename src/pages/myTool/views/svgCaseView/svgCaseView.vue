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
        <input style="border:1px solid red" type="number" ref="input_a" />
        <button @click="numberGo">click</button>
      </div>
    </div>
    <!-- <div class="case-wrap">
      <div class="case">
        <h3>多边形雷达图</h3>
        <div class="sample">
          <radarChart></radarChart>
        </div>
        <input style="border:1px solid red" type="number"  />
      </div>
    </div> -->
     
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {goCount} from 'common/js/cusFn'
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import progressCircle from 'base/progressCircle/index'
import radarChart from 'base/radarChart/radarChart'

//import animations from 'create-keyframe-animation'  // 动画插件

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
 
  },
  created(){
     
  },
  methods:{
    numberGo(){
      let num = this.$refs.input_a.value
      //goCount(this.circle1,num,500,'linear')
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



