import React from "react";
import ReactDOM from "react-dom";

class UserRow extends React.Component {

	render() {
		return (
			<tr>
				<td>{this.props.user.userName}</td>
				<td><a href={'mailto:' + this.props.user.email}>{this.props.user.email}</a></td>
			</tr>
		);
	}
}

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{id: 1, userName: 'RyanVice', email: 'ryan@vicesoftware.com'},
				{id: 2, userName: 'AdamHorton', email: 'digitalicarus@gmail.com'}
			]
		}
	}

	render() {
		var users = this.state.users.map(function (user) {
			return (<UserRow user={user} key={user.id}/>)
		});

		return (
			<table className="table">
				<tbody>
				<tr>
					<th>user Name</th>
					<th>Email Address</th>
				</tr>
				{users}
				</tbody>
			</table>
		);
	}
}

ReactDOM.render(<UserList/>, document.getElementById('app'));