'use strict';

import React from "react";
import ReactDOM from "react-dom";
import Joi from 'joi';
import strategy from 'joi-validation-strategy';
import validation from 'react-validation-mixin';

class ValidatedInput extends React.Component {

	renderHelpText(message) {
		return (
			<span className='help-block'>
				{message}
			</span>
		);
	}

	render() {
		var error = this.props.getValidationMessages(this.props.name);
		var formClass = "form-group";

		if (error.length > 0) {
			formClass = formClass + " has-error";
		}

		return (
			<div className={formClass}>
				<label className='control-label' htmlFor={this.props.name}>
					{this.props.label}
				</label>
				<input className='form-control' {...this.props} />
				{this.renderHelpText(error)}
			</div>
		);
	}
}

class Demo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			password: ""
		}

		this.validatorTypes = {
			userName: Joi.string().required().label('User Name'),
			password: Joi.string().required().regex(/[a-zA-Z0-9]{3,30}/).label('Password')
		}

	}

	getValidatorData() {
		return this.state;
	}

	onSubmitEvent(e) {
		e.preventDefault();

		var onValidate = function (error) {
			if (error) {
				if (error.userName) {
					alert(error.userName);
				}
				if (error.password) {
					alert(error.password);
				}
			}

			var passwordContainsName = this.state.password.indexOf(this.state.userName) > 1;

			if (this.state.userName && passwordContainsName) {
				alert("Password cannot contain the user name!!");
				return;
			}

			if (!error) {
				alert("Account created");
			}
		};

		this.props.validate(onValidate.bind(this));

	}

	onChange(e) {
		var state = {};
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	render() {
		return (
			<div className='container'>
				<form onSubmit={this.onSubmitEvent.bind(this)}>
					<ValidatedInput name="userName" type="text" ref="userName" placeholder="Enter User Name"
									value={this.state.userName} onChange={this.onChange.bind(this)} label="User Name"
									onBlur={this.props.handleValidation("userName")}
									getValidationMessages={this.props.getValidationMessages}/>

					<ValidatedInput name="password" type="text" ref="password" placeholder="Enter Password"
									value={this.state.password} onChange={this.onChange.bind(this)} label="Password"
									onBlur={this.props.handleValidation("password")}
									getValidationMessages={this.props.getValidationMessages}/>

					<button className="btn btn-success" type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

let Element = validation(strategy)(Demo);
ReactDOM.render(<Element/>, document.getElementById('app'));