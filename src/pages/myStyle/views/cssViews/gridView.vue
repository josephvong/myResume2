<template> 
  <div class="grid-view">
    <mHeader :isBack="true" text="九宫格"></mHeader>
    <div class="grid-wrap" >
      <div class="m-grids">
        <a class="m-grid" v-for="i in 34">
          <div class="grid_icon">
            <img :src="require('assets/img/jizhi.png')" alt="">
          </div>
          <p class="grid_label">AAAAA{{i}}</p>
        </a>
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'gridView',
  props:{

  },
  data () {
    return {

    }
  },
  computed:{

  	//-------------------------------
  	/*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
  		searchHistory:'searchHistory'
  	})*/
  },
  created(){

  },
  methods:{

  	//-----------------------------
  	/*...mapActions({
  		saveSearchHistory:"saveSearchHistory",
  	}),*/
  },
  watch:{

  },
  components:{
    mHeader
  },
  mounted(){

  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
row-ctrl(num)  // 九宫格 列数 更改的 stylu 函数
  if num <=3
    width 33.333333%
  if num ==4
    width 25%
  if num >=5
    width 20%
.m-grids    // 九宫格样式
  position relative
  overflow hidden
  &:before    // 定义顶部边框样式 (<1px)
    content ''
    position absolute
    top 0
    left 0
    right 0  // left right 为0 表示 width100%
    height 1px
    border-top 1px solid #D9D9D9 // 顶部边框颜色
    color #D9D9D9
    transform-origin 0 0
    transform scaleY(0.5)  // Y轴方向 搜索0.5
  &:after   // 定义 左边的 边框
    content ''
    position absolute
    left 0
    top 0
    bottom 0
    width 1px
    border-left 1px solid #D9D9D9
    color #D9D9D9
    transform-origin 0 0
    transform scaleX(0.5)
  .m-grid   // 单元格
    position relative
    float left
    padding 0.4rem 0.2rem
    row-ctrl(4)  // 控制
    &:before  // 单元格 的 右边框
      content ''
      position absolute
      right 0
      top 0
      bottom 0
      width 1px
      border-right 1px solid #D9D9D9
      transform-origin 100% 0  // 以x轴的 右侧为 变形中心
      transform scaleX(0.5)
    &:after     // 单元格 的 底边框
      content ''
      position absolute
      bottom 0
      left 0
      right 0
      height 1px
      border-bottom 1px solid #D9D9D9
      transform-origin 0 100%
      transform scaleY(0.5)
    &:active
      background-color #ececec
    .grid_icon
      width 0.56rem
      height 0.56rem
      margin 0 auto
      img
        display block
        width 100%
        height 100%
      & + .grid_label  // 使用 + 选择器 表示 在 .grid_icon 随后的 .grid_label 才有margin-top
        margin-top 5px
    .grid_label
      display block
      text-align center
      color #000000
      font-size 0.28rem
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
/*.router-fade-enter-active,.router-fade-leave-active
  transition all 0.5s
.router-fade-enter,.router-fade-leave-to
  transform:translate3d(100%,0,0)*/
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
//@import "~common/stylus/mixin"
.grid-view
  padding-top 0.8rem
  .grid-wrap
    padding  0.2rem

</style>



