<template> 
  <div class="sticky-view">
    <mHeader :isBack="true" text="粘滞融合效果"></mHeader>
     <div class="target" style="filter: url('#stickyViewGoo')">
        <i class="ball a"></i>
        <i class="ball b"></i>
     </div>

     <svg width="0" height="0" style="position:absolute;">
      <defs>
        <filter id="stickyViewGoo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="stickyViewGoo" />
          <feComposite in="SourceGraphic" in2="stickyViewGoo" operator="atop"/>
        </filter>
      </defs>
    </svg>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'gridView',
  props:{

  },
  data () {
    return {

    }
  },
  computed:{

    //-------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
      searchHistory:'searchHistory'
    })*/
  },
  created(){

  },
  methods:{

    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
    mHeader
  },
  mounted(){
    var ua = navigator.userAgent;
    if (/Safari|iPhone/i.test(ua) && /chrome/i.test(ua) == false) {
        document.body.classList.add('nofilter');
    }
  }
}
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
//@import "~common/stylus/mixin"
.sticky-view
  padding-top 0.8rem
.ball
  width: 150px; height: 150px;
  border-radius: 50%;
  background-color: #beceeb;
  position: absolute;
  &.a
    left 0rem
    top 1rem
  &.b
    left 140px
    top 1rem  


</style>



