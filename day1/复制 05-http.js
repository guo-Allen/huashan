var http=require('http')
 
 var server=http.createServer()
 
 server.on('request',function (req,res) {
 	res.writeHead(200,{
 		'content-Type':'text/plain;charset=utf-8'
 	})
 	res.write()
 	res.end()
 })
 
 server.listen(3000,function () {
 	console.log('server is runing at port 3000...');
 })
