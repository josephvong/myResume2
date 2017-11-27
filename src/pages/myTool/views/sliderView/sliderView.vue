<template>
  <transition name="router-fade">
  <div class="slider-view">
    <mHeader :isBack="true" text="滑动轮播"></mHeader>
    <div class="case-wrap">
      <h3 class='title'>滚动轮播</h3>
      <div class="slider-wrap">
        <slider :loop="true" :autoPlay="true" >
          <div v-for="i in 5">
            <a>
              <div class="inside-wrap">
                <span>AAAAA{{i}}</span>
              </div>
            </a>
          </div>
        </slider>
      </div>
    </div>
    <div class="desc">
      <p>使用：</p>
      <p style="font-weight:bold">组件参数options （组件的props）：</p>
      <p>loop:{ Boolean,    default:true,  }, // 是否可以轮播</p>
      <p>autoPlay:{  type:Boolean,   default:true  },  // 是否可以自动转</p>
      <p>interval:{ type:Number, default:3000  } // 轮播间隔时间</p>
    </div>

    <div class="case-wrap">
      <h3 class='title'>侧滑组件</h3>
      <div class="scroller-wrap">
        <scrollerX>
          <div class="scroll-content">
            <span v-for="i in 20">{{i}}</span>
          </div>
        </scrollerX>
      </div>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import slider from 'base/slider/slider'
import scrollerX from 'base/scrollerX/scrollerX'
export default {
  name: 'sliderView',
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
    mHeader,slider,scrollerX
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
.slider-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    padding 0.2rem
    .title
      font-size 0.4rem
      margin-bottom 0.1rem

  .desc
    padding 0 0.2rem

.slider-wrap
  position relative
  width:100%
  overflow hidden
  .inside-wrap
    margin 0 auto
    width 2rem
    height 1rem
    background #ccc
    line-height 1rem
    text-align center
    font-size 0.4rem
    font-weight bold
    color black

.scroller-wrap
  position relative
  width 100%
  .scroll-content
    display inline-block
    height 0.8rem
    line-height 0.8rem
    text-space : nowrap
    background green
    span
      display inline-block
      margin-right 0.03rem
      background red
      padding 0 0.2rem
</style>



