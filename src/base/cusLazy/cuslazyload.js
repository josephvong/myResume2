/*
代码参考 http://www.jb51.net/article/112355.htm
进阶阅读 ：http://blog.csdn.net/u010014658/article/details/73477232

使用： 在 main.js 中 ：
	import cusLazyLoad from 'base/cusLazy/cuslazyload' // 自定义的懒加载控件函数
	Vue.use(cusLazyLoad);  // 使用自定义的 cusLazyLoad 指令

*/
import {findTargetParent} from 'common/js/cusFn' // 获取 监听 scroll 事件 的容器 的函数

export default (Vue,options={})=>{

	if(!Array.prototype.remove){
		//给 array 类定义一个 remove 函数
		Array.prototype.remove = function(item){ // 传参为 要 remove的 item
			if(!this.length) return
			var index = this.indexOf(item); //获取 要删除的 item 的index
			if(index>-1){ // 若 item 存在
				this.splice(index,1);
				return this
			}
		}
	}

	// 初始化选项：init 为 默认图片
	var init = {
		default:require('assets/img/jizhi.png')
	}

	// 需要进行监听的 图片列表，还未加载过的
	var listenList = [];

	// 已经加载过 的 图片(缓存)列表
	var imageCacheList = [];

	// 此变量为 使用 v-cuslazy 后 用于监听 scroll 事件的容器节点，在‘addListener’函数中判断获取
	// 由于项目中有可能 使用 容器来放置 列表，并且在容器内 进行scroll的操作，因此需要获取此容器
	let lazyScrollDom = null;


	//判断是否已经加载过的函数
	const isAlreadyLoad =(imgSrc)=>{
		// 判断 imgSrc 是否在 imageCacheList 数组中 （图片加载完毕，在isCanShow()中会push到cache数组）
		if(imageCacheList.indexOf(imgSrc)>-1){
			return true
		}else{
			return false
		}
	}

	//用于 是否可以加载的函数，如果可以就进行加载显示
	const isCanShow = (item)=>{ //在addListener 中 调用，参数item为 addListener 中创建的节点对应数据
		var ele = item.ele;
		var src = item.src;

		var top = ele.getBoundingClientRect().top // 计算元素上边距离页面上边的距离

		var windowHeight = window.innerHeight; // 屏幕可是高度

		if(top+10 < window.innerHeight){ // 如果 监听的img节点准备进入屏幕可视范围时（+10为预留一定空间）
			var image = new Image(); // 创建 img对象
			image.src = src;
			image.onload = function(){ //image对象 加载图片之后
				ele.src = src // 将 ele的 src 替换为 image 加载的src
				imageCacheList.push(src); // 将加载好的图片 添加到 imageCacheList 里面
				listenList.remove(item);  // 把 listenList 内加载好的图片 删除掉
			}
			return true  // 图片加载完成 跳出函数， 并返回 true 用作判断
		}else{
			return false  // 图片还未进入可视范围，
		}
	}

	// 输出 style 属性 的值 的函数
	const style = (el, prop) => {
	  return typeof getComputedStyle !== 'undefined'
	  ? getComputedStyle(el, null).getPropertyValue(prop)
	  : el.style[prop]
	}

	// 输出 节点overflow 样式属性 的值 的函数
	const overflow = (el) => {
    return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x')
	}

	// 获取 v-lazy 节点 能够监听 scroll 事件的 父容器节点
	const findScrollParent = (el)=>{
		if(!(el instanceof HTMLElement)){
			return window
		}
		let parent = el

		while(parent){
			// 如果 parent 是 body 或者 body以上 跳出循环
			if(parent === document.body || parent===document.documentElement){
				break
			}
			//如果 parent 没有父级，跳出循环
			if(!parent.parentNode){
				break
			}

			// 如果 parent 的 overflow 属性 值 为 auto 或者 scroll
			if (/(scroll|auto)/.test(overflow(parent))) {
        return parent // 输出 当前parent 指向的 节点
      }
      parent = parent.parentNode
		}
	}



	//监听 scroll 事件
	const onListenScroll = ()=>{
		// 使用scroll容器 监听 scroll 事件，触发 图片加载 函数
		lazyScrollDom.addEventListener('scroll',function(){
			var length = listenList.length;
			for(let i = 0 ; i<length; i++){
				isCanShow(listenList[i])
			}
		})
	}


	//定义 addListenner 函数，作为 自定义指令 要实现的 功能函数， 在 v-cuslazy 指令中 调用
	// 参数 ele为调用指令的 dom，binding为自定义指令的传入内容
	//例如：<img v-cuslazy="imageSrc" > ele是img binding是imageSrc
	const addListener = (ele,binding)=>{
		// 使用v-cuslazy指令 前，判断 监听 scroll 事件的 容器是否已经 找到
		if(!lazyScrollDom){
			lazyScrollDom = findScrollParent(ele); // 定义 监听 scroll事件的 父级容器
		}

		//console.log(ele.parentNode);
		var imgSrc = binding.value  // 要懒加载的图片src

		// ---------先判断 图片 是否已经加载好 ， 如果加载好，正常显示 ----------
		if(isAlreadyLoad(imgSrc)){ // 判断 图片src 是否可以 加载
			ele.src = imgSrc;  // 如果已经 可以加载，将 ele 的 src 属性 赋值（ele为img 节点）
			return false  // 结束函数
		}

		// ----------以下 是 图片未加载好 时 的 处理-----------
		// 创建一个 数据对象，对应 添加了cuslazy指令的 节点
		var item = {
			ele:ele,
			src:imgSrc
		}

		ele.src = init.default // 先将 默认图片 作为 目标节点 src 的临时值

		if(isCanShow(item)){ //将item 传入“isCanShow()” 如果返回 true，表示可以显示 图片
			return    //图片可以显示，则返回
			// isCanShow() 函数 会将 图片 进行 加载处理，加载成功，返回true
			//isCanShow() 会判断当前 img节点 是否已经进入 可视范围，未进入返回false，不进入此判断
		}

		 //否则（还未能显示），把 item 放入 listenList 数组内（未加载的图片数组）
		listenList.push(item)



		// 开始 监听 页面 scroll 事件
		onListenScroll()
	}
	/*以上一系列的处理流程为：
		判断 图片是否已经加载；
		创建节点/图片数据对象(item),
		判断item的图片是否 canshow，
		把未加载的图片item 放到listenList中
	这一系列的处理 是 节点添加 了 cuslazy 自定义指令后 自动执行
	*/

 // 定义 在 cuslazy指令的 'inserted' 和 ‘updated’两个钩子函数中调用addListener
	Vue.directive('cuslazy',{
		inserted:addListener, // 插入 后 执行addListener
		updated:addListener   // 数据更新后 执行 addListener
	})
}