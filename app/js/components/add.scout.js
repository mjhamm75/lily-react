/** @jsx React.DOM */

var React = require('react');
var ScoutsList = require('./scouts.list.js');
var AddScout = require('./add.scout.js');
var ScoutActions = require('./../actions/scout.actions.js');
var OverlayMixin = require('react-bootstrap').OverlayMixin;
var Modal = require('react-bootstrap').Modal;


var AddScout = React.createClass({
	mixins: [OverlayMixin],
	getInitialState: function() {
		return {
			isModalOpen: false,
			scout: {}
		};
	},
	toggleModal: function() {
		this.state.scout = {};
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},
	handleToggle: function() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},
	makeChangeHandler: function(property) {
		var that = this;
		return function(e) {
			that.state.scout[property] = e.currentTarget.value;
			that.setState({user: that.state.user});
		};
	},
	addScout: function() {
		ScoutActions.addScout(this.state.scout);
	},
	render: function() {
		return ( < button onClick = { this.toggleModal} type = "button" className = "btn btn-success" >Add Scout < /button>
		);
	},
	renderOverlay: function() {
		if (!this.state.isModalOpen) {
			return <span></span>
		}
		return (
			< Modal title = "Add a Scout" onRequestHide = { this.handleToggle} >
				< div className = "modal-body" >
					<form>
						<div className="form-group">
							<label for="first_name">First Name</label>
							<input className="form-control" onBlur={this.makeChangeHandler('first_name')}></input>
						</div>
						<div className="form-group">
							<label for="last_name">Last Name</label>
							<input className="form-control" onBlur={this.makeChangeHandler('last_name')}></input>
						</div>
						<div className="form-group">
							<label for="rank">Rank</label>
							<select className="form-control" onBlur={this.makeChangeHandler('rank')}>
								<option>Boy Scout</option>
								<option>Tenderfoot</option>
								<option>2nd Class</option>
								<option>First Class</option>
							</select>
						</div>
						<div className="form-group">
							<label for="email">Email</label>
							<input className="form-control" onBlur={this.makeChangeHandler('email')}></input>
						</div>
					</form>
				< /div>
				<div className="modal-footer">
					<button onClick={this.addScout} className="btn btn-primary">Add</button >
					<button onClick={this.toggleModal} className="btn btn-warning">Cancel</button >
				< /div>
			</Modal >
		);
	}
});

module.exports = AddScout;