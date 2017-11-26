<template>
<div class="grid-wrap"> 
  <div class="m-grids">
    <a href="" class="m-grid" >
      <div class="grid_icon">
        <img src="static/img/jizhi.png" alt="">
      </div>
      <p class="grid_label">AAAAA</p>
    </a>
    <a href="" class="m-grid" >
      <div class="grid_icon">
        <img src="static/img/jizhi.png" alt="">
      </div>
      <p class="grid_label">AAAAA</p>
    </a>
    <a href="" class="m-grid" >
      <div class="grid_icon">
        <img src="static/img/jizhi.png" alt="">
      </div>
      <p class="grid_label">AAAAA</p>
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'mGrid',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
 @import "./grid"
 row-ctrl(num)
  if num <=3
    width 33.333333%
  if num ==4
    width 25%
  if num >=5
    width 20%
.grid-wrap
  width 100%
  .m-grid
    row-ctrl(3) 
</style>





