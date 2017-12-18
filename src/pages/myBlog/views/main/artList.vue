<template> 
<ul class="article-list" ref="artList">
 <li ref="artItem" class="article" v-for="(item,index) in itemList" :class="{active:findItem(index)}" :num="index"  ><!--  -->
    <div class="time-stamp">
      <p class="date">{{timeStampInit(item.time,'date')}}</p>
      <p class="year">{{timeStampInit(item.time,'year')}}</p>
    </div> 
    <div class="point"></div>
  <router-link :to="`/article/${item.art_id}`">
    <div class="triangle"></div> 
    <div class="art-title">{{item.title}}</div>
    <div class="art-content">
      <div class="l-thumb" :style="'backgroundImage:url('+item.thumb+')'">
      </div> 
      <div class="r-desc">
        <p class="detail">
          {{item.desc}}
        </p>
        <div class="down">
          <p class="art-tag">{{item.tags.join(' , ')}}</p>
          <a class="art-link">进入文章</a>
        </div>
      </div>
    </div>
  </router-link>
 </li>
</ul>   
</template>

<script> 
import {style,throttle,dateFormat} from 'common/js/cusFn'
export default {
  name: 'artList',
  props:{
    itemList:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
      showItems:[]
    }
  },
  computed:{ 
  },
  created(){

  },
  methods:{
    timeStampInit(time,tag){
      let date = new Date(parseInt(time))
      if(tag=="date"){
        return dateFormat(date,'MM-dd')
      }
      if(tag=="year"){
        return dateFormat(date,'yyyy')
      }
    },
    // 获取所有list Item 节点 的 “BoundingClientRect().top”（节点 相对于视口的top）
    getItemTop(){ // 输出一个数组（所有节点的 top值） 
      let artList = this.$refs.artItem 
      let arr = []
      
      for (let i = 0; i < artList.length; i++) {
        arr.push(artList[i].getBoundingClientRect().top)
      }
      return arr  
    },

    // 获取 出现在当前视口 范围的 item节点 列表
    getViewItem(arr,vh){ // 返回 一个数组（出现在视口范围的 list Item）
      let winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      let overH = winW<=425 ? -220 : -100  // 超出高度
      let vitems = []
      for (let i = 0; i < arr.length; i++) {
        if(arr[i]>overH && arr[i]<vh-20){
          vitems.push(i)
        }
      }
      this.showItems = vitems 
    },

    // 根据“_findScrollParent”方法 判断 监听滚动事件的父级节点（此案例 输出的 是window 节点）
    isWindowScroll(){ 
      let parent = this._findScrollParent(this.$refs.artList)
      if(parent.nodeName == "BODY"){
        return window
      }else{
        return parent
      }
    },

    // 查找 当前 item的序号是否出现在showItems数组里面的函数（用于绑定到每个 文章item里面）
    findItem(num){ 
      let isView = this.showItems.findIndex((item)=>{
        return item == num
      })
      if(isView>=0){
        return true
      }else{
        return false
      }
    },

    // 列表初始化
    listInit(){
      let winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let This = this
      // 先执行 首次加载 时的 列表显示
      this.$nextTick(()=>{ 
        this.getViewItem(this.getItemTop(),winH) 
      })
    }, 

    // 让一个 dom节点 输出 ‘overflow’属性值的函数（工具函数）  
    _overflow(el){
      return style(el, 'overflow') + style(el, 'overflow-y') /*+ style(el, 'overflow-x')*/
    },

    // 查找 具有滚动功能的 容器节点（若没有 返回 window/body(window/body默认有滚动功能)）
    _findScrollParent(el){ 
      if(!(el instanceof HTMLElement)){
        return window
      }
      let parent = el

      while(parent){
        // 如果 parent 是 body 或者 body以上 跳出循环
        if(parent === document.body || parent===document.documentElement){
          return parent
          //break
        }
        //如果 parent 没有父级，跳出循环
        if(!parent.parentNode){
          break
        }

        // 如果 parent 的 overflow 属性 值 为 auto 或者 scroll
        if (/(scroll|auto)/.test(this._overflow(parent))) {
          return parent // 输出 当前parent 指向的 节点
        }
        parent = parent.parentNode
      }
    }
  },
  watch:{
    itemList(list){
      if(list.length){
        this.listInit()
      }
    }
  }, 
  mounted(){
    let This = this
    let winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
    
    // 将滚动事件 函数 命名 
    this.scrollFn = function(){  This.getViewItem(This.getItemTop(),winH) }
     
    setTimeout(()=>{ // 设置 延时50毫秒 绑定事件（因为在路由切换过程中会触发 scroll 事件）
      let scrollParent = This.isWindowScroll();// 确定 监听 scroll 事件的 dom节点
      scrollParent.addEventListener('scroll', This.scrollFn, false) // 添加事件监听
    },50)
  },
  destroyed(){ 
    let scrollParent = this.isWindowScroll() 
    scrollParent.removeEventListener('scroll',this.scrollFn, false) // 解除事件监听*/
  }
}
</script>

