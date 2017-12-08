<template> 
 
<div class="editor-wrap" style="height:250px">
  <quill-editor ref="textEditor" style="height:100%"
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
            ['bold','italic'],
            [{'list':'ordered'},{'list':'bullet'}],
            ['link','image']
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
      console.log(this.content)
      return this.content
    } 
  }, 
  mounted(){ 
     
  }
}
</script> 
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'
 
 
 
</style>

