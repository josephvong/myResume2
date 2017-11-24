/*
阿里团队 rem 布局 的最新解决方案 ：
适用范围：
	网页效果图宽度是要640或者750
	iphone 5 320 x 2 = 640
	iphone 6 的截图宽度 375 × 2 = 750
    iphone 6 sp 的截图宽度 414 × 3 = 1242 (此时的dpr为3，1rem对150px，)

注意事项：
如果dpr=1(如电脑端），则html的font-size为50px，此时 1rem = 50px
如果dpr=2(如iphone 5 和 6），则html的font-size为100px，此时 1rem = 100px
如果dpr=3(如iphone 6 sp），则html的font-size为150px，此时 1rem = 150px
如果dpr为其他值，即便不是整数，如3.4 , 也是一样直接将dpr 乘以 50 。

使用说明：
使用本rem解决方案：使用的尺寸必须根据 640/750 设计图 的原始尺寸进行换算，无需 除以2
	例如 ： 设计图 为 100px；以往做法为 100/2=50px 再进行换算， 此处 直接用 100px进行换算
					如果 文字 需要 14px 则 为 0.28rem

部分bug 处理
在 微信 X5 内核中，当一段文本字数增多时，字体会主动被放大，会检测页面中的主字体，当某一块字体在
我们的判定规则中，认为字号较小，并且是页面中的主要字体，就会采取主动放大的操作。
解决方法：在reset.css 中添加 以下 样式
*, *:before, *:after { max-height: 100000px }

参考： https://segmentfault.com/a/1190000007350680
*/
!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);  // 可以修改 此 flex() 调用函数的 配置，此处 为 100px对1rem