<template>
  <div class="page">  
    <h1 class="page-title">css 编码技巧</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">一个按钮实例</h3>
        <div class="sample-wrap case_a clearfix">
          <button class="button">
            Yes!
          </button>
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
                .case_a .button
                  padding 6px 16px
                  border 1px solid #446d88
                  background: #58a linear-gradient(#77a0bb, #58a);
                  border-radius: 4px;
                  box-shadow: 0 1px 5px gray;
                  color: white;
                  text-shadow: 0 -1px 1px #335166;
                  font-size: 20px;
                  line-height: 30px
              </code>
            </pre>
          </div> 
        </div>
      </div>

      <div class="case">
        <h3 class="case-name">按钮放大 </h3>
        <p>通过 font-size 和 line-height 设置相对值 ，更改父节点font-size 的值 进行 按钮 缩放</p>
        <div class="sample-wrap case_b clearfix">
          <button class="button">
            Yes!
          </button>
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code> 
              .case_b
                font-size 30px
                .button
                  padding 6px 16px
                  border 1px solid #446d88
                  background: #58a linear-gradient(#77a0bb, #58a);
                  border-radius: 4px;
                  box-shadow: 0 1px 5px gray;
                  color: white;
                  text-shadow: 0 -1px 1px #335166;
                  font-size: 125%;
                  line-height: 1.5 // 通过 倍数 line-height 来控制元素的高度
              </code>
            </pre>
          </div> 
        </div>
      </div>

      <div class="case">
        <h3 class="case-name">按钮放大</h3>
        <p>通过 将所有的具体px值 改为 em ，可以根据 父节点的font-size 的值修改 进行 按钮 整体 缩放</p>
        <div class="sample-wrap case_c clearfix">
          <button class="button">
            Yes!
          </button>
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
              .case_c
                font-size 20px
                .button
                  padding 0.3em 0.8em 
                  border 1px solid #446d88
                  background: #58a linear-gradient(#77a0bb, #58a);
                  border-radius: 0.2em;
                  box-shadow: 0 0.05em 0.25em gray;
                  color: white;
                  text-shadow: 0 -0.05em 0.05em #335166;
                  font-size: 125%;
                  line-height: 1.5  
              </code>
            </pre>
          </div> 
        </div>
      </div>

      <div class="case">
        <h3 class="case-name">按钮颜色改变</h3>
        <p> </p>
        <div class="sample-wrap case_d clearfix">
          <button class="button"> Yes! </button>
          <button class="button" style="background-color:green"> Yes! </button>
           <button class="button" style="background-color:red"> Yes! </button>
        </div> 
        <div class="code-wrap"> 
          <div class="code"  v-highlight>  
            <p>css:</p>
            <pre>
              <code>
               .case_d
                padding 20px
                font-size 20px
                background gray
                .button
                  padding 0.3em 0.8em 
                  border 1px solid rgba(0,0,0,.1); 
                  background: linear-gradient(hsla(0,0,100%, 0.2), transparent); //阴影渐变处理
                  background-color #58a  // 单独设置 背景色 
                  border-radius: 0.2em;
                  box-shadow: 0 0.05em 0.25em rgba(0,0,0,0.5);
                  color: white;
                  text-shadow: 0 -0.05em 0.05em rgba(0,0,0,0.5);
                  font-size: 125%;
                  line-height: 1.5
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
  name: 'cssSkillCase',
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

.case_a .button
  padding 6px 16px
  border 1px solid #446d88
  background: #58a linear-gradient(#77a0bb, #58a);
  border-radius: 4px;
  box-shadow: 0 1px 5px gray;
  color: white;
  text-shadow: 0 -1px 1px #335166;
  font-size: 20px;
  line-height: 30px

.case_b
  font-size 30px
  .button
    padding 6px 16px
    border 1px solid #446d88
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: 4px;
    box-shadow: 0 1px 5px gray;
    color: white;
    text-shadow: 0 -1px 1px #335166;
    font-size: 125%;
    line-height: 1.5 // 通过 倍数 line-height 来控制元素的高度

.case_c
  font-size 20px
  .button
    padding 0.3em 0.8em 
    border 1px solid #446d88
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: 0.2em;
    box-shadow: 0 0.05em 0.25em gray;
    color: white;
    text-shadow: 0 -0.05em 0.05em #335166;
    font-size: 125%;
    line-height: 1.5 

.case_d
  padding 20px
  font-size 20px
  background gray
  .button
    padding 0.3em 0.8em 
    border 1px solid rgba(0,0,0,.1); 
    background: linear-gradient(hsla(0,0,100%, 0.2), transparent); //阴影渐变处理
    background-color #58a  // 单独设置 背景色 
    border-radius: 0.2em;
    box-shadow: 0 0.05em 0.25em rgba(0,0,0,0.5);
    color: white;
    text-shadow: 0 -0.05em 0.05em rgba(0,0,0,0.5);
    font-size: 125%;
    line-height: 1.5  
</style>

