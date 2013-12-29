require.config({
  paths: {
    'backbone': '/bower_components/backbone/backbone',
    'lodash': '/bower_components/lodash/dist/lodash',
    'jquery': '/bower_components/jquery/jquery',
    'socket.io': '/socket.io/socket.io'
  },

  shim: {
    'backbone': {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['app'], function(App) {
  'use strict';

  var app = new App();
  app.start();
});