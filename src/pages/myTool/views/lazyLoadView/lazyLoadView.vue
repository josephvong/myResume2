<template>
  <transition name="router-fade">
  <!--由于子路由页面为容器内部scroll，在使用 v-cuslazy 时需要给 scroll容器添加‘lazyScrollDom’的类名 -->
  <div class="lazy-load-view" @scroll.stop>
    <mHeader :isBack="true" text="图片懒加载"></mHeader>
    <div class="case-wrap">
      <ul class="players" ref="players">
        <li v-for="item in playerList">
        <div class="left">
          <!-- <img :src="`http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`" alt=""> -->
          <img v-cuslazy="`http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`" alt="">
        </div>
        <div class="right">{{item.Fsinger_name}} </div>
        </li>
      </ul>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters, mapState} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import {getPlayerList} from 'api/playersApi'
import {findTargetParent} from 'common/js/cusFn'
export default {
  name: 'lazyLoadView',
  props:{

  },
  data () {
    return {
      playerList:[]
    }
  },
  computed:{

  	//-------------------------------
  	/*...mapGetters('sample',{
  		sampleTest:'sampleTest'
  	})*/
  },
  created(){
    console.log('create');
    //document.body.style.overflow="hidden"
    getPlayerList().then((res)=>{
      this.playerList = res.data.list
    })
  },
  methods:{
    preventScroll(event){
        event.stopPropagation();
        event.preventDefault();
        return false
    },
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
    window.addEventListener('scroll', this.preventScroll)
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
.lazy-load-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    padding 0.2rem
    .players
      background #B4D8FA
      li
        display flex
        align-items center
        margin-bottom 0.2rem
        .left
          flex 0 0 2rem
          margin-right 0.3rem
          overflow hidden
          img
            display block
            width 100%
            height auto
        .right
          flex 1
          font-size 0.4rem



</style>



