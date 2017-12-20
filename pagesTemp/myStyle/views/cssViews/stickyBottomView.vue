<template> 
  <div class="sticky-bottom-view">
    <mHeader :isBack="true" text="粘性底部布局"></mHeader>

    <div class="case-wrap">
      <div class="content-wrap ">
        <div class="content-main">
          <div class="desc">
            <p>蓝色区域：主容器 部分， 绝对定位，且高度为可视区域 的 100%，并且 overflow 为 auto(超出可视)</p>
            <br/>
            <p>绿色区域(content-wrap): 作为 内容容器 的父容器， min-height 为 100%， 设置最小高度 是需要在内容不足时，默认把sticky-bottom 撑至 主容器的地步 </p>
             <br/>
            <p>橙色区域(content-main): 内容容器 需要设置 padding-bottom， 值为 sticky-bottom 容器的高度</p>
            <br/>
            <p>紫色区域(sticky-bottom): 粘性底部，高度为内容容器 的padding-bottom，被最小高度为100% 的content-wrap 挤到主容器的 底部，需要设置 margin-top 为 负高度 将其拉回显示区域内</p>
          </div>
          <div class="tool" @click="addContent">点击撑开内容</div>
          <ul>
            <li v-for = 'i in num'>{{i}}</li>
          </ul>
        </div>
      </div>
      <div class="sticky-bottom">
        AAAAA
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'stickyBottomView',
  props:{

  },
  data () {
    return {
      num:5
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
    addContent(){
      this.num = this.num*10
    }
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
 
.sticky-bottom-view
  padding-top 0.8rem
  font-size 0.28rem
  .case-wrap  // 本案例 case-wrap 为 粘性底部 布局 的总容器
    position absolute  //绝对定位 且高度设置为 顶部/底部外的绝对高度
    top:0.8rem
    bottom:1rem
    width:100%
    overflow:auto     // 内容超出可视
    border-top: 5px solid red;     // 顶部 和底部 为 5px 红色 边框（标识作用）
    border-bottom: 5px solid red;  // 顶部 和底部 为 5px 红色 边框（标识作用）
    background blue
    .content-wrap // 在 主容器 里面，是内容的容器并用来和把粘性底部撑至底部
      width:90%
      min-height 100%  // 最小高度为 父容器 100%
      margin 0 auto
      background green
      .content-main     //内容区域容器
        width:90%
        margin 0 auto
        padding-bottom 1rem // 添加底部padding, 高度为sticky-bottom的高度
        background orange
        .desc
          padding 0.2rem
          color black
        .tool
          width: 2rem
          line-height 0.5rem
          text-align center
          margin 0.3rem auto
          background red;
        ul
          width 80%
          margin 0 auto
          background yellow
    .sticky-bottom
      position relative
      height 1rem
      margin-top -1rem
      //clear:both
      background deeppink
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

</style>



