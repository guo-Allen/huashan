var url = require('url')
var fs = require('fs')
var path = require('path')
var render = require('./common/render.js')

module.exports = function (req, res) {
  var urlObj = url.parse(req.url, true)
  var pathname = urlObj.pathname
  req.query = urlObj.query

  render(res)

  var method = req.method.toLowerCase()

  if (method === 'get' && (pathname.startsWith('/public/') || pathname.startsWith('/node_modules/'))) {
    fs.readFile(path.join(__dirname, pathname), function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  } else if (method === 'get' && pathname === '/product') {
    // render product.html
    res.render('product')
  } else if (method === 'get' && pathname === '/product/add') {
    // handle add product
    res.render('product_add')
  } else if (method === 'post' && pathname === '/product/add') {
    // handle add product
    console.log('收到添加商品请求了')
  }

}
