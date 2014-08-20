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
		var size = scouts.length;
		$.ajax({
			url: 'http://localhost:9000/scouts',
		}).success(function(data) {
			scouts = data.scouts;
			if(size !== scouts.length) {
				that.emit(CHANGE_EVENT);
			}
		});
		return scouts;
	},
	addScout: function(scout) {
		var that = this;
		$.ajax({
			type: 'POST',
			url: 'http://localhost:9000/scouts',
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(scout),
			processData: false,
			success: function() {
				that.emit(CHANGE_EVENT);
			}
		});
	},
	removeScout: function(scoutId) {
		var that = this;
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:9000/scouts/' + scoutId,
			success: function() {
				that.emit(CHANGE_EVENT);
			}
		});
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}
});

ScoutStore.dispatchToken = ScoutDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case ScoutConstants.ADD_SCOUT:
			ScoutStore.addScout(payload.action.scout);
			break;
		case ScoutConstants.REMOVE_SCOUT:
			ScoutStore.removeScout(payload.action.index);
			break;
	}
	ScoutStore.emitChange();

});

module.exports = ScoutStore;