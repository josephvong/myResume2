/*
	此 接口调用函数 在 lazyload 案例中使用
*/
/*
	此接口 在 lazyload 案例中 中使用
*/
import jsonp from 'common/js/jsonP'

const commonParams = {  // qq 音乐接口 的 jsonp url 公共参数
	g_tk: 1928093487,
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	format: 'jsonp'
}

const options={
	param:'jsonpCallback', // qq 音乐接口中 jsonp 的 预定义 回调函数
	prefix:'jp'
} // 此 options 对象为 jsonp 函数的 opt 参数  https://github.com/webmodules/jsonp

export function getPlayerList(){
	const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';

	const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 50,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url,data,options)
}