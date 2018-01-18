<template>
  <div class="m-side-bar">
    <details v-for="(value,key) in treeData" open  >
      <summary><dt>{{key}}</dt></summary> 
      <dd v-if="value.length" v-for="(page,index) in value">
        <a @click="sideItemClick(page.path)" :class="{active:nowRoute==page.name}">
          {{page.name}}
        </a>
      </dd> 
    </details>
    <!-- <details open>
      <summary><dt>布局结构</dt></summary> 
      <dd><a>全局布局</a></dd>
      <dd><a>我的活动</a></dd>
      <dd><a>评价晒单</a></dd>
      <dd><a>购物助手</a></dd>
    </details> --> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'mSideBar',
  props:{
    treeData:{
      type:Object,
      default:{}
    }
  },
  data () {
    return {
      //nowRoute:this.$route.name
    }
  },
  computed:{
    nowRoute(){
      return this.$route.name
    }
  },
  created(){
    
  },
  methods:{
    sideItemClick(path){
      this.$emit('listClick',path)
    } 
  }, 
   
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
 
//@import "./rowCtrl"
@import "./sidebar"

</style>





