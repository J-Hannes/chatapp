require.config({
  paths: {
    'backbone': '/components/backbone/backbone',
    'lodash': '/components/lodash/dist/lodash',
    'jquery': '/components/jquery/jquery',
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