import React from 'react';

class GlyphIcon extends React.Component {
	render() {
		return (
			<span className={'glyphicon glyphicon-' + this.props.icon}>
			</span>
		)
	}
}

export default GlyphIcon;