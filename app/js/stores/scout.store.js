var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var scouts = [
    {
      name: 'Jason Hamm',
      rank: 'Tenderfoot'
    },
    {
      name: 'Tristan McGraw',
      rank: 'Life'
    },
    {
      name: 'Whitney Palmer',
      rank: 'Star'
    }
];

var ScoutStore = merge(EventEmitter.prototype, {
  getScouts: function() {
    return scouts;
  }
});

module.exports = ScoutStore;