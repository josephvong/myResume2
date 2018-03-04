<template> 
  <div class="stack-level-view">
    <mHeader :isBack="true" text="背景渐变动画"></mHeader>
    <div class="desc">
      前言：
      <p>background: linear-gradient 属性 不能 使用 keyframe</p>
      <p>以下css属性 可以 在 css动画中使用：</p>
      <p><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties</a></p>

    </div>
    <div class="case-wrap">
      <h4 class="title">线性渐变背景 a</h4>
      <div class="sample a">
        <div class="linear-bg"></div>
      </div>
      <div class="desc">
        案例a：通过 bg-size 变长 和 bg-position 使用 动画 来实现；
        <p>div 的 background-size X轴 长度为 div长度的 200%；</p>
        <p>div 的 bg-position 使用 keyframes x轴 从 0 移动到 100%</p>
      </div>
    </div>

    <div class="case-wrap">
      <h4 class="title">线性渐变背景 b</h4>
      <div class="sample b">
        <div class="linear-bg"></div>
      </div>
      <div class="desc">
        案例b：通过 bg-size 改变动画 来实现；
        <p>div 的 background-size 默认为 300%，bg-position 默认为100%，让背景显示中间区域 </p>
        <p>使用 keyframes 把背景 的 横向 大小 从300% 缩小为 100%</p>
      </div>
    </div>

    <div class="case-wrap">
      <h4 class="title">线性渐变背景 c</h4>
      <div class="sample c">
        <div class="linear-bg"></div>
      </div>
      <div class="desc">
        案例 c： 元素 固定大小，添加before伪类
        <p>before伪类 为绝对定位，并且上下左右 均距离 元素 外部 的 1rem的距离</p>
        <p>before伪类 添加 45度的 渐变背景色</p>
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'stackLevelView',
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
 
.stack-level-view
  padding-top 0.8rem
  font-size 0.28rem
  .describe
    padding 0.08rem
    p
      line-height 0.4rem
      font-size 0.32rem
      margin-bottom 0.05rem
  .case-wrap
    padding 0.2rem
    .title
      font-size 0.36rem
      font-weight bold
    .sample
      padding 0.1rem
      line-height 0.4rem
      font-size 0.32rem
    .desc
      line-height 0.34rem
      font-size 0.28rem
      color blue
      strong
        font-weight bold
        color red;

.linear-bg
  width 5rem
  height 2rem
  margin 0 auto
.sample.a .linear-bg
  background linear-gradient(90deg, #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
  background-size 200% 100%  // 背景 水平方向长度为 div长度的200%，用于移动
  background-position 0 0
  animation bgposition 2s infinite linear alternate

@keyframes bgposition
  0%
    background-position 0 0
  100%
    background-position 100% 0

.sample.b .linear-bg
  background linear-gradient(90deg, #ffc700 0%, #e91e1e 33%, #6f27b0 66%, #00ff88 100%);
  background-position 100% 0
  animation bgsize 2s infinite linear alternate
@keyframes bgsize
  0%
    background-size 300% 100%
  100%
    background-size 100% 100%

.sample.c .linear-bg
  position relative
  width 2rem
  height 2rem
  overflow hidden
  margin 0 auto
  border 1px solid white
  &:before
    content ''
    display block
    position absolute
    left -1rem
    right -1rem
    top -1rem
    bottom -1rem
    background linear-gradient(45deg,#ffc700 0%, #e91e1e 33%, #6f27b0 66%, #00ff88 100%)
    background-size 100% 100%
    animation bgtrans 3s infinite linear alternate
    z-index -1
@keyframes bgtrans
  0%
    transform translate3d(20%,20%,0)
  25%
    transform translate3d(20%,-20%,0)
  50%
    transform translate3d(-20%,-20%,0)
  75%
    transform translate3d(-20%,20%,0)
  100%
    transform translate3d(20%,20%,0)
</style>


