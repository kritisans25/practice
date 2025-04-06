const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const bp = require('body-parser');
const path = require('path');
const app = express();

const urlEncodedParser = bp.urlencoded({extended: true});
app.use(cookieParser());

app.use(sessions({
    secret: 'prisha',
    resave: true,
    saveUninitialized: true
}));

const username="prisha1735";
const password="prisha";

app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, "session_form.html"));
});

app.post('/check-user', urlEncodedParser, function(req,res)
{
    if(req.body.username==username && req.body.password==password)
    {
        res.send("Successful login");
    }
    else
    {
        if(req.session.no_of_tries)
        {
            if(req.session.no_of_tries>=3)
                res.send("You are blocked");
            else{
                res.send("Invalid credentials. Try again. " + ++req.session.no_of_tries);
            }
        }
        else
        {
            req.session.no_of_tries=1;
            res.send("Invalid credentials. Try again. " + req.session.no_of_tries);
        }
    }
});

app.listen(8000, function(req, res){
    console.log("server running");
})