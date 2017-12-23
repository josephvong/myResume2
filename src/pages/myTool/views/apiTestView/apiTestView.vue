<template>
  <transition name="router-fade"> 
  <div class="api-test-view" ref="scrollWrap" >
    <mHeader :isBack="true" text="api测试页面"></mHeader>
    <div class="case-wrap">
      
      <button @click="testApi">send post</button>
      
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import mHeader from 'base/mHeader/mHeader'
import axios from 'axios'
export default {
  name: 'apiTestView',
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
    testApi(){
      axios.get('/testApi/recommendWine').then((res)=>{
        console.log(res)
      })
    } 
    
  },
  watch:{

  },
  components:{
    mHeader,
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
.api-test-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    padding 0.1rem
     
    
    



</style>



