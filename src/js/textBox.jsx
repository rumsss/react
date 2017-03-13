import React from 'react';
import Button from './button';
import GlyphIcon from './glyphIcon';

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
						<Button onClick={this.update.bind(this)}><GlyphIcon icon='ok'/> Update</Button> :
						<Button onClick={this.edit.bind(this)}><GlyphIcon icon='pencil'/>Edit</Button>
				}
			</div>
		);
	}
};

TextBox.defaultProps = {
	label: 'libellé'
}

export default TextBox;