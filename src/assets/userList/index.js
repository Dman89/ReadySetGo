import React, { Component } from 'react';

class UserList extends Component {
	_renderListGroupItem() {
		return this.props.users.map(
			function(user, index) {
				return (
					<a
						className="list-group-item list-group-item--adaptive"
						key={index}
						onClick={function() {
							this.props.openModal(user);
						}.bind(this)}
					>
						<div className="media-objecta name-column">
							<img
								src={user.image}
								className="small circle media-left"
								alt={user.label}
							/>
							<span className="bold">{user.label}</span>
						</div>
						<span>{user.drink}</span>
						<span>{user.phone}</span>
						<span>{user.email}</span>
					</a>
				);
			}.bind(this)
		);
	}
	render() {
		return <div className="list-group">{this._renderListGroupItem()}</div>;
	}
}

export default UserList;
