<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick" @touchmove.prevent >
    <div class="bar-inner">
      <div class="progress" ref='progress' ></div><!-- 进度条进度 初始 width:0-->
      <div class="progress-btn-wrap" ref="progressBtn"
           @touchstart.prevent = 'progressTouchStart'
           @touchmove.prevent = 'progressTouchMove'
           @touchend = 'progressTouchEnd'
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import {prefixStyle} from 'common/js/cusFn'

const transform = prefixStyle('transform')
export default {
  name: 'progressBar',
  props:{
    percent:{
      type:Number,
      default: 0
    },
    isListen:{ // 是否监听 拖动过程的 percent 变化
      type:Boolean,
      default:false
    }
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
    this.touch = {}  // 创建一个 触摸 数据容器
  },
  methods:{
    progressTouchStart(){ // 触摸 开始
      this.touch.initiated = true;
      this.touch.startX = event.touches[0].pageX
      this.touch.left = this.$refs.progress.clientWidth // 进度的偏移 为 progress 的 clientWidth
    },
    progressTouchMove(){ // 触摸 过程
      if(!this.touch.initiated){return}
      const deltaX = event.touches[0].pageX - this.touch.startX // 手指的拖动距离
      const barWidth = this.$refs.progressBar.clientWidth // 进度条总长度
      const offsetWidth = Math.min(barWidth,Math.max(0,this.touch.left+deltaX));//手指拖动距离的变化量 最小为0 最大为 barWidth
      this._offset(offsetWidth)
      if(this.isListen){  // 启动实时监听
        this._changePercent();
      }

    },
    progressTouchEnd(){ // 触摸 结束
      this.touch.initiated = false;
      this._changePercent();
    },

    progressClick(event){
      // getBoundingClientRect 方法 获取 dom节点 在视图上的位置（top/left/bottom/right）
      const rect = this.$refs.progressBar.getBoundingClientRect()
      const clickOffset = event.pageX - rect.left // 点击位置与 进度条最左的距离

      this._offset(clickOffset);
      this._changePercent();
    },

    _changePercent(){
      const barWidth = this.$refs.progressBar.clientWidth // 进度条总长度
      const percent = this.$refs.progress.clientWidth / barWidth

      this.$emit('percentChange',percent)
    },

    _offset(offsetWidth){
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
    }
  	//-----------------------------
  	/*...mapActions({
  		saveSearchHistory:"saveSearchHistory",
  	}),*/
  },
  watch:{
    percent(newPercent){
      if(newPercent>0 && !this.touch.initiated){
        const barWidth = this.$refs.progressBar.clientWidth
        const offsetWidth = Math.min(newPercent * barWidth,barWidth);
        this._offset(offsetWidth)
      }
    }
  },
  components:{

  },
  mounted(){

  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~style/variable"
//@import "~style/mixin"
.progress-bar     // 进度条 根节点 width默认（100%） 高度0.6rem
  //padding 0 0.3rem
  height 0.6rem  // (30px/60px)
  //width 100%
  border 1px solid green
  .bar-inner      // 进度条的容器 位于 根节点高度的中间，4px 的高
    position relative
    top 48%
    height 0.08rem
    background rgba(0,0,0,0.3)

    .progress     // progress进度条为 绝对定位，width为0（绝对定位）
      position absolute
      //width 100%;
      height 100%     // 高度为 inner容器的 高度 4px
      background #ffcd32  // 黄色背景

    .progress-btn-wrap
      position absolute
      width 0.5rem   // (30px/60px)
      height 0.5rem   // (30px/60px)
      left 0//0rem
      top -0.25rem    // (15px/-30px)
      margin-left -0.25rem    // (15px/-30px)

      .progress-btn
        position relative
        //left 25%
        //top 29%
        width 0.5rem
        height 0.5rem
        border 0.15rem solid #cccccc
        border-radius 50%
        background red



</style>



