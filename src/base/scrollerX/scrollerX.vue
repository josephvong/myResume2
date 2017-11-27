<template>
  <div class="scroller-x clearfix" ref="wrap">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import {addClass} from 'common/js/cusFn'
import BScroll from 'better-scroll'
//import
export default {
  name: 'scrollerX',
  props:{
    /*listData:{  // 是否可以轮播
      type:Array,
      default:[],
    },*/
    probeType:{
      type:Number,
      default:1
    },
    click:{
      type:Boolean,
      default:true
    }

  },
  data () {
    return {

    }
  },
  computed:{


  },
  created(){

  },
  methods:{
    _initScroll(){
      if(!this.$refs.wrap){return}

      this.scroll = new BScroll(this.$refs.wrap,{
        scrollX:true,
        scrollY:false,
        probeType:this.probeType,
        click:this.click
      })
    }
  },
  watch:{

  },
  components:{
  },
  mounted(){
    // 组件 创建完成，延时0.02s 进行 轮播 的初始化
    setTimeout(()=>{
      this._initScroll()
    },20)

    // 监听 window 的 resize 事件
    /*window.addEventListener('resize',()=>{

    })*/
  },

  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){

  },

  deactivated(){

  },
  beforeDestroy(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
@import "~style/mixin"
.scroller-x
  width 100%
  position relative
  min-height 1px
  border-bottom 3px solid red
  overflow hidden
  white-space:nowrap
  /*.slider-group
    position relative
    //overflow hidden
    //text-align center
    width-space nowrap // 避免元素折叠*/
</style>



