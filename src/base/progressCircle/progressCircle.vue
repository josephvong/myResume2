<template>
  <div class="progress-circle" :style="{width:radius+'px',height:radius+'px'}" >
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1"  :width='radius' :height="radius" style="">
      <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent">
      </circle>
      <circle ref="circleBar" class="progress-bar" r="50" cx="50" cy="50" fill="transparent"
              :stroke-dasharray="dashArray" :stroke-dashoffset="fixDashOffset"
      >
      </circle>
      <!--
        结构：
        svg 画板： viewBox：0 0 100 100， 宽高 通过 props：radius 传入
        两个 svg 圆形图，背景透明，边框width:8px 分：背景圆/进度条圆 r:50 cx/cy:50
          背景圆：边框颜色　为　浅色（作为轨道背景）
          进度条圆：边框颜色　为　深色（作为进度色）
        进度条 显示原理：
          stroke-dasharray 属性 为 0 - Math.PI*100 （pi*2r圆的周长） , 定义描边的虚线长度，描边 的间隔虚线（最短为1，最长是整个描边的长度）
          stroke-dashoffset 属性  定义虚线描边的偏移量（在路径开始的前面，看不到）、
          此处 进度条圆的 stroke-dasharray 为 314(pi*2r), stroke-dashoffest 也是 0-314（0时表示全部显示在描线范围内，314 表示 整体移出了描线范围之外）
      -->
    </svg>
    <div class="count" @click="">
      <strong :style="{'font-size':0.2*radius+'px'}">{{fixPercent}}%</strong>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import animations from 'create-keyframe-animation'  // 动画插件
export default {
  name: 'progressCircle',
  props:{
    radius:{
      type:Number,
      default:100
    },
    percent:{
      type:Number,
      default:0
    },

  },
  data(){
    return {
      dashArray: Math.PI *100,
      fixDashOffset:Math.PI *100,
      fixPercent:0
    }
  },
  computed:{
    dashoffset(){
      let percent
      if(this.percent>100){
        percent = 100
      }else{
        percent = this.percent;
      }
      return (100-percent)/100*this.dashArray
    }

  },
  created(){

  },
  methods:{
    goCount(n,time){
      let start=0; //开始数字 0
      let end =n; // 结束数字
      let startTime=now(); // 当前时间 的微秒数
      let value=0;
      clearInterval(timer);

      let timer= setInterval(()=>{
        let changeTime=now();
        let t= time-Math.max(0,startTime-changeTime+time); // 计算当前循环的剩余时间
        value=Math.round(linear(t,start,end,time));
        //dom.innerHTML=value;
        this.fixPercent = value
        if(value==n){
          clearInterval(timer);
        }
      },10)

      function now(){
        return (new Date()).getTime();
      }
      function linear(t, b, c, d){  //匀速参数(备用)：(已用时,开始值，距离值，总时间)
        return c*t/d + b;  // 开始+ 距离*（当前已用时/总时长）
      }
      function easeIn(t, b, c, d){  //加速曲线(备用函数)
        return c*(t/=d)*t + b;
      }
      function easeOut(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
      }
    },
    animationEnd(newNum){
      this.fixDashOffset = newNum;
      animations.unregisterAnimation('move')  // 取消 动画的注册（动画插件api）
      this.$refs.circleBar.style.animation = ''
    }

  },
  watch:{
    percent(newNum,oldNum){
      this.goCount(newNum,400)
    },
    dashoffset(newNum,oldNum){
      let animation = {
        0:{'stroke-dashoffset':`${oldNum}px`,'-webkit-stroke-dashoffset':`${oldNum}px`},
        100:{'stroke-dashoffset':`${newNum}px`,'-webkit-stroke-dashoffset':`${newNum}px`}
      }

      animations.registerAnimation({
        name:'move',
        animation,
        presets:{
          duration:400,
          easing:'linear'
        }
      })
      animations.runAnimation(this.$refs.circleBar,'move').then(()=>{
        this.animationEnd(newNum)
      })
    }
  },
  components:{
  },
  mounted(){

  },

  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~style/variable"
//@import "~style/mixin"
.progress-circle
  position relative
  .svg
    left 0
    top 0
    position:absolute;
    circle
      stroke-width 8px
      transform-origin center
      &.progress-background
        stroke: #BCC6CB
        transform:scale(0.9)
      &.progress-bar
        stroke #FC930F
        transform:scale(0.9)
        //animation go 1s linear
  .count
    position absolute
    left 20%
    top 20%
    width:60%;
    height:60%;
    text-align center
    //padding-top 10px
    &:before
      content ''
      display inline-block
      height 100%
      width 1px
      vertical-align middle
    strong
      text-align center
      display inline
      width 100%
      font-weight bold
      font-size 0.4rem
      //margin-left 10px



</style>



