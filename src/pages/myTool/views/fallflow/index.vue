<template>
  <transition name="router-fade"> 
  <div class="fall-flow-view" ref="scrollWrap" >
    <mHeader :isBack="true" text="瀑布流"></mHeader>
    <div class="case-wrap">
       
      <div ref="Column" class="column" v-for="column in fallColumn" :style="column.width" >
        <div ref="sample" class="item" style="display:none">
          <div class="icon">
            <!-- <img :src="item.image" alt=""> -->
          </div> 
          <div class="desc">
            <p>width: </p>
            <p>height </p>
          </div>
        </div>
        <div class="item" v-for="item in column.list">
          <div class="icon" :style="{height:item.real_h+'px'}">
            <img :src="item.image" alt="">
          </div> 
          <div class="desc">
            <p>width:{{item.width}}</p>
            <p>height:{{item.height}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import mHeader from 'base/mHeader/mHeader'
import {imgDataFetch} from './dataFetch'
import {prefixStyle} from 'common/js/cusFn'
const COLUMN_N = 3 // 列数 3
// 生成 列 数组 的函数
function columnListInit(columnNum){
  let arr = []
  let w ={2:'48%',3:'30%',4:'24%'}
  let width ={}
  width[prefixStyle('flex')] = `0 0 ${w[columnNum]}`;
  width['width'] = w[columnNum]; 
  for (var i = 0; i < columnNum; i++) {
    arr.push({
      height:0,
      list:[],
      width:width
    })
  } 
  return arr
}
const fallColumn = columnListInit(COLUMN_N)
export default {
  name: 'fallFlowView',
  props:{

  },
  data () {
    return {
      pageIndex:1,
      loadFlag:true,

      columnWidth:0,
      columnNumber:COLUMN_N,
      fallColumn:fallColumn, // 生成多少个元素，表示有多少列
      shortestCol:null
    }
  },
  computed:{

    //-------------------------------
    /*...mapGetters('sample',{
      sampleTest:'sampleTest'
    })*/
  },
  created(){
     
    //console.log(this.fallColumn)
    //this.imgOrganize(1)
    /*imgDataFetch(1).then((res)=>{
      console.log(res)
    })*/
  },
  methods:{
    imgFetch(page){
      return imgDataFetch(page).then((res)=>{
        return Promise.resolve(res) 
      })
    },
    getItemHeight(){
      let sample = this.$refs.sample[0];
      sample.style.display = 'block';
      let height = sample.offsetHeight;
      sample.style.display = 'none';
      return height
    },

    imgOrganize(page){ // 图片 归类 函数
      this.columnWidth = this.columnWidth || this.$refs.Column[0].clientWidth // 计算 列宽度     
      this.imgFetch(page).then((res)=>{ // 获取 图片数据
        this.loadFlag = true  //数据获取完成后 打开loadFlag 
        res.forEach((res)=>{  // 遍历获取的图片数据 对象
          let nowItem = res; // 当前遍历的 图片数据
          let shortColumn = this.fallColumn[0]; // 默认 第一列为最短列
          for (var i = 0; i <this.fallColumn.length; i++) {
            if(this.fallColumn[i].height == 0 || this.fallColumn[i].height < shortColumn.height){
              shortColumn = this.fallColumn[i]; // 获取最短的column 
              break;  
            }
          }
          //  图片对象 添加到 最短列 的 list 里面， 并且累加 高度
          shortColumn.list.push({...nowItem,real_h:this.columnWidth/parseInt(nowItem.width)*parseInt(nowItem.height)})
          shortColumn.height += (this.columnWidth/parseInt(nowItem.width)*parseInt(nowItem.height)+10)
        })

        // 再次找到最短列
        let shortestCol = this.fallColumn[0]
        for (var i = 0; i <this.fallColumn.length; i++) {
          if(this.fallColumn[i].height < shortestCol.height ){
            shortestCol = this.fallColumn[i]
          }
        }
        // 设置最短列对象
        this.shortestCol = shortestCol
      })
    },

    loadMoreImg(page){
      this.loadFlag = false 
      setTimeout(()=>{this.imgOrganize(page)},500) 
       
    }
    
  },
  watch:{

  },
  components:{
    mHeader,
  },
  mounted(){ 
    this.imgOrganize(1)

    this.$refs.scrollWrap.addEventListener("scroll",(event)=>{
      if(this.$refs.scrollWrap.scrollTop >= this.shortestCol.height ){
        if(this.loadFlag){
          this.pageIndex = this.pageIndex+1 
          this.loadMoreImg(this.pageIndex)  
        } 
         
      }
    })  

     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
@import "~style/mixin"
.router-fade-enter-active,.router-fade-leave-active
  transition all 0.5s
.router-fade-enter,.router-fade-leave-to
  transform:translate3d(100%,0,0)
.fall-flow-view
  line-height 0.34rem
  font-size 0.28rem
  sub-page-head()
  .case-wrap
    display flex
    flex-flow:row nowrap
    justify-content space-around
    padding 0.1rem 0
    .column
      display block
      //flex 0 0 30%
      //width 30%
      text-align center
      // border-bottom 1px solid red
      .item
        width 100%
        border 0.01rem solid gray
        margin-bottom 0.2rem
        .icon
          width 100%
          img
            display block
            width 100% 
        .desc
          height 0.8rem
          text-align center
          p
            height 0.4rem
            line-height 0.4rem
            font-size 0.28rem
            no-wrap()
    
    



</style>



