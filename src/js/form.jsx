import React from "react";
import ReactDOM from "react-dom";

class TextBox extends React.Component {
	render() {
		return (
			<input className='form-control' name={this.props.name}
				   type='text' value={this.props.value}
				   onChange={this.props.onChange}/>
		);
	}
}

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				firstName: 'john',
				lastName: 'Doe'
			}
		};
	}

	onChange(event) {
		console.log('target name: ' + event.target.name + ' value : ' + event.target.value)
		this.state.form[event.target.name] = event.target.value;

		this.setState({
			form: this.state.form
		});
	}

	onSubmit(event) {
		event.preventDefault();

		alert('Form submitted firstName: ' + this.state.form.firstName +
			' Last Name: ' + this.state.form.lastName);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<TextBox name='firstName' value={this.state.form.firstName} onChange={this.onChange.bind(this)}/>
				<TextBox name='lastName' value={this.state.form.lastName} onChange={this.onChange.bind(this)}/>
				<button className='btn btn-success' type='submit'>Submit</button>
			</form>
		);
	}
}

ReactDOM.render(<Form/>, document.getElementById('app'));