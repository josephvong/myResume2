<template> 
<section class="section">
  <div class="container" >
    <h1 class="title">{{article.title}}</h1>
    <a href="#/article/art_1513396765741#art_CCC">CCC</a> 
    <ul><li v-for="i in 50">{{i}}</li></ul>
    <div id="art_CCC">CCCC</div>
    <ul><li v-for="i in 50">{{i}}</li></ul>  
  </div> 
</section>  
</template>

<script>
import {articleReadApi} from 'api/blogAPI/api'   
export default {
  name: 'article',
  props:{

  },
  data () {
    return {
      articleId: this.$route.params.article_id,
      article:{},
    }
  },
  computed:{ 
    //---------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      name: 'name',     
    })*/ 
  },
  created(){
    /*articleReadApi(this.articleId).then((res)=>{ 
      this.article = res
    })*/
  },
  activated(){ 
    articleReadApi(this.articleId).then((res)=>{
      if(res.success){
        this.article = res.article
      }else{
        this.$router.push({path:'/main'})
      } 
    }) 
  },
  components:{ 
    
  },
  methods:{ 
     
  }, 
  mounted(){ 

  },
  /*beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`  
    next()
  }*/
}
</script>
<style lang="css" >

 
 
 
</style>
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
 
</style>

