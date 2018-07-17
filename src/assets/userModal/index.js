import React, { Component } from 'react';
import UserTabSet from '../userTabSet';
import EditField from '../editField';

class UserModal extends Component {
	_renderModal() {
		let result = '';
		if (this.props.active === true && this.props.user.label) {
			result = <div>{this._renderModalFN()}</div>;
		}
		return result;
	}
	_renderModalFN() {
		return (
			<div className="profile-modal">
				<div
					className="veil"
					onClick={function() {
						this.props.closeModal();
					}.bind(this)}
				/>
				<div className="user-profile">
					<div className="profile-close">
						<button
							className="btn btn-defualt"
							onClick={function() {
								this.props.closeModal();
							}.bind(this)}
						>
							<i className="fa fa-times" />
						</button>
					</div>
					<div className="profile-actions">
						<button
							className="btn btn-primary"
							onClick={function() {
								this.props.addNewUser();
							}.bind(this)}
						>
							<i className="fa fa-check" />
						</button>
						<button
							className="btn btn-success"
							onClick={function() {
								this.props.editUser(this.props.user);
							}.bind(this)}
						>
							<i className="fa fa-pencil" />
						</button>
						<button
							className="btn btn-danger"
							onClick={function() {
								this.props.deleteUser(this.props.user);
							}.bind(this)}
						>
							<i className="fa fa-trash" />
						</button>
					</div>
					<div className="profile-header">
						<EditField
							type="input"
							value={this.props.user.image}
							field={'image'}
							editMode={this.props.editMode}
							updateValue={function({ field, value }) {
								this.props.updateValue({ field, value });
							}.bind(this)}
						>
							<img
								src={this.props.user.image}
								className="large circle profile-icon"
								alt={this.props.user.label}
							/>
						</EditField>
						<EditField
							type="input"
							value={this.props.user.label}
							field={'label'}
							editMode={this.props.editMode}
							updateValue={function({ field, value }) {
								this.props.updateValue({ field, value });
							}.bind(this)}
						>
							<h2 className="profile-title">{this.props.user.label}</h2>
						</EditField>
					</div>
					<div className="profile-contact">
						<EditField
							type="input"
							value={this.props.user.phone}
							field={'phone'}
							editMode={this.props.editMode}
							updateValue={function({ field, value }) {
								this.props.updateValue({ field, value });
							}.bind(this)}
						>
							<a href={'tel:' + this.props.user.phone} className="contact-link">
								{this.props.user.phone}
							</a>
						</EditField>
						<EditField
							type="input"
							value={this.props.user.email}
							field={'email'}
							editMode={this.props.editMode}
							updateValue={function({ field, value }) {
								this.props.updateValue({ field, value });
							}.bind(this)}
						>
							<a
								href={'email:' + this.props.user.email}
								className="contact-link"
							>
								{this.props.user.email}
							</a>
						</EditField>
					</div>
					<UserTabSet
						user={this.props.user}
						editMode={this.props.editMode}
						updateValue={function({ field, value }) {
							this.props.updateValue({ field, value });
						}.bind(this)}
					/>
				</div>
			</div>
		);
	}
	render() {
		return <div>{this._renderModal()}</div>;
	}
}

export default UserModal;
