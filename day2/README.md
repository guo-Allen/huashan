# NodeJS 第2天课程笔记

> 笔记地址：http://192.168.34.88:8080/

## Node 基础

### Node 中的 JavaScript

- *console*
- *setInterval(callback, delay[, ...args])*
- *setTimeout(callback, delay[, ...args])*
- *clearInterval(intervalObject)*
- *clearTimeout(timeoutObject)*
- clearImmediate(immediateObject)
- setImmediate(callback[, ...args])
- __dirname
- __filename
- module
- exports
- global
- process
- require()

### 模块化

- 一个 js 文件就是一个模块
- 每个模块都是私有的作用域
- 每个模块内部都提供了一个接口对象：`module.exports`
  + 可以通过给 `module.exports` 接口对象添加成员或者赋值对外提供接口接口对象
- 为了方便，每个模块内部还为 `module.exports` 接口对象提供了一个别名： `exports` 
  + 所以也可以通过给 `exports` 接口对象添加成员向外暴露
- 如果想要向外暴露单个的成员（单个函数、单个变量等）
  + 则通过给 `module.exports` 接口对象赋值即可
  + 注意：给 `exports` 赋值不管用
    * 因为每个模块内部最终暴露的接口对象是 `module.exports`
    * 所以给 `exports` 赋值会切断和 `module.exports` 之间的引用关系，是不管用的
- 在模块中，可以使用 `requrie` 函数加载执行指定模块
  + 调用 require 函数之后会执行被加载模块中的代码通过得到该模块中的 `module.exports` 接口对象
- 根据模块标识对模块分类
  + 可以省略后缀名
  + 自定义模块（就是自己写的，以 ./ 或 ../ 开头）
  + 核心模块（由Node提供的，一个唯一的标识名）
  + 第三方模块


### 自定义模块（用户自己编写的模块）

以 `./` 或 `../` 开头的模块标识就是文件模块，一般就是用户编写的。

- require
- module.exports
- exports

### 核心模块（Node 内置）

- 核心模块就是 node 内置的模块，需要通过唯一的标识名称来进行获取
- 每一个核心模块基本上都是暴露了一个对象，里面包含一些方法供我们使用
- 每一个核心模块都有自己的作用
- 一般在加载核心模块的时候，变量的起名最好就和核心模块的标识名同名即可
  + 例如：`var fs = require('fs')`
- 核心模块本质上也是文件模块
  + 核心模块已经被编译到了 node 的可执行程序，一般看不到
  + 可以通过查看 node 的源码看到核心模块文件
  + 核心模块也是基于模块化的方式编写的模块

每一个模块都提供了单一的功能，以下是常用的核心模块：

|   模块名称  |    模块作用    |
|-------------|----------------|
| fs          | 文件操作       |
| http        | http服务       |
| net         | Socket网络编程 |
| os          | 操作系统相关   |
|             |                |
| path        | 路径操作       |
| querystring | 处理查询字符串 |
| url         | 处理url路径    |
| util        | 工具函数       |

### 第三方模块（也称作包，由社区提供）

### 包与 Npm

- 包
  + 将相同业务功能的文件模块组织到一个目录中，那这个目录就称之为包
  + 包就是文件模块的集合
- package.json 包说明文件
- npm 网站
  + npm 第一层含义就是包的托管网站
  + https://www.npmjs.com/
- npm 命令行工具
  + Node 本身提供了一个包管理工具：npm Node Package Manage
  + npm 命令行工具可以安装和管理 Node 包
  + 例如，安装 art-template
  + 就可以使用 npm install art-template
  + 想要在项目中使用，就可以使用这个工具来帮你安装就可以了
  + 为什么要安装到项目根路径？
  + 为什么使用   require('art-template') 就可以使用模板引擎

---

## 文件操作

### path

- path.basename(path[, ext])：获取文件名部分
- path.dirname(path)：获取目录部分
- path.extname(path)：获取扩展名部分
- path.isAbsolute(path)：判断是否是绝对路径
- path.join([...paths])：将多个路径拼接为一个路径

### 同步调用与异步调用

fs模块对文件的几乎所有操作都有同步和异步两种形式，例如：`readFile()` 和 `readFileSync()`。

同步与异步文件系统调用的区别

- 同步调用立即执行，会阻塞后续代码继续执行，如果想要捕获异常需要使用 `try-catch`
- 异步调用不会阻塞后续代码继续执行，需要回调函数作为额外的参数，通常包含一个错误作为回调函数的第一个参数
- 异步调用通过判断第一个err对象来处理异常
- 异步调用结果往往通过回调函数来进行获取

Node 只在文件IO操作中，提供了同步调用和异步调用两种形式，两者可以结合使用，
但是推荐能使用异步调用解决问题的情况下，少用同步调用。

### 文件操作常用API

- fs.writeFile(file, data, callback)：文件写入
- fs.appendFile(file, data, callback)：文件追加
- fs.readFile(file[, options], callback)：文件读取
- fs.unlink(path, callback)：删除文件
- fs.stat(path, callback)：获取文件信息
- fs.access(path, callback)：验证文件路径是否存在
- fs.rename(oldPath, newPath, callback)：重命名或移动文件


### 目录操作常用API

- fs.mkdir(path, callback)：创建一个目录
- fs.rmdir(path, callback)：删除一个空目录
- fs.readdir(path, callback)：读取一个目录
- fs.rename(oldPath, newPath, callback)：重命名或移动目录

---

## HTTP

### 案例流程解析

### API

- Server
  + http.createServer([requestListener])
  + Event: 'request'
  + Event: 'close'
  + Event: 'connection'
  + server.close([callback])
  + server.listen([port][, hostname][, backlog][, callback])

- Request
  + Event: 'data'
  + Event: 'close'
  + message.headers
  + message.httpVersion
  + message.method
  + message.url

- Response
  + response.write(chunk[, encoding][, callback])
  + response.end([data][, encoding][, callback])
  + response.writeHead(statusCode[, statusMessage][, headers])

### 处理 GET 请求

### 处理 POST 请求


