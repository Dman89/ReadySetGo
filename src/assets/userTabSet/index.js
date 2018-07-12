import React, { Component } from 'react';
import { tabSet } from '../../demoData.js';

class UserTabSet extends Component {
	componentWillMount() {
		this.setState({
			tabs: tabSet,
			tabIndex: 1
		});
	}
	_setTab(index) {
		this.setState({ ...this.state, tabIndex: index });
	}
	_isActive(index, currentTab, _classes) {
		let result = _classes;
		if (index === currentTab) {
			result += ' active';
		}
		return result;
	}
	_renderTabButtons() {
		return this.state.tabs.map(
			function(tab, index) {
				return (
					<button
						key={index}
						className={this._isActive(
							index,
							this.state.tabIndex,
							'profile-tab'
						)}
						onClick={function() {
							this._setTab(index);
						}.bind(this)}
					>
						{tab.label}
					</button>
				);
			}.bind(this)
		);
	}
	render() {
		return (
			<div>
				<div className="profile-tabs">{this._renderTabButtons()}</div>
				<div
					className={this._isActive(0, this.state.tabIndex, 'profile-content')}
				>
					<img
						src={this.props.user.mapImage}
						className="large square content-image"
						alt={this.props.user.address}
					/>
				</div>
				<div
					className={this._isActive(1, this.state.tabIndex, 'profile-content')}
				>
					<h4 className="content-title">{this.props.user.drink}</h4>
					<img
						src={this.props.user.drinkImage}
						className="large square content-image"
						alt={this.props.user.drink}
					/>
				</div>
				<div
					className={this._isActive(2, this.state.tabIndex, 'profile-content')}
				>
					<div className="content-description">{this.props.user.notes}</div>
				</div>
			</div>
		);
	}
}

export default UserTabSet;
