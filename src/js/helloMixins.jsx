import React from "react";
import ReactDOM from "react-dom";

var ReactMixin1 = {
	log(message) {
		console.log(message);
	},

	componentWillMount() {
		this.log("componentWillMount from ReactMixin1");
	}
}

var ReactMixin2 = {
	componentWillMount() {
		console.log("componentWillMount from ReactMixin2");
	}
}

var HelloMessage = React.createClass({
	mixins: [ReactMixin1, ReactMixin2],

	componentWillMount() {
		this.log("componentWillMount from HelloMixins");
	},

	render() {
		return <h2>{this.props.message}</h2>
	}
});

var Button = React.createClass({
	mixins: [ReactMixin2, ReactMixin1],

	clicked() {
		this.log(this.props.text + 'clicked');
	},

	componentWillMount() {
		this.log("componentWillMount from Button");
	},

	render() {
		return <button onClick={this.clicked}>{this.props.text}</button>
	}
});
var HelloMixins = React.createClass({
	render() {
		return (
			<div>
				<HelloMessage message='hi'/>
				<Button text='OK'/>
			</div>
		);
	}
})

ReactDOM.render(<HelloMixins/>, document.getElementById('app'));