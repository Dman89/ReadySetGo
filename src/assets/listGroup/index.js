import React, { Component } from 'react';

class ListGroup extends Component {
	_renderListGroupItem() {
		const {
			anchorCN,
			mediaGroupCN,
			imageCN,
			columnOneCN,
			columnTwoCN,
			columnThreeCN,
			columnFourCN
		} = this.props.listGroupClasses;

		return this.props.data.map(
			function(item, index) {
				return (
					<a
						className={'list-group-item ' + anchorCN}
						key={index}
						onClick={function() {
							item.index = index;
							this.props.onClickFn(item);
						}.bind(this)}
					>
						<div className={'media-objecta ' + mediaGroupCN}>
							<img
								src={item.image}
								className={'media-left ' + imageCN}
								alt={item.label}
							/>
							<span className={columnOneCN}>{item.label}</span>
						</div>
						<span className={columnTwoCN}>{item.drink}</span>
						<span className={columnThreeCN}>{item.phone}</span>
						<span className={columnFourCN}>{item.email}</span>
					</a>
				);
			}.bind(this)
		);
	}

	render() {
		const { listGroupCN } = this.props.listGroupClasses;
		return (
			<div className={'list-group ' + listGroupCN}>
				{this._renderListGroupItem()}
			</div>
		);
	}
}

export default ListGroup;
