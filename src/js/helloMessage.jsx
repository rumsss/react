import React from 'react';

class HelloMessage extends React.Component {

	componentWillMount() {
		console.log('componentWill mount event');
	}

	componentDidMount() {
		console.log('componentDidMount mount event');
	}

	componentWillUnmount() {
		console.log('componentWillUnMount mount event');
	}

	render () {

		console.log('render event');
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