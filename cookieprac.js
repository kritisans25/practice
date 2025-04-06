var cookieP=require('cookie-parser');
var express=require('express');
var app=express();
app.use(cookieP());
//setting cookies:
app.get('/cookieset',function(req,res)
{
    res.cookie('Cookie1','HELLO');
    res.cookie('Cookie2','World',{maxAge:1000 * 60 * 10 + Date.now()});
    res.send('Cookies set successfully!');
});
//getting cookies
app.get('/cookieget',function(req,res)
{
    if(req.cookies.Cookie1)
    {
        res.status(200).send(req.cookies);
    }
    else{
        res.send('Cookie 1 not avail')
    }
});
//clearing cookies
app.get('/clearcookie1', function(req, res) {
    if (req.cookies.Cookie1) {
        res.clearCookie('Cookie1');
        res.send('Cookie1 is cleared');
    } else {
        res.send('Cookie1 is not available');
    }
});
var server=app.listen(2000,function(req,res)
{
    console.log('SUCCESSFUL');
});