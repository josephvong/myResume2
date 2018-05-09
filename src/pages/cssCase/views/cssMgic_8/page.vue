<template>
  <div class="page">  
    <h1 class="page-title">动画与过度</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">缓动效果： 弹性小球</h3>
        <p class="desc"> 
        </p>
        <div class="sample-wrap case_a clearfix">
          <div class="ball"></div>
        </div> 
        <div class="code-wrap"> 
          <!-- <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                
              </code>
            </pre>
          </div>-->
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
              </code>
            </pre>
          </div> 
        </div>
      </div> 
    </div>  

  </div>
</template>

<script>  
export default {
  name: 'cssMgic8',
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

<style lang="stylus" scoped rel="stylesheet/stylus">
//@import '~style/mixin.styl'
.page-title
  height 60px
  line-height 60px
  font-size 30px
  font-weight 700
  margin-top -10px
  border-bottom 1px solid black
  
.case
  padding 20px
  .case-name
    line-height 30px
    font-size 16px
    font-weight 700
  .desc
    line-height 18px
    font-size 14px
    margin 10px 0
  .sample-wrap
    margin-bottom 20px
  .code-wrap
    display flex
    flex-wrap no-wrap
    flex-direction row
    justify-content space-between
    .code
      flex 1 1 auto
      margin 0 20px
      background #333
      p
        font-weight 700
        color white
.case_a
  position relative
  height 400px;
  border 1px solid red
  .ball
    // position absolute
    width 50px
    height 50px
    margin 0 auto
    border-radius 50%
    background blue
  &:hover
    .ball
      animation bounce 0.9s cubic-bezier(.73,0,.65,.72) forwards
@keyframes bounce
  40%, 60%, 80%, to
    transform translateY(350px)
    animation-timing-function: ease;
  50%
    transform translateY(200px)
  70%
    transform translateY(250px)
  90%
    transform translateY(310px)             
</style>

