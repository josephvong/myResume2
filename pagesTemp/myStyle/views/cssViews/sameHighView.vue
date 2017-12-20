<template> 
  <div class="same-high-view">
    <mHeader :isBack="true" text="有趣的CSS(1):left Bar"></mHeader>
    <div class="case-wrap">
      <h4 class="title">1弹性布局</h4>
      <div class="sample">
        <div class="model a">
          <div class="left">多列等高布局</div> 
          <div class="right">多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。</div>
          </div>
      </div>
      <p class="desc">父容器 弹性布局，align-items 为 stretch</p>
    </div>

    <div class="case-wrap">
      <h4 class="title">margin-padding 对冲</h4>
      <div class="sample">
        <div class="model b">
          <div class="left">多列等高布局</div> 
          <div class="right">多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。</div>
          </div>
      </div>
      <p class="desc">正负padding-bottom 和 margin-bottom 对冲：</p>
      <p class="desc">两个并列的列元素 设置足够大的 padding-bottom 和 与padding-bottom 相反的负margin-bottom </p>
    </div>

    <div class="case-wrap">
      <h4 class="title">父容器背景色</h4>
      <div class="sample">
        <div class="model c clearfix">
          <div class="left">多列等高布局</div> 
          <div class="right">多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。 </div>
          </div>
      </div>
      <p class="desc">本例的关键在于，父容器 的背景设为线性渐变</p>
      <p class="desc">父容器清空浮动，背景为： </p>
      <p class="desc">background-image linear-gradient(90deg,yellow 50%,red 50%)</p>
      <p class="desc">背景 横向（90°）线性渐变，两个颜色在两列的交界处进行切换</p> 
    </div>

    <div class="case-wrap">
      <h4 class="title">table-cell方式</h4>
      <div class="sample">
        <div class="model d">
          <div class="left">多列等高布局</div> 
          <div class="right">多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现。布局,使用(display:flex) 实现。多列等高布局,使用(display:flex) 实现 </div>
          </div>
      </div>
      <p class="desc"> 父容器 display table 子容器为 table-cell </p> 
    </div>
    <br/><br/><br/><br/>
    <p> 参考 ：https://github.com/chokcoco/iCSS/issues/1</p>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'sameHighView',
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
 

.same-high-view
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
        width 6rem
        margin 0 auto
        &>div
          font-size 0.32rem
          line-height 0.48rem 
    .desc
      font-size 0.28rem
      color blue

.model.a 
  overflow hidden
  display flex
  align-items stretch  // 等高 属性
  .left , .right
    flex 1 
  .left
    background blue
  .right
    background green
    

.model.b
  overflow hidden  // 父容器 必须设置为overflow hidden
  .left , .right
    width 3rem
    float left
    padding-bottom 5000px // 等高的关键， 足够大的padding-bottom
    margin-bottom -5000px // 等高的关键， 与padding-bottom 互为相反的等值 margin-bottom
  .left
    background blue
  .right
    background green
    
.model.c
  //overflow hidden  （overflow hidden 可以用来清除浮动）， 本例中使用clearfix
  background-image linear-gradient(90deg,yellow 50%,red 50%) 
  .left , .right
    width 50%
    float left
    background-color none
        
.model.d
  display table
  .left , .right
    display table-cell
    width 50%
  .left
    background blue
  .right
    background green
     
</style>



