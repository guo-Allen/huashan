// 如果一个模块想要向外暴露一个单独的接口成员
// 例如只暴露一个函数、字符串、数字、数组 等成员
// 就需要通过给  module.exports 结构对象 赋值即可
// 问题？能不能给 exports 直接赋值呢？
// **每一个模块内部最终向外暴露的是 module.exports 接口对象**
// ** exports 只是 module.exports 接口对象的一个引用 **
// ** 所以一旦给 exports 接口对象赋值，exports 和 module.exports 就失去引用关系 **

module.exports = function (x, y) {
  return x + y
}

// 错误的，不生效
// exports = function (x, y) {
//   return x + y
// }
