import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import GlyphIcon from './glyphIcon';

class LikeLand extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
			isIncreasing: false
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		this._logPropsAndState('shouldComponentUpdate()');
		console.log('nextProps.likes: ' + nextState.likes
			+ ' nextState.isIncreasing: ' + nextState.isIncreasing);
		this.setState({isIncreasing: nextState.likes > this.state.likes})
		return nextState.likes > 1;
	}

	componentDidUpdate(prevProps, prevState) {
		this._logPropsAndState('componentDidUpdate');
		console.log('prevProps.likes: ' + prevState.likes
			+ ' prevState.isIncreasing:' + prevState.isIncreasing);
		console.log(
			'componentDidUpdate() gives an opportunity to execute code after react is finished updating the DOM.');
	}

	_logPropsAndState(callingFunction) {
		console.log('=> ' + callingFunction);
		console.log('this.state.likes: ' + this.state.likes);
		console.log('this.state.isIncreasing: ' + this.state.isIncreasing);
	}

	like() {
		this.setState({likes: this.state.likes + 1});
		console.log('likes +1 ');
	}

	unlike() {
		this.setState({likes: this.state.likes - 1});
		console.log('likes - 1 ');
	}

	render() {

		this._logPropsAndState("render()");
		return (
			<div>
				<Button onClick={this.like.bind(this)}><GlyphIcon icon='thumbs-up'/>Like</Button>
				<Button onClick={this.unlike.bind(this)}><GlyphIcon icon='thumbs-down'/>Unlike</Button>
				<br/>
				Likes {this.state.likes}
				<GlyphIcon icon={(this.state.isIncreasing ? 'circle-arrow-up' : 'circle-arrow-down')}/>
			</div>
		)
	}
}

const app = document.getElementById('app');
ReactDOM.render(<LikeLand/>, app);