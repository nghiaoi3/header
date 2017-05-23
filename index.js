var express = require('express');
var app = express()
var PORT = process.env.PORT ||	3000;
import {  getIP, getOS, getLang } from 'getInfo';

app.get('/api/whoami', function (req,res) {
    var json =     {
        
     ipaddress : getIP(req.connection.remoteAddress),
     language : getLang(req.headers['accept-language']),
     software : getOS(req.headers['user-agent']),
    
    };
    
    res.json(json);
})