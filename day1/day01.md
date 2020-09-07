---
title:Node js 简介
tags:node.js
categories: 杂记
---

## 1. Node.js 介绍

### 1.1 网站开发模型（BS）

- Server
  + 为客户端提交接口：数据
  + Java、.Net、Ruby、Python、PHP、Go、Swift、Lua
  + 学 Node 本质不是在学 Node，在学 服务器（Web后台）编程
  + 请求
    * 处理
  + 响应
  + 大前端时代：JavaScript 语言也可以运行在服务器端
  + 使用 JavaScript 这门语言也可以进行服务器编程
  + JavaScript 通过 Node.js 运行在服务器端
- Browser
  + 客户端：把一坨用户看不懂的数据变成友好的形式给用户体验

### 1.2 什么是 Node.js？

> 简单的说 Node.js 就是运行在服务端的 JavaScript

- 什么是 JavaScript
  + JavaScript 一个运行在浏览器端的脚本原因
  + 运行时：浏览器
  + Ecmascript：JavaScript 基本语法：var、if-else、for、Array、Object、String、function
  + BOM
    * Window
    * DOM
  + 通过 V8 引擎解析和执行 JavaScript 代码

- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
  + Node.js 是 JavaScript 运行时
    * 不是一门新的语言
    * 可以解析和执行 JavaScript 语言
  + 构建与 Chrome V8 引擎至上
    * Node 将 Chrome 中的 V8 引擎移植了出来
    * 在 Node 环境，给编程人员提供了一些编程接口
      - 文件操作
      - 网络操作
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
  + 事件驱动
    * 原来前端中编程思维在 Node 中同样适用
  + 非阻塞（异步）IO模型
    * IO：输入与输出
    * 之前在客户端中异步编程模型在 Node 中同样适用
- Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
  + npm 包管理系统
  + 全球最大的开源库生态系统

- Node.js®是一个基于Chrome V8 引擎的 JavaScript 运行时
  + V8是一个由美国Google开发的开源JavaScript引擎，用于Google Chrome中
  + V8引 擎执行Javascript的速度非常快，性能非常好
- Node.js 使用高效、轻量级的事件驱动、非阻塞 I/O 模型
- Node.js 之生态系统 npm 是目前最大的开源包管理系统
- 跨平台
  + Linux
  + Windows
  + Unix

### 1.3 使用 Node 可以做什么？

- MEAN
  + MongoDB
  + Node：Express：基于Node的一个 Web 开发框架
  + AngularJS：前端 JavaScript 框架
  + * Nginx：服务器，类似于 Apache 的一个服务器
- LAMP
  + Linus
  + Apache
    * 服务器软件
  + MySQL
    * 存储数据的数据仓库
  + PHP
    * 接收请求
    * 处理请求
    * 发送响应

- 网站开发
- 命令行应用程序

### 1.4 Node 发展史

- Node.js 由 Ryan Dahl 和一些其他的开发者于2009年在 Joyent 工作时发明
- 2009年2月，Ryan Dahl在博客上宣布准备基于V8创建一个轻量级的Web服务器并提供一套库。
  + 2009 年，Angular 诞生了
- 2009年5月，Ryan Dahl在GitHub上发布了最初版本的部分Node.js包，随后几个月里，有人开始使用Node.js开发应用。
- 2009年11月和2010年4月，两届JSConf大会都安排了Node.js的讲座。
- 2010年年底，Node.js获得云计算服务商Joyent资助，创始人Ryan Dahl加入Joyent全职负责Node.js的发展。
- 2011年7月，Node.js在微软的支持下发布Windows版本。[2] 

### 1.5 资源推荐

- 深入浅出 Node.js
- CNODE
- https://cnodejs.org/getstart

---

## 2. 快速上手

### 2.1 环境安装

[点我下载](https://nodejs.org/en/download/)

### 2.2 Hello World

- 当你在控制台输入：`node 01-hello-world.js` 之后
- 实际上通过你安装目录下的那个 `node.exe` 可执行程序读取了 `01-hello-world.js` 文件中的源代码
- 然后解析和执行文件中的代码
- 最后将结果打印输出到了控制台中

### 2.3 文件操作

### 2.4 HTTP 服务

### 2.5 文件版留言本

- npm
  + npm：node package manager
  + 安装和管理 Node 包
- 在哪个项目中要使用 art-tempalte 这个包
- 就通过控制台进入该项目的根路径
- 进入要安装包的项目根路径之后，输入 `npm install art-template`
- 只要执行了上述命令之后，npm 会自动在当前目录下找 node_modules 目录，
  + 如果没有该目录，则直接创建该目录，并且把下载好的包直接放到该目录下
  + 如果有该目录，则直接把下载好的包放到该目录当中

---

## 3. Node 基础

### 3.1 Node 中的 JavaScript

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

### 3.2 模块化

### 3.3 自定义模块（用户自己编写的模块）

- require
- module.exports
- exports

### 3.4 核心模块（Node 提供）

### 3.5 第三方模块（也称作包）

### 3.6 包与 Npm

---

## 4. 文件操作

## 写代码要求

- 目录名不要有中文
- 目录名不要有空格
- 文件名也最好不要使用中文

## 代码风格

- http://standardjs.com/rules.html

## 目标

1. 能掌握 Node 中基本的文件读写
2. 能掌握使用 Node 开发基本的 HTTP 服务器（根据不同请求作不同响应处理）
3. 能掌握在 Node 中使用 art-template 模板引擎
3. 能完成 Web 版留言板案例：（列表展示、发表留言）
