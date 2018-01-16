<template>
  <transition name="router-fade"> 
  <div class="count-down-view"  >
    <mHeader :isBack="true" text="倒计时"></mHeader>
    <div class="wrap">
      <progressCircle :radius="200" :percent="num"></progressCircle>
    </div>
    <button @click="add">click</button>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import progressCircle from 'base/progressCircle/index'

export default {
  props:{
    
  },
  data () {
    return {
      num:28
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
    add(){
      this.num+=3
    }
  },
  watch:{

  },
  components:{
    mHeader,progressCircle
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

