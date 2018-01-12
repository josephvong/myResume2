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
     <cubeButton style="font-size:0.28rem">button</cubeButton>
     <cube-checkbox v-model="checked" style="font-size:0.28rem">
      Checkbox
     </cube-checkbox>
     <cubeLoading :size="50"></cubeLoading>
     <br/> 
     <p class="tip-eg">
      <span  style="font-size:0.28rem">cube-ui</span> 
        <div style="font-size:0.28rem " >Awesome!</div>
      </cubeTip>
    </p>
    <br/> 
    <cubeButton  @click="showTip('down')">top</cubeButton>
  </div>
</template>

<script>
import {  Style, Button, Checkbox, Loading, Tip } from 'cube-ui'
import mGrid from 'base/mGrid'
const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, 
  { text: '幽鬼', value: '幽鬼' }]
export default {
  name: 'app',
  props:{

  },
  data () {
    return {
      checked:false
    }
  },
  computed:{ 
  },
  created(){

  },
  methods:{
    /*showTip(direction) {
      this.direction = direction
      this.$refs.tip2.show()

      switch (direction) {
        case 'top':
          this.tipStyle = 'left: 100px; top: 30px;'
          break
        case 'bottom':
          this.tipStyle = 'left: 100px; top: -50px;'
          break
        case 'left':
          this.tipStyle = 'left: 200px; top: -10px;'
          break
        case 'right':
          this.tipStyle = 'left: 2px; top: -10px;'
          break
      }
    }*/
  },
  watch:{ 
  },
  components:{
    mGrid,
    cubeButton:Button,
    cubeCheckbox:Checkbox,
    cubeLoading:Loading,
    cubeTip:Tip 
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
  background pink
  .grid-wrap
    width 100%
    .m-grid
      gird-column-ctrl(3)
    
</style>

