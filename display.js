var express=require('express');
var path=require('path');
var app=express();
var bp=require('body-parser');
var urlencodedparser=bp.urlencoded({extended:'false'});
app.get('/',function(req,res)
{
    var form=
    `<html>
    <body>
        <form action="/display" method="post">
            FIRST NAME:
            <input type="text" name="first_name">
            SECOND NAME:
            <input type="text" name="second_name">
            <input type="submit" name="SUBMIT">
        </form>
    </body>
</html>`
res.send(form);
});
app.post('/display',urlencodedparser,function(req,res)
{
    var output="FIRSTNAME:"+req.body['first_name'];
    var output2="SECONDNAME:"+req.body['second_name'];
    res.send(output+output2)
});
var server=app.listen(8000,function()
{
    console.log("SUCCESSFULLLLL");
});
