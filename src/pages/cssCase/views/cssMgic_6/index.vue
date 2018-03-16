<template>
  <div class="page">  
    <h1 class="page-title">用户体验</h1>
   
    <div class="page-body">
      <div class="case">
        <h3 class="case-name">增大点击范围</h3>
        
        <div class="sample-wrap case_a clearfix">
          <button>点击</button>
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
        <h3 class="case-name">滚动（阴影）提示</h3>
        
        <div class="sample-wrap case_b clearfix">
          <ul class="sample_1">
            <li>Ada Catlace</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
          </ul>
          <ul class="sample_2">
            <li>Ada Catlace</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
          </ul>
          <ul class="sample_3">
            <li>Ada Catlace</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
          </ul>
          <ul class="sample_4">
            <li>Ada Catlace</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
            <li>Alan Purring</li>
            <li>Schr ö dingcat</li>
            <li>Tim Purrners-Lee</li>
            <li>WebKitty</li>
            <li>Json</li>
            <li>Void</li>
            <li>Neko</li>
            <li>NaN</li>
            <li>Cat5</li>
            <li>Vector</li>
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
              <code> 
              </code>
            </pre>
          </div> 
        </div>
      </div> 

      <div class="case">
        <h3 class="case-name">css resize 实现 交互式的图片对比控件</h3> 
        <div class="sample-wrap case_c clearfix">
          <div class="sample_1">
            <div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521194743229&di=fa56abede3070c721df2d27624843290&imgtype=0&src=http%3A%2F%2Fatt.x2.hiapk.com%2Fforum%2Fmonth_1202%2F12020311340d5dffefb3498a50.jpg" alt="">
            </div>
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937987786,2274290458&fm=27&gp=0.jpg" />
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
        <h3 class="case-name">范围输入拖动控件方案</h3> 
        <div class="sample-wrap case_d clearfix">
          <div class="image-slider" ref="imageSlider">
            <div :style="{width:`${sliderRange}%`}">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521194743229&di=fa56abede3070c721df2d27624843290&imgtype=0&src=http%3A%2F%2Fatt.x2.hiapk.com%2Fforum%2Fmonth_1202%2F12020311340d5dffefb3498a50.jpg" alt="">
            </div>  
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937987786,2274290458&fm=27&gp=0.jpg" />
            <input type="range"  v-model="sliderRange"/>
          </div>
          <p>{{sliderRange}}</p>
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
  name: 'cssMgic6',
  props:{

  },
  data () {
    return {
      sliderRange:50 
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
  //border 1px solid red
  overflow visible
  button
    position relative
    //display inline-block
    width 80px
    height 80px  
    border-radius 50%
    border: 1px solid rgba(0,0,0,.3);
    color white
    text-align center
    background #58a
    cursor pointer
    &:before
      content ''
      position absolute
      top -10px
      right -10px
      left -10px
      bottom -10px
      background rgba(0,0,0,0.1)

.case_b
  font-size 15px
  border 1px solid red
  padding 5px
  ul
    float left
    padding 15px
    width 10em
    height 8em
    border 1px solid black
    overflow auto
    margin 10px
    background radial-gradient(at top, rgba(0,0,0,0.8), transparent 90%) no-repeat
    background-size 100% 80px
    &.sample_1
      background-attachment scroll
    &.sample_2
      background-attachment local
    &.sample_3
      background-attachment fixed
  .sample_4
    padding 15px
    width 10em
    height 8em
    border 1px solid red
    overflow auto
    margin 10px
    background  linear-gradient(white 15px,hsla(0,0,100%,0)) 0 0 / 100% 50px,
                radial-gradient(at top, rgba(0,0,0,0.6), transparent 70%) 0 0 / 100% 15px,
                linear-gradient(to top, white 15px, hsla(0,0,100%,0)) bottom / 100% 50px,
                radial-gradient(at bottom, rgba(0,0,0,0.6),transparent 70%) bottom / 100% 15px;
    background-repeat no-repeat
    background-attachment local, scroll, local, scroll

.case_c
  font-size 14px
  .sample_1
    position relative
    display inline-block
    border 1px solid red 
    div
      position absolute
      top 0
      bottom 0
      left 0
      width 50%
      max-width 100%
      overflow hidden
      resize horizontal
      &::before
        content ''
        position absolute
        right 0
        bottom 0
        width 12px
        height 12px
        padding 5px
        cursor: ew-resize
        background linear-gradient(-45deg, white 50%, transparent 0);
        background-clip content-box;
        filter drop-shadow(0 0 2px black);
        -webkit-filter drop-shadow(0 0 2px black)
         
    img
      display block
      user-select none

.case_d
  font-size 14px
  .image-slider
    position relative
    display inline-block
    border 1px solid red
    input
      position absolute
      left 0
      right 0
      width 100%
      bottom 0
    div
      position absolute
      top 0
      bottom 0
      left 0
      width 50% 
      overflow hidden
      //resize horizontal        
    img
      display block
      user-select none          
.dialog
  position fixed
  width 200px
  height 180px
  background red
  left 50%
  top 50%
  transform translate(-50%,-50%,0)
  box-shadow 0 0 0 50vmax rgba(0,0,0,0.8) 
  
</style> 