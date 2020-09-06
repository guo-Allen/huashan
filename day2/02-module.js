// 一个文件就是一个模块
// 每一个模块都是一个私有的作用域
//    默认模块内部定义的所有成员都只能在模块内部访问
// require 函数用来加载一个模块
//      1. 从头到尾执行模块中的代码
//      2. 可以得到模块内部的通信接口对象：module.exports
// 总结：
//    Node 中完全就是采用的是模块化的编程方式
//    每一个 js 文件就是一个模块
//    每一个模块就是一个私有的作用域
//    每一个模块内部都提供了一个通信接口对象：module.exports 接口对象
//    模块与模块可以通过 require 函数进行加载执行，并得到被加载模块内部的接口对象 module.exports
//    模块与模块之间还可以相互依赖
//    例如 a 加载了 b、b加载了c、c加载了d，那这里的 a 就是入口模块
//    使用 require 注意事项：
//        1. 加载相对路径文件模块一定要以 ./ 或者 ../ 开头
//        2. 可以省略后缀名 .js ，Node 推荐省略后缀名
// var name = '02-module'
// console.log(111)
// require('./module/module1.js')
// console.log(444)
// console.log(name)
// console.log(555)

var name = '02-module'
var module1 = require('./module/module1.js')

module1.f('jack')
console.log(module1.name)
