define([
  'backbone',
  'socket'
], function(Backbone, socket) {
  'use strict';

  var MessageInputView = Backbone.View.extend({
    events: {
      'submit': 'submitMessage'
    },

    submitMessage: function(e) {
      e.preventDefault();
      var messages = this.collection;
      this.$('#chat_input').val(function(i, message) {
        // console.debug('sending message:', message);
        socket.emit('message', message);
        messages.addMessage(message);
        return '';
      });
    }
  });

  return MessageInputView;
});