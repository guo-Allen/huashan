var mongodb = require('mongodb')
var config = require('./config')
exports.ObjectID = mongodb.ObjectID

var MongoClient = mongodb.MongoClient

function _connect(callback) {
  MongoClient.connect(config.connStr, function (err, db) {
    if (err) {
      return callback(err)
    }
    callback(null, db)
  })
}

// 禅性
exports.find = function (collectionName, conditionDoc, callback) {
  _connect(function (err, db) {
    if (err) {
      return callback(err)
    }
    db.collection(collectionName)
      .find(conditionDoc)
      .toArray(function (err, docs) {
        // 操作完数据库，尽早的关闭
        // 连接本身也是消耗资源的
        // 数据库连接如果使用完毕不关闭，可能会造成连接过多
        // 连接过多可能会导致连不上数据库
        db.close()
        if (err) {
          return callback(err)
        }

        // 只要代码执行到这里，说明一定没有错误
        // 所以第一个参数就可以传递一个 null
        callback(null, docs)
      })
  })
}

exports.insertOne = function (collectionName, doc, callback) {
  _connect(function (err, db) {
    if (err) {
      return callback(err)
    }
    db.collection(collectionName)
      .insertOne(doc, function (err, result) {
        db.close()
        if (err) {
          return callback(err)
        }
        callback(null, result)
      })
  })
}

exports.deleteOne = function (collectionName, conditionDoc, callback) {
  _connect(function (err, db) {
    if (err) {
      return callback(err)
    }
    db.collection(collectionName)
      .deleteOne(conditionDoc, function (err, result) {
        db.close()
        if (err) {
          return callback(err)
        }
        callback(null, result)
      })
  })
}

exports.findOne = function (collectionName, conditionDoc, callback) {
  _connect(function (err, db) {
    if (err) {
      return callback(err)
    }
    db.collection(collectionName)
      .findOne(conditionDoc, function (err, doc) {
        db.close()
        if (err) {
          return callback(err)
        }
        callback(null, doc)
      })
  })
}

exports.updateOne = function (collectionName, conditionDoc, doc, callback) {
  _connect(function (err, db) {
    if (err) {
      return callback(err)
    }
    db.collection(collectionName)
      .updateOne(conditionDoc, doc, function (err, result) {
        db.close()
        if (err) {
          return callback(err)
        }
        callback(null, result)
      })
  })
}
