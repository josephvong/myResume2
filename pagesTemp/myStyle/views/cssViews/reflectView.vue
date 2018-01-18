<template> 
  <div class="stack-level-view">
    <mHeader :isBack="true" text="inherit实现倒影"></mHeader>
    <div class="describe">
      <p>
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">-webkit-box-reflect</h4>
      <div class="sample ">
        <div class="model a">
        </div>
      </div>
      <p class="desc">
        使用了  <strong>-webkit-box-reflect: below</strong> 属性 生成倒影<br/>
        但 目前 -webkit-box-reflect 仅在 webkit 内核浏览器下兼容
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">使用伪类after 结合 背景inherit 实现</h4>
      <div class="sample ">
        <div class="model b">
        </div>
      </div>
      <p class="desc">
        在伪类中 使用了  <strong>background-image：inherit</strong> 继承父节点的背景<br/>
        并 以 left bottom 为 transform-origin 旋转 180deg (rotateX)
      </p>
    </div>

    <p>https://github.com/chokcoco/iCSS/issues/1</p>
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
      .model
        position relative
        width: 3rem
        height 3rem
        margin-bottom 3rem
    .desc
      line-height 0.34rem
      font-size 0.28rem
      color blue
      strong
        font-weight bold
        color red;

.a
  background no-repeat
  background-position center center
  background-size contain
  background-image url('./jizhi.png')
  -webkit-box-reflect: below;
.b
  background no-repeat
  background-position center center
  background-size contain
  background-image url('./jizhi.png')
  &:after
    content ''
    position absolute
    width 100%
    height 100%
    background no-repeat
    background-image inherit
    transform-origin left bottom
    transform rotateX(180deg)

</style>



