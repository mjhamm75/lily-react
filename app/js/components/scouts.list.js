/** @jsx React.DOM */

var React = require('react');
var ScoutStore = require('./../stores/scout.store.js');

function getScouts() {
  return {
    scouts: ScoutStore.getScouts()
  };
}

var ScoutsList = React.createClass({
  getInitialState: function() {
    return getScouts();
  },
  handleClick: function(e) {
    console.log("clicked");
  },
  render: function() {
    var that = this;
    var scouts = this.state.scouts.map(function(scout) {
      return (
        <tr  onClick={that.handleClick}>
          <td>{scout.name}</td>
          <td>{scout.rank}</td>
          <td><button className="btn">Full Detail</button></td>
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