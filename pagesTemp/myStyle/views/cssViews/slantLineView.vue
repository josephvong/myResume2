<template> 
  <div class="slant-line-view">
    <mHeader :isBack="true" text="滑斜线"></mHeader>
    <div class="case-wrap">
      <h4 class="title">transform 实现</h4>
      <div class="sample">
        <div class="model a">
        </div>
      </div>
      <p class="desc">斜线为伪类 使用绝对定位 transform 为 rotate 45deg 和 scale（1.4）</p>
    </div>

    <div class="case-wrap">
      <h4 class="title">线性渐变</h4>
      <div class="sample">
        <div class="model b">
        </div>
      </div>
      <p class="desc">linear-gradient(45deg, white 49.8%, black 49.8%, black 50.2%, white 50.2%)</p>
      <p class="desc">渐变色为45deg 方向，并在 49.8~50.2 百分比之间切换为黑色 </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">三角形实现</h4>
      <div class="sample">
        <div class="model c">
        </div>
      </div>
      <p class="desc">此案例主要考察如何css画三角形</p>
      <p class="desc">
        width:0%; height 0% <br/>
        border-left:1.5rem solid black <br/>
        border-bottom:1.5rem solid black <br/>
        border-top:1.5rem solid transparent <br/>
        border-right:1.5rem solid transparent <br/>
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">clip-path</h4>
      <div class="sample">
        <div class="model d">
        </div>
      </div>
      <p class="desc">
      -webkit-clip-path 是 svg 在 csss中的应用，用法：<br/>
      -webkit-clip-path:polygon(0 0,0 100%,100% 100%,0 0)<br/>
      polygon() 里面的是 多边形的点 ，参考 SVG 的 用法
      </p>
    </div>

    <br/><br/><br/><br/>
    <p> 参考 ：https://github.com/chokcoco/iCSS/issues/1</p>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'slantLineView',
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
 

.slant-line-view
  padding-top 0.8rem
  font-size 0.28rem
  .case-wrap
    padding 0.2rem
    .title
      font-size 0.36rem
      font-weight bold
    .sample
      padding 0.1rem
      .model
        width 3rem
        height 3rem
        border 1px solid red
    .desc
      font-size 0.28rem
      color blue

.model.a
  position relative
  overflow hidden
  &:before
    content ''
    position absolute
    left 0
    top 50%
    width 100%
    height 1px;
    background black
    transform rotate(45deg) scale(1.4)

.model.b
  background linear-gradient(45deg, white 49.8%, black 49.8%, black 50.2%, white 50.2%)

.model.c
  position relative
  &:before
    content ''
    display block
    position absolute
    left 0
    top 0
    width:0%;
    height 0%
    border-left:1.5rem solid black
    border-bottom:1.5rem solid black
    border-top:1.5rem solid transparent
    border-right:1.5rem solid transparent
  &:after
    content ''
    display block
    position absolute
    left 0
    top 0
    width:0%;
    height 0%
    border-left:1.49rem solid white
    border-bottom:1.49rem solid white
    border-top:1.51rem solid transparent
    border-right:1.51rem solid transparent

.model.d
  position relative
  width 2rem !important
  height 2rem !important
  margin 0 auto
  background deeppink
  overflow hidden
  &:before
    content ''
    display block
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background white
    -webkit-clip-path:polygon(0 0,0 100%,100% 100%,0 0)
    transform translate3d(-0.5%,0,0)
  &:after
    content ''
    display block
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background white
    -webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 0)
    transform translate3d(0.5%,0,0)


</style>



