var http = require('http');

var url=require('url');
var adr= 'https://www.perplexity.ai/referrals/05JEKUM6';
var q=url.parse(adr,true);
console.log(q);
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(JSON.stringify(q));
    res.end();
}).listen(5000);
console.log("SUCCESSFUL");