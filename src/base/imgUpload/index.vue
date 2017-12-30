<template>
<div ref="imgFile"> 
  <input style="display:none"  type="file" :id="input_id" accept="image/gif,image/jpg,image/jpeg,image/png" @change="imgUpload" />
  <!--自定义控制label(样式)的-->
  <slot name="label" :input_id="input_id" :picValName="picValName" :headerImage="headerImage" :isProcessing="isProcessing"></slot>   
  <slot name="displayimg" :input_id="input_id" :picValName="picValName" :headerImage="headerImage" :isProcessing="isProcessing"></slot> 
</div>  
</template>

<script type="text/ecmascript-6"> 
import Exif from 'exif-js' 

export default {
  name: 'imgUpload',
  props:{
    input_id:{
      type:String,
      default:'myImageUpload'
    }
  },
  data () {
    return {
      headerImage:'', // 解析出来的 图片 url 
      picValue:'', // 图片上传的value
      picValName:'', // 上传图片名 
      isProcessing:false,
    }
  },
  computed:{

    //-------------------------------
    
  },
  activated(){
     
  },
  created(){
    this.$watch('headerImage',(newValue)=>{
      this.$emit('imgUrlChange',newValue)
    })
  },
  methods:{
    labelClick(){ 
      this.$refs.imgFile.querySelector('#'+this.input_id).click() 
    },
    imgUpload(event){
      let files = event.target.files || event.dataTransfer.files;
      if(!files.length) return
      this.picValue = files[0];
      this.picValName = this.picValue.name
      this.isProcessing = true; 
      this.imgPreview(this.picValue)
    },

    // 图片数据的处理 并 显示
    imgPreview(file){ 
      let This = this;
      let Orientation; // 方向

      Exif.getData(file,function(){
        // 通过 Exif.getTag() 来 计算 图片的方向 
        Orientation = Exif.getTag(this,'Orientation')
        // alert(Orientation) // Exif.getTag()的返回值仅在 移动端拍照上传图片可获取值， 上传本地图片为undefind
      })

      if(!file || !window.FileReader){ return } // 没有图片 或者 没法读取文件 返回 

      if(/^image/.test(file.type)){ // 正则判断 file的类型是否是img 类型 
        let reader = new FileReader(); // 创建一个 fileReader

        let errNoticTimer = setTimeout(()=>{// 启动一个错误提醒（20s内图片上传/压缩失败， 提示错误）
          alert('设备上传图片失败')
          This.isProcessing = false;
        },20000)
 

        reader.onload=function(){  
          let result  = this.result // 此处的this 为 reader
          let img = new Image();  // 创建一个 新 图片对象 （用作处理图片）
          img.src = result  

          // 如果上传图片大小 小于 10k 直接上传
          if(this.result.length <=(100*1024)){
            This.headerImage = this.result // 赋值给当前组件定义的headerImage 属性
            clearTimeout(errNoticTimer)  // 清除错误提醒
          }else{  // 如果 图片 大于 10k
            img.onload = function(){
              // 调用组件的图片压缩函数(传参为 图片处理对象，Orient方向参数, cb回调)
              let data = This.compress(img,Orientation,8,()=>{ 
                This.isProcessing = false;
                clearTimeout(errNoticTimer)  // 清除错误提醒
              }); 
              This.headerImage = data;
            }
          }
        }

        reader.readAsDataURL(file);  // 将文件解析为 dataUrl 格式
      }
    },

    // 图片压缩处理函数： 参数： 图片对象、 旋转方向（exif计算得出）、压缩率（一个数字，8 表示800万像素）, cb回调函数
    compress(img,Orientation,rate,cb){
      console.log('compress start')
      //正常 canvas ， 直接绘制一张图片（低于100w像素）
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext("2d");

      // 瓦片绘制 的 canvas （用于对100w像素的图片 进行切片绘制）
      let tCanvas = document.createElement('canvas');
      let tctx = tCanvas.getContext('2d');

      let initSize = img.src.length;  // 图片初始大小（容量大小）
      let width = img.width  // 图片 原始 宽 (物理px)
      let height = img.height  // 图片原始 高 (物理px)
      console.log(width,height)

      // 如果图片 大于四百万像素，计算压缩比 并将 大小压制 400万像素以下
      let ratio 
      if((ratio = width*height/(rate*1000000))>1){ // 图片w*h/4000000 >1 表示 超过 400w像素 
        console.log('larger than 400w px')
        ratio = Math.sqrt(ratio) // ratio = width*height/4000000 表示 图片控制在 400w像素以内
        width /= ratio;  // 将 图片的 宽度 设置为 400w像素 之内的宽
        height /= ratio;  // 将 图片的 高度 设置为 400w像素 之内的高
      }else{
        ratio = 1 
      }

      // 将 canvas 宽高 设置为 图片 （处理后）的宽高（此时图片被 限制在 400w像素以内）
      canvas.width = width;
      canvas.height = height; 

      ctx.fillStyle = '#fff' // 画板填充色为 白
      ctx.fillRect(0,0,canvas.width,canvas.height); // 设定画板的填充范围（左上角至右下角）

      // 如果图片像素 大于 100万 则 使用瓦片绘制
      let count;
      if((count = width*height / 1000000)>1){  // 计算 压缩后图片的 像素 ，如果大于 100w 像素
        console.log('超过100w像素')
        //将 分辨率 开平方，确定 图片有多少个canvas瓦片来绘制 
        count = ~~(Math.sqrt(count)+1) //（~~运算符表示将一个值转化为整 数字，此处确保count为整 数字）
        let nw = ~~(width/count);  // 计算 每块瓦片的 宽度
        let nh = ~~(height/count); // 计算每块瓦片的高度

        tCanvas.width = nw;
        tCanvas.height = nh;

        // 瓦片绘制的算法
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            // 绘制每个小块的 tCanvas 瓦片
            tctx.drawImage(img, i*nw*ratio, j*nh*ratio, nw*ratio, nh*ratio, 0, 0, nw, nh)
            // 再将 tCanvas 作为 目标 逐个 绘制在 大canvas上
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);   
          } 
        }

      }else{  // 如果图片 小于 100w 像素，无需瓦片绘制
        console.log("小于100w像素")
        ctx.drawImage(img, 0, 0, width, height);  // 直接使用 大canvas 根据 图片的w h 进行绘制
      }
      

      // 修复ios 拍照上传 的旋转问题
      if(Orientation && Orientation !==1){
        switch(Orientation){
          case 6: // 需要顺时针（向左）转90度
            this._rotateImg(img,'left',canvas);
            break;
          case 8://需要逆时针（向右）90度旋转  
              this._rotateImg(img,'right',canvas);  
              break;  
          case 3://需要180度旋转  
              this._rotateImg(img,'right',canvas);//转两次  
              this._rotateImg(img,'right',canvas);  
              break;  
        }
      }

       //进行最小压缩  
      let ndata = canvas.toDataURL('image/jpeg', 0.1);  
      console.log('压缩前：' + initSize);  
      console.log('压缩后：' + ndata.length);  
      console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");  
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0; 
      // 若 有 回调函数，执行回调函数
      if(cb && typeof(cb)=='function'){
        cb.apply(this) 
      } 
      return ndata;  

    },

    // 图片方向 的旋转处理 参数：图片对象、旋转方向、canvas对象
    _rotateImg(img,direction,canvas){
      // 旋转方向的 步数 （4步，0-3，0为 不旋转，1表示旋转90度）
      const min_step = 0;
      const max_step = 3; // 最大旋转  270度 ， 在旋转一次 就回到原位

      if(img == null) return // 没有图片返回

      let height = img.height
      let width  = img.width;
      let step = 2
      if(step ==null){
        step = min_step;
      }

      if(direction == 'right'){ // 向右旋转
        step++; // step +1
        step > max_step && (step = min_step);// 如果step超过3 表示旋转了超过270度，step 复位为最小步 0
      }else{  // 向左旋转
        step--;
        step < min_step && (step = max_step);// 如果step超过3 表示旋转了少于0度，step 复位为最大步 3 
      }

      let degree = step * 90 * Math.PI/180;  // 计算旋转角度（根据step 来计算）
      let ctx = canvas.getContext('2d');

      switch (step) {      
        case 0:      
          canvas.width = width;      
          canvas.height = height;      
          ctx.drawImage(img, 0, 0);      
          break;      
        case 1:      
          canvas.width = height;      
          canvas.height = width;      
          ctx.rotate(degree);      
          ctx.drawImage(img, 0, -height);      
          break;      
        case 2:      
          canvas.width = width;      
          canvas.height = height;      
          ctx.rotate(degree);      
          ctx.drawImage(img, -width, -height);      
          break;      
        case 3:      
          canvas.width = height;      
          canvas.height = width;      
          ctx.rotate(degree);      
          ctx.drawImage(img, -width, 0);      
          break;  
      } 
    },

    // 清空图片表单
    clearInput(){
      this.headerImage='' 
      this.picValue='' 
      this.picValName=''
    }
    //-----------------------------
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
   
</style>

<!--
使用 方式 label 和 预览 部分 通过 slot 方式 插入
<imgUpload class="img-upload has-name" @imgUrlChange="thumbNailChange">
  label部分
  <template slot="label" slot-scope="props">
    <label class="file-label" :for="props.input_id">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fa fa-upload"></i>
        </span>
        <span class="file-label">
          上传图片
        </span>
      </span>
      <span class="file-name">
        {{props.picValName}} 
      </span>
    </label>
  </template>
  预览部分
  <template slot="displayimg" slot-scope="props">
    <div  class="show" v-show="props.headerImage">  
      <div class="picture" :style="'backgroundImage:url('+props.headerImage+')'"> 
      </div>  
    </div>
  </template> 
</imgUpload>
-->
 

