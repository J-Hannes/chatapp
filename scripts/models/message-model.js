define(['backbone'], function(Backbone) {
  'use strict';
   
  var message = Backbone.Model.extend({
    defaults: {
      author: '',
      content: ''
    }
  });
 
 return message;
});