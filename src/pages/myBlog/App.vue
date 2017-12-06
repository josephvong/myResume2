<template>
  <div style="" id="app">
    <router-view></router-view>
  </div>
</template>

<script> 
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  props:{

  },
  data () {
    return {

    }
  },
  computed:{ 
    //---------------------------------
    ...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      token: 'token'
    })
  },
  created(){

  },
  methods:{
    
  },
  components:{ 
  },
  created(){ 
    if(this.token){
      this.$store.dispatch('getInfoByToken',this.token).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    } 
    
  }, 
  mounted(){  
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
#app
  width 100% 
  margin 0 auto
</style>
