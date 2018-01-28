<template>
  <div class="progress-circle-svg" :style="{width:radius+'px',height:radius+'px'}" >
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1"  :width='radius' :height="radius" style="">
      <circle class="progress-background" :style="{stroke:bgColor}" r="50" cx="50" cy="50" fill="transparent">
      </circle>
      <circle ref="circleBar" class="progress-bar" :style="{stroke:trackColor}" r="50" cx="50" cy="50" fill="transparent"
              :stroke-dasharray="dashArray" :stroke-dashoffset="dashoffset"
      >
      </circle> 
    </svg>
    <div class="count" @click="">
      <strong :style="{'font-size':0.2*radius+'px',color:centerColor}">{{centerShow}}</strong>
    </div>
  </div>
</template>

<script type="text/ecmascript-6"> 
export default {
  name: 'progressCircleSVG',
  props:{
    radius:{
      type:Number,
      default:100
    },
    percent:{
      type:Number,
      default:0
    },
    showPercent:{
      type:String,
      default:''
    },
    bgColor:{
      type:String,
      default:'#BCC6CB'
    },
    trackColor:{
      type:String,
      default:'#FC930F'
    },
    centerColor:{
      type:String,
      default:'#000000'
    }

  },
  data(){
    return {
      dashArray: Math.PI *100, 
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
    },
    centerShow(){
      if(this.showPercent){
        return this.showPercent
      }else{ 
        return Math.min(this.percent,100) + '%'
      }
    }

  },
  /*created(){ 
  },
  methods:{ 
  },
  watch:{ 
  },
  components:{
  },
  mounted(){ 
  }, 
  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){ 
  },*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~style/variable"
//@import "~style/mixin"
.progress-circle-svg
  position relative 
  .svg
    left 0
    top 0
    position:absolute;
    circle
      stroke-width 10px
      transform-origin center
      &.progress-background
        //stroke: #BCC6CB
        transform:scale(0.8)
      &.progress-bar
        //stroke green//#FC930F
        transform:scale(0.8)
        transition stroke-dashoffset 0.1s 
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
      //margin-left 10px



</style>



