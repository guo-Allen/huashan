var express = require('express')

var app = express()

// 中间件函数
// 该函数接收三个参数
// 第一个参数 req 就是可以用来获取当前用户的请求数据
// 第二个参数 res 就是专门用来给用户发送数据的
function aMiddleware(req, res, next) {
  req.foo = 'bar'
  console.log('a middleware')
  next()
}

function bMiddleware(req, res, next) {
  console.log('b middleware')
  next()
}

function cMiddleware(req, res, next) {
  console.log('c middleware')
  next()
}

// 请求进来之后直接进入第一个符合的中间件
// 不关心请求方法、不关心请求路径
// 任何请求方法、路径都会进入该中间件
// 也就是执行该中间件函数代码
app.use(aMiddleware)
app.use(bMiddleware)
app.use(cMiddleware)

// 和特定请求路径有关系的中间件
// 不关心请求方法
app.use('/a', function (req, res, next) {
  console.log('/a1 middleware')
  next()
})

app.use('/a', function (req, res, next) {
  console.log('/a2 middleware')
  next()
})

app.use(function (req, res, next) {
  console.log('end middleware')
  next()
})


// 这个是关心请求方法以及请求路径的 路由型 中间件
app.get('/b', function (req, res, next) {
  console.log('bbbb')
  console.log(req.foo)
  next()
})

app.use('/b', function (req, res, next) {
  console.log('b2 middleware')
  next()
})

app.listen(3000, function () {
  console.log('running...')
})
