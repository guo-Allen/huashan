const express = require('express')
const nunjucks = require('nunjucks')
const config = require('./config')
const path = require('path')
const router = require('./router')
const bodyParser = require('body-parser')
const productRouter = require('./routes/product')
const studentRouter = require('./routes/student')

// 创建应用实例
const app = express()

// 配置处理静态资源
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/public', express.static(path.join(__dirname, 'public')))

// 配置使用 NunJucks 模板引擎
const env = nunjucks.configure(config.viewPath, {
  noCache: true
})
env.express(app)

// 配置处理表单 POST 请求体数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 挂载产品路由
app.use(productRouter)

// 挂载学生路由
// 加上前缀，这样的话，studentRouter 中的路由就都必须是以 /student 开头才行
app.use('/student', studentRouter)

// 启动监听
// 没有参数，必须加 ()
// 一个参数，可以 (参数) => 或者 参数 =>
// 多个参数，必须 (参数1, 参数2)
// 如果方法体代码大于一句话，则一定要写到 { 方法体 } 中
// 如果就一句代码，则可以直接 => 方法体代码
app.listen(3000, () => console.log('running...'))
