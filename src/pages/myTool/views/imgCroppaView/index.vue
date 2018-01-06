<template>
  <transition name="router-fade"> 
  <div class="croppa-view"  >
    <mHeader :isBack="true" text="图片裁切"></mHeader>
    <div class="data-wrap">
      <p>
        x:
        <input type="text" />
      </p>
      <p>
        y:
        <input type="text" />
      </p> 
    </div> 
    <div class="croppa-btn" @touchend="toUpLoad"></div>
    
    <imgCroppa ref="imgCroppa"></imgCroppa>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import imgCroppa from 'base/imgCroppa'  
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
    toUpLoad(){
      this.$refs.imgCroppa.imgUpload()
    }
     
  },
  watch:{

  },
  components:{
    mHeader,imgCroppa
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
  
.croppa-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .croppa-btn
    width 1rem
    height 1rem
    background red 
      
    

</style>



