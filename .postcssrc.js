// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {},
    /*"postcss-px2rem":{  // 设置 postcss-px2rem 需要使用cube-UI 库的情况下配置
        remUnit: 50 
        // rem方案的比例为：window.flex(100,1) 
        // 假如设备显示需求为14px, 设计图为28px, 比例 1:2 
        // rem比率为 1：100， 因此代码为 0.28rem (28px/100)
        // UI库的的 尺寸为 1:1 (设备显示需求14px,代码就是14px)
        // 因此 px2rem 需要 设置remUnit:50 (100/2)  (UI库中px转化为：14px/100/2) 
    }*/
  }
}
