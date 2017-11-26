// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  /*build: {  // npm run build 打包的配置项
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),  //入口文件路径名
    assetsRoot: path.resolve(__dirname, '../dist'),  // 静态资源生成 后 的存放位置
    assetsSubDirectory: 'static', //静态资源子目录
    assetsPublicPath: '/',  // 部署后 前端静态资源 放置的 目录 （默认为域名的根目录）
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },*/
  dev: {  // npm run dev 开发环境指令 的配置
    env: require('./dev.env'),
    port: 8080,  // 服务器端口
    autoOpenBrowser: true,  // 自动打开浏览器
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {       // API的 代理 表
        '/searchApi':{  // 搜索案例的 代理 配置
            target:'http://tsearch.9kacha.com/dataApi/',//
            changeOrigin: true,
            pathRewrite: {
              '^/searchApi': ''
            }
        },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
