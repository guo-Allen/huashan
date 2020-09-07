var fs=require('fs');
copy('./data.txt','datal.txt')
function copy (src,dist) {
	fs.readFile(src,'utf-8',function  (err,data) {
		if(err){
			throw err;
			console.log(data);
		}
		fs.writeFile(dist,data,function(err,data) {
			if(err){
				throw err;
			}
			console.log(data);
		})
	})
}

var fs=require('fs')
copy('./data.txt','./datal.txt')
function copy (src,dist) {
	fs.readFile(src,function  (err,data) {
		if(err){
			throw err;
		}
	})
	// 读文件三个参数,第一个是地址,第二个是编码(可选),第三个是函数
	fs.writeFile(dist,data,function(err,data){
		if(err){
			throw err;
		}
		console.log(data);
	})
	//写文件三个参数,第一个是写入地址.第二个是写入数据,第三个是函数
}
