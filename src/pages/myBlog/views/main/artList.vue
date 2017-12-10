<template> 
<ul class="article-list" ref="artList">
 <li ref="artItem" class="article" v-for="i in 20" @click="getItemTop" :num="i" :class="{active:findItem(i-1)}" >
    <div class="time-stamp">
      <p class="date">08-08</p>
      <p class="year">2017</p>
    </div> 
    <div class="point"></div>
  <a>
    <div class="triangle"></div> 
    <div class="art-title">title</div>
    <div class="art-content">
      <div class="l-thumb">
        <img  src="./sample.jpg" alt="">
      </div> 
      <div class="r-desc">
        <p class="detail">
          一共是四个页面，首页，图文列表，图片列表，文字内容。此模板风格为中国古典风格，山水画墨迹成就一幅江南墨卷。页面首页设计较为简单，突出文章重点。二级栏目导航菜单。图文列表显示，可用作相册展示.一共是四个页面，<!-- 首页，图文列表，图片列表，文字内容。此模板风格为中国古典风格，山图片列表，文字内容。此模板风格为中国古典风格，山水画墨迹成就一幅江南墨卷。页面首页设计较为简单，突出文章重点。二级栏目水画墨迹成就图片列表，文字内容。此模板风格为中国古典风格，山水画墨迹成就一幅江南墨卷。页面首页设计较为简单，突出文章重点。二级栏目 -->
        </p>
        <div class="down">
          <p class="art-tag">CSS</p>
          <a class="art-link">进入文章</a>
        </div>
      </div>
    </div>
  </a>
 </li>
</ul>   
</template>

<script> 
import {style,throttle} from 'common/js/cusFn'
export default {
  name: 'artList',
  props:{

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
    getItemTop(){
      let artList = this.$refs.artItem
      let arr = []
      for (let i = 0; i < artList.length; i++) {
        arr.push(artList[i].getBoundingClientRect().top)
      }
      return arr
      //console.log(arr)
      //console.log(document.documentElement.clientHeight)
    },

    getViewItem(arr,vh){
      let vitems = []
      for (let i = 0; i < arr.length; i++) {
        if(arr[i]>-30 && arr[i]<vh+20){
          vitems.push(i)
        }
      }
      this.showItems = vitems
      console.log(this.showItems)
    },
    isWindowScroll(){
      let parent = this._findScrollParent(this.$refs.artList)
      if(parent.nodeName == "BODY"){
        return window
      }else{
        return parent
      }
    },
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
    _overflow(el){
      return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x')
    },

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
  mounted(){
    let This = this
    This.getViewItem(This.getItemTop(),document.documentElement.clientHeight)
    
    let scrollParent = this.isWindowScroll() 
    scrollParent.addEventListener('scroll',throttle(()=>{
      This.getViewItem(This.getItemTop(),document.documentElement.clientHeight)
    },500))
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
    opacity 0
    transition all 1s
    &.active
      opacity 1
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
      transition all 0.8s
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
          margin-right 15px
          img
            display block
            width 100%
        .r-desc
          flex 0 1 auto
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
              flex 0 0 30%  
              line-height 30px
              font-size 14px
              color white 
            .art-link
              flex 0 0 30%
              text-align center
              border-radius 5px
              line-height 30px
              font-size 14px
              color white
              background #075498
    &:hover .time-stamp 
      background #afdcf8
      border-radius 15px 0 0 15px
      .date
        color white
      .year
        color white


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
      margin-bottom 10px
    .r-desc 
      flex 0 0 100%
      width 100%
      .down
        flex-direction column-reverse
        .art-tag
          margin-top 10px
          flex 0 0 100% 
        .art-link
          
          flex 0 0 100% 
</style>

