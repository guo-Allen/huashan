const { MongoClient } = require('mongodb')
const { connect, userCollection, productCollection } = require('./config').dbSetting

// 连接数据库
_connectDB = () => {
	return new Promise((resolve, reject) => {
		MongoClient.connect(connect, (err, db) => err === null ? resolve(db) : reject(err))
	})
}

// 检查用户名
exports.checkLogin = (username, password) => {
	return new Promise ((resolve, reject) => {
		_connectDB()
		.then( db => {
			db
			.collection(userCollection)
			.find({
				name: username,
				password: password
			})
			.toArray((err, docs) => err === null ? resolve(docs) : reject(err))
			db.close()
		})
		.catch( err => {
			throw new Error("database can't connect")
		})
	})
}

// 列出所有产品
exports.getAllProducts = () => {
	return new Promise((resolve, reject) => {
		_connectDB()
		.then( db => {
			db
			.collection(productCollection)
			.find({})
			.toArray((err, docs) => err === null ? resolve(docs) : reject(err))
			db.close()
		})
	})
}

// 删除商品-通过id
exports.deleteProduct = product => {
	return new Promise((resolve, reject) => {
		_connectDB()
		.then( db => {
			db
			.collection(productCollection)
			.deleteOne(product, (err, result) => err === null ? resolve(product) : reject(err))
			db.close()
		})
		.catch( err => {
			throw new Error("database can't connect")
		})
	})
} 

// 添加商品
exports.addProduct = product => {
	return new Promise((resolve, reject) => {
		_connectDB()
		.then( db => {
			db
			.collection(productCollection)
			.insert(product, (err, result) => err === null ? resolve(product) : reject(err))
			db.close()
		})
		.catch( err => {
			throw new Error("database can't connect")
		})
	})
}

// 根据id查询商品
exports.findProductById = id => {
	return new Promise((resolve, reject) => {
		_connectDB()
		.then( db => {
			db
			.collection(productCollection)
			.find(id)
			.toArray((err, product) => err === null ? resolve(product) : reject(err))
			db.close()
		})
		.catch( err => {
			throw new Error("database can't connect")
		})
	})
}

// 更新商品
exports.updateProduct = (id, newInfo) => {
	return new Promise((resolve, reject) => {
		_connectDB()
		.then( db => {
			db
			.collection(productCollection)
			.updateOne(id, {$set: newInfo}, (err, result) => err === null ? resolve(result) : reject(err))
			db.close()
		})
		.catch( err => {
			throw new Error("database can't connect")
		})
	})
}