console.log('module1.js 文件模块被执行了')
var module2 = require('./module2.js')

console.log(module2)

function f(name) {
  console.log('hello ' + name)
}

var name = 'module1'

// 模块.导出.导出的成员名 = 成员值
module.exports.f = f
module.exports.name = name
