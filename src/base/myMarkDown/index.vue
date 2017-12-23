<template>  
<div class="markdown-wrap" :style="{height:height+'px',zIndex:zIndex}">
  <textarea :id="id" ></textarea> 
</div>    
</template>

<script>
import SimpleMDE from 'simplemde'
import defaultToolbar from './toolbar' // 工具栏 数组 数据
import 'simplemde/dist/simplemde.min.css' 

export default {
  name: 'myMarkDown',
  props:{
    value:{
      type:String,
      default:''
    },
    id:{
      type:String,
      default:"myMarkDownEditor"
    },
    autofocus:{ //是否自动聚焦
      type:Boolean,
      default:false
    },
    placeholder:{
      type:String,
      default:''
    },
    height:{
      type:Number,
      default:150
    },
    zIndex:{
      type:Number,
      default:10
    }, 
    cusTool:{ // 自定义 工具栏按钮
      type:Array
    }
  },
  data () {
    return {
      simplemde:null, // 存放md编辑器的实例
      hasChange:false,  // 内容是否改变
      defaultTool:defaultToolbar 
    }
  },
  computed:{ 
    /*toolbar(){
      return this.defaultTool.concat(this.cusTool)
    }*/
  },
  created(){

  },
  components:{
     
  },
  methods:{
      
  },
  watch:{
    value(val){
      if(val === this.simplemde.value() && !this.hasChange) return
      this.simplemde.value(val)
    }

  }, 
  mounted(){ 
    // 初始化 编辑器
    setTimeout(()=>{
      this.simplemde = new SimpleMDE({
        element:document.getElementById(this.id),
        autofocus:this.autofocus,
        toolbar:this.defaultTool,
        spellChecker: false,
        insertTexts:{
          //link: ['[', ']( )'],
          image: ["![](http://", ")"],
          link: ["[", "](http://)"],
          /*table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],*/
        },
        placeholder:this.placeholder
      })
      if(this.value){
        this.simplemde.value(this.value)
      }
      this.simplemde.codemirror.on('change',()=>{
        if (this.hasChange) { this.hasChange = true }
        this.$emit('input', this.simplemde.value())
      }) 
    },200)
     
  },
  destroyed() {
    this.simplemde = null
  }
}
</script>
<style>
/*.markdown-wrap {
  overflow-y: scroll;
}*/
.markdown-wrap .CodeMirror {
  height: 150px; 
 /* min-height: 150px;*/
}

.markdown-wrap .CodeMirror-scroll {
  min-height: 150px;
}

.markdown-wrap .CodeMirror-code {
  padding-bottom: 40px;
}

.markdown-wrap .editor-statusbar {
  display: none;
}

.markdown-wrapr .CodeMirror .CodeMirror-code .cm-link {
  color: #1482F0;
}

.markdown-wrap .CodeMirror .CodeMirror-code .cm-string.cm-url {
  color: #2d3b4d;
  font-weight: bold;
}

.markdown-wrap .CodeMirror .CodeMirror-code .cm-formatting-link-string.cm-url {
  padding: 0 2px;
  font-weight: bold;
  color: #E61E1E;
}
</style> 
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'  
</style>

