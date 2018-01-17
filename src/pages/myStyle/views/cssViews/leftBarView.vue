<template> 
  <div class="left-bar-view">
    <mHeader :isBack="true" text="有趣的CSS(1):left Bar"></mHeader>
    <div class="case-wrap">
      <h4 class="title">1常规(边框实现)</h4>
      <div class="sample a">
        <div class="model"></div>
      </div>
      <p class="desc">border-left 5px solid deeppink</p>
    </div>

    <div class="case-wrap">
      <h4 class="title">2伪类</h4>
      <div class="sample b">
        <div class="model"></div>
      </div>
      <p class="desc">伪类元素 :before </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">3 box-shadow</h4>
      <div class="sample c">
        <div class="model"></div>
      </div>
      <p class="desc">box-shadow：-5px 0px 0 0 deeppink, <br/>
      box-shadow:‘x偏移’/‘y偏移’/‘模糊半径’/‘阴影扩展距离’/‘颜色’
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">4 box-shadow inset(内阴影)</h4>
      <div class="sample d">
        <div class="model"></div>
      </div>
      <p class="desc">box-shadow：inset -5px 0px 0 0 deeppink (内阴影参数同上)
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">5 drop-shadow </h4>
      <div class="sample e">
        <div class="model"></div>
      </div>
      <p class="desc">
        filter: drop-shadow(x偏移, y偏移, 模糊半径, 色值);
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">6 渐变 linearGradient  </h4>
      <div class="sample f">
        <div class="model gradient"></div>
      </div>
      <p class="desc">
      background-image:linear-gradient(90deg, deeppink 0px, deeppink 5px, transparent 5px);
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">7 outline  </h4>
      <div class="sample g">
        <div class="model"></div>
      </div>
      <p class="desc">
      outline（轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">7 gradient  </h4>
      <div class="sample h">
        <div class="model gradient"></div>
      </div>
      <p class="desc">
        用作调试 linear-gradient 样式
      </p>
    </div>
    <p> 参考 ：https://github.com/chokcoco/iCSS/issues/1</p>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'leftBarView',
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
 
.left-bar-view
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
        position:relative;
        width 260px
        height 60px
        background #ddd
      /*&.a > .model
        border-left 5px solid deeppink*/
    .desc
      font-size 0.28rem
      color blue

.sample.a > .model
  border-left 5px solid deeppink

.sample.b > .model:before
  content ""
  position absolute
  left 0
  top 0
  width 5px
  height 100%
  background deeppink

/*
box-shadow:‘x偏移’/‘y偏移’/‘模糊半径’/‘阴影扩展距离’/‘颜色’
box-shadow 有第4个参数（阴影扩展距离），是为了能够在 x y偏移均为0 时 让阴影溢出节点
*/
.sample.c > .model
  transform: translateX(5px)
  box-shadow -5px 0px 0px 0px deeppink

.sample.d > .model
  box-shadow inset 5px 0px 0px 0px deeppink


/*CSS3的filter阴影滤镜drop-shadow,功能 类似 box-shadow
filter: drop-shadow(x偏移, y偏移, 模糊半径, 色值);
比box-shadow 少了第四个参数（阴影扩展距离），用xy的偏移量来取代
*/
.sample.e > .model
  filter: drop-shadow(-5px 0 0px deeppink)


.sample.f > .model.gradient
  background-image linear-gradient(90deg, deeppink 0px, deeppink 5px, transparent 5px)

.sample.g > .model
  margin-left 5px
  outline 5px solid deeppink
  &:after
    content ""
    position absolute
    top -5px
    bottom -5px
    right -5px
    left 0
    background #ddd

.sample.h > .model.gradient
  background-image linear-gradient(180deg, red 0px, red 20px, blue 20px)
/*
<linear-gradient> = linear-gradient([[ <角度> | 起始点 ] ,]? <颜色-距离>[, <c颜色-距离>]+)
linear-gradient 函数参数：
1. 角度或起点：
  角度 0 为水平 从下开始向上 颜色渐变， 180为相反从上向下
  起始点可以为 ‘[left | right] || [top | bottom]’
2 .颜色-起始点 可以是多个 颜色距离组合： 表示 颜色的扩展起始点，从起始点开始渐变，直到下一个颜色的起始点
*/
</style>



