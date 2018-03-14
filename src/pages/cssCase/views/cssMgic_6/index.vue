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
    </div>  
    <button onclick="document.querySelector('#modal').showModal()">Click me</button>
    <dialog id="modal">
    O HAI!
    <button onclick="this.parentNode.close()">Close</button>
    </dialog>
    <!-- <div class="dialog"></div> -->
  </div>
</template>

<script>  
export default {
  name: 'cssMgic6',
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