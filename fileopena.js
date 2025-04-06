var http=require('http');
var fs=require('fs');
var url=require('url');
fs.writeFile('index.html','HELLOWORLD',function(err,data)
{
    if(err)
    {
        throw err;
    }
    console.log('saved');
});
