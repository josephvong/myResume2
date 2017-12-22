// 日历组件 使用到的 工具函数 （可能部分函数与cusFn 有重复，但为保证 日历控件的 独立性，决定分离出来）

//------------------日期输出格式化---------------------
export function dateFormat(oDate,fmt) {
    var o = {
        "M+": oDate.getMonth() + 1, //月份
        "d+": oDate.getDate(), //日
        "h+": oDate.getHours(), //小时
        "m+": oDate.getMinutes(), //分
        "s+": oDate.getSeconds(), //秒
        "q+": Math.floor((oDate.getMonth() + 3) / 3), //季度
        "S": oDate.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)){fmt = fmt.replace(RegExp.$1, (oDate.getFullYear() + "").substr(4 - RegExp.$1.length));}
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/* 使用方式
var nowDate = new Date(1511953982470); 
console.log(dateFormat(nowDate,"yyyy-MM-dd hh:mm:ss")) // '2017-11-29 19:13:02'
console.log(dateFormat(nowDate,"yyyy-MM-dd hh:mm")) // '2017-11-29 19:13'
console.log(dateFormat(nowDate,"yyyy-MM-dd hh")) // '2017-11-29 19'
console.log(dateFormat(nowDate,"yyyy-MM-dd")) // '2017-11-29'
console.log(dateFormat(nowDate,"yyyy-MM")) // '2017-11'
console.log(dateFormat(nowDate,"yyyy")) // '2017'
*/