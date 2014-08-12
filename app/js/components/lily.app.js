/** @jsx React.DOM */

var React = require('react');
var ScoutsList = require('./scouts.list.js');

var LilyApp = React.createClass({
  render: function() {
    return(
      <div>
        <ScoutsList />
      </div>
    );
  }
});

module.exports = LilyApp;