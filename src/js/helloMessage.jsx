import React from 'react';

class HelloMessage extends React.Component {
	render () {

		return (
			<div>
				<h1>{this.props.titre}</h1>
			</div>
		);
	}
}

HelloMessage.defaultProps = {
	titre : 'titre par défaut'
}

export default HelloMessage;