/**
 * 在 Express 中，这个框架把整个的处理流程都利用一堆的中间件的形式来进行处理
 * 在 Express 中，提供了多种处理请求的方式：
 *   middleware_handler
 *     req
 *     res
 *     next
 *   app.use(middleware_handler)
 *   app.use('请求路径', middleware_handler)
 *   app.get('请求路径', middleware_handler)
 *   app.post('请求路径', middleware_handler)
 *
 * 在 Express 中，中间件就是一个函数，可以将整个 HTTP 请求解耦到一个一个特定功能的小函数
 * 在同一个请求中，每个中间件中流通的都是同一个 Request 请求对象和 Response 响应对象
 * 在一个中间件中，什么时候调用 next？
 *   取决于你的代码业务
 *   例如 app.get('/',(req, res, next) => { res.render('index.html') }) 
 *     这个特定请求的处理中间件来说，在该中间件中，请求已经处理完毕结束响应了， 没有其他逻辑了，则就没必要调用 next
 *   另一个例子：app.use((req, res, next) => { 解析表单 post 请求体，解析完毕调用 next })
 *     这个中间件，则是为了解析每一个请求中可能存在的 POST 请求体，
 *     解析的目的是为了在后续执行的中间件中方便使用，在真正进入后面的处理中间件之前就已经处理了表单请求体
 *
 * 综上所述：
 *   Express 本身就是一个通过一系列中间件串联起来的应用程序
 *   请求进来之后会经过一系列的中间件，可能在某个中间件环节处理完毕就结束响应了
 *   也可能有一些公共的中间件（例如处理表单 POST 请求体），则需要处理完毕之后，调用 next
 *     否则后面特定的中间件执行不到。
 */

const fs = require('fs')
const express = require('express')

const app = express()

// 任何请求都会进入下面这个中间件
app.use((req, res, next) => {
  const data = `请求方法：${req.method}\t请求路径：${req.url}\t请求时间：${+new Date()}\n`
  fs.appendFile('./log.txt', data, err => {
    if (err) {
      throw err
    }
    // 调用 next 之后，应用程序会往后找与当前请求方法或者请求路径能匹配的中间件
    // 使用 Express 最大的一个好处就是提供的中间件很好用
    // 有了 next 就不用考虑异步回调的问题，因为它可以帮你处理的很漂亮
    next()
  })
})

// 解析表单 post 请求体中间件
app.use((req, res, next) => {
  let data = ''
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    req.body = queryString.parse(data)
    next()
  })
})

// 只有对 /a 请求路径发起请求才会执行下面的中间件
app.use('/a', (req, res, next) => {
  res.end('aaa')
})

// 只有对 /b 请求路径发起请求才会执行下面的中间件
app.use('/b', (req, res, next) => {
  res.end('bbb')
})

// 当请求进入该中间件之后，如果处理完毕，没有别的处理需求了，而且直接发送响应了
app.get('/login', (req, res, next) => {
  console.log('handle req')
})

app.listen(3000, () => {
  console.log('running...')
})
