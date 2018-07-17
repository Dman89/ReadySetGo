import React, { Component } from 'react';

class EditField extends Component {
	_updateValue({ field, value }) {
		this.props.updateValue({ field, value });
	}
	render() {
		const { editMode, children, containerCN, field } = this.props;
		let { value } = this.props;
		let output = <div className={containerCN}>{children}</div>;
		if (editMode && this.props.type === 'input') {
			output = (
				<input
					value={value}
					onChange={function(event) {
						this._updateValue({ field, value: event.target.value });
					}.bind(this)}
				/>
			);
		} else if (editMode && this.props.type === 'textarea') {
			output = (
				<textarea
					value={value}
					onChange={function(event) {
						this._updateValue({ field, value: event.target.value });
					}.bind(this)}
				/>
			);
		}
		return output;
	}
}

export default EditField;
