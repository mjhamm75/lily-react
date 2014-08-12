/** @jsx React.DOM */

var React = require('react');

function getScouts() {
  return {
    scouts: [
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
  ]
  };
}

var ScoutsList = React.createClass({
  getInitialState: function() {
    return getScouts();
  },
  render: function() {
    var scouts = this.state.scouts.map(function(scout) {
      return (
        <tr>
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