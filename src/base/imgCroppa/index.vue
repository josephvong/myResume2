<template>
<div class="croppa-wrap" ref="imgCroppa" v-show="isShow" > 
  <input ref="croppaFile" style="display:none"  type="file"  accept="image/gif,image/jpg,image/jpeg,image/png" @change="fileChangeHandle" />
  <div class="croppa-title">请调整图片</div>
  <div class="croppa-body" :style="{paddingTop: boxScale?'125%':'100%'}" >
    <img ref="previewImg" :src="uploadImgSrc" :style="imageStyle" alt="">
    <div class="touch-zone" ref="touchZone"
         @touchstart.prevent="zoneTouchStart"
         @touchmove.prevent = "zoneTouchMove" 
    ></div>
  </div>
  <div class="croppa-footer"></div> 
</div>  
</template>

<script type="text/ecmascript-6"> 
import Exif from 'exif-js' 
const getDinstance = function (point0, point1) {
  return Math.sqrt(Math.pow(point0.pageY - point1.pageY, 2) + Math.pow(point0.pageX - point1.pageX, 2))
}
export default {
  name: 'imgCroppa',
  props:{
    boxScale:{ // 裁剪比例（false为1:1，true为1:1.25）
      type:Boolean, 
      default:false
    }
  },
  data () {
    return {
      isShow:false,
      //-----------------
      uploadImgSrc:'',
      //uploadImgData:{ w:0, h:0 },
      //previewRatio:0,
      //-----------------
      imageState: {
        left: 0,
        top: 0,
        scale: 1,
        width: 0,
        height: 0,
        originX: 0,
        originY: 0
      },
      touchPos: {
        x: 0,
        y: 0
      },
      imageStyle: {
        top: '0',
        //left:'20px'
        transform: 'translate3d(0px, 0px, 0px) scale(1)',
        transformOrigin: 'left top'
      },
      imgInitTop: 0, 

    }
  },
  computed:{
    croppaBodyRect(){
      if(this.boxScale){
        return {w:document.body.clientWidth,h:document.body.clientWidth*1.25}
      }else{
        return {w:document.body.clientWidth,h:document.body.clientWidth}
      }
    }
    //-------------------------------
    
  },
  activated(){
     
  },
  created(){
     
  },
  methods:{
    imgUpload(){
      this.$refs.croppaFile.click()
    },
    fileChangeHandle(event){ 
      let files = event.target.files || event.dataTransfer.files; 
      if(!files.length) return 
      this.imgPreview(files[0]) 
            
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

        reader.onload=function(){  
          let result  = this.result // 此处的this 为 reader
          let img = new Image();  // 创建一个 新 图片对象 （用作处理图片）
          img.src = result 
            
          img.onload = function(){
            
            if(Orientation===6 || Orientation===8){
              This.imageState.width = img.height
              This.imageState.height = img.width
              This.imageState.scale = document.body.clientWidth/img.height>1?1:document.body.clientWidth/img.height
            }else{
              This.imageState.width = img.width
              This.imageState.height = img.height
              This.imageState.scale = document.body.clientWidth/img.width>1?1:document.body.clientWidth/img.width
            } 
            // 处理图片旋转
            let data = This.fixImage(img,Orientation); 
            This.isShow = true
            This.uploadImgSrc = data;
            //let scale = This.imageState.scale>=1?1:This.imageState.scale
            
            //This.imageStyle.transform = 'translate3d(0px, 0px, 0px) scale('+ 1 +')'
            //This.imageStyle.transform = 'translate3d(0px, 0px, 0px) scale('+This.imageState.scale+')'
          }
            
          
        }

        reader.readAsDataURL(file);  // 将文件解析为 dataUrl 格式
      }
    },

    fixImage(img,Orientation){
      //正常 canvas ， 直接绘制一张图片（低于100w像素）
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext("2d"); 
      
      let width = img.width  // 图片 原始 宽 (物理px)
      let height = img.height  // 图片原始 高 (物理px)
      

      // 将 canvas 宽高 设置为 图片 （处理后）的宽高（此时图片被 限制在 400w像素以内）
      canvas.width = width;
      canvas.height = height; 

      ctx.fillStyle = '#fff' // 画板填充色为 白
      ctx.fillRect(0,0,canvas.width,canvas.height); // 设定画板的填充范围（左上角至右下角）


      ctx.drawImage(img, 0, 0, width, height);  // 直接使用 大canvas 根据 图片的w h 进行绘制

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
      let ndata = canvas.toDataURL('image/jpeg', 1); // 0.1
      return ndata;  
    },

    // 图片压缩处理函数： 参数： 图片对象、 旋转方向（exif计算得出）、压缩率（一个数字，8 表示800万像素）, cb回调函数
    compress(img,Orientation,rate,cb){ 
      //正常 canvas ， 直接绘制一张图片（低于100w像素）
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext("2d");

      // 瓦片绘制 的 canvas （用于对100w像素的图片 进行切片绘制）
      let tCanvas = document.createElement('canvas');
      let tctx = tCanvas.getContext('2d');

      let initSize = img.src.length;  // 图片初始大小（容量大小）
      let width = img.width  // 图片 原始 宽 (物理px)
      let height = img.height  // 图片原始 高 (物理px)
      

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
    //-----------------------------

    //--------------拖动函数---------------
    getFocalPoint (point0, point1) { // 两手指 同时触摸屏幕时 返回 x y 坐标
      return {
        x: (point0.pageX + point1.pageX) / 2,
        y: (point0.pageY + point1.pageY) / 2
      }
    },
    zoneTouchStart(event){ 
      let fingerCount = event.touches.length
      if(fingerCount){
        let touchEvent = event.touches[0]
        this.touchPos = {
          x:touchEvent.clientX,
          y:touchEvent.clientY
        }
      }
      if(fingerCount>=2){
        // 获取两点距离、中点位置；两点距离old/new=放大倍数；中点位置，缩放中心；
        let point0 = event.touches[0]
        let point1 = event.touches[1]

        this.distance = getDinstance(point0, point1)
        this.touchPos = this.getFocalPoint(point0, point1) // 取两个触摸点的距离中间点
        // 设置缩放倍数，
        console.log(this.touchPos)
      }
    },

    zoneTouchMove(event){
      let fingerCount = event.touches.length
      let touchEvent = event.touches[0]

      if(fingerCount===1){
        let distX = touchEvent.clientX - this.touchPos.x
        let distY = touchEvent.clientY - this.touchPos.y
        let newX = this.imageState.left - distX
        let newY = this.imageState.top - distY

        let scale = this.imageState.scale

        let maxX = this.imageState.width * scale - this.croppaBodyRect.w
        let maxY = this.imageState.height * scale - this.croppaBodyRect.h

        this.imageState.left = newX < 0 ? 0 : (newX > maxX ? maxX : newX)
        this.imageState.top = newY < 0 ? 0 : (newY > maxY ? maxY : newY)
        this.touchPos.x = touchEvent.pageX
        this.touchPos.y = touchEvent.pageY 
      } else if(fingerCount > 1){
        let point0 = event.touches[0]
        let point1 = event.touches[1]

        let distance = getDinstance(point0, point1)
        let zoom = distance / this.distance

        let scale = zoom * this.imageState.scale

        let maxX = this.imageState.width * scale - this.croppaBodyRect.width
        let maxY = this.imageState.height * scale - this.croppaBodyRect.height
        let touchPos = this.getFocalPoint(point0, point1)
        let newX = zoom * (this.imageState.left + touchPos.x) - touchPos.x
        let newY = zoom * ((this.imageState.top - this.imgInitTop) + touchPos.y) - touchPos.y + this.imgInitTop


        this.distance = distance
        if (scale < this.minScale) {
          this.imageState.scale = this.minScale
        } else {
          this.imageState.scale = scale
          this.imageState.left = newX < 0 ? 0 : (newX > maxX ? maxX : newX)
          this.imageState.top = newY < 0 ? 0 : (newY > maxY ? maxY : newY)
        }
        this.touchPos = touchPos

      }     
    }
  },
  watch:{
    'imageState':{
      handler:function(newVal,oldVal){
         this.imageStyle.transform = 'translate3d(-' + newVal.left + 'px, -' + newVal.top + 'px, 0px) scale(' + newVal.scale + ')' 
      },
      deep:true // 此处imageState 必须使用深度监听，可以监听 json对象里面的第二层变化
    } 
  },
  components:{ 
  },
  mounted(){
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.croppa-wrap
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
  overflow: hidden;
  .croppa-title
    width 100%
    height 1rem
    line-height 1rem
    text-align center
    font-size 0.4rem
    background pink
  .croppa-body
    position relative
    width 100%
    height 0
    background green
    img
      display block
      position absolute 
      //left 0
      //top 0
      //width 100%
    .touch-zone
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background rgba(0,0,0,0.5)
    
    
</style>
 

