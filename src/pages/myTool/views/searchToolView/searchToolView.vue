<template>
  <transition name="router-fade">
  <div class="search-tool-view">
    <mHeader :isBack="true" text="滑动轮播"></mHeader>
    <div class="search-wrap">
      <div class="input-wrap"> <!--输入框-->
        <inputTool placeHolder="输入葡萄酒关键字" ref="inputTool"
                   @focus="onInputFocus" @inputChange="queryChange"
                   @inputSubmit="searchToolSubmit"  
        ></inputTool>
      </div>

      <div class="shortcut-wrap" v-show="!resultShow">
        <div class="shortcut relate" v-show="suggestShow">
          <h3>关联</h3>
          <p style="text-align:center" v-show="!suggestWord.length">loading ...</p>
          <ul>
            <li v-for="item in suggestWord" @click="selectSuggest(item)">
              <span class="content">{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="shortcut history">
          <h3>历史记录</h3>
          <ul>
            <li v-for="item in searchHistory" >
              <span class="content" @click="selectHistory(item)">{{item}}</span>
              <em class="icon icon-close" @click.stop="deleteHistory(item)"></em>
            </li>
          </ul>
        </div>
      </div>

      <div class="result-wrap" v-show="resultShow" > <!--结果列表容器-->
        <div class="pull-scroll-wrap">
          <div class="result-query">{{searchQuery}}</div>
          <!-- <div class="up-loading">下拉加载 功能 顶部 loading 标志 （绝对定位，位于底层）
            <loading></loading>
          </div> -->
          <scrollerY ref="resultScroll" class="pull-down-scroll"
                     :pulldown="true" :pullup="true" :listData="resultList"
                     @pulldown="scrollPullDown"  @scrollToEnd="scrollPullUp"
          > <!--使用 滚动组件 -->
            <div class="content-wrap"><!--滚动组件 内的 内容 根节点（所有内容放在里面），背景白，覆盖住 loading标志-->
              <ul>
                <li v-for="item in resultList" >
                  <div class="left-icon">
                    <img :src="item.pic_url" alt="">
                  </div>
                  <div class="right-desc">  <span v-html="item.name.name_ch"></span></div>
                </li>
              </ul>
              <loading ref="bottomLoading" v-show="resultList.length || hasMore">
              </loading>
              <p v-show="!hasMore">加载完毕</p>
            </div>
          </scrollerY>
        </div>

      </div>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import {mapActions, mapGetters, mapState} from 'vuex'
import {getWordSuggest,getTxtSearchResult} from 'api/searchApi'  // 数据接口

import mHeader from 'base/mHeader/mHeader'
import inputTool from 'base/inputTool/inputTool'
import scrollerY from 'base/scrollerY/scrollerY'
import loading from 'base/loading/loading'

//import {arrFind} from 'common/js/cusFn'

export default {
  name: 'searchToolView',
  props:{

  },
  data () {
    return {
      searchQuery:'', // 搜索词

      suggestWord:[], // 关联词列表

      resultList:[],  // 结果列表

      pageIndex:1, // 当前页面

      suggestShow:false,

      resultShow:false, //结果开关

      hasMore:true,  // 是否有更多

    }
  },
  computed:{

    //-------------------------------
    ...mapGetters('search',{
      searchHistory:'searchHistory',
    })
  },
  activated(){
    this.$refs.inputTool.clearInput()
    //this.searchQuery=''  // 搜索词
    this.suggestWord=[]  // 关联词列表
    this.resultList=[]   // 结果列表
    this.resultShow=false //结果开关
  },
  created(){

  },
  methods:{
    onInputFocus(){  // 输入框 focus
      this.resultShow = false; // 隐藏结果容器
    },
    queryChange(newVal){ // 监听 inputTool 的值的改变
      this.searchQuery = newVal
    },

    /*queryClear(){

    },*/

    searchToolSubmit(){  // 输入框 提交 搜索字段 事件
      this.saveSearchHistory(this.searchQuery)
      this.$nextTick(()=>{
        this.initResultList(this.searchQuery)
      })
    },

    selectSuggest(query){ // 建议词语列表项 点击 事件
      this.saveSearchHistory(query) //actions函数 选中 保存到历史记录
      this.$refs.inputTool.setInputVal(query);  // 设置 输入框 input 的 value
      this.$nextTick(()=>{
        this.initResultList(this.searchQuery)
      })
    },
    selectHistory(query){  // 历史记录 点击事件
      this.saveSearchHistory(query) //actions函数 选中 保存到历史记录(自动提前)
      this.$refs.inputTool.setInputVal(query);  // 设置 输入框 input 的 value
      this.$nextTick(()=>{
         this.initResultList(this.searchQuery)
      })

    },
    deleteHistory(query){ // 历史记录删除事件
      this.deleteSearchHistory(query) //actions函数 删除对应历史记录
    },

    scrollPullDown(){ // 滚动列表 下拉刷新
      this.initResultList(this.searchQuery)
    },

    scrollPullUp(){ // 滚动列表 上拉加载更多
      if(!this.hasMore){
        return
      }
      this.pageIndex +=1;

      getTxtSearchResult(this.searchQuery,this.pageIndex).then((res)=>{
        this.resultList = this.resultList.concat(res.jsonData)
        this._checkMore(res.jsonData);
      })
    },

    initResultList(query){ //更新重置 结果列表
      if(!this.resultShow){ this.resultShow = true } // 打来结果列表容器
      this.hasMore = true
      this.resultList = []; // 清空 原来的 结果列表
      getTxtSearchResult(query,1).then((res)=>{  // 重置第一页的列表数据
        this.$refs.resultScroll.refresh()//刷新 scroller
        this.resultList = res.jsonData
        console.log(res.jsonData)
        this._checkMore(res.jsonData);
      })
    },

    _wordSuggestGet(value){  // 关联词接口获取数据函数
      getWordSuggest(value).then((res)=>{
        this.suggestWord = res.wordOnSuggest
      })
    },

    _checkMore(arr){  // 检测 列表 数据是否已经加载到最后
      if(!arr.length||arr.length<10){
        this.hasMore = false
      }
    },
    //-----------------------------
    ...mapActions('search',{
      saveSearchHistory:"saveSearchHistory",
      deleteSearchHistory:'deleteSearchHistory'
    }),
  },
  watch:{
    searchQuery(newQuery){
      this.$nextTick(()=>{
        if(newQuery){
          this.suggestShow = true
          this.suggestWord = [];
          this._wordSuggestGet(newQuery)
        }else{
          //if(this.resultList.length){
          this.resultShow = false;
          //}
          this.suggestShow = false;
        }

      })

    }
  },
  components:{
    mHeader,inputTool,scrollerY,loading
  },
  mounted(){
    //console.log(this.searchHistory)
    /*let arr = [1,2,3,4,5]
    console.log(arrFind(arr,(item)=>{
      return item == 3
    }))*/
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
.search-tool-view
  sub-page-head()
  .search-wrap
    padding-top 0.3rem
    .input-wrap
      width 80%
      height 0.8rem
      margin 0 auto 0.3rem
      font-size 0.28rem
  .shortcut-wrap
    padding 0 0.2rem
    .shortcut
      width 80%
      margin 0 auto 0.3rem
      h3
        font-weight 700
        text-align center
      li
        display flex
        align-items center
        line-height 0.6rem
        font-size 0.32rem
        .content
          flex 1
          no-wrap()
        .icon
          flex 0 0 0.32rem
          width 0.32rem
  .result-wrap
    position absolute
    width 100%
    bottom 0
    top:2rem
    padding-top 0.8rem
    background white
    .pull-scroll-wrap
      position relative  // 相对定位
      height 100%
      .result-query
        position absolute
        top -0.8rem;
        width 100%
        line-height 0.8rem
        text-align center
        font-size 0.4rem
      .up-loading     // 下拉刷新功能 的
        position absolute
        left 50%
        top 0
        transform translate3d(-50%,0,0)
      .pull-down-scroll  // 滚动组件 的样式
        height 100%     // 滚动组件 需要固定高度
        overflow hidden // 超出隐藏
        z-index 2
        .content-wrap // scroll 组件 slot 里面的唯一一个子节点（所有内容放在里面）
          background white
          min-height 102%  // 在pulldown 刷新组件里面，需要设置 最小高度>100% 让scroll组件可以使用pulldown功能
          ul
            padding 0 0.5rem
            li
              display flex
              align-items center
              border-bottom 1px solid #ccc
              margin-bottom 0.3rem
              padding-bottom 0.3rem
              height 2rem
              .left-icon
                flex 0 0 2rem
                width 2rem
                height 100%
                margin-right 0.3rem
                overflow hidden
                img
                  display block
                  width auto
                  height 100%
                  margin 0 auto
</style>



