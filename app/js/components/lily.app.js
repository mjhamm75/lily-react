/** @jsx React.DOM */

var React = require('react');
var ScoutsList = require('./scouts.list.js');
var AddScout = require('./add.scout.js');

var LilyApp = React.createClass({
  render: function() {
    return(
      <div>
        <ScoutsList />
        <AddScout />
      </div>
    );
  }
});

module.exports = LilyApp;