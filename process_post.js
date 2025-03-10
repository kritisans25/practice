var express=require('express');
var path=require('path');
var bp=require('body-parser');
const { stringify } = require('querystring');
var app=express();
var u=bp.urlencoded({extended:'false'});
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'form1.html'));
});
app.post('/process_post',u,function()
{
    var output1={
        firstname:req.body['first_name'],
        secondname:req.body['second_name']
    };
    res.end(JSON.stringify(output1));
});
var server=app.listen(8000,function()
{
    console.log("SUCCESSFULLL!!!");
});
