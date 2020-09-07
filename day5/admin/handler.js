var config = require('./config')
var db = require('./db')

exports.showLogin = function (req, res, next) {
  res.render('login.html')
}

/**
 * GET /
 */
exports.showIndex = function (req, res) {
  res.render('index.html')
}

/**
 * GET /product
 */
exports.showProduct = function (req, res) {
  res.render('product/list.html')
}

/**
 * GET /product/add
 */
exports.showProductAdd = function (req, res) {
  res.render('product/add.html')
}

/**
 * POST /product/add
 */
exports.doProductAdd = function (req, res) {
  db.insertOne('products', req.body, function (err, result) {
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
exports.showProductEdit = function (req, res) {
  db.findOne('products', {
    _id: db.ObjectID(req.query.id)
  }, function (err, doc) {
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
exports.doProductRemove = function (req, res) {
  db.deleteOne('products', {
    _id: db.ObjectID(req.query.id)
  }, function (err, result) {
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
exports.doProductEdit = function (req, res) {
  db.updateOne('products', {
    _id: db.ObjectID(req.query.id)
  }, {
    $set: req.body
  }, function (err, result) {
    if (err) {
      throw err
    }
    res.redirect('/product')
  })
}
