<template>
  <div ref="loadWrap" class="infinite-scroll">
    <img v-show="!loaded" src="./loading.gif" alt="">
    <p v-show="loaded">加载完成</p>
  </div>
</template>

<script>

export default {
  name: 'infiniteScroll',
  props: {
    scroller:{
      //type:Object
    },// 监听滚动的dom 节点
    containerH:{
      type:Number
    },
    loaded:{
      type:Boolean,
      default: false
    },
    loading:{
      type:Boolean,
      default: false
    },
  },
  methods:{
    bindScroll(){ // 对scroller dom节点 绑定滚动事件
      const scroller = this.scroller || window 
      this._handleScroll = (e)=>{  // 创建 _handleScroll 属性 绑定 “onScroll()” 函数
        this.onScroll(scroller)
      }
      // scroller节点绑定scroll事件，并执行 '_handleScroll' 绑定的 函数
      scroller.addEventListener('scroll', this._handleScroll) 
    },
    unbindScroll(){ // sroller dom节点 scroll事件绑定（解除绑定）
      const scroller = this.scroller || window
      if(this._handleScroll){ // 如果组件里面 定义了‘_handleScroll’ 说明 scroller dom节点 绑定了
        scroller.removeEventListener('scroll',this._handleScroll)
      }
    },
    onScroll(scroller){
      console.log(this.loading)  
      if( this.loading || this.loaded ){return }


      const isWindow = scroller === window  // 判断 监听scroll的节点 是不是window
      const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop // 监听滚动时的scrollY
      const scrollHeight = isWindow ? document.documentElement.scrollHeight||document.body.scrollHeight : scroller.scrollHeight // 计算出 scroll的总距离

      let h = scrollHeight - scrollTop - 5
      let sh = this.containerH || isWindow ? window.innerHeight : scroller.offsetHeight
      let wrapH =  this.$refs.loadWrap.clientHeight
       
      if(h <= sh){
        //console.log(scrollHeight) 
        this.$emit('toLoad')
      }
    }  
  },
   
  mounted(){ 
    // 生成组建后，绑定scroll事件
    this.bindScroll();
    //console.log(window.innerHeight)
  },
  beforeDestroy(){
    // 组件销毁前，取消scroll 事件绑定
    this.unbindScroll()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.infinite-scroll
  width 100% 
  min-height 0.5rem
  text-align center
  border 1px solid red
  img
    display block
    height 0.5rem
    width auto
    margin 0 auto
</style>