<template>
  <div class="color-border-view">
    <mHeader :isBack="true" text="background-origin和clip"></mHeader>
    <div class="describe">
      <p>这一题主要考查的是盒子模型 Box Model 与 背景 background 的关系，以及使用 background-clip 改变背景的填充方式
      </p>
      <p>
        知识点：background-color 的填充点<br/>
        如果一个容器 box sizing 为border-box:<br/>
        * background-color 是从元素最外层的边框左上角起到右下角止<br/>
        * background-image 从 padding 外边缘的左上角(边框里面)起而到 border 的右下角边缘止
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">background默认</h4>
      <div class="sample a">
        <div class="model"></div>
      </div>
      <p class="desc">
        background-color:blue , 从边框所占的空间开始<br/>
        background-image 从 边框里面开始
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">background-origin改变背景图片延伸的范围</h4>
      <div class="sample b">
        <div class="model"></div>
      </div>
      <p class="desc">
        background-image 从 边框里面开始是由<strong>background-origin</strong>控制:<br/>默认值为 padding-box（从padding的占位范围开始）<br/>
        上图为 <strong>background-origin：border-box</strong>， <br/>
        背景从边框 的占位 底部开始延伸
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">background-origin 所有属性</h4>
      <div class="sample c">
        <div class="model"></div>
      </div>
      <p class="desc">
        上图为<strong>background-origin:content-box</strong>,且容器 padding为 10px<br/>
        控制 background-image占位的  <strong>background-origin</strong>参数如下：<br/>
        border-box （背景从边框 的占位 底部开始延伸）<br/>
        padding-box （背景从边框 的内开始延伸，覆盖padding的空间）<br/>
        content-box （背景从真正内容区延伸，不覆盖padding的空间）<br/>
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">background-clip 背景裁剪</h4>
      <div class="sample d">
        <div class="model"></div>
      </div>
      <p class="desc">
        上图为padding 10px, <strong>background-clip:content-box</strong><br/>
        background-clip是通过 <strong>背景裁剪的方式</strong>控制  background-color显示范围 (并非改变 background-color 的起始位置)<br/>
        <strong>background-clip:content-box</strong>表示从内容区域作为显示范围切割背景
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'colorBorderView',
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
.color-border-view
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
        width 3.6rem
        height 3.6rem
    .desc
      line-height 0.34rem
      font-size 0.28rem
      color blue
      strong
        font-weight bold
        color red;
&.a > .model
  background no-repeat
  background-color blue
  background-size contain
  //background-origin border-box
  background-image url('./jizhi.png')
  border 0.4rem dashed #2196f3

&.b > .model
  background no-repeat
  background-color blue
  background-origin border-box // 默认为 padding-box
  background-size contain
  background-image url('./jizhi.png')
  border 0.4rem dashed #2196f3

&.c > .model
  padding 0.2rem
  background no-repeat
  background-color blue
  background-origin content-box // 默认为 padding-box
  background-size contain
  background-image url('./jizhi.png')
  border 0.4rem dashed #2196f3

&.d > .model
  padding 0.2rem
  background no-repeat
  background-color blue
  //background-origin content-box
  background-clip content-box // 背景色仅填充内容区域
  //background-size contain
  //background-image url('./jizhi.png')
  border 0.4rem dashed #2196f3


</style>



