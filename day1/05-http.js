var http=require('http');

//创建一个服务器
var server = http.createServer();
//给服务器实例对象设置一个request请求事件处理函数
server.on('request',function(request,response) {
	console.log(request.url);
	response.writeHead(200,{
		'Content-Type':'text/html; charset=utf-8'
	})
	response.write('<h1>hello</h1>');
	response.end();
})

//启动服务器,设置绑定一个端口号
server.listen(3000,function() {
	console.log('Server is running at port 3000...');
	console.log('Please visit http://127.0.0.1:3000/');
})
