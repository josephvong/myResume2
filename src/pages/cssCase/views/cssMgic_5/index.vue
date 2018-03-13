<template>
  <div class="page">  
    <h1 class="page-title">字体排印</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">连字符断行</h3>
        
        <div class="sample-wrap case_a clearfix">
          <div class="txt-wrap">
            “The only way to get rid of a temptation is to yield to it.”
          </div>
          <div class="txt-wrap" style="hyphens:auto">
            “The only way to get rid of a temptation is to yield to it.”
          </div> 
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
        <h3 class="case-name">插入换行</h3>
        
        <div class="sample-wrap case_b clearfix">
          <dl>
            <dt>Name:</dt>
            <dd>Lea Verou</dd>
            <dt>Email:</dt>
            <dd>lea@verou.me</dd><dd>lea@verou.me</dd><dd>lea@verou.me</dd>
            <dt>Location:</dt>
            <dd>Earth</dd>
          </dl>
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
        <h3 class="case-name">文本斑马间隔的背景</h3>
        
        <div class="sample-wrap case_c clearfix">
          <div class="txt-wrap">
            while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                  alert("TROLOLOL");
                }
              }
              while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                  alert("TROLOLOL");
                }
              }
          </div>
         <!--  <pre class="txt-wrap">
            <code>
              
            </code>
          </pre> -->
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
        <h3 class="case-name">自定义下划线</h3>
        
        <div class="sample-wrap case_d clearfix">
          <p>最原始方法： text-decoration:underline</p>
          <p class="sample_1" style="text-decoration: underline; color:red">
           The only way to get rid of a temp­ta­tion is to yield to it.
          </p>
          <p>最优方案：bg-image + linear-gradient</p>
          <p class="sample_2">
           The only way <a>to get rid of a temp­ta­tion is to yield to it The only way to get</a> rid of a temp­ta­tion is to yield to it..
          </p>
          <p>虚线底线</p>
          <p class="sample_3">
           The only way <a>to get rid of a temp­ta­tion is to yield to it The only way to get</a> rid of a temp­ta­tion is to yield to it..
          </p>
          <p>波浪底线</p>
          <p class="sample_4">
           The only way <a>to get rid of a temp­ta­tion is to yield to it The only way to get</a> rid of a temp­ta­tion is to yield to it..
          </p>
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
        <h3 class="case-name">现实中的文字效果</h3> 
        <div class="sample-wrap case_e clearfix">
          <p>文字凹陷</p>
          <div class="sample_1">
            “The only way to get rid of a temp­ta­tion is to yield to it.”
          </div>
          <p>文字凸起</p>
          <div class="sample_2">
            “The only way to get rid of a temp­ta­tion is to yield to it.”
          </div>
          <p>空心字体</p>
          <div class="sample_3">
            这个是空心字体
          </div>
          <p>空心字体2</p>
          <div class="sample_4">
            <h1>
              <svg overflow="visible" width="2em" height="1em">
                <use xlink:href="#css" /><text id="css" y='1em'>空心字体</text>
              </svg>
            </h1> 
          </div>

          <p>文字发光</p>
          <div class="sample_5">
             <a>发光的文字</a>
          </div>
          <p>文字凸起2</p>
          <div class="sample_6">
            文字凸起2
          </div>
          <p>文字凸起_mixin版</p>
          <div class="sample_7">
            文字凸起——mixin 实现
          </div>
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
        <h3 class="case-name">弧面文字</h3> 
        <div class="sample-wrap case_f clearfix">
           <div class="sample_1">
             <svg width="80%" height="80%" viewBox="0 0 100 100">
               <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" style="fill:none"/>
               <text>
                 <textPath xlink:href="#circle">弧形文字</textPath>
               </text>
             </svg>
           </div>
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
  name: 'cssMgic5',
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
@import './test_mixin.styl'
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
.case_a .txt-wrap
  float left
  margin 10px
  border 1px solid red
  text-align justify
  line-height 30px
  width 100px
