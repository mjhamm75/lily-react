/** @jsx React.DOM */

var React = require('react');
var ScoutsList = require('./scouts.list.js');
var AddScout = require('./add.scout.js');
var ScoutActions = require('./../actions/scout.actions.js');

var AddScout = React.createClass({
	handleClick: function() {
		ScoutActions.addScout();
	},
	render: function() {
		return (
			<button onClick={this.handleClick} type="button" className="btn btn-success">Add Scout</button>
		);
	}
});

module.exports = AddScout;