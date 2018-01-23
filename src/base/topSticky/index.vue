<template> 
  <div class="top-sticky clearfix" :style="{height:elHeight?'`${elHeight}px`':'auto'}"> 
    <div class="sticky-inner" :style="{top:stickyTop+'px',zIndex:zIndex,position:position,width:elWidth,height:elHeight+'px'}">
      <slot></slot>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6"> 
export default {
  name: 'topSticky',
  props:{
    stickyTop:{ // 粘贴的 top,默认为0，可传值调控
      type:Number,
      default:0
    },
    zIndex:{     // 层级别， 可传值调控
      type:Number,
      default:1
    },
    className:{
      type:String
    } 
  },
  data () {
    return {
      stickyActive:false, // 粘贴状态
      position: '', 
      elHeight:null, // 组件当前高度
      elWidth:null, 
    }
  },
  computed:{  
  },
  created(){ 
  },
  methods:{
    sticky(){
      if (this.stickyActive) { // 如果 已经是 sticky 状态， 直接返回（节流）
        return
      }
      this.position = 'fixed'
      this.stickyActive = true
      this.elWidth = this.elWidth + 'px'
    },
    reset(){
      if (!this.stickyActive) { // 如果 已经 非sticky状态， 直接返回（节流）
        return
      }
      this.position = ''  // 还原 定位
      this.stickyActive = false // 还原 为 非sticky 状态
      this.elWidth = 'auto'  // 还原默认宽度
    },

    handleScroll(){
      this.elWidth = this.$el.getBoundingClientRect().width // 获取组件的宽度
      const offsetTop = this.$el.getBoundingClientRect().top // 获取 当前 组件处于视口中的高度
      if(offsetTop <= this.stickyTop){ // 若组件的offsetTop 小于 设定的粘贴(固定)top
        this.sticky()  // 执行粘贴函数，进入粘贴状态
        return         // 跳出 handleScroll函数
      }
      this.reset()  // 若没有进入 if(){}, 则 执行 还原reset函数
      //console.log(this.$el.getBoundingClientRect())
    } 
  },
  watch:{

  },
  components:{ 
  },
  mounted(){
    this.elHeight = this.$el.getBoundingClientRect().height;
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
//@import "~common/stylus/mixin"
.top-sticky
  width 100%
 

 
</style>



