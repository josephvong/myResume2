<template>
  <div class="page">  
    <h1 class="page-title">动画与过度</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">animate 基本用法</h3>
        <p class="desc"> 
        </p>
        <div class="sample-wrap case_a clearfix">
          <div class="sample sample1"></div>
          <div class="sample sample2"></div>
          <div class="sample sample3"></div>
          <div class="sample sample4"></div>
        </div> 
      </div> 
      <div class="case">
        <h3 class="case-name">缓动效果： 弹性小球</h3>
        <p class="desc"> 
        </p>
        <div class="sample-wrap case_b clearfix">
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
      <div class="case">
        <h3 class="case-name">弹性提示框</h3>
        <p class="desc"> 
        </p>
        <div class="sample-wrap case_c clearfix">
          <label>
            Your username:
            <input value="leaverou"></input>
            <span class="callout">
            Only letters, numbers, underscores (_) and hyphens (-) allowed!
            </span>
          </label>
        </div> 
      </div>
      <div class="case">
        <h3 class="case-name">帧动画loading图</h3>
        <p class="desc"> 
        </p>
        <div class="sample-wrap case_d clearfix">
          <div class="sample-load"></div>
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
  border 1px solid red
  padding 10px
  .sample
    float left
    width 100px
    height 100px
    margin 5px
    border 1px solid green
    &.sample1
      &:hover  /*在hover时 执行（插入）以下的动画*/
        animation: test 3s ease 500ms 3 /*keyframes名 动画时长(3s) 速度函数 延时时间(500ms) 播放次数*/
    &.sample2
      animation: test 1s ease infinite// alternate
    &.sample3
      animation: test 1s ease infinite alternate
    &.sample4
      // background green
      // &:hover
      animation: test 1s ease 5s 3 both //backwards //forwards
        
@keyframes test
  from
    background red
  to
    background yellow
.case_b
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
.case_c
  min-height 250px
  font: 200%/1.6 Baskerville;
  input
    border 1px solid skyblue
    display: block;
    padding: 0 .4em;
    font: inherit;
  .callout
    position: absolute;
    max-width: 14em;
    padding: .6em .8em;
    border-radius: .3em;
    margin: .3em 0 0 -.2em;
    background: #fed;
    border: 1px solid rgba(0,0,0,.3);
    box-shadow: .05em .2em .6em rgba(0,0,0,.2);
    font-size: 75%;
    transition all 0.5s cubic-bezier(.01,.76,.59,1.53)
    transform-origin 1.5em -.5em
  input:not(:focus) + .callout
    transform scale(0)
    transition: .25s;
    // transition-timing-function: ease;
.case_d
  .sample-load
    width 100px
    height 100px
    text-indent 999px; overflow: hidden; /* Hide text */
    background url(http://dabblet.com/img/loader.png) 0 0;
    animation loader 1s infinite steps(8)
@keyframes loader
  to
    background-position -800px 0;
</style>

