var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res)
{
    fs.readFile('index.html',function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("ERROR 404");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(3000);
console.log("SUCCESSFUL");