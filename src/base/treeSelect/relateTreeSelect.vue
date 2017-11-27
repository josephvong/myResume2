<template>
  <div class="tree-select" @click="hideMore">
    <!--选中区域-->
    <div class="select-result">
      <div class="group-title">地区产地</div>
      <div class="select-items">
        <a v-for="(item,index) in selected" @click="removeClick(item,index)">
          {{item.name}}
          <em>x</em>
        </a>
      </div>
    </div>

    <!-- 以下为 业务需要  -->
    <div class="select-result">
      <div class="group-title">酒款风格</div>
      <div class="select-items">
         <a>波尔多酒款风格<em>x</em></a>
      </div>
    </div>

    <div class="select-result">
      <div class="group-title">酒款风格</div>
      <div class="select-items">
         <a>波尔多酒款风格<em>x</em></a>
      </div>
    </div>
    <!-- 以下为 业务需要  -->

    <!--选项区域-->
    <div class="list-wrap" v-show="tempList.length">
      <h3 class="list-title">{{tempTitle}}:</h3>
      <ul class="select-list">
        <li v-if="tempList" v-for="(item,index) in tempList" v-show="index<10"  @click="selectClick(item)" >
          {{item.name}}
        </li>
        <a class="more" v-show="tempList.length>10" @click.stop="showMore"> 更多 </a>
      </ul>
      <ul class="select-list-hide" v-show="isMore" @click.stop>
        <li v-if="tempList" v-for="(item,index) in tempList"  @click="selectClick(item)" >
          {{item.name}}
        </li> 
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'

/*const KEY={
  region:"产区",
  subregion:"子产区",
  district:"产地",
}*/
export default {
  name: 'slider',
  props:{
    tagData:{  // 标签数据
      type:Object,
      default:null,
    },
  },
  data () {
    return {
      selected:[], // 选中的数据列表
      tempTitle:'', // 树状列表中 当前层级的 title
      tempList:[], // 树状列表中，当前层级 的 数据
      isMore:false // 更多选项框的 开启
    }
  },
  computed:{
    //-------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
      searchHistory:'searchHistory'
    })*/
  },
  created(){  // 组件生成后 自动 将总标签数据 生成第一层的 选项列表
    this.generateData(this.tagData)
    this.$watch('selected',(newSelected)=>{
      this.$emit('selectChange',newSelected);
    })
  },
  methods:{
    showMore(){
      this.isMore = true
    },
    hideMore(){
      if(this.isMore){
        this.isMore = false
      }
    },
    generateData(obj){  // 通过传入 树状 数据对象 转化为当前层级的 列表和标题
      if(!Object.keys(obj)[0]) return
      this.tempTitle = Object.keys(obj)[0]; // key 作为 title
      this.tempList =  Object.values(obj)[0].item // value中的 item项(数组)作为数据展示数组
    },

    selectClick(item){ // 选项 标签的点击 事件函数
      if(this.selected.length){  // 判断 selected 数组长度，如果有长度
        let length = this.selected.length 
        if(this.selected[length-1].field === item.field){ // 根据点击的标签与数组最后一项进行判断，是否为 同类标签
          this.selected.splice(length-1,1,item)  // 是同类标签，进行替换
        }else{
          this.selected.push(item)  // 不是同类标签，添加在后面
        } 
      }else{
        this.selected.push(item)  // 如果selected 数组为空，直接 插入
      }
      
      this.generateData(item.subitem)  // 每次选中一项，用此项中的 subitem 数据生成 子级的 选项列表
      this.hideMore()  // 隐藏 更多选择框（如果在更多选择框中进行选择，更多框会自动关闭）
    },
    removeClick(item,index){  // 选中 标签的点击 事件函数 （点击删除）
      if(index){ 
        this.generateData(this.selected[index-1].subitem)
        this.selected.splice(index)
      }else{
        this.selected=[];
        this.generateData(this.tagData)
      }
      
    }
    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
  },
  mounted(){
    //console.log(this.tempListObj)
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
.tree-select
  font-size 0.28rem
  .group-title
    font-weight 600
    color #cccccc
  .select-items
    padding 0.1rem 0
    //border-bottom 2px solid black
    a
      display inline-block
      line-height 0.6rem
      padding 0 0.15rem
      margin-right 0.1rem
      margin-bottom 0.1rem
      border-radius 0.2rem 
      color white
      em
        font-size 0.3rem
        font-style normal
        margin-left:0.05rem
        color white
      &:nth-child(1)
        background green
      &:nth-child(2)
        background blue
      &:nth-child(3)
        background deeppink
      &:nth-child(4)
        background orange
  .list-wrap
    padding 0.1rem 0
    .list-title
      font-weight 600
      font-size 0.28rem
    .select-list
      position relative
      padding 0.08rem 0 0.38rem
      border-top 1px solid black 
      .more
        display inline-block
        position absolute
        right 0.2rem
        bottom 0 
      li
        display inline-block
        line-height 0.6rem
        padding 0 0.15rem
        margin-right 0.1rem
        margin-bottom 0.1rem
        border-radius 0.2rem
        background red
        color white
    .select-list-hide
      position fixed;
      width:80%
      height:70%;
      left 10%
      top 15%
      padding 0.1rem
      border 1px solid red;
      overflow auto
      background white
      -webkit-overflow-scrolling: touch;
      li
        display inline-block
        line-height 0.6rem
        padding 0 0.15rem
        margin-right 0.1rem
        margin-bottom 0.1rem
        border-radius 0.2rem
        background red
        color white


</style>






