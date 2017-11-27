<template> 
  <div class="loading"> 
    <img src="./loading.gif" alt="">
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex' 
export default {
  name: 'loading',
  props:{

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
//@import "~common/style/variable"
//@import "~common/style/mixin"
 
.loading
  width 0.8rem
  height 0.8rem
  margin 0 auto 
  img
    display block
    width 100%
    height 100%
 

 
</style>



