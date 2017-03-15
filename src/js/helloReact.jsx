import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './helloMessage';
import TextBox from './textBox';
import Button from './button';

class HelloReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: ''
		}
	}

	update(key, value) {
		var newState = {};
		newState[key] = value;
		this.setState(newState);
	}

	reload() {
		ReactDOM.unmountComponentAtNode(
			document.getElementById('app')
		);
		ReactDOM.render(<HelloReact/>,
			document.getElementById('app')
		);
	}

	render() {
		return (
			<div>
				<HelloMessage titre={'Hello ' + this.state.firstName + ' ' + this.state.lastName}/>
				<TextBox label="First Name" update={this.update.bind(this, 'firstName')}/>
				<TextBox label="Last Name" update={this.update.bind(this, 'lastName')}/>
				<Button onClick={this.reload}>reload</Button>

			</div>
		);
	}
}

HelloReact.defaultProps = {
	titre: 'my react',
}

const app = document.getElementById('app');
ReactDOM.render(<HelloReact/>, app);