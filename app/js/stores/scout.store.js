var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";
var scouts = [
// {
// 	name: 'Jason Hamm',
// 	rank: 'Tenderfoot'
// }, {
// 	name: 'Tristan McGraw',
// 	rank: 'Life'
// }, {
// 	name: 'Whitney Palmer',
// 	rank: 'Star'
// }
];

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
	}
});

module.exports = ScoutStore;