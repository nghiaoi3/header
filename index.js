var express = require('express');
var app = express()
var PORT = process.env.PORT ||	3000;

var getInfo = require('./getInfo')

app.get('/api/whoami', function (req,res) {
    var json =     {
        
     ipaddress : getInfo.getIP(req.connection.remoteAddress),
     language : getInfo.getLang(req.headers['accept-language']),
     software : getInfo.getOS(req.headers['user-agent']),
    
    };
    
    res.json(json);
})