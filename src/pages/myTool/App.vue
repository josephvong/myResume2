<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
#app
  width 100%
  max-width 10rem
  margin 0 auto
</style>
