<template>
  <transition name="router-fade"> 
  <div class="switch-view"  >
    <mHeader :isBack="true" text="图片旋转切换"></mHeader>
    <div class="case-wrap case_a">
      <div class="box" ref="rotateBox">
        <div> 1 </div>
        <div> 2 </div>
      </div>
    </div>
    <button style="line-height:0.6rem;font-size:0.5rem" @click="boxRotate">翻转</button>
    <button style="line-height:0.6rem;font-size:0.5rem" @click="rotateBack">返回</button>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import {prefixStyle} from 'common/js/cusFn'
const TRANSFORM = prefixStyle('transform') 
export default {
  props:{

  },
  data () {
    return {
      
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
    boxRotate(){
      let box = this.$refs.rotateBox;
      box.style[TRANSFORM] = 'rotateX(180deg)'
    },
    rotateBack(){
      let box = this.$refs.rotateBox;
      box.style[TRANSFORM] = ''
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
  },
  mounted(){
    console.log(TRANSFORM)
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
  
.switch-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()   
  .case-wrap.case_a
    position relative
    margin 30px auto
    width 80%
    height 0
    padding-top 80%
    background red
    perspective:2000px
    .box
      width 80%
      height 80%
      position absolute
      left 10%
      top 10%
      background blue
      transform-style: preserve-3d; 
      transition 0.8s;
      //perspective:2000px
      div
        display flex
        align-items center
        justify-content center
        width 100%
        height 100%
        position:absolute;
        font-size 0.6rem
        color white
        &:nth-of-type(1)
          left:0px;
          top:0px;
          background:green;
        &:nth-of-type(2)
          left 0
          top 100%
          transform-origin top
          transform rotateX(-180deg)
          background black
          
        
    /*&:hover .box
      transform:rotateX(180deg)*/
      
    

</style>



