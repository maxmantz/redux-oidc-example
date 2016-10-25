var fs = require('fs');
var http = require('http');
var https = require('https');
var path = require('path');

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

module.exports = app;
