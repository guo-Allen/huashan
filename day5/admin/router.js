var express = require('express')
var handler = require('./handler')
var api = require('./api')

// 1. 创建一个路由容器
var router = express.Router()

// 2. 然后把所有的路由挂载给 router 就可以了
//    为什么要给这些页面设计 url 地址
//    目的：第一 url 可以更简洁
//          第二方便参数的数据
//          怎么画页面
//          你要考虑：数据的问题
router
  .get('/', handler.showIndex)
  .get('/product', handler.showProduct)
  .get('/product/add', handler.showProductAdd)
  .post('/product/add', handler.doProductAdd)
  .get('/product/remove', handler.doProductRemove)
  .get('/product/edit', handler.showProductEdit)
  .post('/product/edit', handler.doProductEdit)
  .get('/api/product', api.getProducts)
  .get('/api/product/remove/:id', api.removeProduct)
  .post('/api/product/add', api.addProduct)
  .post('/api/product/edit/', api.editProduct)
  .get('/login', handler.showLogin)

// 3. 把 router 暴露出来
module.exports = router
