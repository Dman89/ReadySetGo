import React, { Component } from 'react';
import UserList from '../../assets/userList';
import ColumnActions from '../../assets/columnActions';

class App extends Component {
	_renderColumnActions() {
		return this.props.columnButtons.map(function(btn, index) {
			return <ColumnActions button={btn} key={index} index={index} />;
		});
	}
	_renderUsers() {
		return (
			<UserList
				listGroupClassName="list-group-item--adaptive"
				users={this.props.users}
				openModal={function(user) {
					this.props.openModal(user);
				}.bind(this)}
			/>
		);
	}
	render() {
		return (
			<div className="container main-page">
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

export default App;
