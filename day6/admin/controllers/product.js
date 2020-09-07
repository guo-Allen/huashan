const config = require('../config')
const db = require('../db')

exports.showLogin = (req, res, next) => {
  res.render('login.html')
}

/**
 * GET /
 */
exports.showIndex = (req, res) => {
  res.render('index.html')
}

/**
 * GET /product
 */
exports.showProduct = (req, res) => {
  res.render('product/list.html')
}

/**
 * GET /product/add
 */
exports.showProductAdd = (req, res) => {
  res.render('product/add.html')
}

/**
 * POST /product/add
 */
exports.doProductAdd = (req, res) => {
  db.insertOne('products', req.body, (err, result) => {
    if (err) {
      throw err
    }

    // express 为 res 对象提供了 redirect 方法，可以实现重定向跳转的功能
    res.redirect('/product')
  })
}

/**
 * GET /product/edit
 */
exports.showProductEdit = (req, res) => {
  db.findOne('products', {
    _id: db.ObjectID(req.query.id)
  }, (err, doc) => {
    if (err) {
      throw err
    }
    res.render('product/edit.html', {
      product: doc
    })
  })
}

/**
 * GET /product/remove
 * query { id: xxx }
 */
exports.doProductRemove = (req, res) => {
  db.deleteOne('products', {
    _id: db.ObjectID(req.query.id)
  }, (err, result) => {
    if (err) {
      throw err
    }
    res.redirect('/product')
  })
}

/**
 * POST /product/edit
 * body {  }
 */
exports.doProductEdit = (req, res) => {
  db.updateOne('products', {
    _id: db.ObjectID(req.query.id)
  }, {
    $set: req.body
  }, (err, result) => {
    if (err) {
      throw err
    }
    res.redirect('/product')
  })
}
