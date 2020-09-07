# 后台管理系统

## 该案例所学知识

- express
  + 配置使用 NunJucks 模板引擎
  + 路由的使用
  + 处理静态资源
- package.json
  + dependencies 和 npm install
  + scripts 和 npm start
- 使用 nodemon 解决改完代码重启的问题

## package.json 项目说明文件

使用 Node 开发应用，每一个项目最好都初始化一个 package.json 文件

- name
- version
- main
- scripts **
  + start node app.js
  + 当你在终端输入 npm start 的时候，
  + npm 会自动找 pacakge.json 文件中的 scripts 中的 start 属性
  + 然后帮你执行 start 属性配置好的命令
- author
- dependencies
  + 用来记录保存项目的依赖项
  + 可以使用 `npm install` 命令来安装项目的依赖项
  + `npm install` 会自动找当前目录下的 `package.json` 文件中的 `dependencies` 字段
  + 然后依次下载里面的包
  + 所以，即便你把 node_modules 目录给删了，也没问题，只要 package.json 文件依然存在就可以正常使用


建议：每个项目丢最好有 package.json 文件，用来描述项目元数据。

## 项目结构初始化

- 使用 `npm init` 命令初始化一个 `package.json` 文件

## 安装第三方包

- `npm install --save express`

## 通过使用第三方命令行工具 `nodemon` 来解决改完代码重启服务器的问题

`nodemon` 是一个基于 Node 开发的一个第三方命令行工具，要想使用，在终端中通过：

```bash
$ npm install --global nodemon
```

安装完毕之后，把原来使用 `node app.js` 替换成 `nodemon app.js`，
这样的话就可以实现服务器端代码修改，直接自动重启服务器。

注意：全局命令行工具一次安装，永久使用，以后再使用，就不用再次安装了。

## 通过 cnpm 改变镜像源地址的方式解决 npm 被墙问题

- http://npm.taobao.org/

淘宝 NPM 镜像，这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

只需要在下载包的时候，加上 `--registry=https://registry.npm.taobao.org`，那这样的话就会通过
淘宝的 `cnpm` 去下载，例如：

```bash
$ npm install 包名 --registry=https://registry.npm.taobao.org
```

这样话虽然可以解决，但是每次下载包的时候，还要自己手动加上这个参数，有一个更好的：


```bash
$ npm config set registry=https://registry.npm.taobao.org
```

该命令表示设置 npm 下载的镜像源地址为: `https://registry.npm.taobao.org`，
只要做了执行了该命令，那以后所有的 `install` 都会使用该地址。

如果想要删除该配置，使用下面的命令：

```bash
$ npm config delete registry
```

还可以通过下面的命令查看当前 npm 的配置列表：

```bash
$ npm config list
```

---

## 路由设计

| 请求方法 |        请求路径        |        处理动作        |
|----------|------------------------|------------------------|
| GET      | /product               | 渲染 product.html      |
| GET      | /product/add           | 渲染 product_add.html  |
| POST     | /product/add           | 处理添加产品请求       |
| GET      | /product/remove?id=xxx | 处理删除产品请求       |
| GET      | /product/update?id=xxx | 渲染 product_edit.html |
| POST     | /product/update?id=xxx | 处理更新产品请求       |
|          |                        |                        |

## 接口文档

- 前后端分离的情况接口是唯一的前端和后端交互的渠道
- 后台提供接口
- 前端调用接口
  + 有的接口需要传递数据
  + 有的不需要
- 然后根据接口的返回数据
  + 做不同的判断
  + 和用户界面交互响应
