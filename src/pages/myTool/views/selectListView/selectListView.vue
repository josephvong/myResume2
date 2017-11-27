<template>
  <transition name="router-fade">
  <div class="select-list-view">
    <mHeader :isBack="true" text="城市选择"></mHeader>
    <div class="pull-scroll-wrap">
      <scrollerY v-if="listData.length" class="pull-down-scroll"
                 :listData="listData" :probeType="probeType"
                 :listenScroll="listenScroll"
                 ref="scroller" @scroll="onScrollHandle"
      >
        <ul class="mian-list">
         <li class="city-group" v-for="(Item,Index) in listData"
             ref="listGroup" :index="Index"
         >
          <h4>{{Item.name}}</h4>
          <ul>
            <li v-for="(item,index) in Item.cities">{{item.name}}</li>
           </ul>
         </li>
        </ul>

        <div ref="shortCut" class="list-shortcut" @touchstart.stop="indexTouchStart"
             @touchmove.stop="indexTouchMove"
             @touchend = 'indexTouchEnd'
        >
          <ul>
            <li v-for="(item,index) in shortcutList" :index="index">
              {{item}}
              <div class="icon" v-show="touch.initiated && index==currentIndex">{{item}}</div>
            </li>
          </ul>
        </div>

        <!--fix 的 title， scrollY < 0 时 消失（滚动到最顶部）-->
        <div ref="fixTitle" class="list-fixed" v-show="scrollY<0">
          <div class="fixed-title">{{currentTitle}}</div>
        </div>
      </scrollerY>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import cityData from 'common/js/data/city'

//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
import scrollerY from 'base/scrollerY/scrollerY'

import {prefixStyle} from 'common/js/cusFn'
const transform = prefixStyle('transform')

