<template>
  <div class="page">  
    <h1 class="page-title">视觉效果</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name"> 单侧投影 </h3> 
        <div class="sample-wrap case_a clearfix">
          <div class="sample sample_1"></div>
          <div class="sample sample_2"></div>
          <div class="sample sample_3"></div>
          <div class="sample sample_4"></div>
          <div class="sample sample_5"></div>    
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
    <div class="case">
      <h3 class="case-name"> filter函数 </h3> 
      <div class="sample-wrap case_b clearfix">
        <div class="sample sample_1">blur</div>
        <div class="sample sample_2">brightness</div>
        <div class="sample sample_3">contrast</div>
        <div class="sample sample_4">drop shadow</div>   
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
      <h3 class="case-name"> 毛玻璃 </h3> 
      <div class="sample-wrap case_c clearfix">
        <div class="main">
          <div class="content">
            “The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
            — Oscar Wilde, The Picture of Dorian Gray
          </div>
        </div>
      </div> 
      <div class="code-wrap">  
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
      <h3 class="case-name"> 图片变色 </h3> 
      <div class="sample-wrap case_d clearfix">
         <div class="sample sample_1" style="background-blend-mode:normal">normal</div>
         <div class="sample sample_2" style="background-blend-mode:multiply">multiply</div>
         <div class="sample sample_3" style="background-blend-mode:screen">screen</div>
         <div class="sample sample_4" style="background-blend-mode:overlay">overlay</div>
         <div class="sample sample_5" style="background-blend-mode:darken">darken</div>
         <div class="sample sample_6" style="background-blend-mode:lighten">lighten</div>
         <div class="sample sample_7" style="background-blend-mode:color-dodge">color-dodge</div>
         <div class="sample sample_8" style="background-blend-mode:saturation">saturation</div>
         <div class="sample sample_9" style="background-blend-mode:color">color</div>
         <div class="sample sample_9" style="background-blend-mode:luminosity">luminosity</div> 
      </div> 
      <div class="code-wrap">  
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
      <h3 class="case-name">  折角 </h3> 
      <div class="sample-wrap case_e clearfix">
        <div class="sample_1">
          “The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray
        </div>
        <div class="sample_2">
          “The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray
        </div>
        <div class="sample_3">
          “The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray
        </div>
        <div class="sample_4">
          “The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray
        </div>
        <div class="sample_5">
          “The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray
        </div>
        <div class="sample_6">
          “The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray
        </div>   
      </div> 
      <div class="code-wrap">  
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
</template>

<script>  
export default {
  name: 'cssMgic4',
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
@import '~style/mixin.styl' 

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
  padding 10px
  border 1px solid red
  .sample
    float left
    width 100px
    height 100px
    margin 10px
    background  yellow
    &.sample_1
      box-shadow: 2px 3px 4px rgba(0,0,0,.5);
    &.sample_2
      box-shadow: 0px 5px 5px rgba(0,0,0,.5);
    &.sample_3
      box-shadow: 0px 5px 5px -5px rgba(0,0,0,.5);
    &.sample_4
      box-shadow: 3px 3px 6px -3px black;
    &.sample_5
      box-shadow: 5px 0 5px -5px black,
                  -5px 0 5px -5px black;      
.case_b
  padding 10px
  border 1px solid red
  .sample
    float left 
    width 100px
    height 100px
    display flex
    justify-content center
    align-items center
    margin 10px
    line-height 22px
    color white
    font-size 18px
    font-weight 700
    text-align center
    transition all 0.5s
    background red
  .sample_1
    filter blur(0px) 
    &:hover 
      filter blur(10px)
  .sample_2
    filter brightness(10%) 
    &:hover 
      filter brightness(100%)
  .sample_3
    filter contrast(0%)
    &:hover
      filter contrast(90%)
  .sample_4
    border 1px solid black
    background transparent
    color black
    filter drop-shadow(2px 2px 10px rgba(0,0,0,.8)); //drop-shadow(10px,10px,5px ,blue)
    &:hover
      background white
      filter drop-shadow(2px 2px 10px rgba(0,0,0,1));
.case_c
  width 100%
  .main
    position relative
    width: 50%;
    min-width 600px
    height: 0
    min-height 500px
    padding-top: 50%
    margin: 0 auto
    border 1px solid red
    background-image: url("http://csssecrets.io/images/tiger.jpg")
    background-position: 0 0
    background-size: cover 
    background-attachment: local;
    &:before
      content ''
      display block
      position absolute
      width: 80%
      height:70%
      left 10%
      top: 15%
      -webkit-filter: blur(20px);
      filter: blur(20px);
      background rgba(225,225,225,0.8)
    .content
      position absolute
      width: 80%
      height:70%
      left 10%
      top: 15%
      text-align center
      padding 20px
      line-height 1.8
      font-size: 16px;
.case_d
  .sample
    float left
    position relative
    width 200px
    padding-top 150px
    height: 0px
    margin-bottom 30px
    background-size cover
    background-color: hsl(335, 100%, 50%)
    background-image url('http://csssecrets.io/images/tiger.jpg')
.case_e
  .sample_1
    width 300px
    padding 20px
    color white 
    background linear-gradient(-135deg, transparent 50%, rgba(0,0,0,0.4) 0) right top no-repeat,
               linear-gradient(-135deg, transparent 20px, #58a 0);
    background-size 28px 28px, auto;
    margin-bottom 20px
  .sample_2
    position relative
    width 300px
    padding 20px
    color white
    background linear-gradient(-150deg, transparent 20px, #58a 0);
    border-radius: .5em;
    margin-bottom 20px
    &::before
      content ''
      position absolute
      top 0
      right 0px
      background linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0, rgba(0,0,0,.4)) 100% 0 no-repeat
      height 40px
      width 23px
      transform translateY(-18px) rotate(-30deg)
      transform-origin bottom right
      border-bottom-left-radius: inherit;
      box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);  
  .sample_3
    width: 300px
    padding 20px
    border-radius 10px
    margin-bottom 10px
    foled-tr-corner(red, 20px, 30deg)
  .sample_4
    width: 300px
    padding 20px
    border-radius 10px
    margin-bottom 10px
    foled-tl-corner(red, 20px, 30deg)
  .sample_5
    width: 300px
    padding 20px
    border-radius 10px
    margin-bottom 10px
    foled-bl-corner(red, 20px, 20deg)
  .sample_6
    width: 300px
    padding 20px
    border-radius 10px
    margin-bottom 10px
    foled-br-corner(red, 15px, 20deg)
</style> 