<template>
  <div class="view-wrap">
    <div class="thumbnail"></div>
    <div class="welcome">欢迎浏览我的个人简历</div>
    <table class="info">
      <tr>
        <td><span>姓名:</span></td> <td><span>黄吉平</span> </td> 
      </tr>
      <tr>
        <td><span>坐标:</span></td> <td><span>广州</span> </td> 
      </tr>
      <tr>
        <td><span>求职:</span></td> <td><span>前端工程师</span> </td> 
      </tr> 
    </table> 
  </div>
</template>

<script>
 

export default {
  name: 'view_a',
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
  watch:{ 
  },
  components:{
     
  },
  mounted(){ 
    
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
.view-wrap
  display flex
  width 80%
  max-width 460px
  padding 1rem
  flex-flow column 
  align-items center
  font-size 1.2rem
  //background white 
  .thumbnail
    flex 0 0 60%
    width 60% 
    height 0
    padding-top 60% 
    border-radius 50%
    margin-bottom 30px
    background blue
  .welcome
    //padding 0 1rem
    font-size 3rem 
    font-family Consolas, Monaco, monospace;
    width 30rem
    white-space: nowrap;
    overflow: hidden; 
    border-right: .05em solid;
    animation: typing 3s steps(10),
               caret 1s steps(1) infinite; 
    line-height 3.8rem
    color white
    text-align center 
    margin-bottom 1rem
  .info
    width 68%
    table-layout:fixed
    font-size 2rem
    line-height 2.8rem 
    //color white
    span
      display:inline-block 
      background-image linear-gradient(45deg, blue,red,orange,green)
      background-clip text
      -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent; 
    tr td:nth-of-type(1)
      width 30%
      padding-right 0.4rem
      text-align right
     

@keyframes typing {
  from { width: 0 }
} 
@keyframes caret {
  50% { border-right-color: transparent; }
} 
</style>

