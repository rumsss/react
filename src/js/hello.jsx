import React from 'react';
import ReactDOM from 'react-dom';
import EchoName from './echoName';

class Hello extends React.Component {
	render () {
		return (
			<div>
				<h1>Bienvenue dans {this.props.titre}</h1>
				<EchoName nom="romain"/>
			</div>
		);
	}
}

Hello.defaultProps = {
	titre : 'my react'
}

const app = document.getElementById('app');
ReactDOM.render(<Hello/>, app);