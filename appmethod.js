var express=require('express');
var path=require('path');
var app=express();
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'practice22.html'));
});
app.get('/appmethod',function(req,res) 
{
    var output1="FIRST NAME:"+req.query['first'];
    var output2="SECOND NAME:"+req.query['second'];
    res.send(`${output1}<br>${output2}`);

});
var server=app.listen(3000,function(req,res)
{
    console.log("SUCCCESSFULLL!!!");
});