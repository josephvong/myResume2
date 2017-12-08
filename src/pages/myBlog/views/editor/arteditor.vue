<template> 
<section class="section">
  <div class="container">
    <h1 class="title">编辑文章</h1>
    <div class="tile is-parent is-vertical">
      <div class="tile is-child is-12 ">
        <myEditor ref="myEditor"></myEditor> 
      </div>
      
    </div>
    <button class="button" @click="outputCont">输出</button>
  </div>
</section>  
</template>

<script> 
import myEditor from 'base/myEditor'
//import {mapGetters, mapActions } from 'vuex' 
export default {
  name: 'arteditor',
  props:{

  },
  data () {
    return {
      
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
    myEditor
  },
  methods:{
    outputCont(){ 
      let content = this.$refs.myEditor.outputContent()
      console.log(content)
    }
  }, 
  mounted(){ 
    //this.quillInit()
  }
}
</script>
<style lang="css" >

 
 
 
</style>
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
 
 
 
</style>

