<template>
  <transition name="router-fade">
  <div class="infinite-view" ref="scrollPage">
    <mHeader :isBack="true" text="无限加载（下拉刷新）"></mHeader>
    <div class="wrap" ref="wrap">  <!--下拉功能 组件 的 根节点-->
      <ul>
        <li v-for ='i in num'>{{i}}</li>
      </ul>
      <infiniteScroll v-if="scroller" :scroller="scroller" :loading="loading"  @toLoad="loadData"></infiniteScroll>
    </div> 
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import infiniteScroll from 'base/infiniteScroll' 
import loading from 'base/loading/loading'  
export default {
  name: 'infiniteView',
  props:{

  },
  data () {
    return {
      loading:false,
      containerH:0,
      scroller:null,
      num:18
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
    loadData(){ 
      this.loading=true
      setTimeout(()=>{
        
        this.num = this.num + 1
        console.log("C")
        this.loading=false 
      },500) 
    } 

    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
    mHeader, loading,infiniteScroll
  },
  mounted(){
    this.scroller = this.$refs.scrollPage
    this.containerH = this.$refs.scrollPage.clientHeight
    //console.log(this.$refs.scrollPage.scrollHeight)
    console.log(this.$refs.scrollPage.scrollHeight-this.$refs.scrollPage.clientHeight)
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
.infinite-view
  line-height 0.34rem
  font-size 0.28rem 
  /* 带header子页面 固定样式（fix定位,paddingTop 0.8rem bottom 0.98rem, overflow auto,并设置webkitScroll的滑动效果 ）*/
  sub-page-head()
  .wrap  
    position relative  // 相对定位
    height 100%    // height 设置为 100% “sub-page” div 的 内容区域 
    li
      height 0.8rem
      line-height 0.8rem 
 

 
</style>



