var AppConstants = require('./../constants/constants.js');
var ScoutDispatcher = require('./../dispatchers/scout.dispatcher.js');

var ScoutActions = {
  addScout: function(item) {
    ScoutDispatcher.handleViewAction({
      actionType: AppConstants.ADD_SCOUT,
      item: item
    });
  },

  removeScout: function(index) {
    ScoutDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_SCOUT,
      index: index
    });
  }

};

module.exports = ScoutActions;