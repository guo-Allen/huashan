var moment = require('moment')
var itcast = require('itcast')
console.log(itcast)
// 如果被加载的模块后缀名就是 .js ，建议省略
// 如果没有找到 .js 则找 .json
// 对于加载 json 文件，node 直接直接通过读文件的形式将该文件内容读取出来
// 然后通过 JSON.parse() 方法将 json 文件内的字符串转为对象，作为暴露的接口
// 建议：如果是加载 .json 文件，建议加上 .json 后缀名，查找速度相对于来说快一些
var aModule = require('./a.json')

console.log(aModule)

// 加载过的 json 文件，也会缓存起来
setTimeout(function () {
  console.log(aModule)
}, 5000)
