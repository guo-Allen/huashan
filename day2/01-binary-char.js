var fs = require('fs')

// 指定 utf8 编码，只是针对文本字符串
// 只要响应文本文件，最好都在响应头中加入 charset=utf-8
fs.readFile('./README.md', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  // console.log(data.toString())
  console.log(data)
})
