console.log(module.exports === exports)

exports.add = function (x, y) {
  return x + y
}

exports.sub = function (x, y) {
  return x - y
}

exports.multiply = function (x, y) {
  return x * y
}

exports.divide = function (x, y) {
  return x / y
}

// 在每一个模块内部还提供了一个成员：exports 接口对象
// exports 就是 module.exports 接口对象的一个引用
// exports === module.exports
