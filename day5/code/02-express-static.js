var express = require('express')
var path = require('path')
var fs = require('fs')

var app = express()

function static(dirPath) {
  return function (req, res, next) {
    fs.readFile(path.join(dirPath, req.url), function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
      next()
    })
  }
}

app.use('/node_modules', static(path.join(__dirname, 'node_modules')))

app.use(function (req, res, next) {
  fs.appendFile('./logo.txt', '请求方法：' + req.method + ' 请求路径：' + req.url + '\r\n', function (err) {
    if (err) {
      throw err
    }
    next()
  })
})

app.get('/user', function (req, res, next) {
  res.end('user page')
})

app.get('/aa', function (req, res, next) {

})

app.get('/bb', function (req, res, next) {

})

app.listen(3000, function () {
  console.log('running...')
})
