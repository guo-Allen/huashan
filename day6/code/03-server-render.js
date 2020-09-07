const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const bodyParser = require('body-parser')

// 创建应用实例
const app = express()

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

// 配置使用 NunJucks 模板引擎
const env = nunjucks.configure(path.join(__dirname, 'views'), {
  noCache: true
})
env.express(app)

// 配置处理表单 POST 请求体数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('hello index')
})

app.get('/login', (req, res, next) => {
  res.render('login.html')
})

app.get('/register', (req, res, next) => {
  res.send('register.html')
})

app.post('/login', (req, res, next) => {
  // 处理请求数据
  const username = req.body.username.trim()
  const password = req.body.password.trim()

  if (username.length === 0) {
    // 告诉客户端，用户名不能为空
    return res.render('login.html', {
      err_message: '用户名不能为空',
      input: req.body
    })
  }

  if (password.length === 0) {
    return res.render('login.html', {
      err_message: '密码不能为空',
      input: req.body
    })
  }

  // 下面是核心业务逻辑
  // 也有一些相对应的错误提示消息
  // 默认响应回去的消息，客户端会当成一个页面去进行渲染
  // 以前为了解决这种体验不友好的方式
  if (username === 'admin' && password === '123456') {
    return res.render('index.html')
  } else {
    // return res.send('用户名密码不正确请重新输入')
    return res.render('login.html', {
      err_message: "用户名密码不正确请重新输入",
      input: req.body
    })
  }

  // 服务端对于收到的客户端数据一定要做合法性校验
  // 例如客户端没有做校验
})

app.post('/register', (req, res, next) => {
  console.log(req.body)
})


app.listen(3000, () => console.log('running...'))
