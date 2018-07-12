import React, { Component } from 'react';
import './App.css';
import UserModal from './assets/userModal';
import MainPage from './assets/mainPage';
import { columnButtons, users } from './demoData.js';

class App extends Component {
	componentWillMount() {
		this.setState({
			active: false,
			users: users || [],
			user: users[0]
		});
	}
	_closeModal() {
		this.setState({ ...this.state, active: false });
	}
	_openModal(user) {
		this.setState({ ...this.state, active: true, user: user });
	}
	render() {
		return (
			<div className="App">
				<MainPage
					users={this.state.users}
					columnButtons={columnButtons}
					openModal={function(user) {
						this._openModal(user);
					}.bind(this)}
				/>
				<UserModal
					user={this.state.user}
					active={this.state.active}
					closeModal={function() {
						this._closeModal();
					}.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
