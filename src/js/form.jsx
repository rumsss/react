import React from "react";
import ReactDOM from "react-dom";

class TextBox extends React.Component {
	render() {
		return (
			<input key={this.props.clef} className='form-control' name={this.props.name}
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
		var self = this;
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				{Object.keys(this.state.form).map(
					(key, i) => <TextBox clef={i} name={key} value={self.state.form[key]}
										 onChange={self.onChange.bind(self)}/>
				)}
				<button key="3" className='btn btn-success' type='submit'>Submit</button>
			</form>
		);
	}
}

ReactDOM.render(<Form/>, document.getElementById('app'));