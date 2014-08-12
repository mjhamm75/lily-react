/** @jsx React.DOM */

var React = require('react');

var ScoutsList = React.createClass({
  render: function() {
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
              <tr>
                <td>Hamm, Jason</td>
                <td>Tenderfoot</td>
                <td><button className="btn">Full Detail</button></td>
              </tr>
            </tbody>
        </table>
      </div>
    );
  }
});

module.exports = ScoutsList;