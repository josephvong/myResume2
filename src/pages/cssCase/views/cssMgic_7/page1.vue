<template>
  <div class="page">  
    <h1 class="page-title">结构与布局 上</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">自适应内部元素</h3>
        <p class="desc">
          知识点：  (max-/min-)width : min-content 可以 使用在 width/height 或 max-/min- width/height 的属性上面
        </p>
        <div class="sample-wrap case_a clearfix">
          <p>Some text Some text Some text Some text Some text Some text Some text Some text  </p> 
          <figure>
            <img src="http://csssecrets.io/images/adamcatlace.jpg" />
           
            <figcaption>
              The great Sir Adam Catlace was named after  Countess Ada Lovelace, the first programmer. 
            </figcaption>
          </figure>
          <p>More text More text More text More text More text More text More text</p> 
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
                 figure
                  padding 10px
                  max-width min-content // 最小的内容w
                  border 1px solid black
                  margin 0 auto
                  img
                    max-width inherit // max-width 继承父节点

              </code>
            </pre>
          </div> 
        </div>
      </div>

      <div class="case">
        <h3 class="case-name">精确控制table的列宽</h3> 
        <div class="sample-wrap case_b clearfix">
            <table>
              <tr>
                <td>If we don’t…</td>
                <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
              </tr>
            </table> 
            <table>
              <tr>
                <td  style="width: 20%">If we don’t…</td>
                <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
              </tr>
              <tr>
                <td  style="width: 20%">All rows take part in calculating the widths, not just the first one.</td>
                <td>Notice how the dimensions here are different than the previous example.</td>
              </tr>
            </table>
            
            <hr>
            <p>table-layout : fixed</p>
            <table class="fixed">
              <tr >
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>All rows take part in calculating the widths, not just the first one.</td>
                <td>Notice how the dimensions here are different than the previous example.</td>
                <td>Notice how the dimensions here are different than the previous example.</td>
              </tr>
            </table>
            
            <table class="fixed">
              <tr>
                <td style="width: 20%">If we don’t…</td>
                <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
              </tr>
            </table> 

            <table class="fixed">
              <tr >
                <td style="width: 20%">If we don’t…</td>
                <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
              </tr>
              <tr>
                <td style="width: 20%">All rows take part in calculating the widths, not just the first one.</td>
                <td>Notice how the dimensions here are different than the previous example.</td>
              </tr>
            </table>

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
              <code> </code>
            </pre>
          </div> 
        </div>
      </div>
      
      <div class="case">
        <h3 class="case-name">根据兄弟元素的数量改变元素的样式</h3> 
        <div class="sample-wrap case_c ">
          <ul class="sample_1 clearfix">
            <li></li><li></li><li></li><li></li>
          </ul> 
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
              <code> </code>
            </pre>
          </div> 
        </div>
      </div>  
    </div>

  </div>
</template>

<script>  
export default {
  name: 'cssMgic7_1',
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
  font-size 14px
  figure
    padding 10px 
    max-width min-content // 最小的内容w
    border 1px solid black
    margin 0 auto
    img
      max-width inherit // max-width 继承父节点

.case_b
  font-size 14px
  table
    border-collapse: collapse;
    margin-bottom: 1em;
    width: 100%;
    td  
      border 1px solid gray
    &.fixed
      table-layout fixed

.case_c .sample_1
  border 1px solid blue 
  li
    float left
    width 50px
    height 50px
    margin 10px
    border 1px solid red
    &:first-child:nth-last-child(4),&:first-child:nth-last-child(4) ~ li
      background green
          
             
</style>

