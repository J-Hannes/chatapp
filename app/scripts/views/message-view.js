define([
  'backbone',
  'lodash'
], function(Backbone, _) {
  'use strict';
   
  var MessageView = Backbone.View.extend({
    tagName: 'li',

    template: _.template('<%= content %>'),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
 
  return MessageView;
});