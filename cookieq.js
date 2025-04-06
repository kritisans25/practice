var express=require('express');
var app=express();
var cookiep=require('cookie-parser');
app.use(cookiep());
app.get('/cookieset',function(req,res)
{
    const sessionId=Math.random();
    res.cookie('sessionId',sessionId);
    const userPreferences = {
        theme: 'dark',
        language: 'English'
    };
    res.cookie('UserPreferences', JSON.stringify(userPreferences), {
        maxAge: 5 * 60 * 1000 
    });
    res.status(200).send("SUCCESSFUL");
});
app.get('/showcookie',function(req,res){
    res.send(req.cookies);
})
app.get('/clearcookie',function(req,res)
{
    res.clearCookie('sessionId');
    res.clearCookie('UserPreferences');
    res.send('cleared');
    res.end();
});
var server=app.listen(3000,function(req,res)
{
    console.log('Successful');
});