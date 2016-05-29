var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(__dirname + '/key.pem', 'utf8');
var certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
var path = require('path');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(function(req, res, next) {
  if (path.extname(req.path).length > 0) {
    next();
  } else if (path.dirname(req.path).indexOf('silent_renew') > -1) {
    req.url = '/silent_renew.html';
    next();
  } else {
    req.url = '/index.html';
    next();
  }
});

app.use(express.static(__dirname + '/dist'))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: __dirname + '/dist'
    });
}).get('/silent_renew.html', function(req, res) {
    res.sendFile('silent_renew.html', {
      root: __dirname + '/dist'
    });
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