.case_b
  padding 10px
  dt,dd
    display inline
    margin 0
  dd
    font-weight 600
  dd + dt::before // 选择 <dd>（尾）标签后面的 所有 <dt>（开头）标签的before伪元素
    content "\A"      // 如果 dd 标签后面跟的是 dt标签，此dt标签属于选中的目标，表示新一行的二开头
    white-space pre   // 允许 识别 空白符
  dd + dd::before
    content ','
    font-weight normal
    margin 0 3px  
.case_c
  font-size 16px 
  .txt-wrap 
    //border 1px solid red
    width 30% 
    line-height 1.5
    padding 0.5em
    background beige 
    background-origin content-box
    background-image linear-gradient(rgba(0,0,0,0.2) 50%, transparent 0);
    background-size auto 3em
.case_d
  font-size 24px
  p
    margin 10px 0
  .sample_2 a
    color black 
    background linear-gradient(gray 0,gray 100%) no-repeat
    background-size 100% 1px
    background-position 0 1.1em
    text-shadow: .05em 0 white, -.05em 0 white;
  .sample_3 a
    color black
    background linear-gradient(90deg, red 40%, transparent 0) repeat-x
    background-size 10px 2px
    background-position 0 1em
  .sample_4 a
    color black
    background linear-gradient(-45deg, transparent 40%, red 0, red 60%, transparent 0) 0 1em,
               linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) 0.18em 1em;
    background-repeat repeat-x
    background-size 0.4em 0.2em
    text-shadow: .05em 0 white, -.05em 0 white;
.case_e
  padding 10px
  .sample_1
    padding 15px
    line-height 1.5
    font-size 28px
    font-weight 700
    color hsl(210,13%,30%)
    background hsl(210, 13%, 60%);
    text-shadow 0px 1px 1px hsla(0,0,100%,0.8)  // 文字凹陷
  .sample_2    // 文字凸起 
    padding 15px
    line-height 1.5
    font-size 28px
    font-weight 700
    color hsl(210, 13%, 60%);
    background hsl(210,13%,30%)
    text-shadow 1px -1px 1px black
  .sample_3
    padding 15px
    line-height 1.5
    font-size 28px
    font-weight 700
    color deeppink//white
    background deeppink
    //text-shadow 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black; 
    text-shadow: 0 0 1px black, 0 0 1px black,
                 0 0 1px black, 0 0 1px black,
                 0 0 1px black, 0 0 1px black; // 文字空心1
  .sample_4
    padding 15px
    font-size 28px
    font-weight 700
    background deeppink 
    h1 use 
      stroke: black; 
      stroke-width: 6;
      stroke-linejoin: round;
    h1 text
      fill: deeppink // 文字空心2
  .sample_5   // 文字发光
    padding 15px 
    background #203;
    a
      font-size 28px 
      color #ffc;
      transition 1s
      &:hover
        //filter: blur(.1em);
        color rgba(255,255,255,0.3) 
        text-shadow 0 0 0.1em white, 0 0 0.3em white    
  .sample_6   // 文字凸起2
    padding 15px
    font-size 28px
    background #58a;
    color white
    text-shadow 0 1px hsl(0,0%,85%), // text-shadow 设置多个
                0 2px hsl(0,0%,80%), // Y轴位置 不断 加大 形成 文字凸起效果
                0 3px hsl(0,0%,75%),
                0 4px hsl(0,0%,70%),
                0 5px hsl(0,0%,65%),
                0 8px 10px black;  
  .sample_7
    padding 15px
    font-size 28px
    background #58a 
    text-3d(red,4)    
.case_f
  padding 10px
  .sample_1
    display flex
    justify-content center
    align-items center
    height 200px
    width 200px
    background red
    svg
      display block
      overflow visible
      transform rotate(50deg)
    path
      fill none
    text
      text-anchor: start;
      fill black
       
</style> 