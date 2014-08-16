var Dispatcher = require('./dispatcher.js');
var merge = require('react/lib/merge');


var ScoutDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({
      src: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = ScoutDispatcher;