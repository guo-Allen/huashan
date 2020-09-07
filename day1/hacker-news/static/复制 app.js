var http=require('http');
var fs=require(fs);
var url = require('url');
var template = require('art-template');

var server = http.createServer();

server.on('request',function  (req,res) {
	var urlObj = url.parse(req.url,true);
	var queryObj= urlObj.query;
	var pathname=urlObj.pathname;
	if (pathname==='/'){
		fs.readFile('./static/index.html',function(err,tplData){
			if(err){
			throw err;
		}
		res.writeHead(200,{
			'Content-Type':'text/html;charset=utf-8'
		})
		fs.readFile('./static/data.json','utf-8',function(err,data) {
			if(err){
				throw err;
			}
			var htmlStr=templata.compile(tplData.toString())(JSON.parse(data));
			res.end(htmlStr);
		})
		})
	}else if(pathname==='/main.css'){
		fs.reatHead('./static/main.css',function  (err,data) {
			if(err){
				throw err;
			}
			rex.writeHead(200,{
				'Contend-Type':'text/css;chatset=utf-8'
			})
			res.end(data);
		})
	}else if(pathname==='/logo.git'){
		fs.readFile('./static/logo.git',function  (err,data) {
			if(err){
				throw err;
			}
			res.writeHead(200,{
				'Content-Type':'image/gif'
			})
			res.end(data);
		})
	}else if(pathname === '/submit'){
		fs.readFile('./static/submit.html',function  (err,data) {
			if(err){
				throw err;
			}
			writeHead(200,{
				'Content-Type':'text/html;charset=utf-8'
			});
			res.end(data);
		})
	}else if(pathname==='/add_submit'){
		fs.readFile('./static/data.json','utf-8',function  (err,data) {
			if(err){
				throw err;
			}
			data=JSON.parse(data);
			data.news.unshift({
				title:queryObj.title,
				time:'2016',
				text: queryObj.text
			});
			fs.writeFile('./static/data.json','utf-8',function  (err,data) {
				if(err){
					throw err;
				}
				res.writeHead(302,{
					'Location':'/'
				})
				res.end();
			})
		})
		
	}else{
		res.end('404 Not Found')
	}
});

server.listen(3000,function  () {
	console.log('server is running at port 3000');
})






















