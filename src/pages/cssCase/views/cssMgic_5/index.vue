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
</style> 