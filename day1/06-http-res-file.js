var http =resquire('htpp')
var fs = require('fs')
var server=http.createServer();

server.on('request', function (req,res) {
	res.writeHead(200,{
		'Content-type':'text/html'
	})
	fs.readFile('./data.txt',function (err,data) {
		
	})
})
