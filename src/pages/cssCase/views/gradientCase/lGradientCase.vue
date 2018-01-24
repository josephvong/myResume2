<template>
  <div class="page">  
    <h1 class="page-title">径向渐变案例</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">基础使用</h3>
        <div class="sample-wrap case_a clearfix">
          <div class="linear-gradient" style="background:linear-gradient(yellow,red)" > </div>
         <!--  <div class="linear-gradient" style="background:linear-gradient(to left,yellow,red)" > </div>
          <div class="linear-gradient" style="background:linear-gradient(to top right,yellow,red)" > </div>  -->
          <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(to right,yellow 70px,red 71px)" > </div>
          <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(0deg,yellow 70px,red 71px)" > </div>
          <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(-1deg,yellow 70px,red 71px)" > </div>
          <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(1deg,yellow 70px,red 71px)" > </div>
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                
              </code>
            </pre>
          </div>
          <!-- <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
                 
              </code>
            </pre>
          </div>  -->
        </div>
      </div>

      <div class="case">
        <h3 class="case-name">偏转角度</h3>
        <div class="sample-wrap case_b clearfix">
        <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(yellow 70px,red 71px)" > </div>
        <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(180deg, yellow 70px,red 71px)" > </div>
         <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(0deg, yellow 70px,red 71px)" > </div>
        <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(45deg,yellow 70px,red 71px)" > </div>
        <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(90deg,yellow 70px,red 71px)" > </div>
         <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(-45deg,yellow 70px,red 71px)" > </div>
       
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                
              </code>
            </pre>
          </div> 
        </div>
      </div>
      
      <div class="case">
        <h3 class="case-name">repeating-linear-gradient</h3>
        <div class="sample-wrap case_c clearfix">
        <div class="linear-gradient" style="background:repeating-linear-gradient(to right,yellow 0, yellow 10px)" > </div>
        <div class="linear-gradient" style="background:repeating-linear-gradient(to right,yellow 0, red 10px)" > </div>
        <div class="linear-gradient" style="background:repeating-linear-gradient(to right,yellow 0, yellow 10px,red 11px, red 20px)" > </div>
        <!-- <div class="linear-gradient" style="width:100px;height:100px;background:linear-gradient(180deg, yellow 70px,red 71px)" > </div>
         --> 
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                
              </code>
            </pre>
          </div> 
        </div>
      </div>
      
      <div class="case">
        <h3 class="case-name">滚动间隔条</h3>
        <div class="sample-wrap case_d clearfix">
        <div class="linear-gradient" > </div>
         
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                
              </code>
            </pre>
          </div> 
        </div>
      </div>
      
      <div class="case">
        <h3 class="case-name">光斑 + 文字</h3>
        <div class="sample-wrap case_e clearfix">
        <div class="linear-gradient" >文字会有白色光斑划过</div>
         
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                
              </code>
            </pre>
          </div> 
        </div>
      </div> 
    </div>

  </div>
</template>

<script> 
//import codeObj from './caseCode'
export default {
  name: 'lGradientCase',
  props:{

  },
  data () {
    return {
      //codeObj:codeObj
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

.linear-gradient
  width 200px
  height 100px
  float left
  margin-right 10px
 
.case_d .linear-gradient
  width 300px
  height 30px
  background:repeating-linear-gradient(90deg, yellow 0px, yellow 5%, red 5.1%, red 10%) repeat;
  animation-name: case_d_bg ;/*动画属性名，也就是我们前面keyframes定义的动画名*/
  animation-duration: 3s;/*动画持续时间*/
  animation-timing-function: linear; /*动画频率，和transition-timing-function是一样的*/ 
  animation-iteration-count: infinite;/*定义循环资料，infinite为无限次*/ 
  background-position: 0px 0 
@keyframes case_d_bg
  0%
    background-position: 0px 0
  //50%
     
  100%
    background-position: 300px 0 

.case_e .linear-gradient
  width: 400px
  height 50px
  line-height 50px
  text-align center
  font-size 28px 
  background linear-gradient(125deg, black 0, black 5%, white 10%, black 15%)
  //background linear-gradient(red,yellow) 
  color transparent 
  -webkit-background-clip: text;
  animation-name: case_e_bg ; 
  animation-duration: 3s; 
  animation-timing-function: linear;  
  animation-iteration-count: infinite; 
@keyframes case_e_bg
  0%
    background-position: 0px 0  
  100%
    background-position: 400px 0
</style>

