var fs = require('fs')
var template = require('art-template')

exports.showIndex = function (req, res) {
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
}

exports.showMinCss = function (req, res) {
  fs.readFile('./static/main.css', function (err, data) {
    if (err) {
      throw err
    }
    res.writeHead(200, {
      'Content-Type': 'text/css; charset=utf-8'
    })
    res.end(data)
  })
}

exports.showSubmit = function (req, res) {
  fs.readFile('./static/submit.html', function (err, data) {
    if (err) {
      throw err
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })
    res.end(data)
  })
}

exports.doSubmit = function (req, res) {
  fs.readFile('./static/data.json', 'utf8', function (err, data) {
    if (err) {
      throw err
    }
    data = JSON.parse(data)
    data.news.unshift({
      title: req.query.title,
      time: '2016-12-09 15:30:00',
      text: req.query.text
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
}
