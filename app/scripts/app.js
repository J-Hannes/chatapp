define([
  'backbone',
  'views/message-input-view',
  'views/message-list-view',
  'collections/message-collection'
], function(Backbone, MessageInputView, MessageListView, MessageCollection) {
  'use strict';

  var App = Backbone.View.extend({
    start: function() {
      var  messages = new MessageCollection();
      new MessageListView({el: '#messages', collection: messages});
      new MessageInputView({el: '#chat_form', collection: messages});
      // console.debug('socket listening for messages');
    }
  });

  return App;
});