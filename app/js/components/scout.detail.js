/** @jsx React.DOM */

var React = require('react');
var ScoutStore = require('./../stores/scout.store.js');

function getScoutDetail(scoutId) {
	return ScoutStore.getScoutDetail(scoutId);
}

var ScoutsDetail = React.createClass({
	getInitialState: function() {
		return getScoutDetail(this.props.params.scoutId);
	},
	render: function() {
		return(
			<div className="container">
			  <h4>Jason Hamm</h4>
			  <table className="table table-striped">
			    <thead>
			      <tr>
			        <th>
			          Rank
			        </th>
			        <th>
			          Percent Remaining
			        </th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td>
			          Boy Scout
			        </td>
			        <td>
			          3 of 10 complete
			        </td>
			      </tr>
			    </tbody>
			  </table>
			  <table className="table table-striped">
			    <thead>
			      <tr>
			        <th>
			          Merit Badge
			        </th>
			        <th>
			          Percent Remaining
			        </th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td>
			          Archery
			        </td>
			        <td>
			          50%
			        </td>
			      </tr>
			    </tbody>
			  </table>
			</div>
		);
	}
});

module.exports = ScoutsDetail;