<template>
   
  <div class="stack-level-view">
    <mHeader :isBack="true" text="文本弹性处理"></mHeader>
    <div class="describe">
      <p>
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">单行居中，两行靠左，多行省略</h4>
      <div class="sample a">
        <h2>
          <p>单行居中</p>
        </h2>
        <br/>
        <h2>
          <p>块标签内 嵌套一个 内联标签，块标签设置字体居中，内联标签设置字体靠左</p>
        </h2>
        <br/>
        <h2>
          <p>
            <em> 点击可以显示更多： 块标签内 嵌套一个 内联标签，块标签设置字体居中，内联标签设置字体靠左,内联标签设置字体靠左</em>
          </p>
        </h2>
      </div>
      <p class="desc">
        上面的 例子中，多行文本溢出 的实现如下：
        <ul>
          <li>display: -webkit-box;</li>
          <li>overflow : hidden;</li>
          <li>text-overflow: ellipsis;</li>
          <li>-webkit-line-clamp: 2;</li>
          <li>-webkit-box-orient: vertical;</li>
        </ul>
        通常使用在 移动端，因为 display-webkit-box 仅在webkit 中可用
      </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">任意列数均匀分布 flex</h4>
      <div class="sample b">
        <div class="justify-flex">
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
        </div>
        <div class="justify-flex">
          <i>1</i>
          <i>2</i>
          <i>3</i>
        </div>
        <div class="justify-flex">
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
          <i>6</i>
        </div>
      </div>
      <p class="desc">
      弹性布局， 父容器justify-content space-between， 子容器 flex:0 1 0.4rem
      </p>
    </div>
     <div class="case-wrap">
      <h4 class="title">text-align justify 实现</h4>
      <div class="sample b">
        <div class="justify">
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
        </div>
        <div class="justify">
          <i>1</i>
          <i>2</i>
          <i>3</i>
        </div>
      </div>
      <p class="desc">
       父节点 设置 text-align：justify,当内容总长度 超过一行时（换行），第一行的内容会等比例分布；<br/>
       通过 after 伪类，给父节点 内添加一个 假第二行，让第一行子节点实现等比分布
      </p>
    </div>
    <p></p>
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

.sample.a
  h2
    text-align center
    p
      display inline-block
      text-align left
      em
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow : hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:active
          display block
          overflow : visible;

.justify-flex
  display flex
  align-items center
  justify-content space-between
  margin-bottom 0.2rem
  &>i
    flex 0 1 0.4rem
    width 0.4rem
    display block;
    line-height 0.4rem
    border-radius 50%
    text-align center
    font-style normal
    background #cccccc

.justify
  text-align: justify;
  background green
  height 0.4rem
  margin-bottom 0.2rem
  &>i
    display inline-block;
    width 0.4rem
    line-height 0.4rem
    border-radius 50%
    text-align center
    font-style normal
    background #cccccc
  &:after
    content ''
    display inline-block
    position relative
    width 100%
    height 0px
</style>



