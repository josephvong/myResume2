<template>
  <div class="layout-wrap"> 
    <mGrid>
      <a class="m-grid"  @click="routerGo" data-link="progressview">
        <div class="grid_icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <p class="grid_label">进度条控制</p> 
      </a>
      <a  class="m-grid" @click="routerGo"  data-link="sliderview">
        <div class="grid_icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <p class="grid_label">滑动轮播</p> 
      </a>
      <a  class="m-grid" @click="routerGo"  data-link="scrollview" >
        <div class="grid_icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <p class="grid_label">滑动组件</p> 
      </a>
      <a  class="m-grid" @click="routerGo"  data-link="selectlistview">
        <div class="grid_icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <p class="grid_label">城市选择</p> 
      </a> 
      <a  class="m-grid" @click="routerGo"  data-link="svgcaseview" >
        <div class="grid_icon">
          <img :src="require('assets/img/jizhi.png')" alt="">
        </div>
        <p class="grid_label">SVG组件</p> 
      </a>
      <a class="m-grid"  @click="routerGo"  data-link="sidescrollview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">侧边滚动</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="lazyloadview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">懒加载</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="searchtoolview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">搜索工具</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="uploadtoolview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">图片上传</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="bouncelistview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">弹性列表</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="infiniteview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">无限下拉</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="fallflowview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">瀑布流</p>
        </a> 
        <a class="m-grid"  @click="routerGo"  data-link="3dswitchview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">3d旋转切换</p>
        </a>
        <a class="m-grid"  @click="routerGo"  data-link="imgcroppaview"  >
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">图片裁切</p>
        </a>
    </mGrid>
    <router-view></router-view> 
  </div>
</template>

<script>
import mGrid from 'base/mGrid' 
export default {
  name: 'Layout',
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
    routerGo(event){
      let target = event.currentTarget.getAttribute('data-link');
      this.$router.push({
        path:`/${target}`
      })
    } 
  },
  watch:{ 
  },
  components:{
    mGrid 
  },
  mounted(){ 
    console.log(process.env.NODE_ENV)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
.layout-wrap
  width 100% 
  .m-grid
    gird-column-ctrl(4)
</style>

