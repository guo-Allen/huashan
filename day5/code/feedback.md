# Node 第4天课程反馈

-  无
- 老师什么时候讲Github啊
  + 看今天的情况
  + Git + Github
  + 基本使用
- 懵逼没有停歇
- 无
-  李老师你chrome插件都是什么??
-  滴
  +  学生卡
- 跟不上火车了！懵逼了！
-  代码的意思 基本理解 看完 就忘 自己敲不出来 很苦恼
  +  敲
- 嗝~
  + 上帝撒了一把智慧，可惜我打了一把伞
- | 请求方法 | 请求路径 | 处理动作 | |----------|------------------------|------------------------| | GET | /product | 渲染 product.html | | GET | /product/add | 渲染 product_add.html | | POST | /product/add | 处理添加产品请求 | | GET | /product/remove?id=xxx | 处理删除产品请求 | | GET | /product/update?id=xxx | 渲染 product_edit.html | | POST | /product/update?id=xxx | 处理更新产品请求 | | | | | 这种东西怎么打出来的。。
- 心塞N
- 能听懂，单独敲出来就不一定了，正在好好的敲代码中，期间遇到的bug真的伤不起，默默的问一句什么时候开始异步的
  + 先把这种前后端同步交互模型玩儿明白了
  + 后端渲染
  + 请求响应处理
  + 同步 -> 同步请求
  + 异步 -> 异步不刷新发送请求
- 为什么我看到眼前有好多星星......+_+
-  已经懵逼了, 这次是真的懵逼了
- 下午开启一路懵逼模式（大哭）
-  一些前端框架的名字中带有UI,比如MUI,SUI,这些框架和Angular框架有什么区别
  +  MUI 是一个 HTML+CSS 结构样式库
  +  Angular 用于处理 JavaScript 和 结构样式库
  +  专注于业务处理
  +  业务本身：数据的变化 <=> 视图
  +  处理 GUI 的一套业务框架
- 老师在讲api 的时候可否详细讲他是干嘛的 不用讲原理 我就想知道他是干嘛的 参数的具体含义 当我还在琢磨他参数的时候,嗯! 已经下一个api了
  + 可以，尽量把注释写详细一些
-  我是谁?我在哪?我学的是啥?
-  感觉业务逻辑比技术逻辑更复杂，实际环境下的开发就有点跟不上
  +  大部分情况，难的不是技术，重在业务
  +  开发应用大部分时候都在是讨论需求，讨论业务
  +  百分之 70 的时间是在讨论需求和业务、开发时间仅仅占用百分之30
- 甲：今天讲的东西太多了有点懵！ 这么巧，我也有点懵！！ ：乙 甲：让老师再复习复习吧？ 我看可以 ：乙 甲，乙：小李老师再给我们复习一下吧
  + 可以
- 老师可以总结下 我们写HTML文件CSS文件 路径应该怎么写啊 我们以前都是基于html文件写的相对路径 现在后台又要改成/static/views/index.html 和/static/Css/main.css这个路径了 西安都不知到工作后我们是要还按以前学的相对于自己的文件还是相对于根目录的的路径写
  + 静态资源和路由标识
- 或许不聪明的大家今天下午大都听懵逼了,但是,在睿智的我看来,也是懵逼的.
- 老师，res.json()这个方式测试数据是不是只用设置了app.use(bodyParser.json())才可以使用？\
  + res.json() 是 Express 自带的
  + app.use(bodyParser.json()) 这个是 body-parser 插件的一个配置项 和 res.json 没有关系
- 今天完全懵了，听不大懂，整个人都不好了
- 上课听得还好,一写代码就蒙蔽了0.0.
- 有些知识可能课上没懂,但下来消化时再看一下视频就豁然开朗了...
- API太多,已经懵逼.
- 都不知道查什么文档，到哪去查，都蒙圈了！！！
  + 总结 API、整理文档
-  老师，今天冒出来好多文档的内容，都没见过，用起来有点，，，听得也是很懵，
-  中间件是什么
  +  今天会将
- 当使用body-parser后，请求的req.query和req.body的区别是什么？
  + req.query 是 Express 框架原生自带的成员属性
  + req.query 是 Express 自动回帮你把 url 中的查询字符串解析成对象然后挂载给 req.query
  + req.body 是表单 post 请求体
    * 默认 Express 是没有帮你解析获取表单 post 请求体数据
    * 你得通过一个插件 body-parser 来在 Express 中解析获取表单请求体数据
    * 只要配置了该插件，则该插件会自动帮你把 post 提交的表单中的数据解析成一个对象
    * 然后以 body 属性名挂载给 req.body
    * 这样的话在后续的所有处理请求的函数中的 req，就都可以直接通过 req.body 来获取表单 post 请求体数据
