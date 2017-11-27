<template>
  <div class="scroller-y" ref="wrap"> <!-- BScroll 的固定布局，滚动总父容器 -->
    <slot></slot> <!-- BScroll 滚动的内容 通过 slot 插槽 添加 -->
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import BScroll from 'better-scroll'
//import
export default {
  name: 'scrollerY',
  props:{
    probeType:{  // 这里的 probeType 是指定 组件使用 bscroll 的那种指针类型
      type:Number,
      default:1
    },
    listenScroll: {  // 是否监听 滚动事件
      type: Boolean,
      default: false
    },
    click:{  // 是否可以点击
      type:Boolean,
      default:true //默认为true
    },
    listData:{ // 组件 中 内容 所依赖数组, 需要根据此数据（数组）的更新来控制滚动组件的高度重计算
      type:Array,
      default:null
    },
    pulldown:{  // 是否启用下拉（刷新）功能
      type:Boolean,
      default:false //默认为false
    },
    pullup:{
      type:Boolean,
      default:false //默认为false
    },
    refreshDelay:{ //延时刷新的时间间隔
      type:Number,
      default:20// 在listData 改变后，组件(slot)内的 dom 会从新渲染，渲染时间 约为 20毫秒，
    }//可以通过参数控制组件延时刷新，因为组件里面的dom 节点 生成 会有过渡过程，过程 大于 20毫秒

  },
  data () {
    return {

    }
  },
  computed:{


  },
  created(){

  },
  methods:{
    _initScroll(){
      if(!this.$refs.wrap){return} // 根节点为渲染完成 ，不执行 初始化
      this.scroll = new BScroll(this.$refs.wrap,{  // BScroll 初始化
        probeType:this.probeType,
        click:this.click
      })
      // 如果组件 监听 滚动事件
      if(this.listenScroll){
        // bscroll实例 on(‘eventName’, fn(pos) ) 监听BScroll事件，回调函数 参数 pos 为 滚动的位置（json，x,y值）
        this.scroll.on('scroll',(pos)=>{
          this.$emit('scroll',pos)  //  vue组件实例，派发 scroll 事件 并发送 pos 数据
        })
        this.scroll.on('scrollEnd',()=>{ // 监听 scrollEnd 事件
          this.$emit('scrollStop',this.scroll.y)
        })
      }


      //// 如果组件 启用 上拉 功能
      if(this.pullup){
        this.scroll.on('scrollEnd',()=>{  // 判断 滚动停止时
          if(this.scroll.y<=(this.scroll.maxScrollY+50)){ //scroller 是否已经到达底部（剩余50px）的区域
            this.$emit('scrollToEnd')  // 派发 scrollToEnd 事件
          }
        })
      }

      // 如果组件 启用 下拉 功能
      if(this.pulldown){
        this.scroll.on('touchend',()=>{   // 监听 触摸 结束 事件
          if(this.scroll.y>60){       // 在this.scroll.y >60 表示 向下拖动到达顶部并超过距离60px
            this.$emit('pulldown')   // 派发pulldown 事件
          }
        })
      }
    },

    //---------- 以下为 将 bscroll 的 api方法 代理给此封装的 scroller 组件
    enable(){ if(this.scroll){ this.scroll.enable()} },
    disable(){ if(this.scroll){this.scroll.disable()} },
    refresh(){ if(this.scroll){this.scroll.refresh()} },

    // 以下 两个方法的参数 要用apply() 绑定 到 this.scroll 对象（初始化后的BScroll实例）上
    scrollTo(){ if(this.scroll){this.scroll.scrollTo.apply(this.scroll,arguments)} },
    scrollToElement(){ if(this.scroll){this.scroll.scrollToElement.apply(this.scroll,arguments)} },
  },
  watch:{
    listData(){
      setTimeout(()=>{this.refresh()},this.refreshDelay)
    }
  },
  components:{
  },
  mounted(){
    // 组件 创建完成，延时0.02s 进行 轮播 的初始化
    setTimeout(()=>{
      this._initScroll()
    },20)


  },

  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){

  },

  deactivated(){

  },
  beforeDestroy(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">


</style>



