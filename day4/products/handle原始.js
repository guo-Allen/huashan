const mime = require('mime')
const { readFile, writeFile } = require('fs')
const { join } = require('path')
const formidable = require('formidable')
const db = require('./db')

// handle '/' 展示登录页面
exports.showLogin = (req, res) => {
	res.render('login')
}

// handle '/doLogin' 处理登录页面
exports.doLogin = (req, res) => {
	// formidable 表单插件
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		res.writeHead(200, {'content-type': 'text/plain'});
		db.checkLogin(fields.username,fields.password, (err, docs) => {
			if (err) res.end('查询异常')
			if(docs.length){
				res.writeHead(302, { 'Location': '/index'})
			} else {
				// 用户或密码错误，重定向到当前页面
				res.writeHead(302, { 'Location': '/'})
				console.log('用户名或密码错误')
			}	
			res.end()
		})
	});
}

// handle /indx' 展示首页
exports.showIndex = (req, res) => {
	
	res.render('index')
}

// handle /product & 'get' 展示产品
exports.showProduct = (req, res) => {

	db.getAllProducts((err, docs) => {
		if (err) res.end('查询异常')
		res.render('product', { products: docs })
	})
}


// handle  url startsWith '/public/' 处理静态资源
exports.doStatic = (req, res) => {
	readFile(join(__dirname, req.pathname), (err, data) =>{
		if (err) res.end('404')
		res.writeHead('200', {
			'Content-Type': mime.lookup(req.pathname)
		})
		res.end(data)
	})
}

// handle url '/public/delete' 删除商品
exports.deleteProduct = (req, res) => {
	const productInfo = JSON.parse(JSON.stringify(req.query).replace(':',': '))
	db.deleteProduct(productInfo, (err, result) => {
		res.writeHead(302, { 'Location': '/product'})
		res.end()
	})
}

// handle url '/public/add' 添加商品页
exports.addProduct = (req, res) => {
	res.render('addProduct')
}

// handle url '/doAdd' 处理添加商品请求
exports.doAdd = (req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		// 添加商品
		// 为商品生成随机id
		const ID = ('' + Math.random()).split('.')[1]
		Object.assign(fields, {"product_id": ID})
		db.addProduct(fields, (err, result) => {
			// 跳转到商品页
			res.writeHead(302, { 'Location': '/product'})
			res.end()
		})

	});
}
// 记录更新的id
let id ;
// handle url '/public/update' 商品更新页面
exports.findProduct = (req, res) => {
	// 根据id获取商品信息
	id = req.query
	db.findProductById(id, (err, result) => {
		res.render('updateProduct', result[0])
	})
}

// handle url '/doUpdate' 处理商品更新
exports.doUpdate = (req, res) => {
	console.log(id)
	const form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		// 添加商品
		db.updateProduct(id, fields, (err, result) => {
			// 跳转到商品页
			res.writeHead(302, { 'Location': '/product'})
			res.end()
		})

	});
}