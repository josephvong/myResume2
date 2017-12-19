<template> 
<div class="container" style="padding:30px 10px 0">
  <!--标签列表-->
  <ul class="tag-list">
    <li class="tag" ><router-link class="tag-link"  to="/artlist/all">全部</router-link></li>
    <li class="tag" v-for="item in tagsList"><router-link class="tag-link" :to="`/artlist/${item.tag_name}`">{{item.tag_name}}({{item.art_num}})</router-link></li>
  </ul>

  <!--标题-->
  <h1 class="title" style="font-size:2rem">{{tagName}}</h1>
  
  <!--内容主体-->
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
import {articleListApi,tagsGetApi} from 'api/blogAPI/api'
import artList from './artList' 
export default {
  name: 'artListPage',
  props:{

  },
  data () {
    return {
      articleList:[],
      tagsList:[],
      tagName:this.$route.params.tag,
      artListTitle:'全部文章'
    }
  },
  computed:{
     
  },
  components:{
    artList
  },
  created(){  
    this.getListData(this.$route.params.tag) 
  },
  activated(){  
    //this.getListData(this.$route.params.tag) // 获取列表数据
    this.getTagData(false) // 只获取 标签名
  },
  methods:{
    // 获取 文章列表
    getListData(tag){
      return new Promise((resolve,reject)=>{
        articleListApi(tag).then((res)=>{ 
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
    },

    // 获取 tag
    getTagData(){
      tagsGetApi(true).then((res)=>{
        this.tagsList = res
      })
    }, 

  }, 
  watch:{ 
    $route(route){
      if(route.name=='文章列表'){ 
        this.tagName = route.params.tag 
        this.getListData(route.params.tag) 
      }
    },
     
  },
  mounted(){ 
    if(!this.tagName){
      console.log("ERR")
    }
  },
  beforeRouteLeave (to, from, next) {
    if(to.fullPath=='/artlist'){
      next({path:'/main'})
    }else{
      next() 
    } 
  }
  
}
</script>

<style lang="stylus" scpoe rel="stylesheet/stylus">
@import '~style/mixin.styl'

.tag
  margin 10px
  cursor pointer 
  .tag-link
    font-size 16px
       

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

