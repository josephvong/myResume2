<template> 
<section class="section">
  <div class="container" >
    <h1 class="title">{{article.title}}</h1>
    <div class="" v-if="article.tags && article.tags.length">文章标签：{{article.tags.join(',')}}</div>
    <br/> 
    <div class="content" v-html="article.content"></div> 
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
      articleId: '',//this.$route.params.article_id,
      article:{},
    }
  },
  computed:{
    /*tags(){

      return typeof(this.article.tags.join()
    }*/ 
    //---------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      name: 'name',     
    })*/ 
  },
  created(){ 
  },
  activated(){ 
    this.articleId = this.$route.params.article_id 
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
  beforeRouteLeave (to, from, next) {
    if(to.fullPath=='/article'){
      next({path:'/main'})
    }else{
      next() 
    } 
  }
}
</script>
<style lang="css" >

 
 
 
</style>
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
 
</style>

