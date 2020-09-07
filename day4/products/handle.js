const mime = require('mime')
const { readFile, writeFile } = require('fs')
const { join } = require('path')
const formidable = require('formidable')
const db = require('./db')


// handle  url startsWith '/public/' || '/node_' 处理静态资源
exports.doStatic = (req, res) => {
	readFile(join(__dirname, req.pathname), (err, data) => {
		if (err) res.end('404')
		res.writeHead('200', { 'Content-Type': mime.lookup(req.pathname) } )
		res.end(data)
	})
}

// handle '/' 展示登录页面
exports.showLogin = (req, res) => res.render('login')
	
// handle '/doLogin' 处理登录页面
exports.doLogin = (req, res) => {
	// formidable 表单插件
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		db.checkLogin(fields.username,fields.password)
		.then( docs => {
			if (docs.length) {
				res.writeHead(302, { 'Location': '/index'})
			} else {
				res.writeHead(302, { 'Location': '/'})
			}
			res.end()
		})
		.catch( err => { throw err } )
	});
}

// handle /indx' 展示首页
exports.showIndex = (req, res) => res.render('index')

// handle /product & 'get' 展示产品
exports.showProduct = (req, res) => {
	db.getAllProducts()
	.then( docs => res.render('product', { products: docs }) )
	.catch( err => { throw err } )
}

// handle url '/public/delete' 删除商品
exports.deleteProduct = (req, res) => {
	db.deleteProduct(req.query)
	.then(result => {
		res.writeHead(302, { 'Location': '/product'})
		res.end()
	})
	.catch( err => { throw err } )
}

// handle url '/public/add' 添加商品页
exports.addProduct = (req, res) => res.render('addProduct')

// handle url '/doAdd' 处理添加商品请求
exports.doAdd = (req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		// 添加商品
		// 为商品生成随机id
		const ID = ('' + Math.random()).split('.')[1]
		Object.assign(fields, {"product_id": ID})

		db.addProduct(fields)
		.then( result => {
			// 跳转到商品页
			res.writeHead(302, { 'Location': '/product'})
			res.end()
		})
		.catch( err => { throw err } )
	});
}

// 记录更新的id
let id ;
// handle url '/public/update' 商品更新页面
exports.findProduct = (req, res) => {
	// 根据id获取商品信息
	id = req.query
	db.findProductById(id)
	.then( result => res.render('updateProduct', result[0]) )
	.catch( err => { throw err } )
}

// handle url '/doUpdate' 处理商品更新
exports.doUpdate = (req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		// 添加商品
		db.updateProduct(id, fields)
		.then( result => {
			// 跳转到商品页
			res.writeHead(302, { 'Location': '/product'})
			res.end()
		})
		.catch( err => { throw err } )
	});
}