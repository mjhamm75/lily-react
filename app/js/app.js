/** @jsx React.DOM */

var React = require('react');
var LilyApp = require('./components/lily.app.js');
var NavBar = require('./components/navbar.js');
var ScoutDetail = require('./components/scout.detail.js');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.Default;

var App = React.createClass({
	render: function() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<this.props.activeRouteHandler />
				</div>
			</div>
		);
	}
});

var routes = (
	<Routes>
		<Route path="/" name="app" handler={App}>
			<Route path="/scouts" handler={LilyApp} />
			<Route path="/scout-detail" handler={ScoutDetail} />
		</Route>
	</Routes>
);

React.renderComponent(routes, document.getElementById('lily'));