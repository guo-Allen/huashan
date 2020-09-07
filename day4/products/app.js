const http = require('http')
const { port } = require('./config')
const router = require('./router')

http
	.createServer((req, res) => {
		router(req, res)
	})
	.listen(port, () => {
		console.log(`server is running at port ${port}`)
	})