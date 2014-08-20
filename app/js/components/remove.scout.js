/** @jsx React.DOM */

var React = require('react');
var ScoutActions = require('./../actions/scout.actions.js');

var RemoveScout = React.createClass({
	handleClick: function(e) {
		e.stopPropagation();
		ScoutActions.removeScout(this.props.scoutId);
	},
	render: function() {
		return <a><i onClick={this.handleClick} className="glyphicon glyphicon-remove-circle btn-circle"></i></a>;
	}
});

module.exports = RemoveScout;