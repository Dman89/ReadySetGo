import React, { Component } from 'react';
import './App.css';
import UserModal from './assets/userModal';
import MainPage from './assets/mainPage';
import { columnButtons } from './demoData';
import { setColumnSort } from './assets/functions/setColumnSort';

const defaultField = 'label';
const direction = 'asc';

class App extends Component {
	componentWillMount() {
		this.fetchUsers();
		this.setState({
			active: false,
			users: [],
			user: {},
			editMode: false,
			sortOptions: {
				field: defaultField,
				direction
			},
			newUser: false
		});
	}

	putUsers(users) {
		fetch('http://localhost:3000/users', {
			method: 'POST',
			mode: 'CORS',
			body: JSON.stringify({ users }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(function(res) {
				console.log(res.json());
			})
			.catch(err => {
				console.log(err);
			});
	}
	fetchUsers() {
		fetch('http://localhost:3000/users')
			.then(function(res) {
				return res.json();
			})
			.then(
				function(res) {
					const { users } = res;

					const sortedResults = setColumnSort({
						array: users,
						currentField: null,
						direction,
						field: defaultField
					});

					const sortedUsers = sortedResults.array;
					const newDirection = sortedResults.direction;

					this.setState({
						users: sortedUsers,
						sortOptions: {
							field: defaultField,
							direction: newDirection
						}
					});
				}.bind(this)
			)
			.catch(function(err) {
				console.warn(err);
			});
	}

	_updateValue({ field, value }) {
		let user = { ...this.state.user };
		user[field] = value;
		this.setState({
			...this.state,
			user
		});
	}
	_setSortOptions(newField) {
		const { users, sortOptions } = this.state;
		const { field, direction } = sortOptions;

		const sortedResults = setColumnSort({
			array: users,
			currentField: field,
			direction,
			field: newField
		});

		const sortedUsers = sortedResults.array;
		const newDirection = sortedResults.direction;

		this.setState({
			...this.state,
			sortOptions: {
				field: newField,
				direction: newDirection
			},
			users: sortedUsers
		});
	}

	_closeModal() {
		this.setState({
			...this.state,
			active: false,
			editMode: false,
			newUser: false
		});
	}

	_openModal(user) {
		// TODO: Assert Type
		if (!user) return;

		this.setState({ ...this.state, active: true, user });
	}

	_addNewUser(user) {
		// TODO: Assert Type
		if (!user) return;

		if (this.state.newUser === true) {
			this.setState({
				...this.state,
				users: [...this.state.users, user],
				active: false
			});
		} else {
			this._saveUser(user);
		}
	}

	_editUser(user) {
		this.setState({
			...this.state,
			user,
			editMode: true
		});
	}

	_saveUser(user) {
		if (!this.state.users || !user) {
			return;
		}

		this.state.users.splice(user.index, 1, user);
		const usersArr = [].concat(this.state.users);

		this.setState({
			...this.state,
			users: usersArr,
			user,
			active: false,
			newUser: false,
			editMode: false
		});
	}

	_deleteUser(user) {
		// TODO: Assert Type
		if (
			!user ||
			!this.state.users ||
			!(user.index >= 0) ||
			this.state.users.length < user.index + 1
		) {
			return;
		}

		this.state.users.splice(user.index, 1);
		const setUsers = [].concat(this.state.users);

		this.setState({
			...this.state,
			users: setUsers,
			active: false
		});
	}

	_openNewUserModal() {
		const blankNewUser = {
			label: 'Name',
			drink: 'Drink',
			phone: 'Phone',
			email: 'email',
			image: 'Image',
			mapImage: 'mapImage',
			drinkImage: 'drinkImage',
			notes: 'Notes'
		};

		this.setState({
			...this.state,
			active: true,
			editMode: true,
			user: blankNewUser,
			newUser: true
		});
	}

	render() {
		return (
			<div className="App">
				<MainPage
					users={this.state.users}
					columnButtons={columnButtons}
					sortOptions={this.state.sortOptions}
					openModal={function(user) {
						this._openModal(user);
					}.bind(this)}
					openNewUserModal={function(user) {
						this._openNewUserModal(user);
					}.bind(this)}
					setSortOptions={function(options) {
						this._setSortOptions(options);
					}.bind(this)}
				/>
				<UserModal
					user={this.state.user}
					active={this.state.active}
					editMode={this.state.editMode}
					closeModal={function() {
						this._closeModal();
					}.bind(this)}
					addNewUser={function() {
						this._addNewUser(this.state.user);
					}.bind(this)}
					editUser={function(user) {
						this._editUser(user);
					}.bind(this)}
					deleteUser={function(user) {
						this._deleteUser(user);
					}.bind(this)}
					updateValue={function(user) {
						this._updateValue(user);
					}.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
