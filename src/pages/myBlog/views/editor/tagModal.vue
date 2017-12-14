<template>
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
</template>

<script>
//import {mapGetters, mapActions } from 'vuex' 
export default {
  name: 'tagModal',
  props:{
    tagList:{
      type:Array,
      default:[]
    }
  }, 
  data () {
    return {
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
      this.closeModal()
      this.$emit('confirmSel',arr.join(','))
    }

  }, 
  mounted(){ 
    //this.quillInit()
  }
}
</script> 
<style scope lang="stylus" rel="stylesheet/stylus">
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


