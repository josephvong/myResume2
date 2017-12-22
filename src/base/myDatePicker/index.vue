<template> 
  <div class="date-picker-wrap">
    <!--表单部分-->
    <div class="input-wrap" v-if="!rangeSel">
      <div class="input"  @click="inputClickHandle(inputDate)">{{inputDate}}</div>
      
      <img v-show="inputDate" @click="clearInputDate" class="cancel-btn" src="./cancel.png" alt="">
    </div>

    <div class="input-wrap" v-if="rangeSel"> 
      <div class="input" @click="rangeSelClickHandle(startDate)">
        {{startDate}} -- {{endDate}}
      </div>
      <img v-show="startDate||endDate"  @click="clearRangeDate" class="cancel-btn" src="./cancel.png" alt="">
    </div>  

    <div class="calendar-wrap" v-show="calendarShow">
      <div class="cal-panel-bg" @click="calendarClose"></div>
      
      <div class="cal-panel">
        <div class="panel-head-wrap">
          <div class="panel-header date">
            <div class="left-btn" @click="monthChange(-1)"><</div>
            <div class="year" @click="qSelectYearOpen(calInfo.year)">
              {{calInfo.year}}
            </div>
            <div class="month" @click="qSelMonthOpen(calInfo.year)">{{calInfo.month}}月</div>
            <div class="right-btn" @click="monthChange(1)">></div>
          </div>

          <div class="panel-header year" v-show="qSelYearShow">
            <div class="left-btn" @click="yearChange(-1)"><</div>
            <div class="year">{{qSelYear-6}}--{{qSelYear+5}}</div> 
            <div class="right-btn" @click="yearChange(1)">></div>
          </div>

          <div class="panel-header month"  v-show="qSelMonthShow">
            <div class="year">{{qSelYear}}</div>  
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
              <li :class="firstDayClass"></li>
              <li @click="dSelClickHandle(i)" v-for="i in calInfo.d_num" :class="{'actived':i==calInfo.sel_date,'disabled':rangeSel && i<calInfo.disable_num}"></li>
              <li class="pending" v-for="i in pending_num"></li>
            </ul>
          </div>

          <div class="panel-year-body" v-show="qSelYearShow">
            <ul class="clearfix">
              <li v-for = 'n in 12' @click="qSelMonthOpen(qSelYear-6+n-1)"><em></em><span>{{qSelYear-6+n-1}}</span></li> 
            </ul>
          </div>

          <div class="panel-month-body" v-show="qSelMonthShow">
            <ul class="clearfix">
              <li v-for = 'n in 12'  @click="qSelMonthClick(qSelYear,n)"><em></em><span>{{n}}</span></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script type="text/ecmascript-6">
