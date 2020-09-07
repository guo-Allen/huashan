var express = require('express')
var nunjucks = require('nunjucks')
var config = require('./config')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')

// 1. 调用 express() 得到一个 app 应用实例
//    express() 就相当于 http.createServer()
//    app 就相当于原来的 server
var app = express()

// 在 express 中暴露公共资源
// 在 express ，也是通过配置的形式提供对静态资源的处理
// 第一个参数用来配置静态资源的前缀路径
// 第二个参数用来指定该模糊路径查找的磁盘路径
// 第一个参数是可选参数，可以不指定
//    如果不指定第一个参数，则请求的时候，就不要加任何前缀
//    ，直接请求该目录中的资源路径就可以了
//    例如你要请求 node_modules/bootstrap/dist/css/bootstrap.css
//    则请求的时候，不要加 /node_modules 前缀，直接 /bootstrap/dist/css/bootstrap.css 就可以了
// 这就是框架的规则，你要觉得不爽，你就自己造一个，或者你修改框架的源代码
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')))
app.use('/public', express.static(path.join(__dirname, 'public')))

// 在 express 中，render 方法是需要单独来配置的
// 对于 express 来说，需要单独配置要使用的模板引擎
// express 框架本身很灵活，很多功能需要单独配置才可以使用
// 相对于 express 来说，配置这些东西其实就是插件
// 只要通过下面的配置，在 express 中就可以正常的使用 render 方法了
// 一定要记得使用 render 的时候，加上后缀名
// noCache 用来指定缓存配置，默认是 false
var env = nunjucks.configure(config.viewPath, {
  noCache: true
})
env.express(app)

// 配置解析表单 post 提交数据的插件
// 该插件的名字叫：body-parser
// 可以专门用来和 express 结合使用，解析请求体中表单 post 提交的数据
// 只要使用了下面的配置，该插件会自动帮你把表单 post 请求体数据解析成一个对象，
// 然后挂载给 req 请求对象的 body 属性
// 也就是说，在后面的所有的处理函数中，如果想要拿到表单 post 请求体数据，
// 直接通过 req.body 来拿就可以了
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 2. 给 app 应用实例挂载路由
app.use(router)

// 3. 绑定端口，启动服务器
app.listen(3000, function () {
  console.log('running...')
})
