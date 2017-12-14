<template> 
<section class="section">
  <div class="container" >
    <h1 class="title">编辑文章</h1> 
    <!--文章标题-->
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="输入标题" v-model="title" >
      </p>
    </div>

    <!--文章描述-->
    <div class="field">
      <div class="control">
        <textarea class="textarea" type="text" rows="4" placeholder="文章描述" v-model="art_desc"></textarea>
      </div>
    </div>

    <!--标签输入-->
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="标签" v-model="kwString" >
      </p>
      <p @click="openTagModal">+ 过往的标签</p> 
    </div>
    <!--标签选择弹窗-->
    <tagModal :tagList="tagList" ref="tagModal" @confirmSel="concatKeyWord"></tagModal> 

    <!--图片上传控件，组件imgUpload 仅封装了个隐藏的 input，其他显示节点在 solt中插入 -->
    <div class="field">
      <imgUpload ref="imgUpload" class="img-upload" @imgUrlChange="thumbNailChange">
        <template slot="label" slot-scope="props">
          <div class="file has-name">
            <label class="file-label" :for="props.input_id" style="display:inline-flex;" @touchend="fileClick(props.input_id)" >
              <span class="file-cta" style="point-events:none">
                <span class="file-icon">
                  <i class="fa fa-upload"></i>
                </span>
                <span class="file-label">
                  上传图片
                </span>
              </span>
              <span class="file-name" style="point-events:none">
                {{props.picValName}} 
              </span>
            </label>
          </div>
        </template>
        <template slot="displayimg" slot-scope="props">
          <div  class="show" v-show="props.headerImage">  
            <div class="picture" :style="'backgroundImage:url('+props.headerImage+')'"> 
            </div>  
          </div>
        </template> 
      </imgUpload>
    </div>
    
    <!--文章输入框-->
    <div>
     <myEditor ref="myEditor"></myEditor> 
    </div>

    <!--提交按钮-->
    <div>
      <button class="button" @click="outputCont">输出</button>
    </div>
  </div> 
</section>  
</template>

<script>
import {unique} from 'common/js/cusFn' 
import myEditor from 'base/myEditor'
import imgUpload from 'base/imgUpload'
import tagModal from './tagModal' 
import {articlePostApi, tagsGetApi} from 'api/blogAPI/api'
//import {mapGetters, mapActions } from 'vuex' 
export default {
  name: 'arteditor',
  props:{

  },
  data () {
    return {
      title:'',
      art_desc:'',
      kwString:'',
      thumbnailUrl:'',
      tagList:[]
    }
  },
  computed:{ 
    //---------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      name: 'name',     
    })*/ 
  },
  created(){
    // 获取 标签列表
    tagsGetApi().then((res)=>{
      console.log(res) 
      this.tagList = res
    })
  },
  components:{
    imgUpload,
    myEditor,
    tagModal
  },
  methods:{
    openTagModal(){
      this.$refs.tagModal.openModal()
    }, 

    concatKeyWord(str){ 
      let reg = /[,，]$/;
      let addString = this.kwString=='' || reg.test(this.kwString)?`${str}`:`,${str}`
      this.kwString += addString
    },

    // 上传图片label 的 点击处理事件，适配移动端（异步触发 file input）
    fileClick(id){ 
      setTimeout(()=>{this.$refs.imgUpload.$el.querySelector('#'+id).click()},5)  
    },

    thumbNailChange(newUrl){
      this.thumbnailUrl = newUrl
    },

    initEditPage(){ // 初始化表单
      this.kwString = ''
      this.$refs.imgUpload.clearInput() // 清空 图片 
      this.$refs.myEditor.removeContent() // 清空 内容输入框
      this.title = ''
      this.art_desc = ''
    },

    // 输出 编辑内容
    outputCont(){ 
      let content = this.$refs.myEditor.outputContent()
      let time = new Date().getTime()
      let art_id = `art_${time}`
      let title = this.title
      let desc = this.art_desc
      let thumb = this.thumbnailUrl
      let tags = unique(this.kwString.split(/[,，]/)) 
      if(!title || !desc){
        alert('需要填写标题和文章描述')
        return  
      } 
      articlePostApi({
        content,
        desc,
        time,
        art_id,
        thumb,
        title,
        tags
      }).then((res)=>{ 
        this.initEditPage()
        alert("发布曾共")
      }) 
      
    }
  }, 
  mounted(){ 
    //this.quillInit()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if(this.$refs.myEditor.outputContent()){
      alert('你的文章尚未提交')
    }else{
      next()
    }
    
  }
}
</script>
<style lang="css" >

 
 
 
</style>
<style scope lang="stylus" rel="stylesheet/stylus">
//@import '~style/mixin.styl'

.img-upload .show  
  width: 200px;  
  height: 200px;  
  overflow: hidden;  
  position: relative;
  margin-top 10px    
  border: 1px solid blue
  border-radius 50%
  .picture 
    width: 100%;  
    height: 100%;  
    overflow: hidden;  
    background-position: center center;  
    background-repeat: no-repeat;  
    background-size: cover;   
 
 
</style>

