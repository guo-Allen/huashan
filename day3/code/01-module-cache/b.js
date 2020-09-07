console.log('b.js 文件模块被加载了')

var foo = 'bar'

exports.foo = foo

setTimeout(function () {
  foo = 'baz'
}, 2000)
