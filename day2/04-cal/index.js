// 这回 cal  是一个目录
// 去该目录中找 package.json 文件
// 如果找到，找 mian 属性 拿到对应的值
var cal = require('./cal')
console.log(cal.add(10, 20))
console.log(cal.sub(30, 20))
