# myresume2

> A Vue.js project


# 本项目 基本要点：

## npm指令
1. npm run dev : "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 0.0.0.0",
 开启 新 vue-cli 默认webpack-dev-server 调试环境
2. npm run start": "node build/dev-server.js",
   开启 build/dev-server.js (express 框架的开发服务器)
   dev-server.js 服务器 自运行 ‘config_dev/index’文件
   ‘config_dev/index’文件: 引用自旧版本vue-cli的config文件，此处只使用 了 dev环境的配置，用于取代原vue-cli 中 config 的 dev 环境配置 
   "node build/dev-server.js" 内 调用的是 'build/webpack-test.conf.js' 启动webpack配置，
   webpack-test.conf 配置 是配置调用开发服务器(build/dev-server.js)的运行环境 

3. "blogstart": "node server/server.js"
   开启 'server/server.js' 目前是 博客项目的 服务端文件，需要配合 本地 blogDB 开启 运行

4. "test": "npm run blogstart & npm run start",
    博客项目的快捷命令，同时开始 博客服务器和 开发服务器
5. "build": "node build/build.js"
    前端文件 打包输出 

## 多页面配置
> 'build/utils.js' 文件中 输出 “entries()”函数 调取 'src/page'文件夹内的 每个页面项目
  'build/utils.js' 文件中 输出 “htmlPlugin()”函数 将 'src/page'文件夹内 page项目 添加到 webpack 的 htmlPulgin 中解析
  在 除‘webpack-base-conf’文件以外所有的webpack配置文件中需要将“htmlPlugin()”拼接到 plugins 数组后面

## reset.css 和 rem.js 
> 在static 文件夹中 放置 reset.css 和 rem.js 作为 移动端 自定义UI开发时的标配设定（rem.js 推荐在 移动端使用，使用方式 见 rem.js）

## 引入 cube-ui 与 配合 rem.js 使用时的 postcss-px2rem 设置
> cube-ui 使用到 后编译，在webpack-base 中引入 ‘webpack-post-compile-plugin’, 并在 plugins 数组中调用
若cube-ui 需要 与 rem.js 结合使用，需要在 ‘.postcssrc.js’文件中 使用 postcss-px2rem 的配置 （只能在此情况下 开启 px2rem 配置）

