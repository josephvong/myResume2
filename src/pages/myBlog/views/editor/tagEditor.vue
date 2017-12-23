<template> 
<div class="field">
  <div class="tags">
    <div class="tag saved" v-for="(item,index) in editList">
      <div class="tag_cont" >
        {{item}}
        <span class="del" @click="removeTag(item)">x</span>  
      </div>
    </div>
    <div class="tag edit" >
      <div @dblclick="editDblClick"  v-show="!toggleEdit" >
        添加标签...
      </div>
      <input  class="tag-edit" ref="tagInput" @blur="editBlur" @keyup.enter="editBlur" v-show="toggleEdit" type="text" placeholder="">
    </div> 
  </div>
  <p>+ <span @click="openModal">过往的标签</span></p>
  <div ref="tagModal" :class="{'modal':true,'is-active':modalShow}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">过往的标签</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <ul class="tag-list" ref="tagList" >
          <li v-for="(item,index) in tagList">
            <input type="checkbox" :value="item"  :id="`tag_${item}_${index}`">
            <label :for="`tag_${item}_${index}`">{{item}}</label>
          </li>
              
        </ul>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="getSelTags">添加</button>
        <button class="button" @click="clearSelect">重选</button>
      </footer>
    </div>
  </div>

</div>


 
</template>

<script>
import {unique} from 'common/js/cusFn'   
 
export default {
  name: 'tagEditor',
  props:{
    tagList:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {  
      toggleEdit:false,
      editList:[],
      modalShow:false

    }
  },
  computed:{ 
    //---------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’ 
      name: 'name',     
    })*/ 
  },
  created(){
     
  },
  components:{ 
  },
  methods:{
    // 标签填写 双击
    editDblClick(){
      this.toggleEdit = true
      setTimeout(()=>{
        this.$refs.tagInput.focus()
      },5) 
    },
    // 标签 输入框 blur （确定）
    editBlur(){
      if(this.$refs.tagInput.value){
        this.toEdit(this.$refs.tagInput.value)
      }
      this.$refs.tagInput.value = null
      this.toggleEdit = false
    },
    // 编辑的标签 插入 editList
    toEdit(txt){
      this.editList.push(txt);
      this.editList = unique(this.editList)
    },
    // 点击删除 编辑的tag
    removeTag(tag){
      let arr = [];
      for (let i = 0; i < this.editList.length; i++) {
        if(this.editList[i]!= tag){
          arr.push(this.editList[i])
        }
      }
      this.editList = arr
    },

    //-----------Modal 操作------------

    openModal(){
      this.modalShow = true
    },
    closeModal(){
      this.clearSelect()
      this.modalShow = false
    },
    clearSelect(){ 
      let inpArr = this.$refs.tagList.querySelectorAll('input:checked')
      if(inpArr.length){
        for (var i = 0; i < inpArr.length; i++) {
          inpArr[i].checked = false
        }
      } 
    }, 
    getSelTags(){
      let selTags = this.$refs.tagList.querySelectorAll('input:checked')
      let arr = []
      if(selTags.length){
        arr = Array.from(selTags).map((item)=>{
          return item.value
        })
      }  
      this.editList = this.editList.concat(arr);
      this.editList = unique(this.editList)
      this.closeModal() 
    },
    returnTags(){
      return this.editList
    },
    clearTags(){
      this.editList = []
    }
  }, 
  mounted(){ 
    //this.quillInit()
  },
   
}
</script> 
<style scope lang="stylus" rel="stylesheet/stylus">
@import '~style/mixin.styl'
.tags
  position relative
  padding-left:50px
  padding-right:20px
  font-size 16px
  line-height 1.2 
  &:before
    content:'标签:'
    position absolute
    left 0
    top 4px
  .tag
    font-size 14px
    line-height 1.2
    .tag_cont
      position relative
      padding-right 15px
      .del
        extend-click()
        position absolute
        right 0px
        top 0
        display block
        width 12px
        height 12px
        font-size 12px
        text-align center
    .tag-edit
      width:80px;
      outline none
      background:rgba(0,0,0,0)


input[type="checkbox"]
  display none
.tag-list
  background white
  li
    display inline-block
    margin 0 10px 10px 0
    label
      display inline-block
      padding 0 8px
      line-height 24px
      font-size 14px
      color #579DC5
      border 1px solid #579DC5
      border-radius 12px
    input[type="checkbox"]:checked ~ label
      color white
      background red
      border-color red
       
</style>

