<template> 
  <div class="css-tab-view">
    <mHeader :isBack="true" text="纯css Tab"></mHeader>
    <div class="case-wrap">
      <h4 class="title">1常规(边框实现)</h4>
      <div class="sample">
        <div class="tab">

          <div class="header">
            <a><label for="cssTabNav1"  class="nav1">AAAA</label></a>
            <a ><label for="cssTabNav2" class="nav2">BBBB</label> </a> 

          </div>
          <div class="field">
            <div class="wrap">
              <input class="nav1" type="radio" checked name = "nav" id="cssTabNav1">
              <div class="content">
                AAAAA
              </div>
            </div>
            <div class="wrap">
              <input class="nav1" type="radio"  name = "nav" id="cssTabNav2">
              <div class="content">
                BBBBBB
              </div>
            </div>

          </div>

        </div>
      </div>
      <p class="desc"> </p>
    </div>


   <!--  <p> 参考 ：https://github.com/chokcoco/iCSS/issues/2</p> -->
  </div> 
</template>

<script type="text/ecmascript-6">
//import {mapActions, mapGetters} from 'vuex'
import mHeader from 'base/mHeader/mHeader'
export default {
  name: 'cssTabView',
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
    mHeader
  },
  mounted(){

  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
// .router-fade-enter-active,.router-fade-leave-active
//   transition all 0.5s
// .router-fade-enter,.router-fade-leave-to
//   transform:translate3d(100%,0,0)

.css-tab-view
  padding-top 0.8rem
  font-size 0.28rem
  .case-wrap
    padding 0.2rem
    .title
      font-size 0.36rem
      font-weight bold
    .sample
      padding 0.2rem

    .desc
      font-size 0.28rem
      color blue

.tab
  position relative
  border 1px solid red
  input
    display none
  .header
    font-size 0
    &>a
      display inline-block
      height 0.6rem
      line-height 0.6rem
      width 50%
      text-align center
      font-size 0.3rem
      color red
      background green
      &:focus
        background yellow
      &>label
        display block;
        width:100%;
        height:100%;
  .field
    width:100%;
    .wrap
      color black
      &>input
        display none
      .content
        display none
        height 3rem;
      &>input:checked ~ .content
        display block;




  .body
    display none
    height 2rem
    font-size 0.3rem
    color white
    background green



</style>



