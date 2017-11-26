require('./check-versions')()
//const testApiRoutes = require('./testApi') // 测试API的路由组件

var config = require('../config_dev')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.test.conf') // 此处使用 test配置

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

/*======================在开发环境服务器下 创建 代理接口======================================*/
//由于 部分 qq 音乐的接口 是需要 在header中 用 c.y.qq.com 域名验证才能正常访问
//因此下面使用 express 创建一个代理接口来获取需要验证的api
/*
var axios = require('axios') // 调用 axios 包

var apiRoutes = express.Router()  // 创建一个api路由

// 代理获取 播放列表 的 接口
apiRoutes.get('/getDiscList',function(req,res){ //参数为request , response
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' // qq推荐歌单的api连接
  axios.get(url,{
    headers:{ //  axios 第二个参数 option 中可以定义 header
      referer:'https://c.y.qq.com', host:'c.y.qq.com'  //
    },
    params:req.query  // 此处是 从前端 传送过来的 接口参数
  }).then((response)=>{
    res.json(response.data)  // 向前端 发送 返回 的 数据data
  }).catch((err)=>{
    console.log(err)
  })
})
 
app.use('/api',apiRoutes)
*/
/*======================在开发环境服务器下 创建 代理接口======================================*/

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
