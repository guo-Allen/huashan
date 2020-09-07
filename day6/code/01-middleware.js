/**
 * 中间件
 *   概念：中间件就好比自来水厂，污水（用户请求）进来之后经过一系列的处理环节
 *   1. 中间件在代码中就是一个函数，可以执行任何代码
 *       用来封装对 Request 或者 Response 处理的操作
 *   2. 修改 Request 或者 Response 对象用来辅助处理 HTTP 请求
 *      所有的请求都会进入 request 请求事件
 *      而且每个请求对应的 Request 和 Response 对象都不一样
 *   3. Express
 *       中的中间件只不过是在这个基础之上提供了一种更加优雅的编程方式而已
 *       例如，最大程度上可以让你的中间件可以写的很漂亮、优美
 */

const http = require('http')
const url = require('url')
const queryString = require('querystring')
const fs = require('fs')
const path = require('path')

http.createServer()
  // 所有请求的入口都在这里
  .on('request', (req, res) => {

    // handle request
    // 判断路由
    // 给 req、res 挂载一些通用的成员
    // 例如，在真正的开发处理之前，给 req、res 处理或者挂载一些通用的 API
    // 例如 res.json res.render req.query
    // 解析表单请求体
    const urlObj = url.parse(req.url, true)
    const pathname = urlObj.pathname

    const method = req.method.toLowerCase()

    // 这里操作了查询字符串，给 req 挂载了一个 query 查询对象
    // 在这里，urlQueryString 这个函数也充当了一个 HTTP 请求处理的一个环节
    // 所以说该方法对应咱们这个应用程序来说，就是一个中间件
    urlQueryString(req)

    // 只要把 res 交给给函数，则 res 就拥有了一个 render 方法
    render(res)

    log(req, () => {
      // bodyParser 在这里也是一个中间件，用来解析表单 POST 请求体
      // 只要请求经过该函数的处理，则 req 请求对象就拥有了一个 body 用来
      bodyParser(req, () => {
        if (pathname === '/') {
          res.end('hello world')
        } else if (method === 'get' && pathname === '/login') {
          fs.readFile('./views/login.html', function (err, data) {
            if (err) {
              throw err
            }
            res.end(data)
          })
        } else if (method === 'get' && pathname === '/register') {
          fs.readFile('./views/register.html', function (err, data) {
            if (err) {
              throw err
            }
            res.end(data)
          })
        } else if (method === 'post' && pathname === '/login') {
          // 表单 POST 提交，会把请求数据放到请求体中
          // 请求体在传输数据的时候，不是一次性提交过来的，而是分为多次（取决于数据的大小）进行提交
          // 这种方式，在技术中被称作：流（流动的数据）
          // 这里可以通过 监听 req 请求对象的 data 事件来接收表单 POST 提交的数据
          // 在服务器端会一点儿一点儿的接收客户端提交的数据
          // let data = ''
          // req.on('data', chunk => {
          //   data += chunk
          // })
          // req.on('end', () => {
          //   const body = queryString.parse(data)
          //   console.log(body)
          // })
          console.log(req.body)
        } else if (method === 'post' && pathname === '/register') {
          console.log(req.body)
        }
      })
    })
  })
  .listen(3000, function () {
    console.log('running...')
  })

function urlQueryString(req) {
  req.query = url.parse(req.url, true).query
}

// 在这里 render 方法就充当了一个污水处理环节，所以 render 就是一个中间件
function render(res) {
  res.render = function (filePath, dataObj) {
    // 读文件
    // 模板引擎渲染
    // 发送响应
  }
}

function bodyParser(req, callback) {
  let data = ''
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    req.body = queryString.parse(data)
    callback()
  })
}

// 请求路径 请求方法 请求时间
function log(req, callback) {
  const data = `请求方法：${req.method}\t请求路径：${req.url}\t请求时间：${+new Date()}\n`
  fs.appendFile('./log.txt', data, err => {
    if (err) {
      throw err
    }
    callback()
  })
}
