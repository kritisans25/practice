var express=require('express');
var path=require('path');
var app=express();
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'form1.html'))
});
app.get('/process_get',function(req,res)
{
    var output="FIRSTNAME:"+req.query[first_name];
    var output2="SECONDNAME:"+req.query[second_name];
    res.send(output+output2);

});
var server=app.listen(8000,function()
{
    console.log('successfulll!!!!');
});