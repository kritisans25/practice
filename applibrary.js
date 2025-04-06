var express=require('express');
var app=express();
var path=require('path');
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'library.html'));
});
app.get('/applibrary',function(req,res)
{
    //var op1="NAME:"+req.query['name'];
    //var op2="AUTHOR:"+req.query['auth'];
    //var op3="PRICE:"+req.query['price'];
    //var op4="PUBLICATION:"+req.query['pub'];
    //var op5="EDITION:"+req.query['ed'];
    //var op6="GENRE:"+req.query['genre'];
    //res.send(`${op1}<br>${op2}<br>${op3}<br>${op4}<br>${op5}<br>${op6}<br>`);
    //FOR GETTING AS A JSON OBJECT:
    var BookDetails={
        TITLE:req.query['name'],
        AUTHOR:req.query['auth'],
        PRICE:req.query['price'],
        PUBLICATION:req.query['pub'],
        EDITION:req.query['ed'],
        GENRE:req.query['genre']
    };
    res.json(BookDetails);

   
});
var server=app.listen(3000,function()
{
    console.log("SERVER RUNNING!!");
});