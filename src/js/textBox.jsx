import React from 'react';

class TextBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		}
	}

	update() {
		this.props.update(
			this.refs.messageTextBox.value
		);

		this.setState({
			isEditing: false
		});
	}

	edit () {
		this.setState({
			isEditing: true
		});
	}

	render() {
		return (
			<div>
				<h1>{this.props.label}</h1>
				<input type='text' ref='messageTextBox' disabled={!this.state.isEditing}/>
				{
					this.state.isEditing ?
						<button onClick={this.update.bind(this)}>Update</button> :
						<button onClick={this.edit.bind(this)}>Edit</button>
				}
			</div>
		);
	}
};

TextBox.defaultProps = {
	label: 'libellé'
}

export default TextBox;