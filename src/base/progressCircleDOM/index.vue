<template>

  <div ref="progress" class="progress-circle-dom">
    <div class="circle" ref="circle">
     <div class="bg bg-left" ref="bgLeft" ></div>
     <div class="bg bg-right" ref="bgRight"  ></div>
     <div class="content" :style="{color:centerColor}">{{centerShow}}</div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
import {prefixStyle} from 'common/js/cusFn'
const TRANSFORM = prefixStyle('transform')
const BOXSHAOW = prefixStyle('box-shadow')
const BORDERCOLOR = prefixStyle('border-color')
export default {
  name: 'progressCircleDOM',
  props:{
    radius:{
      type:Number,
      default:200
    },
    percent:{
      type:Number,
      default:0
    },
    bgColor:{
      type:String,
      default:'#BCC6CB'
    },
    trackColor:{
      type:String,
      default:'#FC930F'
    },
    showPercent:{
      type:String,
      default:''
    }, 
    centerColor:{
      type:String,
      default:'#000000'
    }

  },
  data(){
    return {
      
    }
  },
  computed:{
    trackBorder(){
      return `0 0 0 20px ${this.trackColor} inset`
    },
    centerShow(){
      if(this.showPercent){
        return this.showPercent
      }else{ 
        return Math.min(this.percent,100) + '%'
      }
    },
    radScale(){
      if(this.radius<=200){
        return 1
      }else{
        return (this.radius/200).toFixed(2)
      }
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
        this.$refs.bgRight.style['border-color'] = `${this.bgColor} ${this.bgColor} ${this.bgColor} transparent`
        this.$refs.bgLeft.style[TRANSFORM] = "rotate(0deg)"
      }else{
        this.$refs.bgRight.style[TRANSFORM] = "rotate(0deg)"
        this.$refs.bgRight.style['border-color'] = `${this.trackColor} ${this.trackColor} ${this.trackColor} transparent`
        this.$refs.bgLeft.style[TRANSFORM] = "rotate(" + 180 * (percent-50) * 2 / 100 + "deg)";
      } 
    },

    styleInit(){
      this.$refs.progress.style['width'] = 200*this.radScale + 'px'
      this.$refs.progress.style['height'] = 200*this.radScale + 'px'
      this.$refs.circle.style[TRANSFORM] = `scale(${this.radScale})`

      this.$refs.circle.style['box-shadow'] = this.trackBorder
      this.$refs.bgLeft.style['border-color'] = `${this.bgColor} transparent ${this.bgColor} ${this.bgColor}`
      this.$refs.bgRight.style['border-color'] = `${this.bgColor} ${this.bgColor} ${this.bgColor} transparent`
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
    this.styleInit() // 样式初始化
    this.rotateCircle(this.percent) //设置进度 
  }, 
  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){ 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.progress-circle-dom
  position relative
  width 200px
  height 200px
  .circle
    position relative
    display flex
    justify-content center
    align-items center
    background white
    border-radius 50%
    width 200px
    height 200px
    transform-origin: 0% 0%;  
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
      left 
      top 20%
      z-index 5
      display flex
      justify-content center
      align-items center
      font-size 34px
      font-weight 700 
</style>



