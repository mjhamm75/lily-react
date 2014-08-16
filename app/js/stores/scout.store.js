var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
var ScoutDispatcher = require('./../dispatchers/scout.dispatcher.js');
var ScoutConstants = require('./../constants/constants.js');

var CHANGE_EVENT = "change";
var scouts = [];

var ScoutStore = merge(EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	getScouts: function() {
		var that = this;
		if(scouts.length === 0) {
			$.ajax({
				url: 'http://localhost:9000/scouts',
			}).success(function(data) {
				scouts = data.scouts;
				that.emit(CHANGE_EVENT);
			});
			return scouts;
		} else {
			return scouts;
		}
	},
	addScout: function(scout) {
		debugger;
	},
	removeScout: function(i) {

	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}
});

ScoutStore.dispatchToken = ScoutDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case ScoutConstants.ADD_SCOUT:
			ScoutStore.addScout(payload.action.item);
			break;
		case ScoutConstants.REMOVE_SCOUT:
			ScoutStore.removeScout(payload.action.index);
			break;
	}
	ScoutStore.emitChange();

});

module.exports = ScoutStore;