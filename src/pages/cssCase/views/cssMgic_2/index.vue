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

      <div class="case">
        <h3 class="case-name">圆角内边框</h3>
        <div class="sample-wrap case_d clearfix">
          <div class="sample sample_1"> bg-position </div>
          <div class="sample sample_2"> bg-position </div>   
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
        <h3 class="case-name">条纹背景</h3>
        <div class="sample-wrap case_e clearfix">
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

      <div class="case">
        <h3 class="case-name">网格背景</h3>
        <div class="sample-wrap case_f clearfix">
          <div class="sample sample_1"></div> 
          <div class="sample sample_2"></div> 
          <div class="sample sample_3"></div>      
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
        <h3 class="case-name">波点背景</h3>
        <div class="sample-wrap case_g clearfix">
          <div class="sample sample_1"></div>
          <div class="sample sample_2"></div>
          <div class="sample sample_3"></div>    
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
        <h3 class="case-name">波点背景</h3>
        <div class="sample-wrap case_h clearfix">
          <div class="sample sample_1"></div>
          <div class="sample sample_2"></div>
          <div class="sample sample_3"></div>
          <div class="sample sample_4"></div>
          <div class="sample sample_5">
           
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
        <h3 class="case-name">波点背景</h3>
        <div class="sample-wrap case_i clearfix">
          <div class="sample sample_1"></div>
          <div class="sample sample_2"></div>    
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
        <h3 class="case-name">图片边框</h3>
        <div class="sample-wrap case_j clearfix">
          <div class="sample sample_1"> CCC </div> 
          <div class="sample sample_2"> CCC </div> 
          <div class="sample sample_3"> 使用border-image 实现 </div>
          <div class="sample sample_4"> </div> 
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
      
.case_d
  border 1px solid red
  padding 20px
  font-size 16px
  .sample
    float:left 
    margin-right 20px
    &.sample_1
      outline 0.6em solid #655
      box-shadow 0 0 0 0.4em #655
      border-radius 0.8em
      padding 0.4em
      width 200px
      height 100px
      padding 1em 
      background pink 
    &.sample_2
      width 200px
      height 100px
      border 1px solid red

