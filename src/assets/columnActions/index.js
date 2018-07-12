import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<button
				className="selector-button selector-button--adaptive"
				key={this.props.index}
			>
				<div className="selector-container">
					<i className="fa fa-chevron-up selector-indicator" />
					<span className="selector-label">{this.props.button.label}</span>
				</div>
			</button>
		);
	}
}

export default App;
