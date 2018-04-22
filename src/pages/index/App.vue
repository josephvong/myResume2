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
          <a href="./cssCase.html" class="m-grid" >
            <div class="grid_icon">
              <img :src="require('assets/img/jizhi.png')" alt="">
            </div>
            <p class="grid_label">css样式实例</p> 
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
           <a href="./resume.html" class="m-grid" >
            <div class="grid_icon">
              <img :src="require('assets/img/jizhi.png')" alt="">
            </div>
            <p class="grid_label">我的简历</p> 
          </a>
       </mGrid>  
     </div>
     <!-- <cubeButton style="font-size:0.28rem">button</cubeButton>
     <cube-checkbox v-model="checked" > 
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
    <cubeButton class="testBtn" @click="showPopup('myPopup')">top</cubeButton>
    <cube-popup type="my-popup" ref="myPopup">
      <div class="cube-extend-popup-content"  >
        My Popup Content 1
      </div>
    </cube-popup>

    <br/>
    <cube-button class="testBtn" style="display:none" @click="showPicker">Picker</cube-button>

    <div class="test-flex"></div> -->
  </div>
</template>

<script>
//import { Button, Checkbox, Loading, Tip, Popup, Picker } from 'cube-ui'
import mGrid from 'base/mGrid' 
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
    /*showPopup(refId) {
      const component = this.$refs[refId]
      component.show()
      setTimeout(() => {
        component.hide()
      }, 1000)
    },

    showPicker () {
      this.picker.show()
    }*/
  },
  watch:{ 
  },
  components:{
    mGrid, 
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
  //background pink
  font-size 0.28rem
  .grid-wrap
    width 100%
    .m-grid
      gird-column-ctrl(3)
  .testBtn
    font-size 0.28rem

.cube-extend-popup-content
  padding: 20px
  color: #fff
  background-color: rgba(0, 0, 0, .8)

.test-flex
  display flex  
</style>

