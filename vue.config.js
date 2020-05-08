// 自定义配置，因为脚手架3以上版本创建的项目的配置都隐藏起来了（在node_module文件夹中），
// 前提是在创建项目的时候手段选择了由自定义文件进行配置
module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名，注意@代表src,
      // 注意一点，在html的有些标签中的src属性设置的时候，例如
      // <img src="assets/img/p1.jpg></img>"
      // assets不会被正常解析，需要加上~
      // <img src="~assets/img/p1.jpg></img>"
      // 但是对于@却可以
      // <img src="@/assets/img/p1.jpg></img>"
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}