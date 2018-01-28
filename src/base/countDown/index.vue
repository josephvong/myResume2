<template> 
  <div class="wrap">
    <!-- <progressCircle :radius="radius" :percent="num" :showPercent="clockShow"></progressCircle> -->
    <progressCircleDOM :radius="radius" :percent="num" :showPercent="clockShow"></progressCircleDOM>
  </div>  
</template>

<script type="text/ecmascript-6"> 
import progressCircle from 'base/progressCircleSVG/index'
import progressCircleDOM from 'base/progressCircleDOM/index'
import TWEEN from 'tween.js'
export default {
  props:{
    second:{  // 倒数秒数
      type:Number,
      default:60
    },
    radius:{
      type:Number,
      default:100
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
  data () {
    return {
      num:0, // 初始值
       
      duration:0, // 执行微秒时间（秒数*1000），需要根据进度 来改变

      tweenObj:null,

      process:0, // 进度（过了多少时间）

      isStop:true,

      //isMedium:false  // 是中断
    }
  },
  computed:{
    /*duration(){

    },*/
    clockShow(){
      return Math.floor(this.num*this.second/100)+'s'
    }
    //-------------------------------
    /*...mapGetters('sample',{
      sampleTest:'sampleTest'
    })*/
  },
  created(){
    this.duration = this.second*1000
  },
  methods:{
    start(isRestart){
      if(this.isStart) return
        
      if(!isRestart){
        this.$emit('clockStart')
      } 
       
      this.isStart = true  
      let This = this;
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      this.tweenObj = new TWEEN.Tween({ tweeningNumber: this.num })
       .to({tweeningNumber: 100},this.duration) 
       .onUpdate(function(proc){
          This.process = Math.round(proc*This.duration/This.duration*100)
          This.num = parseInt(this.tweeningNumber.toFixed(0)) 
       })
       .onComplete(function(doneObj){ 
          This.$emit('clockDone',doneObj)
       })
       .start()
      animate()
    },
    stop(isDone){
      if(this.tweenObj){
        this.isStart = false
        this.isMedium = true
        this.tweenObj.stop()
        if(!isDone){
          this.$emit('clockStop',{stopSec:parseInt(this.clockShow)}) 
        }
      }
    },
    restart(){
      if(this.isStart) return
      if(this.tweenObj){
        this.duration = Math.round((1-this.process/100)*this.duration) 
        this.start(true)
        this.$emit('clockRestart',{restartSec:parseInt(this.clockShow)})
      } 
    },
    reset(){ 
      this.stop(true)
      this.duration = this.second*1000
      this.num = 0
      this.$emit('clockReset')
    }
  },
  watch:{
    
  },
  components:{
    progressCircle, progressCircleDOM
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
  
.count-down-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .wrap
    width 80%
    margin 0 auto
    text-align center 
      
    

</style>

