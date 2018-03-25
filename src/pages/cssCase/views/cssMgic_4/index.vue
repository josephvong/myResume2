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
    
    <div class="page-body">
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
    filter drop-shadow(10px,10px,5px ,blue)
    &:hover
      background red
      filter drop-shadow(40px,40px,5px ,blue)
       
</style> 