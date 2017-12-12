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

  },
  data () {
    return {
      content:'',
      editorOption:{
        modules:{
          toolbar:[
            [{'size':['small',false,'large']}], 
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
        }
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

