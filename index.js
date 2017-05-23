var express = require('express');
var app = express()
var port = process.env.PORT ||	3000;

var getInfo = require('./getInfo')

app.get('/api/whoami', function (req,res) {
    
    var json =     {
        
     ipaddress : req.headers['x-forwarded-for'],
     language : getInfo.getLang(req.headers['accept-language']),
     software : getInfo.getOS(req.headers['user-agent']),
    header: req.headers
    };
    
    res.json(json);
    

})

app.listen(port, function(){
    console.log('server is listening ' +port)
})