<template> 
 
<div class="editor-wrap" style="min-height:250px;">
  <quill-editor ref="textEditor" style="height:200px" 
    v-model="content"
    :options="editorOption"
  >
  </quill-editor>  
</div>
        
</template>

<script>
/*
quill-image-drop-module 使用：
1.npm install 之后，在 webpack (base) 中配置如下：
  babel-loader 解析器 include:[......, resolve('node_modules/.1.0.3@quill-image-drop-module')] 专门对 image-drop-module 文件夹进行 解析
    原因 ： image-drop-module 的index.js 为 es6 语法，需要进行转化
  添加 Plugin: 将 Quill 暴露成全局的 变量， 可以给 img-drop-module 成功调用
  new webpack.ProvidePlugin({
    'window.Quill': 'quill'
  }) 
*/ 
import {quillEditor, Quill } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css' 
export default {
  name: 'myEditor',
  props:{
    placeholder:{
      type:String,
      default:"输入内容"
    }
  },
  data () {
    return {
      content:'',
      editorOption:{
        modules:{
          toolbar:[
            [{'size':['small',false, 'large', 'huge']}], 
            [{ 'header': [1,2,3,4,5,6,false]}],
            ['bold','italic', 'underline', 'strike'],
            ['blockquote', 'code-block',{'list':'ordered'},{'list':'bullet'}],
            [{ 'color': [] }, { 'background': [] }, { 'font': [] }], 
            [{ 'align': [] }],
            ['link','image','video']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          }, 
          imageDrop: true,
          imageResize:{
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          }
        },
        placeholder: this.placeholder, 
      }
    }
  },
  computed:{ 
    
  },
  created(){

  },
  components:{
    quillEditor
  },
  methods:{
    outputContent(){
      return this.content
    },
    removeContent(){
      this.content = ''
    }

  }, 
  mounted(){ 
     
  }
}
</script> 
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
 
 
 
</style>

