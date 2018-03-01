<template>
  <div id="app">
    <div class="header">
      <div class="wrapper">
        <div class="current" @click="navToggle">{{currentTitile}}</div>
        <div class="nav-wrap">
          <div v-show="hNavShow" @click="hNavShow=false" id="navH" class="cus-nav cus-h-nav" slot="pagination"></div>
        </div>
      </div> 
    </div>
    
    <div class="cus-nav cus-v-nav" slot="pagination" > 
    </div>

    <!--   -->
    <swiper v-if="swiperOption" ref="pageSwiper" :options="swiperOption" class="swiper-box" @slideChangeTransitionEnd='slideEndHandle'>
      <swiper-slide class="swiper-item">
        <viewa></viewa>
      </swiper-slide>
      <swiper-slide class="swiper-item">2</swiper-slide>
      <swiper-slide class="swiper-item">3</swiper-slide>
      <swiper-slide class="swiper-item">4</swiper-slide>  
    </swiper>
      
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import viewa from './pageview/view_a'
const pageTitle = ['首页','技术','经历','作品']
const pageIcon = ['&#xe60e;','&#xe60e;','&#xe60e;','&#xe60e;']
const swiperOpt = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 1,
  mousewheel: true,
  pagination: {
    el: '.cus-nav',//'.cus-h-nav',
    clickable: true, 
    bulletClass:'cus-bullet',
    bulletActiveClass: 'cus-bullet-active',
    renderBullet(index, className) {
      return `<span class="${className} iconfont" data-title="${pageTitle[index]}" data-icon="${pageIcon[index]}"></span>`
    }
  } 
} 

export default {
  name: 'app',
  props:{

  },
  data () {
    return {
      pageIndex:0,
      pageTitle:pageTitle,
      swiperOption: swiperOpt,

      hNavShow:false,
      screenWidth: document.body.clientWidth,
    }
  },
  computed:{
    swiper() {
      return this.$refs.pageSwiper.swiper
    },
    currentTitile(){
      return this.pageTitle[this.pageIndex]
    }

  },
  created(){

  },
  methods:{
    navToggle(){
      this.hNavShow = !this.hNavShow
    }, 
    slideEndHandle(){
      this.pageIndex = this.swiper.activeIndex 
    }
  },
  watch:{ 
  },
  components:{
    swiper,
    swiperSlide,
    //------page--------
    viewa
  },
  mounted(){ 
    console.log(this.swiper.previousIndex)
    //this.swiperOption = Object.assign(swiperOpt,navHOpt)
    //swiper 
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
html,body
  checker-bg(#ccc,rgba(0,0,0,0.1),10px)
  
#app
  position fixed
  width 100%
  height 100% 
  font-size 1.2rem
  .header
    position fixed
    right 0px
    top 0% 
    width 100%  
    z-index 1000
    .wrapper
      position relative
      text-align center
      font-size 1.6rem//0.32rem 
      .current
        display inline-block
        line-height 2
      .nav-wrap
        position absolute
        right 0px
        top 100% 
        width 100% 
        .cus-h-nav 
          display flex
          justify-content space-between
          align-items center
          transition all 0.2s
          background rgba(255,255,255,0.6) 
          .cus-bullet
            flex 1
            display inline-block
            line-height 1.6
            transition all 0.2s
            &:after
              content attr(data-title) 
            &.cus-bullet-active
              color skyblue 
              //background yellow
  
  .cus-v-nav 
    position fixed
    right 20px
    top 50%
    transform translate3d(0,-50%,0) 
    font-size 1.2rem 
    z-index 1000
    background blue 
    .cus-bullet
      display block
      width 2rem 
      height 2rem  
      line-height 2rem  
      margin 3rem 0 
      text-align center
      border-radius 50% 
      background red
      transition all 0.2s
      &:before
        opacity 0
        content attr(data-icon) 
      &.cus-bullet-active
        transform scale(2)
        background yellow
        &:before 
          opacity 1          
  
  .swiper-box
    width 100%
    height 100%
    margin 0 auto 
    .swiper-item
      height 100%
      padding-top  
      font-size 1.6rem //0.32rem
      background rgba(0,0,0,0)
      display flex
      justify-content center
      align-items center 
      &:nth-of-type(2) 
        checker-bg(white,rgba(0,255,0,0.1),10px)
      &:nth-of-type(3) 
        checker-bg(white,rgba(255,0,0,0.1),10px)
      /*&:nth-of-type(4) 
        checker-bg(white,rgba(0,0,0,0.1),10px)*/
      
@media screen and (max-width:640px)
  .header .nav-wrap
    display block
  .cus-v-nav
    display none
@media screen and (min-width:641px)
  .header .nav-wrap
    display none




 
</style>

