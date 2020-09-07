var path = require('path')

// config.js 一般就放到网站根目录，不变
// 配置一些可能变化的数据
// 例如 路径
module.exports = {
  viewPath: path.join(__dirname, 'views')
}
