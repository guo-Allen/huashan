var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

// 1. 创建服务器，得到 Server 实例对象
var server = http.createServer()

// 2. 监听请求事件，设置请求处理函数
//    Server 端的请求入口，所有的请求都会触发 request 请求事件，然后执行对应的请求处理函数
server.on('request', function (req, res) {
  // url 模块中的 parse 方法可以将一个路径解析为一个对象
  // 可以得到一个路径中的 请求路径部分、查询字符串部分、端口号 等信息
  // 可以通过指定第二个参数为 true，自动将解析到的查询字符串解析为一个对象
  var urlObj = url.parse(req.url, true)

  // 拿到请求路径中的查询字符串对象
  var queryObj = urlObj.query

  // 只拿到请求路径中的路径部分（不包含查询字符串）
  var pathname = urlObj.pathname
  if (pathname === '/') {
    fs.readFile('./static/index.html', function (err, tplData) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      fs.readFile('./static/data.json', 'utf8', function (err, data) {
        if (err) {
          throw err
        }
        var htmlStr = template.compile(tplData.toString())(JSON.parse(data))
        res.end(htmlStr)
      })
    })
  } else if (pathname === '/main.css') {
    fs.readFile('./static/main.css', function (err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/css; charset=utf-8'
      })
      res.end(data)
    })
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
    fs.readFile('./static/submit.html', function (err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(data)
    })
  } else if (pathname === '/add_submit') {
    fs.readFile('./static/data.json', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      data = JSON.parse(data)
      data.news.unshift({
        title: queryObj.title,
        time: '2016-12-09 15:30:00',
        text: queryObj.text
      })
      fs.writeFile('./static/data.json', JSON.stringify(data), function (err) {
        if (err) {
          throw err
        }
        // 告诉客户端，你去请求这个路径吧
        // 302 状态码就表示重定向的意思
        // 浏览器看到 302 状态码之后，会自动去 响应报文头中找 Location 属性
        res.writeHead(302, {
            'Location': '/'
          })
          // 注意：即便了发送了一个响应头，也要记得结束响应
        res.end()
      })
    })
  } else {
    res.end('404 Not Found.')
  }
})

// 3. 绑定端口，启动服务器
server.listen(3000, function () {
  console.log('Server is running at port 3000...')
})
