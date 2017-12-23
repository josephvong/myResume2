<template>
  <transition name="router-fade">
  <div class="side-scroll-view">
    <mHeader :isBack="true" text="侧边滚动栏"></mHeader>
    <div class="side-scroll-wrap" ref="wrap">
      <div class="left-side">
        <scrollerY class="left-scroll" ref="leftScroll" v-if="provinceData.length"
                   :listData="provinceData" :probeType="probeType"
        >
          <ul>
            <li v-for="(item,index) in provinceData" ref="tag"
                :class="{active:index==stopIndex}" @click="leftClick($event,index)"
            >
              {{item.name}}
            </li>
          </ul>
        </scrollerY>
      </div>
      <div class="right-side">
        <scrollerY class="right-scroll" ref="rightScroll" v-if="provinceData.length"
                   :listData="provinceData" :probeType="probeType"
                   :listenScroll="listenScroll"
                   @scroll = "rightScrollHandle" @scrollStop="rightSideStop"
        >
          <ul>
              <li class="group" v-for="(item,index) in provinceData" ref="group">
                <h3 class="group-title">{{item.name}}</h3>
                <mGrid>
                  <a class="m-grid"  v-for="(i,num) in item.citys" >
                    <p class="grid_label">{{i}}</p>
                  </a>
                </mGrid>
              </li>
          </ul>
        </scrollerY>
      </div>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import provinceData from 'common/js/data/province'

//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import scrollerY from 'base/scrollerY/scrollerY'
import mGrid from 'base/mGrid'

import {prefixStyle} from 'common/js/cusFn'
//const transform = prefixStyle('transform')

export default {
  name: 'sideScrollView',
  props:{

  },
  data () {
    return {
      provinceData:[], // 显示数据 列表

      probeType:3,

      scrollY:-1,

      currentIndex:0,  // 当前的索引值
      stopIndex:0,     // 确定 左边 光标停止的位置

      listenScroll:true,

      groupHeight:[],

      screenEndTag:[],  // 一屏幕内 左侧标签的 数量

    }
  },
  computed:{

    //-------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
      searchHistory:'searchHistory'
    })*/
  },
  created(){
    this.provinceData = provinceData
  },
  methods:{
    leftClick(event,index){
      if(index==this.provinceData.length-1 || index==this.provinceData.length-2){
        this.stopIndex = index;
      }
      this.$refs.rightScroll.scrollToElement(this.$refs.group[index],400,0,10)
    },

    rightSideStop(y){
      this.stopIndex = this.currentIndex
    },

    rightScrollHandle(pos){
      this.scrollY = pos.y
    },

    calGroupHeight(){
      this.groupHeight = [];
      let groups = this.$refs.group;
      let gHeight = 0;
      this.groupHeight.push(gHeight);
      groups.forEach((item)=>{
        gHeight += item.clientHeight;
        this.groupHeight.push(gHeight)
      })
    },
    calEndTagIndex(){
      let wrapHeight = this.$refs.wrap.clientHeight;
      let tagHeight = this.$refs.tag[0].clientHeight;
      let tagNum = this.provinceData.length;
      let showTagNum = Math.floor(wrapHeight/tagHeight)
      let arr = [];
      for (var i = 0; i < this.provinceData.length; i++) {
        if(i%showTagNum==0){
          arr.push(i)
        }
      }
      this.screenEndTag = arr

    }
    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{
    provinceData(newData){
      setTimeout(()=>{
        this.calGroupHeight();
        this.calEndTagIndex();
      },30)
    },
    scrollY(newY){
      let overTop = -newY
      const groupHeight = this.groupHeight;

      if(overTop<0){  // overTop >0 scroller 向下滑动至顶部
        this.currentIndex = 0  // 当前索引 为 0
        return
      }

      for (var i = 0; i < groupHeight.length-1; i++) {
        let h1 = groupHeight[i];
        let h2 = groupHeight[i+1];
        if(overTop>=h1 && overTop<h2){
          this.currentIndex = i;
          return
        }
      }
    },
    currentIndex(newData){
      for (var i = 0; i < this.screenEndTag.length-1; i++) {
        if(newData >= this.screenEndTag[i] && newData < this.screenEndTag[i+1]){
          let targetIndex = this.screenEndTag[i]
          this.$refs.leftScroll.scrollToElement(this.$refs.tag[targetIndex])
        }
      }
    }
  },
  components:{
    mHeader,scrollerY,mGrid
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
.side-scroll-view
  line-height 0.34rem
  font-size 0.28rem
  /* 带header子页面 固定样式（fix定位,paddingTop 0.8rem bottom 0.98rem, overflow auto,并设置webkitScroll的滑动效果 ）*/
  sub-page-head()
  .side-scroll-wrap // 子页面 下 第一个子节点 作为 scroll 组件的根节点
    position relative  // 相对定位
    height 100%    // height 设置为 100% “sub-page” div 的 内容区域
    display flex
    .left-side
      flex 0 0 1.5rem
      width 1.5rem
      height 100%
      .left-scroll
        height 100%
        overflow hidden

        li
          line-height 0.8rem
          font-weight 0.28rem
          text-align center
          background #EDEDED
          border-bottom 1px solid #cccccc
          &.active
            background white
    .right-side
      flex 1
      margin-left 0.2rem
      padding-right 0.2rem
      height 100%
      .right-scroll
        height 100%
        overflow hidden
        .group
          padding-top 0.2rem
          .group-title
            line-height 0.5rem
            font-size 0.32rem
            text-align center
            background #EDEDED
          .m-grid
            gird-column-ctrl(4)
          //padding 0.2rem







</style>



