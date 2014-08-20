/** @jsx React.DOM */

var React = require('react');

var RemoveScout = React.createClass({
	handleClick: function(e) {
		e.stopPropagation();
		ScoutActions.removeScout(this.props.scoutId);
	},
	render: function() {
		return <span onClick={this.handleClick} className="glyphicon glyphicon-remove-circle"></span>;
	}
});

module.exports = RemoveScout;