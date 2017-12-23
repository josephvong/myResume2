<template> 
<section class="section">
  <div class="container" >
    <h1 class="title">留言板</h1> 
    
    
    <div style="padding-bottom:80px">
      <myMarkDown v-model="content" :height="300" ></myMarkDown>
    </div> 
     
    <div >
      <button class="button" @click="markdown2Html">输出</button>
    </div>
    <hr/>
    <div v-html="html" class="content"></div>
  </div> 
</section>  
</template>

<script>
import myMarkDown from 'base/myMarkDown'  
export default {
  name: 'markdownEditor',
  props:{

  },
  data () {
    return {
      content:'## Simplemde',
      html:''
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
  components:{ 
    myMarkDown
  },
  methods:{ 
    markdown2Html(){
      import('showdown').then((showdown)=>{
        const converter = new showdown.Converter()
        this.html = converter.makeHtml(this.content)
      })
    }
  }, 
  mounted(){ 

  }
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

