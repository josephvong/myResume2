import originJSONP from 'jsonp'

export default function jsonp(url,data,option){
	//判断url里是否有'?'字符， 没有就 在 param(data)返回的字符串前面添加'?'进行拼接，否则用"&"
	url += (url.indexOf('?')<0?'?':'&')+param(data) // 拼接好 参数 的 url
	return new Promise((resolve,reject)=>{
		originJSONP(url,option,(err,data)=>{
			if(!err){
				resolve(data)
			}else{
				reject(err)
			}
		})
	})
}

// 将参数 拼接到 jsonp url 后面的 函数
function param(data){  // data 是个 json
 	let url = ''
	for(var k in data){
		let value = data[k]!==undefined?data[k]:''// value 为 data[k] 或空 
		url += `&${k}=${encodeURIComponent(value)}`  // 拼接 &key=value 的字符串， value用encodeURIComponent()解析
	}

	return url?url.substring(1):''
	//substring(1)表示 返回 字符串从第1位以及后面所有的字符串（用于裁去第0位的‘&’）
}

/* JSONP 库 的 参数：
调用  ：JSONP(url,option,fn)
url: 访问的url， url 中必须 拼接好必须的 参数 （以 '?key1=value1&key2=value2...' 形式）
options 参数为 配置项：
	param (String)：param 表示 jsonP 发给后端 的 随机(或者说动态) json格式数据的 调用函数名
								  例如：param: callBackFn 就是说 jsonP 的 获取的 数据，以 ‘callBackFn’这个函数名来调用获取
	timeout (Number) 在超过访问时间后报错，0 表示不报错，默认 60000)
	prefix (String) jsonp responses 的预处理 函数名
	name (String) name of the global callback functions that handle jsonp responses (defaults to prefix + incremented counter)
	fn callback
fn 回调函数
	 回调函数 的参数为 err , data
*/