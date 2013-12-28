'use strict';

var express = require('express');
var socket = require('socket.io');

var server = express.createServer();
var io = socket.listen(server);

io.sockets.on('connection', function() {
  console.log('Client connected...');
});
