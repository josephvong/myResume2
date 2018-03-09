<template>
  <div class="page">  
    <div class="page-title">
      <h1>结构与布局 下</h1>
    </div>
   
    <div class="page-body">
      <p> 
          本页面 实现 stickyFooter 的布局 以及 背景全容器覆盖，内容居中 的布局
      </p>
      <button @click="listNum++"> add item</button> <button @click="listNum--"> delete item</button> 
      <ul>
        <li v-for="i in listNum">{{i}}</li>
      </ul>
    </div>
    <div class="page-footer">
      <p>这个是 粘贴到底部 的 footer</p>
      <p>由 Joseph Huang 尝试编辑</p>
    </div>  
  </div>
</template>

<script>  
export default {
  name: 'cssMgic7_2',
  props:{

  },
  data () {
    return {
      listNum: 5 
    }
  },
  computed:{
     
  },
  created(){

  },
  methods:{
    
  },
  watch:{ 
  },
  components:{
    
  },
  mounted(){
     
    
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
//@import '~style/mixin.styl' 
.page
  display flex
  flex-flow column
  width 100%
  min-height 100vh  
  .page-title
    padding 0 calc(50% - 320px)
    background orange
    h1
      height 60px
      line-height 60px
      font-size 30px
      font-weight 700
      text-align center 
  .page-body
    flex 1 
    padding 0 calc(50% - 320px)
    li
      line-height 30px
      font-size 18px
  .page-footer
    background linear-gradient(#222, #444);
    color white
    padding 0 calc(50% - 320px)
    p
      line-height 30px
      font-size 20px
      font-weight 700
      text-align center
                   
</style>

