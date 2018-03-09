<template>
  <div id="app">  
    <div class="side-bar-wrap">
      <mSideBar :treeData="treeData" @listClick="routerGo"></mSideBar>
    </div>


    <div class="main-wrap">
      <router-view></router-view> 
    </div>
      
  </div>
</template>

<script>
import mSideBar from 'base/mSideBar' 
export default {
  name: 'app',
  props:{

  },
  data () {
    return {   
    }
  },
  computed:{
    treeData(){
      let rList = this.$router.options.routes.splice(1,this.$router.options.routes.length);

      let obj = {}
      for (var i = 0; i < rList.length; i++) {
        let gName = rList[i].meta.gName;
        if(!obj[gName]){
          obj[gName]= [rList[i]]
        }else{
          obj[gName].push(rList[i])
        } 
      }
      return obj
    }
  },
  created(){  

  },
  methods:{ 
    routerGo(path){
      this.$router.push({
        path:path
      })
      console.log(path)
    }
  },
  watch:{ 
  },
  components:{
    mSideBar
  },
  mounted(){ 
     console.log(this.$router.options.routes.splice(1,this.$router.options.routes.length))
  }
}
</script>
 
<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~style/mixin.styl'
#app
  display flex  
  .side-bar-wrap
    flex 0 0 250px
    padding 10px 
  .main-wrap
    flex auto
    padding 10px
 
</style>

