var http= require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Hello World \n');

}).listen(8110,"192.168.137.137");
console.log("Server runing");
