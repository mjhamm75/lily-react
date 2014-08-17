var AppConstants = require('./../constants/constants.js');
var ScoutDispatcher = require('./../dispatchers/scout.dispatcher.js');

var ScoutActions = {
  addScout: function(scout) {
    ScoutDispatcher.handleViewAction({
      actionType: AppConstants.ADD_SCOUT,
      scout: scout
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