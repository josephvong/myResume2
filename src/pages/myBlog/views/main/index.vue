<template> 
<div class="container" style="padding:30px 10px 0">
  
  <h1 class="title" style="font-size:2rem">全部文章</h1>

  <div class="main-wrap">
    <div class="left">
      <artList ref="artList" :itemList="articleList" ></artList> 
    </div>
    <div class="right">
      <ul>
        <li v-for="i in 20">{{i}}</li>
      </ul>
    </div>
  </div> 
</div> 
</template>

<script>
import {articleGetApi} from 'api/blogAPI/api'
import artList from './artList' 
export default {
  name: 'Main',
  props:{

  },
  data () {
    return {
      articleList:[]
    }
  },
  computed:{ 
  },
  components:{
    artList
  },
  created(){
    
  },
  activated(){
    this.getListData() // 获取列表数据
  },
  methods:{
    getListData(){
      return new Promise((resolve,reject)=>{
        articleGetApi().then((res)=>{ 
          if(res || res.articles.length){
            this.articleList = res.articles
            resolve(res.articles)
          }else{
            reject(res)
          } 
        }).catch((err)=>{
          reject(err)
        })
      })
    }
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
  .right 
    flex 0 0 200px
    width 200px 
    padding 10px 

@media only screen and (max-width : 1023px) 
  .main-wrap .right
    display none

@media only screen and (max-width : 640px)
  body
    width 100%
    overflow-x hidden
    .main-wrap .left 
      padding 0

@media only screen and (max-width : 425px)
  body
    width 100%
    overflow-x hidden
  /*.main-wrap .left .article-list
    border none
    li.article
      padding-left 0*/
</style>

