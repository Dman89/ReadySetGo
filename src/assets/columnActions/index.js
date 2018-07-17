import React, { Component } from 'react';
import { columnActionClasses } from '../../demoData';

const { buttonCN, iconCN, containerCN, labelCN } = columnActionClasses;

class ColumnActions extends Component {
	_setSortOptions(field) {
		this.props.setSortOptions(field);
	}

	_renderIcon({ field, value, faClass }) {
		// 'selector-indicator'
		const activeColumn = field === value;
		const faCN = 'fa fa-chevron-' + faClass;
		const result = <i className={faCN + ' ' + iconCN} />;
		return activeColumn ? result : '';
	}

	render() {
		const { index, button, sortOptions } = this.props;
		const { value, label } = button;
		const { field, direction } = sortOptions;
		const faClass = direction === 'asc' ? 'down' : 'up';

		return (
			<button
				className={buttonCN}
				key={index}
				onClick={function() {
					this._setSortOptions(value);
				}.bind(this)}
			>
				<div className={containerCN}>
					{this._renderIcon({ field, value, faClass })}
					<span className={labelCN}>{label}</span>
				</div>
			</button>
		);
	}
}

export default ColumnActions;
