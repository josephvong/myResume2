<template>
  <div class="radar-chart" >
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1"   width='400'  height="400" >

    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import animations from 'create-keyframe-animation'  // 动画插件
export default {
  name: 'radarChart',
  props:{


  },
  data(){
    return {
    }
  },
  computed:{


  },
  created(){

  },
  methods:{


  },
  watch:{

  },
  components:{
  },
  mounted(){

  },

  //周期钩子，在组件被激活后 开始 轮播（如果路由 是keepalive，组件不会被从新mounted）
  activated(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.radar-chart
  position relative
  .svg
    border 1px solid blue





</style>



