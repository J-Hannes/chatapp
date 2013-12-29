define([
  'backbone',
  'views/message-view'
], function(Backbone, MessageView) {
  'use strict';
   
  var MessageListView = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.collection, 'add', this.addMessage);
    },

    addMessage: function(message) {
      // console.debug('adding message...');
      var view = new MessageView({model: message});
      view.render();
      this.$el.append(view.el);
    }
  });

  return MessageListView;
});