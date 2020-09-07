var fs=require('fs')

fs.readFile('./data.txt','utf-8',function  (err,data) {
	if(err){
		throw err;
	}
	console.log(data.toString());
})


var fs= require('fs')
 fs.readFile('./data.txt',function  (err) {
 	if(err) throw err;
 	console.log(data.toString());
 })
