<template>
  <div class="page">  
    <h1 class="page-title">背景与边框</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">半透明边框</h3>
        <div class="sample-wrap case_a clearfix">
          <div class="sample_1"></div>
          <div class="sample_2"></div>
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
              .case_a
                background gray
                padding 20px
                .sample_1
                  display inline-block
                  width 50px
                  height 50px
                  border 10px solid hsla(0,0,0%,0.5) 
                  background green  
                .sample_2
                  display inline-block
                  width 50px
                  height 50px
                  border 10px solid hsla(0,0,0%,0.5) 
                  background red
                  background-clip padding-box 
              </code>
            </pre>
          </div> 
        </div>
      </div>

      <div class="case">
        <h3 class="case-name">多重边框</h3>
        <div class="sample-wrap case_b clearfix">
          <div class="sample sample_1">box-shadow 方案</div>
          <div class="sample sample_2">outline 方案</div>  
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
        <h3 class="case-name">灵活的背景定位</h3>
        <div class="sample-wrap case_c clearfix">
          <div class="sample sample_1"> bg-position </div>
          <div class="sample sample_2"> bg-position calc </div>
          <div class="sample sample_3"> bg-origin </div>  
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
  name: 'cssMgic2',
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
  background gray
  padding 20px
  .sample_1
    display inline-block
    width 50px
    height 50px
    border 10px solid hsla(0,0,0%,0.5) 
    background green  
  .sample_2
    display inline-block
    width 50px
    height 50px
    border 10px solid hsla(0,0,0%,0.5) 
    background red
    background-clip padding-box

.case_b
  border 1px solid red
  padding 20px
  .sample
    float:left
    //display inline-block
    margin-right 20px
    &.sample_1
      width 100px
      height 100px
      padding 30px
      box-sizing content-box
      background yellowgreen
      box-shadow inset 0 0 0 10px red, inset 0 0 0 20px blue, inset 0 0 0 30px gray
    &.sample_2
      width 100px
      height 100px
      box-sizing content-box
      border 30px solid red
      outline 5px dashed deeppink 
      outline-offset -30px  //虚线outline向内收30px 

.case_c
  border 1px solid red
  padding 20px
  .sample
    float:left 
    margin-right 20px
    &.sample_1
      width 200px
      height 100px
      color white
      padding 10px
      background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat #58a; //bottom right #58a;
      background-position: right 20px bottom 10px; 
    &.sample_2
      width 200px
      height 100px 
      color white
      padding 10px
      background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat bottom right #58a;  
      background-position: calc(100% - 20px) calc(100% - 20px);        
    &.sample_3
      width 200px
      height 100px
      border 5px dashed black
      color white
      padding 10px
      background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat bottom right #58a;  
      background-origin content-box
</style>

