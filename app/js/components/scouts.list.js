/** @jsx React.DOM */

var React = require('react');
var ScoutStore = require('./../stores/scout.store.js');
var RemoveScout = require('./remove.scout.js');

function getScouts() {
  return {
    scouts: ScoutStore.getScouts()
  };
}

var ScoutsList = React.createClass({
	getInitialState: function() {
		return getScouts();
	},
	componentDidMount: function() {
		ScoutStore.addChangeListener(this.onChange);
	},
	handleClick: function(scoutId, e) {
		window.location.href = window.location.href + '/' + scoutId;
	},
	onChange: function() {
		this.setState(getScouts());
	},
	render: function() {
		var that = this;
		var scouts = this.state.scouts.map(function(scout) {
			return (
				<tr onClick={that.handleClick.bind(null, scout.id)}>
					<td>{scout.first_name} {scout.last_name}</td>
					<td>{scout.rank}</td>
					<td>
						<button className="btn">Full Detail</button>
					</td>
					<td>
						<RemoveScout scoutId={scout.id}/>
					</td>
				</tr>
			);
		});
		return(
			<div className="container">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Rank</th>
							<th>Full Detail</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{scouts}
					</tbody>
				</table>
			</div>
			);
		}
});

module.exports = ScoutsList;