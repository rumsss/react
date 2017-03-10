import React from 'react';

class EchoName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: 'romain'
		}
	}
	updateName (e) {
		this.setState({
			nom: e.target.value
		});
	}

	render () {
		return (
			<div>
				<input type="text" onChange={this.updateName.bind(this)}/>
				<h1>ton nom est {this.state.nom}</h1>
			</div>
		);
	}
};

export default EchoName;