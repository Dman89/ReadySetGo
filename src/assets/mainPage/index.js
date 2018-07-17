import React, { Component } from 'react';
import UserList from '../../assets/userList';
import ColumnActions from '../../assets/columnActions';

class MainPage extends Component {
	_renderColumnActions() {
		return this.props.columnButtons.map(
			function(btn, index) {
				return (
					<ColumnActions
						button={btn}
						key={index}
						index={index}
						sortOptions={this.props.sortOptions}
						setSortOptions={function(options) {
							this.props.setSortOptions(options);
						}.bind(this)}
					/>
				);
			}.bind(this)
		);
	}

	_renderUsers() {
		return (
			<UserList
				users={this.props.users}
				sortOptions={this.props.sortOptions}
				openModal={function(user) {
					this.props.openModal(user);
				}.bind(this)}
			/>
		);
	}

	render() {
		return (
			<div className="container main-page">
				<button
					className="btn btn-success"
					onClick={function() {
						this.props.openNewUserModal();
					}.bind(this)}
				>
					<i className="fa fa-plus" />
				</button>
				<div className="row">
					<div className="col-xs-12">
						<h1 className="page-title">CoffeeCompanion</h1>
						<div className="column-selector">{this._renderColumnActions()}</div>
						{this._renderUsers()}
					</div>
				</div>
			</div>
		);
	}
}

export default MainPage;
