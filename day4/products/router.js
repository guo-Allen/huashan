const url = require('url')
const { join } = require('path')
const handle = require('./handle')
const render = require('./common/render')

module.exports = (req, res) => {
	//请求路径和请求参数
	const {pathname, query} = url.parse(req.url, true)
	// 将query,pathname赋给req对象
	Object.assign(req, {query}, {pathname})
	// 将res传入到render函数中
	render(res)
	//判断用户请求方式
	const method = req.method.toLowerCase()
	
	// 静态资源
	if (pathname.startsWith('/public/') || pathname.startsWith('/node')) {
		handle.doStatic( req,res )
	}  else if (pathname === '/') { //login page
		handle.showLogin( req, res )
	}  else if (pathname === '/doLogin') { //handle login
		handle.doLogin( req, res )
	}  else if (pathname === '/index') { //index page
		handle.showIndex( req, res )
	}  else if (pathname === '/product' && method === 'get') { //product page
		handle.showProduct( req, res )
	}  else if (pathname === '/product/delete') { //delete product
		handle.deleteProduct( req, res )
	}  else if (pathname === '/product/add') { //add product page
		handle.addProduct( req, res )
	}  else if (pathname === '/doAdd') { //handle add product
		handle.doAdd( req, res )
	}  else if (pathname === '/product/update') { //update product page
		handle.findProduct( req, res )
	}  else if (pathname === '/doUpdate') { //handle update product
		handle.doUpdate( req, res )
	}  else {
		res.end('404,NOT FOUND')
	}
}