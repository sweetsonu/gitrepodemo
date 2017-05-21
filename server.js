var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
fs.readFile('index.html',function(error,data){
   res.writeHead(200,{'content-type':'text/html'});
    res.end(data);
});
}).listen(3122,'127.0.0.1');

console.log('web server has started!!');