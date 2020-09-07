var fs = require('fs')

// fs 文件操作模块对于大部分 API 都提供了异步和同步两种模式

// 同步API
// 同步 API 会阻塞当前程序继续往后执行，如果一个文件很大，则需要很长时间
// 同步 API，如果有错误，会直接抛出异常
// 如果想要捕获同步 API 的异常，使用 try-catch 捕获就可以了

// try {
//   var data = fs.readFileSync('./feedba', 'utf8')
//   console.log(data)
// } catch (e) {
//   console.log('读取文件失败了')
// }

// 异步API
// 异步 API 无法通过同步的形式接收返回值
// 异步 API 如果发生异常，不会主动抛出异常
//    异步 API 无法通过 try-catch 捕获异常
//    异步 API 往往通过一个回调函数，第一个参数的 err 来传递这个错误对象

var foo

// 找一个人去帮我做读文件
fs.readFile('./feedback.md', 'utf8', function (err, data) {
  if (err) {
    return console.log('读取文件失败了')
  }
  foo = data
  console.log('读取文件成功了')
  console.log(data)
})

console.log(foo)
