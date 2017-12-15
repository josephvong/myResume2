<template> 
<section class="section">
  <div class="container" >
    <h1 class="title">文章</h1> 
    
    文章内容
      
  </div> 
</section>  
</template>

<script>
   
export default {
  name: 'article',
  props:{

  },
  data () {
    return {
      articleId: this.$route.params
    }
  },
  computed:{ 
    //---------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      name: 'name',     
    })*/ 
  },
  created(){
    
  },
  activated(){ 
    this.$watch("articleId",(newVal)=>{
      console.log(newVal)
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

