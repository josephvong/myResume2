<template>
<section class="section">
  <div class="container">
    <h1 class="title">全部文章</h1>
    <div class="main-wrap">
      <div class="left">
         <ul class="article-list">
           <li class="article" v-for="i in 10">
            <a>
              <div class="time-stamp"></div>
              <div class="triangle"></div>
              <div class="point"></div>
              <div class="art-title">title</div>
              <div class="art-content">this is content {{i}}</div>
            </a>
           </li>
         </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="i in 20">{{i}}</li>
        </ul>
      </div>
    </div> 
  </div>
</section> 
</template>

<script> 
export default {
  name: 'Main',
  props:{

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
     
  }, 
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" scpoe rel="stylesheet/stylus">
@import '~style/mixin.styl'
.main-wrap
  display flex
  flex-flow row no-wrap
  align-items stretch
  .left
    flex 1 1 auto
    width auto
    padding 0 20px 0 100px 
    .article-list
      border-left 5px solid #afdcf8
      li.article
        margin-bottom 20px
        padding-left 30px
        &>a
          display block
          position relative
          padding 27px
          border-radius 5px
          background #579dc5
          .triangle
            position absolute
            left 10px
            top 10px
            down-triangle(red,20px)
            /*width 0px
            height 0px
            border-right 20px solid green
            border-left 0px solid transparent
            border-top 20px solid transparent
            borer-bottom 20px solid transparent
            transform rotate(45deg)
            //background green*/
          .art-title
            line-height 20px
            font-size 20px
            margin-bottom 10px
          .art-content
            height 122px
  .right 
    flex 0 0 230px
    width 230px 
    padding 10px 

@media only screen and (max-width : 768px) 
  .main-wrap .right
    display none

@media only screen and (max-width : 425px)
  .main-wrap .left 
    padding 0

@media only screen and (max-width : 425px)
  .main-wrap .left .article-list
    border none
    li.article
      padding-left 0
</style>