import {dateFormat} from './toolfn'
export default {
  name: 'myDatePicker',
  props:{ 
    rangeSel:{ // 是否选择间隔
      type:Boolean,
      default:false
    }, 
  },
  data () {
    return {
      calendarShow:false, // 日历展示
      inputDate:'', // 标签显示时间
      tempDate:'',  // 临时记录时间

      startDate:'',  // 范围开始时间
      endDate:'',    // 范围结束时间
      tempEndDate:'',  // 临时的 endDate

      calInfo:{
        year:0,
        month:0,
        d_num:31,
        fir_day:0,
        sel_date:-1,   // 日历 渲染控制数据
        disable_num:-1
      },

      qSelYearShow:false,
      qSelYear:-1,

      qSelMonthShow:false,
    }
  },
  computed:{
    firstDayClass(){  // 日历列表第一个li占位节点的 长度 class名
      return `expand-${this.calInfo.fir_day}`
    },
    pending_num(){ // 日历列表 最后一个 日期li 后面 的 占位 li个数，此占位li 作用为 让
      // 计算 日期列表后面 添加多少格的占位li(确保日历为6行)
      let c_line = Math.floor((this.calInfo.fir_day+this.calInfo.d_num)/7)
      let last_d = (this.calInfo.fir_day+this.calInfo.d_num)%7
      if(c_line==4){
        return 9-last_d 
      }
      if(c_line==5 && !last_d){
        return 2
      }  
    },

  },
  created(){

  },
  methods:{
    inputClickHandle(dstr){ 
      let dObj =this.getDate(dstr) 
      this.initCalendar(dObj,this.tempDate.split('/')[2])
      this.calendarShow = true
    },
    rangeSelClickHandle(startDate){ 
      this.startDate = startDate||''
      this.tempEndDate = this.endDate
      this.endDate = '';

      let dObj = this.getDate(this.startDate);
      let sel_date =  this.startDate?this.tempDate.split('/')[2]:null
      this.initCalendar(dObj,sel_date)
      this.calendarShow = true
    },
    getDate(dstr){ 
      let d = dstr?new Date(dstr):new Date()
      this.tempDate =  dateFormat(d,'yyyy/MM/dd') 
      return d
    },
    initCalendar(dObj,s_date){  
      let year = dObj.getFullYear()
      let month = dObj.getMonth()+1 
      let day = dObj.getDay() 
      let d_num = new Date(year,month,0).getDate()
      let fir_day = new Date(year,month-1,1).getDay() 
      let sel_date = s_date || -1
      let is_range = this.rangeSel
      let disable_num = -1


      if(this.rangeSel && (this.startDate || sel_date>=0) ){ // 是 区间选择 且 有 选中起始日期
        if(this.startDate){
          let sY = parseInt(this.startDate.split('-')[0])
          let sM = parseInt(this.startDate.split('-')[1])
          if(sY>parseInt(year)){

            disable_num = 32
          }else if(sY == parseInt(year)){ 
            if(sM > parseInt(month)){ 
              disable_num = 32
            }else if(sM == parseInt(month)){
              disable_num = sel_date
            } 
          }
        }else if(!this.startDate && sel_date>=0){ 
          disable_num = sel_date
        } 
      }

      this.calInfo = {
        year,
        month,
        d_num,
        fir_day,
        sel_date,
        is_range,
        disable_num
      } 
    },

    dSelClickHandle(i){
      this.tempDate = `${this.calInfo.year}/${this.calInfo.month}/${i}`
      if(!this.rangeSel){  
        this.inputDate = dateFormat(new Date(this.tempDate),'yyyy-MM-dd') 
        this.calendarShow = false 
      }else{
        if(!this.startDate){
          this.initCalendar(new Date(this.tempDate),i)
          this.startDate = dateFormat(new Date(this.tempDate),'yyyy-MM-dd') 
        }else{
          let iosStartDate = this.startDate.replace(/\-/g,'/') 
          if(new Date(this.tempDate).getTime()<new Date(iosStartDate).getTime() ){
            return
          }
          this.endDate = dateFormat(new Date(this.tempDate),'yyyy-MM-dd') 
          this.calendarShow = false 
        } 
      } 
    },

    monthChange(goFlag){ 

      let nMonth = dateFormat(new Date(this.tempDate),'MM')
      let nYear = dateFormat(new Date(this.tempDate),'yyyy')
      let dObj
      nMonth=parseInt(nMonth)+goFlag
     
      if(nMonth>12){
        nMonth = 1
        nYear = parseInt(nYear) + 1
        dObj = this.getDate(`${nYear}/1/01`)
        
      }else if(nMonth<1){
        nMonth = 12
        nYear = parseInt(nYear) -1
        dObj = this.getDate(`${nYear}/12/01`)
        
      }else{
        dObj = this.getDate(`${nYear}/${nMonth}/01`)
         
      }
 
      if(this.rangeSel && this.startDate){
        if(nYear == parseInt(this.startDate.split('-')[0]) && nMonth == parseInt(this.startDate.split('-')[1])){
          this.initCalendar(dObj,parseInt(this.startDate.split('-')[2]))
        }else{
          this.initCalendar(dObj)
        }
      }else{
        if(this.inputDate && nYear == parseInt(this.inputDate.split('-')[0]) && nMonth == parseInt(this.inputDate.split('-')[1])){
          this.initCalendar(dObj,parseInt(this.inputDate.split('-')[2])) 
        }else{
          this.initCalendar(dObj)
        } 
      }
    },

    clearInputDate(){
      this.inputDate = ''
    },

    clearRangeDate(){
      this.startDate = '';
      this.endDate = ''
    },

    calendarClose(){
      if(this.rangeSel){
        if(!this.endDate){
          this.endDate = this.tempEndDate
        }
      }
      this.calendarShow = false

      this.qSelYearShow = false // 快捷年菜单关闭
      this.qSelMonthShow = false // 快捷月菜单关闭
    },

    // -------------年份快捷菜单-------------
    qSelectYearOpen(qSelYear){
      this.qSelYearShow = true
      this.qSelYear = qSelYear
    },
    yearChange(goFlag){
      this.qSelYear += goFlag*12
    },

    qSelMonthOpen(qSelYear){
      this.qSelMonthShow = true
      this.qSelYear = qSelYear
    },

    qSelMonthClick(year,month){ 
      
      let dObj =this.getDate(parseInt(year)+'/'+parseInt(month)+'/01') 
      let nMonth = dateFormat(new Date(this.tempDate),'MM')
      let nYear = dateFormat(new Date(this.tempDate),'yyyy')

      if(this.rangeSel && this.startDate){
        if(nYear == parseInt(this.startDate.split('-')[0]) && nMonth == parseInt(this.startDate.split('-')[1])){
          this.initCalendar(dObj,parseInt(this.startDate.split('-')[2]))
        }else{
          this.initCalendar(dObj)
        }
      }else{
        if(this.inputDate && nYear == parseInt(this.inputDate.split('-')[0]) && nMonth == parseInt(this.inputDate.split('-')[1])){
          this.initCalendar(dObj,parseInt(this.inputDate.split('-')[2])) 
        }else{
          this.initCalendar(dObj)
        } 
      } 

      this.qSelYearShow = false // 快捷年菜单关闭
      this.qSelMonthShow = false // 快捷月菜单关闭
    }

     
  },
  watch:{
    /*c_line(newVal){
      console.log(newVal)
    }*/
  },
  components:{ 
  },
  mounted(){
    //this.initCalendar(this.getDate())
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
    height 24px
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
  z-index 1001
  .panel-head-wrap
    position relative
    height 40px
    .panel-header
      position absolute
      display flex
      height 100%
      width 100%
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
  .panel-body-wrap
    position relative
    .panel-date-body .week-label
      display flex
      width 100%
      border-top:1px solid #f5f5f5
      border-bottom:1px solid #f5f5f5
      background skyblue
      li
        flex 1
        text-align center
        line-height 30px
    .panel-date-body .calendar
      display flex
      flex-flow row wrap
      justify-content start
      background:#f5f5f5
      li
        position relative
        height 0
        flex 1 1 calc(100%/7)
        min-width calc(100%/7)
        max-width calc(100%/7)
        padding-top: 14.285714%
        background white
        for n in (0..6)
          saturday = 8 - n  //  7n-n+1
          sunday = 9 - n  // 7n-n+2 
          &.expand-{n}
            counter-reset:date 
            flex n n 14.285714% * n
            min-width 14.285714% * n
            max-width 100%
            background #f5f5f5
            //n=0 sat=8,一行正常日期 是7个，正常日期前还有个.empty 节点
            ~:nth-child(7n+{saturday}),
            ~:nth-child(7n + {sunday})
              color orange
            if n==0
              ~:nth-child(2)
                color orange
        &:not(:first-child).actived 
          background skyblue
        &:not(:first-child).disabled 
          background #f5f5f5        
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
        &:not(:first-child).pending // 最后占位行
          background: #f5f5f5
          &:before
            content:''  
    .panel-year-body, .panel-month-body
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background white 
      ul
        width 100%
        height 100%
        li
          float left
          display block
          position relative
          height 25%
          width 33.3333% 
          text-align center
          &:before    // 定义顶部边框样式 (<1px)
            content ''
            position absolute
            top 0
            left 0
            right 0  // left right 为0 表示 width100%
            height 1px
            border-top 1px solid #D9D9D9 // 顶部边框颜色
            color #D9D9D9
            transform-origin 0 0
            transform scaleY(0.5)  // Y轴方向 搜索0.5
          &:after   // 定义 左边的 边框
            content ''
            position absolute
            left 0
            top 0
            bottom 0
            width 1px
            border-left 1px solid #D9D9D9
            color #D9D9D9
            transform-origin 0 0
            transform scaleX(0.5)
          em
            display inline-block
            width 0
            height 100%
            vertical-align middle
          span
            vertical-align middle    
      
      
        

 
</style>



