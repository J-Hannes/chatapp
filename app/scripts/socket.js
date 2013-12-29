define(['socket.io'], function(io) {
  'use strict';
  var socket = io.connect('http://localhost:8080');
  return socket;
});