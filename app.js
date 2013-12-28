'use strict';

var express = require('express');
var socket = require('socket.io');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = socket.listen(server);

server.listen(8080);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function() {
  console.log('Client connected...');
});
