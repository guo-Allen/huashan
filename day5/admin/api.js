var config = require('./config')
var db = require('./db')

/**
 * /api/product
 */
exports.getProducts = function (req, res, next) {
  db.find('products', {}, function (err, docs) {
    if (err) {
      throw err
    }
    res.json(docs)
  })
}


exports.removeProduct = function (req, res, next) {
  db.deleteOne('products', {
    _id: db.ObjectID(req.params.id)
  }, function (err, result) {
    if (err) {
      return res.json({
        code: 1001,
        message: err.message
      })
    }
    // 对弈异步请求，后台重定向不管用
    // res.redirect('/product')

    res.json({
      code: 1000,
      message: 'remove success'
    })

  })
}

exports.addProduct = function (req, res) {
  db.insertOne('products', req.body, function (err, result) {
    if (err) {
      res.json({
        code: 2001,
        message: err.message
      })
    } else {
      res.json({
        code: 2000,
        message: 'add success'
      })
    }
  })
}

exports.editProduct = function (req, res, next) {
  // 先把 id 备份一下
  var id = req.body.id

  // 然后从请求体数据中删掉
  // 为什么删除？
  //    因为待会要把 req.body 中的数据原封不动的存储到数据库
  //    因为里面有一个 id
  //    MongoDB 对于不存在的 成员，会直接把该成员作为文档的新属性添加进入
  //    所以这里要 delete
  delete req.body.id
  db.updateOne('products', {
    _id: db.ObjectID(id)
  }, {
    $set: req.body
  }, function (err, result) {
    if (err) {
      res.json({
        code: 3001,
        message: err.message
      })
    }
    res.json({
      code: 3000,
      message: 'edit success'
    })
  })
}
