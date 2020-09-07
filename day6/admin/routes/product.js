const express = require('express')
const productController = require('../controllers/product')
const api = require('../api')

const router = express.Router()

router
  .get('/', productController.showIndex)
  .get('/product', productController.showProduct)
  .get('/product/add', productController.showProductAdd)
  .post('/product/add', productController.doProductAdd)
  .get('/product/remove', productController.doProductRemove)
  .get('/product/edit', productController.showProductEdit)
  .post('/product/edit', productController.doProductEdit)
  .get('/api/product', api.getProducts)
  .get('/api/product/remove/:id', api.removeProduct)
  .post('/api/product/add', api.addProduct)
  .post('/api/product/edit/', api.editProduct)
  .get('/login', productController.showLogin)

// 3. 把 router 暴露出来
module.exports = router
