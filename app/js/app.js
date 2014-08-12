/** @jsx React.DOM */

var React = require('react');
var LilyApp = require('./components/lily.app.js');
var NavBar = require('./components/navbar.js');

React.renderComponent(
  <div>
    <NavBar />
    <div className="container">
      <LilyApp />
    </div>
  </div>,
  document.getElementById('lily')
);