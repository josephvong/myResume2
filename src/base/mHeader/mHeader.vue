<template>
  <div class="mheader">
    <div class="wrap">
      <div class="back" v-show="isBack" @click="routerBack">
        <i class="icon icon-back"></i>
      </div>
      {{text}}
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'mHdeader',
  props:{
    isBack:{
      type:Boolean,
      default:false
    },
    text:{
      type:String,
      default:''
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

  },
  methods:{
    routerBack(){
      this.$router.go(-1)
    },
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/stylus/variable"
@import "~style/mixin"
.mheader
  position: fixed
  top 0
  left 0
  width:100%
  display flex
  align-items center
  height 0.8rem
  color white
  background #07203D
  z-index 200
  .wrap
    position relative
    width 100%
    height 100% 
    text-align center
    font-size 0.38rem
    font-weight bold
    line-height 0.8rem
    no-wrap()
    .back
      position absolute
      left 0
      top 0
      height 0.8rem
      width 0.6rem
      line-height 0.8rem
      text-align center
      font-size 0.28rem
      color white
      background #07203D
      z-index 2 

</style>





