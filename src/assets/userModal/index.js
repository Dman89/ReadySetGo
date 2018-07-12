import React, { Component } from 'react';
import UserTabSet from '../../assets/userTabSet';

class UserModal extends Component {
	_renderModal() {
		let result = '';
		if (this.props.active === true && this.props.user.label) {
			result = <div>{this._renderModalFN()}</div>;
		}
		return result;
	}
	_closeModal() {
		this.props.closeModal();
	}
	_renderModalFN() {
		return (
			<div className="profile-modal">
				<div className="veil" />
				<div className="user-profile">
					<div className="profile-close">
						<button
							className="btn btn-defualt"
							onClick={function() {
								this._closeModal();
							}.bind(this)}
						>
							<i className="fa fa-times" />
						</button>
					</div>
					<div className="profile-actions">
						<button className="btn btn-success">
							<i className="fa fa-pencil" />
						</button>
						<button className="btn btn-danger">
							<i className="fa fa-trash" />
						</button>
					</div>
					<div className="profile-header">
						<img
							src={this.props.user.image}
							className="large circle profile-icon"
							alt={this.props.user.label}
						/>
						<h2 className="profile-title">{this.props.user.label}</h2>
					</div>
					<div className="profile-contact">
						<a href={'tel:' + this.props.user.phone} className="contact-link">
							{this.props.user.phone}
						</a>
						<a href={'email:' + this.props.user.email} className="contact-link">
							{this.props.user.email}
						</a>
					</div>
					<UserTabSet user={this.props.user} />
				</div>
			</div>
		);
	}
	render() {
		return <div>{this._renderModal()}</div>;
	}
}

export default UserModal;
