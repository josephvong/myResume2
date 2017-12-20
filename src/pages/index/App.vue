<template>
  <div id="app"> 
     <div class="grid-wrap">
       <mGrid>
          <a href="./myStyle.html" class="m-grid" >
            <div class="grid_icon">
              <img :src="require('assets/img/jizhi.png')" alt="">
            </div>
            <p class="grid_label">我的样式案例</p> 
          </a>

          <a href="./myTool.html" class="m-grid" >
            <div class="grid_icon">
              <img :src="require('assets/img/jizhi.png')" alt="">
            </div>
            <p class="grid_label">我的组件案例</p> 
          </a>
          
          <a href="./myBlog.html" class="m-grid" >
            <div class="grid_icon">
              <img :src="require('assets/img/jizhi.png')" alt="">
            </div>
            <p class="grid_label">我的博客</p> 
          </a>
          <a href="./myCalendar.html" class="m-grid" >
            <div class="grid_icon">
              <img :src="require('assets/img/jizhi.png')" alt="">
            </div>
            <p class="grid_label">日历控件</p> 
          </a>
       </mGrid>  
     </div>
  </div>
</template>

<script>
import mGrid from 'base/mGrid'
export default {
  name: 'app',
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
    mGrid 
  },
  mounted(){ 
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
#app
  width 100%
  max-width 10rem
  margin 0 auto
  .grid-wrap
    width 100%
    .m-grid
      gird-column-ctrl(3)
    
</style>

