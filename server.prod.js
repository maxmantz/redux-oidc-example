var path = require('path');
var express = require('express');
var app = require('./server');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./config/webpack-prod-config');


var compiler = require('webpack')(config);

app.use(require('webpack-dev-middleware')(compiler));

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

app.listen(app.get('port'), '0.0.0.0', function() {
  console.log('Listening on port', app.get('port'));
});
