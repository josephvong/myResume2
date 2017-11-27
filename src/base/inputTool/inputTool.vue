<template>
  <form action=""  class="input-tool" @submit.prevent="inputSubmit" >
    <em class="icon icon-search"></em>
    <div class="input-wrap">
      <input ref="searchInput" type="text" v-model="inputValue" :placeholder="placeHolder"
      @focus="focusHandle" @blur="blurHandle"/>
    </div>
    <div class="cancel-wrap" v-show="inputFocus||inputValue" @click="clearInput">
      取消
    </div>
  </form>
</template>

<script type="text/ecmascript-6">
import {throttle} from 'common/js/cusFn'
//import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'inputTool',
  props:{
    placeHolder:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      inputFocus:false,
      inputValue:''
    }
  },
  computed:{

    //-------------------------------
    /*...mapGetters({  // 获取 store 中的属性 ‘搜索历史’
      searchHistory:'searchHistory'
    })*/
  },
  created(){
    this.$watch('inputValue',throttle((newValue)=>{
      this.$emit('inputChange',newValue)
    },500))
  },
  methods:{
    inputSubmit(){
      console.log(this.inputValue)
      this.$refs.searchInput.blur();
      this.$emit('inputSubmit',this.inputValue)
    },
    setInputVal(val){
      this.inputValue = val
    },

    clearInput(){
      this.inputValue = ''
      this.$emit('inputClear')
    },
    focusHandle(){
      this.inputFocus = true
      this.$emit('focus')
    },
    blurHandle(){
      this.inputFocus = false
      this.$emit('blur')
    },

    //-----------------------------
    /*...mapActions({
      saveSearchHistory:"saveSearchHistory",
    }),*/
  },
  watch:{

  },
  components:{
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~style/variable"
//@import "~style/mixin"

.input-tool
  display:flex
  align-items center
  width:100%
  height 100%
  background white
  border 1px solid #cccccc
  border-radius 5px
  overflow hidden
  .icon
    flex 0 1 auto
    padding 0 0.1rem
    font-size 0.38rem
    color #cccccc
    margin-top 3px
  .input-wrap
    flex 1
    padding-right 0.2rem
    input
      display block
      width 100%
      margin-top -4px
  .cancel-wrap
    flex 0 1 auto
    padding 0 0.2rem




</style>



