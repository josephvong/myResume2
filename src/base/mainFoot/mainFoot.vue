<template>
  <ul class="main-foot">
  	<router-link tag="li"  to="/front">
  		<i class="icon icon-favorite"></i>
  		<p>首页</p>
  	</router-link>
  	<router-link tag="li"  to="/styleview">
  		<i class="icon icon-sequence"></i>
  		<p>样式</p>
  	</router-link>
  	<router-link tag="li"  to="/toolview">
  		<i class="icon icon-random"></i>
  		<p>组件</p>
  	</router-link>
  	<router-link tag="li"  to="/front">
  		<i class="icon icon-music"></i>
  		<p>Webpack</p>
  	</router-link>
  	<router-link tag="li"  to="/front">
  		<i class="icon icon-favorite"></i>
  		<p>首页</p>
  	</router-link>
  </ul>
</template>

<script>

export default {
  name: 'mainFoot',
  components:{

  },
  mounted(){

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.main-foot
	position fixed
	display flex
	align-items center
	justify-content space-around
	flex-flow:row nowrap
	bottom 0
	left 0
	height 0.98rem
	width 100%
	border-top 1px solid #cccccc
	background white
	z-index 200
	li
		flex 1 1 19%
		width 19%
		text-align center
		i.icon
			display block
			font-size 0.33rem
			margin-bottom 0.12rem
		p
			font-size 0.24rem
</style>
