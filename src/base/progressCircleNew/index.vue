<template>

  <div class="progress-circle-new">
    <div class="circle" ref="circle">
     <div class="bg bg-left" ref="bgLeft" ></div>
     <div class="bg bg-right" ref="bgRight"  ></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import {prefixStyle} from 'common/js/cusFn'
const TRANSFORM = prefixStyle('transform')
const BOXSHAOW = prefixStyle('box-shadow')
const BORDERCOLOR = prefixStyle('border-color')
export default {
  name: 'progressCircleNew',
  props:{
    percent:{
      type:Number,
      default:0
    },
    bgColor:{
      type:String,
      default:'green'
    },
    trackColor:{
      type:String,
      default:'#FC930F'
    },
    /*showPercent:{
      type:String,
      default:''
    }, 
    centerColor:{
      type:String,
      default:'#000000'
    }*/

  },
  data(){
    return {
      
    }
  },
  computed:{
    trackBorder(){
      return `0 0 0 20px ${this.trackColor} inset`
    }

  },
  created(){
   
    //this.$watch('percent',(val)=>{this.rotateCircle(val)}) 
  },
  methods:{
    rotateCircle(val){ 
      let percent = val
      percent = Math.max(0,percent);
      percent = Math.min(100,percent);
      if(percent<=50){
        this.$refs.bgRight.style[TRANSFORM] = "rotate(" + 180 * percent * 2 / 100 + "deg)";
        this.$refs.bgRight.style.borderColor = `${this.bgColor} ${this.bgColor} ${this.bgColor} transparent`
        this.$refs.bgLeft.style[TRANSFORM] = "rotate(0deg)"
      }else{
        this.$refs.bgRight.style[TRANSFORM] = "rotate(0deg)"
        this.$refs.bgRight.style.borderColor = `${this.trackColor} ${this.trackColor} ${this.trackColor} transparent`
        this.$refs.bgLeft.style[TRANSFORM] = "rotate(" + 180 * (percent-50) * 2 / 100 + "deg)";
      }

    } 
  },
  watch:{
    percent(val){
      this.rotateCircle(val)
    } 
  },
  components:{
  },
  mounted(){  
    this.$refs.circle.style[BOXSHAOW] = this.trackBorder
    this.$refs.bgLeft.style['border-color'] = `${this.bgColor} transparent ${this.bgColor} ${this.bgColor}`
    this.$refs.bgRight.style['border-color'] = `${this.bgColor} ${this.bgColor} ${this.bgColor} transparent`
    this.rotateCircle(this.percent)  
  }, 
  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){ 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.progress-circle-new
  position relative
  width 200px
  height 200px
  .circle
    display flex
    justify-content center
    align-items center
    background white
    border-radius 50%
    width 100%
    height 100%  
    //box-shadow 0 0 0 0.2rem red inset
    .bg
      position: relative;
      margin: 0;
      padding: 0;
      flex: 0 0 50%;
      height: 200px;
      background: #fff;
      border: 20px solid; 
      &.bg-left
        border-radius: 100px 0 0 100px;
        border-right 0
        //border-color: gray transparent gray gray;
        transform-origin: 100% 50%;
        z-index: 1;
      &.bg-right
        border-radius:0 100px 100px 0;
        border-left 0
        //border-color: gray gray gray transparent;
        transform-origin: 0% 50%;
        z-index: 2; 
  .content
    width 60%
    height 60%
    position absolute
    left 20%
    top 20%
    z-index 5
    background blue
</style>