export default {
  name: 'selectListView',
  props:{

  },
  data () {
    return {
      listData:[],
      scrollY:-1,  //scrollY 的 值
      currentIndex:0,  // 当前的索引值
      nextGroupTopDirect:0,
      touch:{}
    }
  },
  computed:{
    shortcutList(){ // 快速索引 列表生成 的 数组
      return this.listData.map((item)=>{
        return item.name.substring(0,1)
      })
    },
    currentTitle(){// currentTitle 是 fixtitle 的 内容显示
      // 根据currentIndex(快捷索引的当前index) 计算 fixtitle 要显示那个大类的title
      return this.currentIndex>0?this.listData[this.currentIndex].name:this.listData[0].name
    },
    //-------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
      searchHistory:'searchHistory'
    })*/
  },
  created(){
    this.listData = cityData
    //console.log(this.listData);
    //--------在组件created中定义全局属性（无需监听）--------
    this.probeType = 3;  // 滚动组件的 监听指针 必须为 3 （触摸滚动时也需要监听）
    this.listenScroll = true; // 监听 滚动 事件
    //this.touch = {}  // 创建触摸数据对象
    this.listHeight = [] //每个城市组顶部距离父容器顶部的距离数组

  },
  methods:{
    // 快捷索引的 触摸开始事件
    indexTouchStart(event){
      //event.stopPropagation();
      let firstTouch = event.touches[0];
      let startIndex = parseInt(firstTouch.target.getAttribute('index'));
      //console.log(this.listHeight[startIndex])
      this.touch.initiated = true;
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = startIndex

      this.scrollTo(startIndex)
    },

    // 快捷索引的 触摸滑动事件
    indexTouchMove(event){
      event.stopPropagation();  // 禁止事件冒泡 ，以免影响 主列表
      if(!this.touch.initiated){return}
      let firstTouch = event.touches[0];
      let indexItemH = this.$refs.shortCut.clientHeight/this.shortcutList.length // 索引列表中 单个列表的高度
      this.touch.y2 = firstTouch.pageY;

      let changeIndex = Math.round((this.touch.y2-this.touch.y1)/indexItemH)
      let moveIndex = this.touch.anchorIndex + changeIndex

      this.scrollTo(moveIndex)
    },

    // 快捷索引的 触摸停止事件
    indexTouchEnd(event){
      this.touch.initiated = false;
    },

    onScrollHandle(pos){  // 滚动事件 触发函数 ，主要 把 pos.y 赋值给 scrollY
      this.scrollY = pos.y
    },

    scrollTo(index){
      if(!index){return}

      if(index<0){
        index = 0
      }/*else if(a> this.listHeight.length - 2){
        a = this.listHeight.length - 2
      }
      console.log(index)*/

      this.scrollY = -this.listHeight[index]

      this.$refs.scroller.scrollToElement(this.$refs.listGroup[index],0)
    },

    calGroupHeight(){
      this.listHeight = []; // 置空 listHeight 数组
      let groups = this.$refs.listGroup; //城市组 节点 集合
      let groupHeight = 0; // 第一个group 顶部距离 为 0
      this.listHeight.push(groupHeight); // 第一个高度值插入数组
      groups.forEach((item,index)=>{
        groupHeight+=item.clientHeight;
        this.listHeight.push(groupHeight)
      })
    },


    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{
    listData(){
      setTimeout(()=>{
        this.calGroupHeight()
      },30)
    },

    scrollY(newY){

      let overTop = -newY // 列表向上滚动的超出距离
      const listHeight = this.listHeight
      if(overTop<0){  // overTop >0 scroller 向下滑动至顶部
        this.currentIndex = 0  // 当前索引 为 0
        return
      }

      for (var i = 0; i < listHeight.length-1; i++) {
        let h1 = listHeight[i]
        let h2 = listHeight[i+1]
        if(overTop>=h1 && overTop<h2){
          this.currentIndex = i
          this.nextGroupTopDirect = h2 - overTop
          return
        }
      }
    },

    nextGroupTopDirect(newVal){
      let fixTitleH = this.$refs.fixTitle.clientHeight
      let fixTop = (newVal>0 && newVal<fixTitleH)?newVal-fixTitleH:0
      if(this.fixedTop == fixTop){return}
      this.fixTop = fixTop
      this.$refs.fixTitle.style.transform=`translate3d(0,${fixTop}px,0)`

    }
  },
  components:{
    mHeader,scrollerY
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
.select-list-view
  line-height 0.34rem
  font-size 0.28rem
  /* 带header子页面 固定样式（fix定位,paddingTop 0.8rem bottom 0.98rem, overflow auto,并设置webkitScroll的滑动效果 ）*/
  sub-page-head()
  .pull-scroll-wrap // 子页面 下 第一个子节点 作为 scroll 组件的根节点
    position relative  // 相对定位
    height 100%    // height 设置为 100% “sub-page” div 的 内容区域
    .pull-down-scroll  // 滚动组件 的样式
      height 100%     // 滚动组件 需要固定高度
      overflow hidden // 超出隐藏
      .city-group
        h4
          line-height 0.5rem
          font-size 0.26rem
          padding 0 0.3rem
          background #f5f5f5
        ul
          padding 0 0.3rem
          li
            line-height 0.8rem
            font-size 0.34rem
            border-bottom 1px solid #cccccc
      .list-shortcut
        position fixed
        right 0.05rem
        top:50%
        transform translate3d(0,-50%,0)
        z-index 3
        //border:1px solid blue;
        li
          position relative
          font-size 0.26rem
          line-height 0.34rem
          padding 0 0.2rem
          text-align center
          color orange
          //border-top:1px solid green
          .icon
            position absolute
            width:1rem
            height 1rem
            left -1rem
            top: -0.35rem
            line-height 1rem
            font-size 0.5rem
            text-align center
            background rgba(0,0,0,0.5)
            color white;

      .list-fixed // 固定于滚动组件顶部的标题
        position absolute
        top 0
        left 0
        width 100%
        background #f5f5f5
        .fixed-title
          line-height 0.5rem
          font-size 0.26rem
          padding 0 0.3rem






</style>



