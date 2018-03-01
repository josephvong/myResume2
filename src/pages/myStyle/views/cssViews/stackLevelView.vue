<template> 
  <div class="stack-level-view">
    <mHeader :isBack="true" text="dom的层叠顺序"></mHeader>
    <div class="describe">
      <p>
        <strong style="font-weight:bold">层叠水平（stacking level) 如下：</strong> <br/>
        1、形成堆叠上下文环境的元素的背景与边框
        <br/>
        2、拥有负 z-index 的子堆叠上下文元素 （负的越高越堆叠层级越低）
        <br/>
        3、正常流式布局，非 inline-block，无 position 定位（static除外）的子元素
        <br/>
        4、无 position 定位（static除外）的 float 浮动元素
        <br/>
        5、正常流式布局， inline-block元素，无 position 定位（static除外）的子元素（包括 display:table 和 display:inline ）
        <br/>
        6、拥有 z-index:0 的子堆叠上下文元素
        <br/>
        7、拥有正 z-index: 的子堆叠上下文元素（正的越低越堆叠层级越低）</p>
    </div>

    <div class="case-wrap">
      <h4 class="title">一个float div 和一个 inline-blick div 的对比</h4>
      <div class="sample a">
        <div class="model">
          <div class="float"> #divB float:left</div>
          <div class="inline-block">#divA display:inline-block</div>
        </div>
      </div>
      <p class="desc">
        在 层叠水平 比较下，无论 上面两个div 编写顺序 如何变化， inline-block 总会在 float 上面
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">在添加了 opacity属性后 进行  float 和 inline-blick 的对比</h4>
      <div class="sample">
        <div class="model b">
          <div class="float"> #divB float:left<br/>前</div>
      <div class="inline-block">#divA display:inline-block<br/>后</div>
        </div>
      </div>
      <p class="desc">
        两个div 添加了 opacity 属性，定义了他们‘堆叠上下文’ 的概念 <br/>
        多个元素 在 符合 ‘堆叠上下文’ 的概念 下，他们的层级关系 是根据 z-index 或者 编辑的前后顺序 来确定的。<br/>
        （z-index 越高，层级越高，编写位置越后，层级越高）
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
        position:relative;
        background #ddd
        &>div
          wdith 2rem
          height 2rem
          //opacity 0.9
        .float
          float left
          font-size 0.4rem
          background red
        .inline-block
          display inline-block
          background blue
          margin-left -0.5rem
    .desc
      line-height 0.34rem
      font-size 0.28rem
      color blue
      strong
        font-weight bold
        color red;
/*.router-fade-enter-active,.router-fade-leave-active
  transition all 0.5s
.router-fade-enter,.router-fade-leave-to
  transform:translate3d(100%,0,0)
*/
.model
  &.b>.float
    opacity 0.9
  &.b>.inline-block
    opacity 0.7

</style>



