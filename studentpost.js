var express=require('express');
var app=express();
var path=require('path');
var bp=require('body-parser');
app.use(bp.urlencoded({extended:true}));
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'student.html'));
});
app.post('/studentpost',function(req,res)
{
    var studetails=
    {
        Name:req.body.name,
        Age:req.body.age,
        Section:req.body.sec
    };
    res.json(studetails);
});
var server=app.listen(3000,function(req,res)
{
    console.log('SUCCESSFUL');
});