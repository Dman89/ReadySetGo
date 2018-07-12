import React, { Component } from 'react';

class ProfilePage extends Component {
	componentWillMount() {
		this.this.setState({
			user: this.props.user,
			active: this.props.active
		});
	}
	render() {
		let result = '';
		if (this.state.active === true && this.state.user.label) {
			result = <UserModal user={this.state.user} />;
		}
		return result;
	}
}

export default ProfilePage;
