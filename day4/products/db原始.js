const { MongoClient } = require('mongodb')
const assert = require('assert')
const { connect, userCollection, productCollection } = require('./config').dbSetting

// 连接数据库
const _connectDB = callback => {
	MongoClient.connect(connect, (err, db) => {
		if (err) throw new Error("database can't connect")
		callback(err, db)
	})
}


// 检查用户名
exports.checkLogin = (username, password, callback) => {
	_connectDB((err, db) => {
		db
			.collection(userCollection)
			.find({
				name: username,
				password: password
			})
			.toArray((err, docs) => {
				if (err) throw new Error("search is invalid or try login again")
				callback(err, docs)
				// close database
				db.close()
			})
	})
		
}

// 列出所有产品
exports.getAllProducts = callback => {
	_connectDB((err, db) => {
		db
			.collection(productCollection)
			.find({})
			.toArray((err, docs) => {
				if (err) throw new Error("search is invalid or try search again")
					callback(err, docs)
				db.close()
			})
	})
}

// 删除商品
exports.deleteProduct = (product, callback) => {
	_connectDB((err, db) => {
		db
			.collection(productCollection)
			.deleteOne(product, (err, result) => {
				if (err) throw new Error("delete is failed or try delete again")
				callback(result)
				db.close()	
			})

	})
} 

// 添加商品
exports.addProduct = (product, callback) => {
	_connectDB((err, db) =>{
		db
			.collection(productCollection)
			.insert(product, (err, result) => {
				if (err) throw new Error("add is failed or try add again")
				callback(result)
				db.close()
			})

	})
}

// exports.addProduct = function (product, callback) {
// 	return _connectDB (function(err, db) {
// 		db
// 		.collection(productCollection)
// 		.insert(product, function(err, result) {
// 			if (err) throw new Error("add is failed or try add again")
// 				callback(result)
// 			db.close()
// 		})
// 	})
// }

// 根据id查询商品
exports.findProductById = (id, callback) => {
	_connectDB((err, db) => {
		db
			.collection(productCollection)
			.find(id)
			.toArray((err, docs) => {
				if (err) throw new Error("search is invalid or try search again")
					callback(err, docs)
				db.close()
			})
	})
}

// 更新商品
exports.updateProduct = (id, newInfo, callback) => {
	_connectDB((err, db) => {
		db
			.collection(productCollection)
			.updateOne(id, {$set: newInfo}, (err, result) => {
				if (err) throw new Error("update is invalid or try update again")
				callback(err, result)
				db.close()
			})
	})
}