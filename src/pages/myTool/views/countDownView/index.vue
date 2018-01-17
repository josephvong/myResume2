<template>
  <transition name="router-fade"> 
  <div class="count-down-view"  >
    <mHeader :isBack="true" text="倒计时"></mHeader>
    <countDown ref="countDownClock" :second="10" :radius="100"
      @clockStart="onClockStart"
      @clockStop="onClockStop"
      @clockRestart="onClockRestart"
      @clockDone="onClockDone"
      @clockReset="onClockReset"
    ></countDown>
    <button style="font-size:0.32rem" @click="clockStart">Start</button> 
    <button style="font-size:0.32rem" @click="clockStop">Stop</button>
    <button style="font-size:0.32rem" @click="clockRestart">Restart</button>
    <button style="font-size:0.32rem" @click="clockReset">Reset</button> 
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import countDown from 'base/countDown/index' 
export default {
  props:{
    
  },
  data () {
    return {
      timeRunning:false
    }
  },
  computed:{
     
    //-------------------------------
    /*...mapGetters('sample',{
      sampleTest:'sampleTest'
    })*/
  },
  created(){
    
  },
  methods:{
    clockStart(){
      if(!this.timeRunning){
        this.timeRunning = true
        this.$refs.countDownClock.start()
      }
      
    },
    clockStop(){
      this.$refs.countDownClock.stop()
    },
    clockRestart(){

      this.$refs.countDownClock.restart()
    },
    clockReset(){
      this.timeRunning = false
      this.$refs.countDownClock.reset()
    },
    onClockStart(){
      console.log('start')
    },
    onClockStop(obj){ 
      console.log('stop')
      console.log(obj)
    },
    onClockRestart(obj){
      console.log('restart')
      console.log(obj)
    },
    onClockDone(obj){
      this.timeRunning = false
      console.log('done')
      console.log(obj)
    },
    onClockReset(){
      console.log('reset')
    },
  },
  watch:{
     
  },
  components:{
    mHeader,countDown
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

