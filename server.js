var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./key.pem', 'utf8');
var certificate = fs.readFileSync('./cert.pem', 'utf8');
var path = require('path');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(function(request, response, next) {
  if (path.extname(request.path).length > 0) {
    next();
  } else {
    request.url = '/index.html';
    next();
  }
});

app.use(express.static(__dirname + '/dist'))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: __dirname + '/dist'
    });
}).get('/silent_renew.html', {
    res.sendFile('silent_renew.html', {
      root: __dirname + '/dist'
    });
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
