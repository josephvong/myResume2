<template> 
  <div class="date-picker-wrap">
    <!--表单部分-->
    <div class="input-wrap">
      <div class="input">2017-12-20</div>
      <img class="cancel-btn" src="./cancel.png" alt="">
    </div>

    <div class="calendar-wrap">
      <div class="cal-panel-bg"></div>
      <div class="cal-panel">
        <div class="panel-head-wrap">
          <div class="panel-header date">
            <div class="left-btn"><</div>
            <div class="year">2017</div>
            <div class="month">6月</div>
            <div class="right-btn">></div>
          </div>
          <div class="panel-header year">
            <div class="left-btn"><</div>
            <div class="year">2000-2011</div> 
            <div class="right-btn">></div>
          </div>
          <div class="panel-header month">
            <div class="year">2000</div>  
          </div>
        </div>
        <div class="panel-body-wrap">
          <div class="panel-date-body">
            <ul class="week-label clearfix">
              <li>日</li>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li>六</li>
            </ul>

            <ul class="calendar">
              <li class="expand-1"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <!-- <li v-for="i in 31"></li> -->
              
            </ul>
          </div>
          <div class="panel-year-body">
            
          </div>
          <div class="panel-month-body">
            
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myDatePicker',
  props:{
    /*
    inputStyle:{ // input 样式
      type:Object
    },
    */
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
//@import "~common/style/variable"
//@import "~common/style/mixin"

.input-wrap
  display flex
  align-items center
  position relative
  width 100%
  height 100% 
  padding 0 10px
  border 1px solid black 
  .input
    flex 1 1 auto
    line-height 24px
    margin-right 10px
  .cancel-btn
    flex 0 0 20px
    width 20px
    height 20px    
    
.cal-panel-bg
  position fixed
  width 100%
  height 100%
  left 0
  top 0
  background rgba(0,0,0,0.6)
  z-index 1000
.cal-panel
  position fixed
  width 100%
  left 0
  bottom 0
  background red
  z-index 1001
  .panel-header
    display flex
    height 40px
    padding 0 20px
    align-items center
    justify-content space-between 
    background yellow
    &.month
      justify-content center
    .left-btn , .right-btn
      line-height 24px
      font-size 20px
      padding 0 10px
    .year, .month
      line-height 24px
      font-size 20px
      padding 0 20px 
  .panel-date-body .week-label
    display flex
    width 100%
    border-top:1px solid #f5f5f5
    border-bottom:1px solid #f5f5f5
    li
      flex 1
      text-align center
      line-height 30px
  .panel-date-body .calendar
    display flex
    flex-flow row wrap
    justify-content start
    li
      position relative
      height 0
      flex 1 1 calc(100%/7)
      min-width calc(100%/7)
      max-width calc(100%/7)
      padding-top: 14.285714%
      &.expand-1
        counter-reset:date 
        flex 1 1 14.285714% * 1
        min-width 14.285714% * 1
        max-width 100%
        background:#f5f5f5
      &:not(:first-child):before
        display:inline-block
        position:absolute
        content:counter(date)
        counter-increment:date
        width:100%
        top:50%
        left:0
        height:20px
        margin-top:-10px
        text-align:center
        
      
      
        

 
</style>



