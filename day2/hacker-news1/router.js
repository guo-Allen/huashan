var fs = require('fs')
var url = require('url')
var template = require('art-template')
var handler = require('./handler')

module.exports = function router(req, res) {
  // url 模块中的 parse 方法可以将一个路径解析为一个对象
  // 可以得到一个路径中的 请求路径部分、查询字符串部分、端口号 等信息
  // 可以通过指定第二个参数为 true，自动将解析到的查询字符串解析为一个对象

  var urlObj = url.parse(req.url, true)
  
  // 拿到请求路径中的查询字符串对象
  var queryObj = urlObj.query
console.log(queryObj);
  // 将解析出来的查询字符串对象挂载给 req 请求对象
  req.query = queryObj

  // 只拿到请求路径中的路径部分（不包含查询字符串）
  var pathname = urlObj.pathname
  if (pathname === '/') {
    handler.showIndex(req, res)
  } else if (pathname === '/main.css') {
    handler.showMinCss(req, res)
  } else if (pathname === '/logo.gif') {
    fs.readFile('./static/logo.gif', function (err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': ' image/gif'
      })
      res.end(data)
    })
  } else if (pathname === '/grayarrow.gif') {
    fs.readFile('./static/grayarrow.gif', function (err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': ' image/gif'
      })
      res.end(data)
    })
  } else if (pathname === '/favicon.ico') {
    fs.readFile('./static/favicon.ico', function (err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'image/x-icon'
      })
      res.end(data)
    })
  } else if (pathname === '/submit') {
    handler.showSubmit(req, res)
  } else if (pathname === '/add_submit') {
    handler.doSubmit(req, res)
  } else {
    res.end('404 Not Found.')
  }
}
