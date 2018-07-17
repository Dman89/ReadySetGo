import React, { Component } from 'react';
import EditField from '../editField';
import { tabSet } from '../../demoData.js';

class UserTabSet extends Component {
	componentWillMount() {
		this.setState({
			tabs: tabSet,
			tabIndex: 1,
			active: this.props.active || 0
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
					className={this._isActive(
						this.state.active,
						this.state.tabIndex,
						'profile-content'
					)}
				>
					<EditField
						type="input"
						containerCN="content-container"
						value={this.props.user.mapImage}
						field={'mapImage'}
						editMode={this.props.editMode}
						updateValue={function({ field, value }) {
							this.props.updateValue({ field, value });
						}.bind(this)}
					>
						<img
							src={this.props.user.mapImage}
							className="large square content-image"
							alt={this.props.user.address}
						/>
					</EditField>
				</div>
				<div
					className={this._isActive(1, this.state.tabIndex, 'profile-content')}
				>
					<EditField
						type="input"
						containerCN="content-container"
						value={this.props.user.drink}
						field={'drink'}
						editMode={this.props.editMode}
						updateValue={function({ field, value }) {
							this.props.updateValue({ field, value });
						}.bind(this)}
					>
						<h4 className="content-title">{this.props.user.drink}</h4>
					</EditField>
					<EditField
						type="input"
						containerCN="content-container"
						value={this.props.user.drinkImage}
						field={'drinkImage'}
						editMode={this.props.editMode}
						updateValue={function({ field, value }) {
							this.props.updateValue({ field, value });
						}.bind(this)}
					>
						<img
							src={this.props.user.drinkImage}
							className="large square content-image"
							alt={this.props.user.drink}
						/>
					</EditField>
				</div>
				<div
					className={this._isActive(2, this.state.tabIndex, 'profile-content')}
				>
					<EditField
						type="textarea"
						containerCN="content-container"
						value={this.props.user.notes}
						field={'notes'}
						editMode={this.props.editMode}
						updateValue={function({ field, value }) {
							this.props.updateValue({ field, value });
						}.bind(this)}
					>
						<div className="content-description">{this.props.user.notes}</div>
					</EditField>
				</div>
			</div>
		);
	}
}

export default UserTabSet;