.case_e
  border 1px solid red
  padding 20px
  font-size 16px
  .sample
    float:left 
    margin-right 20px
    &.sample_1
      width 200px
      height 200px
      background: linear-gradient(#fb3 50%, #58a 50%);
      background-size:100% 5% ;
    &.sample_2
      width 200px
      height 200px
      background: linear-gradient(to left, #fb3 50%, #58a 50%);
      background-size: 5% 100%;
    &.sample_3 
      width 200px
      height 200px
      background: linear-gradient(45deg,#fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0)
      background-size: 30% 30%;
    &.sample_4 
      width 200px
      height 200px
      background: repeating-linear-gradient(30deg,#fb3, #fb3 10px, #58a 0, #58a 20px) 
    &.sample_5 
      width 200px
      height 200px
      background: #58a;
      background-image: repeating-linear-gradient(60deg,hsla(0,0,100%,0.1) 0,hsla(0,0,100%,0.1) 15px, transparent 0,transparent 30px) 

.case_f
  border 1px solid red
  padding 20px
  font-size 16px
  background #cccccc
  .sample
    float:left 
    margin-right 20px
    &.sample_1
      width 200px
      height 200px
      background white
      background-image linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 0),
                       linear-gradient(rgba(200,0,0,.5) 50%, transparent 0);
      background-size 20px 20px  
    &.sample_2
      width 200px
      height 200px
      background white
      background-image linear-gradient(90deg, rgba(200,0,0,.5) 2px, transparent 0),
                       linear-gradient(rgba(200,0,0,.5) 2px, transparent 0);
      background-size 30px 30px
    &.sample_3
      width 200px
      height 200px
      background #58a
      background-image linear-gradient(white 3px,transparent 0),linear-gradient(90deg, white 3px,transparent 0),
                       linear-gradient(hsla(0,0,100%,0.9) 1px, transparent 0), linear-gradient(90deg, hsla(0,0,100%,0.9) 1px, transparent 0)
      background-size 50px 50px, 50px 50px, 10px 10px, 10px 10px  

.case_g
  border 1px solid red
  padding 20px
  font-size 16px
  background #cccccc
  .sample
    float:left 
    margin-right 20px
    &.sample_1
      width 200px
      height 200px
      background skyblue
      background-image radial-gradient(red 2px, transparent 0)
      background-size 10px 10px
    &.sample_2
      width 200px
      height 200px  
      background: #655;
      background-image: radial-gradient(tan 5px, transparent 0);
      background-size: 20px 20px;
      background-position -10px -10px // bg-position 必须是 负的bg-size 一半
    &.sample_3
      width 200px
      height 200px  
      background: #655;
      background-image: radial-gradient(tan 5px, transparent 0),radial-gradient(tan 5px, transparent 0);
      background-size: 20px 20px;
      background-position 0 0, 10px 10px  // 第二层的偏移值必须是背景大小的50% 

.case_h
  border 1px solid red
  padding 20px
  font-size 16px
  background #cccccc
  .sample
    float:left 
    margin-right 20px
    &.sample_1
      width 200px
      height 200px
      background #eee
      background-image linear-gradient(45deg, #bbb 25%, transparent 0)
      background-size 40px 40px
    
    &.sample_2
      width 200px
      height 200px
      background #eee
      background-image linear-gradient(45deg, #bbb 25%, transparent 0),// 形成一个 左下角的直角三角形 
                       linear-gradient(45deg, transparent 75%, #bbb 0%)// 形成与前一个位置相反的三角形
      background-size 40px 40px
      
    &.sample_3
      width 200px
      height 200px
      background green //#eee
      background-image linear-gradient(45deg, #bbb 25%, transparent 0),  
                       linear-gradient(45deg, transparent 75%, hsla(0,0,100%,1) 0%),  
                       linear-gradient(45deg, #bbb 25%, transparent 0),
                       linear-gradient(45deg, transparent 75%, hsla(0,0,100%,1) 0)
      background-position 0 0, 15px 15px, 15px 15px, 35px 35px
      background-size 40px 40px
    &.sample_4
      width 200px
      height 200px
      background  #eee
      background-image linear-gradient(45deg, #bbb 25%, transparent 0),  
                       linear-gradient(45deg, transparent 75%, #bbb 0%),  
                       linear-gradient(45deg, #bbb 25%, transparent 0),
                       linear-gradient(45deg, transparent 75%, #bbb 0)
      background-position 0 0, 20px 20px, 20px 20px, 40px 40px
      background-size 40px 40px
    &.sample_5
      width 200px
      height 200px
      background #eee
      background-image url('data:image/svg+xml,\
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
                        <rect x="50" width="50" height="50" />\
                        <rect y="50" width="50" height="50" />\
                      </svg>');
      background-size 40px 40px

.case_i
  border 1px solid red
  padding 20px
  font-size 16px
  background #cccccc
  .sample_1
    width 600px
    height 100px
    background linear-gradient(90deg, #fb3 15%, #655 0, #655 40%, #ab4 0, #ab4 65%, hsl(20, 40%, 90%) 0)
    background-size 80px 100%
  .sample_2
    width 600px
    height 100px
    background hsl(20,40%,90%) //no-repeat
    background-image linear-gradient(90deg, #fb3 11px, transparent 0),
                     linear-gradient(90deg, #ab4 23px, transparent 0),
                     linear-gradient(90deg, #655 43px, transparent 0);
    background-size  41px 100%, 61px 100%, 83px 100%;

.case_j
  border 1px solid red
  padding 20px
  font-size 16px
  background #cccccc
  .sample
    float:left 
    margin-right 20px
    &.sample_1 
      width 200px
      height 200px
      //padding 20px
      border 20px solid transparent  // 透明边框，用来透视 图片，达到图片边框的效果
      background linear-gradient(white,white), //用linear-gradient 来模拟白色遮盖bg
                 url('http://csssecrets.io/images/stone-art.jpg') //被纯白bg覆盖的背景图
      background-clip padding-box, border-box// 第一个 padding 用来修饰 线性模拟的纯白bg        
      background-size cover  // 背景平铺
      background-origin border-box // 背景平铺从border的占位范围开始
    &.sample_2
      width 200px
      height 200px
      border 10px solid transparent
      background linear-gradient(white,white) padding-box, 
                 repeating-linear-gradient(-45deg,red 0,red 12.5%,transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0/20px 20px;
    
    &.sample_3
      width 200px
      height 200px
      border 10px solid transparent
      border-image 10 repeating-linear-gradient(-45deg,red 0, red 1em,transparent 0, transparent 2em,#58a 0, #58a 3em,transparent 0, transparent 4em)
    
    &.sample_4
      width 200px
      height 200px
      border 1px solid transparent
      background linear-gradient(white,white) padding-box,
                 repeating-linear-gradient(-45deg,black 0,black 25%,white 0,white 50%) 0 / 10px 10px;
      animation ants 12s linear infinite
@keyframes ants{
  to{
    background-position 100% 100%
  }
}
</style>

