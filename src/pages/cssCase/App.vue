<template>
  <div id="app">  
    <div class="side-bar">first</div>
    <div class="main-wrap">second</div>
      
  </div>
</template>

<script> 
export default {
  name: 'app',
  props:{

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
     
  },
  watch:{ 
  },
  components:{
     
  },
  mounted(){ 
     
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
body,html
  background-image linear-gradient(90deg,#EDF0FC 250px,#ffffff 280px)
#app
  display flex 
  font-size 28px
  .side-bar
    flex 0 0 250px
  .main-wrap
    flex auto
</style>

