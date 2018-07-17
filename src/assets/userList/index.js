import React, { Component } from 'react';
import ListGroup from '../listGroup';
import { userListClasses } from '../../demoData';

class UserList extends Component {
	render() {
		return (
			<ListGroup
				sortOptions={this.props.sortOptions}
				listGroupClasses={userListClasses}
				data={this.props.users}
				onClickFn={function(user) {
					this.props.openModal(user);
				}.bind(this)}
			/>
		);
	}
}

export default UserList;
