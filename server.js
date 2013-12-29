'use strict';

var express = require('express');
var socket = require('socket.io');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = socket.listen(server);

io.set('log level', 1); //reduce logging
server.listen(8080);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

['components', 'scripts', 'styles'].forEach(function(dir) {
  app.use('/' + dir, express.static(__dirname + '/app/' + dir));
});

io.sockets.on('connection', function(client) {
  console.log('Client connected...');

  client.on('message', function(message) {
    console.log('message received:', message);
    client.broadcast.emit('message', message);
  });
});
