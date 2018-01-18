<template>
  <div class="page">  
    <h1 class="page-title">整体布局案例</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">圣杯布局</h3>
        <div class="sample-wrap">
          <div class="saint-cup sampel-container">
            <div class="header">header</div>
            <div class="wrapper clearfix">
              <div class="main col"> main 排1 </div>
              <div class="left col"> left 排2 100px</div>
              <div class="right col"> right 排3 100px</div>
            </div>
            <div class="footer">footer</div>
          </div>
        </div>

        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
               {{codeObj.saintCup.html}}
              </code>
            </pre>
          </div>
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
                {{codeObj.saintCup.css}} 
              </code>
            </pre>
          </div> 
        </div>
      </div>
      
      <div class="case">
        <h3 class="case-name">双飞翼布局</h3>
        <div class="sample-wrap">
          <div class="dbl-wing sampel-container">
            <div class="header">header</div>
            <div class="wrapper clearfix">
              <div class="main col">
                <div class="main-wrap">main-wrap main下面的子元素 </div>
              </div>
              <div class="left col"> left 100px</div>
              <div class="right col"> right 100px</div>
            </div>
            <div class="footer">footer</div>
          </div>
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
                {{codeObj.dblWing.html}}
              </code>
            </pre>
          </div>
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
                 {{codeObj.dblWing.css}}
              </code>
            </pre>
          </div> 
        </div>
      </div>
      
      <div class="case">
        <h3 class="case-name">绝对定位布局</h3>
        <div class="sample-wrap">
          <div class="abs-layout sampel-container">
            <div class="header">header</div>
            <div class="wrapper clearfix">
              <div class="main"> main  </div>
              <div class="left"> left 100px</div>
              <div class="right"> right 100px</div>
            </div>
            <div class="footer">footer</div>
          </div>
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>
            <p>html: </p> 
            <pre>
              <code class="html">
               {{codeObj.absLayout.html}}
              </code>
            </pre>
          </div>
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
                {{codeObj.absLayout.css}}
              </code>
            </pre>
          </div> 
        </div>
      </div> 
    </div>

  </div>
</template>

<script> 
import codeObj from './caseCode'
export default {
  name: 'layoutCase',
  props:{

  },
  data () {
    return {
      codeObj:codeObj 
    }
  },
  computed:{

  },
  created(){

  },
  methods:{
    testHTML(){
      let HTML = `${this.$refs.test.innerHTML}`
      return HTML  
    } 
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
      flex 0 0 46%
      background #333
      p
        font-weight 700
        color white

.saint-cup.sampel-container
  width 500px
  margin 0 auto
  .header, .footer
    height 30px
    background gray
  .wrapper
    padding 0 100px 0 100px // 给左右区域留空间
    .col  // wrapper 中 左中右 三列 公共样式（float left）
      position relative
      float left
    .main
      width 100%
      min-height 200px
      background red
    .left
      width 100px // 对应 wrapper 的左右 padding
      min-height 200px
      left -100px  // 向左拉100px ,让其不换行  
      margin-left -100%  // 拉至最左边
      background yellow
    .right
      width 100px // 对应 wrapper 的左右 padding
      min-height 200px
      margin-left -100px  // 向左拉100px,让其来到原来 .left 的位置
      right -100px // 再向左 拉 100px
      background blue  

.dbl-wing.sampel-container
  width 500px
  margin 0 auto
  .header, .footer
    height 30px
    background gray
  .col
    float left
  .main
    width 100%
    .main-wrap
      margin 0 100px 0 100px // 中间内容区域 左右 预留 各100px
      min-height 200px
      background red
  .left
    width 100px
    min-height 200px
    margin-left -100% // 将其拉至 最左边
    background yellow
  .right
    width 100px
    min-height 200px
    margin-left -100px // 向左 拉 100px
    background blue    

.abs-layout.sampel-container
  width 500px
  margin 0 auto
  .header, .footer
    height 30px
    background gray
  .wrapper
    position relative  // 相对定位
    .main
      margin 0 100px // 两边预留100px
      min-height 200px
      background red
    .left             // 两边绝对定位
      position absolute
      left 0
      top 0
      bottom 0
      width 100px
      background yellow
    .right
      position absolute  // top/bottom 为0
      right 0
      top 0
      bottom 0
      width 100px
      background blue 
</style>