<style lang="stylus" scpoe rel="stylesheet/stylus">
@import '~style/mixin.styl'
  
.article-list
  border-left 3px solid #afdcf8
  li.article
    position relative
    margin-bottom 20px
    padding-left 2rem
    opacity 0.1  
    transition opacity 0.8s 
    .point
      position absolute
      width 15px
      height 15px
      left -9px
      top 15px
      border 3px solid #afdcf8
      border-radius 50%
      background #46A4DA
      z-index 5
    .time-stamp
      position absolute
      width 100px
      left -100px
      top 0
      padding-right 10px
      text-align right
      color #46A4DA
      transition background 0.5s, border-radius 1s
      .date
        line-height 24px
        font-size 14px
      .year
        line-height 30px
        font-size 22px
    &>a
      display block
      position relative
      min-width 272px
      padding 10px 20px 20px 20px
      border-radius 5px
      background #579dc5
      transform translate3d(40px,0,0)
      transition transform 0.8s
      .triangle
        position absolute
        left -7px
        top 15px
        triangle(#579dc5,15px,'right')  
      .art-title
        line-height 30px
        font-size 20px
        font-weight 700
        color white
        margin-bottom 0.5rem
      .art-content
        display flex
        flex-flow row no-wrap 
        .l-thumb 
          flex 0 0 200px
          width 200px
          height 133px
          margin-right 15px
          background no-repeat
          background-color rgba(7,84,152,0.4)
          background-size contain
          background-position center center 
        .r-desc
          flex 1 1 auto
          .detail
            height 80px
            line-height 20px
            font-size 14px
            color white
            multiline-hide(4)
          .down
            margin-top 20px
            display flex
            justify-content space-between
            .art-tag
              flex 0 0 40%  
              line-height 30px
              font-size 14px
              color white
              no-wrap() 
            .art-link
              flex 0 0 40%
              text-align center
              border-radius 5px
              line-height 30px
              font-size 14px
              color white
              background #075498
    &:hover .time-stamp 
      background #afdcf8
      border-radius 15px 0 0 15px
      color gray
      .date
        color white
      .year
        color white
    &.active
      opacity 1
      &>a
        transform translate3d(0px,0,0)

@media only screen and (max-width : 640px)
  .article-list
    border none
    li.article
      padding-left 0
      .point
        display none
      .time-stamp
        display none
      .art-title
        text-align center
        
@media only screen and (max-width : 425px)
  .article-list li.article>a .art-content
    flex-flow row wrap 
    .l-thumb
      flex 0 0 100%
      width 100%
      height 15rem
      margin-bottom 10px
    .r-desc 
      flex 0 0 100%
      width 100%
      .detail
        height 40px 
        multiline-hide(2)
      .down
        flex-direction column-reverse
        .art-tag
          margin-top 10px
          flex 0 0 100% 
        .art-link 
          flex 0 0 100% 
</style>

