<template>
  <div id="app">
    <myDatePicker class="date-picker"></myDatePicker>
  </div>
</template>

<script>
import myDatePicker from 'base/myDatePicker'
export default {
  name: 'app',
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
    myDatePicker 
  },
  mounted(){

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
#app
  width 100%
  .date-picker
    width 300px
    height 28px
</style>
