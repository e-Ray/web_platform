import React, { Component } from 'react';
import { ref } from '../../../api/Auth/_constants';
import { firebaseAuth } from '../../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';
import { List, ListItem } from 'material-ui/List';
import { UserCard } from '/';

@observer
class AdminDashboard extends Component {

	@observable users = [];
	@observable erays = [];
	@observable erayItems = [];
	@observable items = [];
	@observable counter = 0;

	constructor(props){
		super(props);
		this.state={
			open:		false,
			user: ""
		}

		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);

		ref.child('/users/').on('value', (snapshot)=>{

			snapshot.forEach((userSnapshot) => {

				let lastname = "";
				let firstname = "";
				let admin = "";
				let hash = userSnapshot.key;
				ref.child('users/'+hash+'/info/')
					.on('value', (infoSnapshot) =>{
						lastname = infoSnapshot.val().lastname;
						firstname = infoSnapshot.val().firstname;
						admin = infoSnapshot.val().admin;
						this.counter++;

					});


				this.users.push({
					lastname: lastname,
					firstname: firstname,
					hash: hash,
					admin: admin
				});
			}

			);

		});
		ref.child('/erays/eraylist').on('value', (snapshot)=>{

			snapshot.forEach((eraySnapshot) => {
				let owner = eraySnapshot.val().owner;
				let location = eraySnapshot.val().location;
				let commissioning = eraySnapshot.val().commissioning;
				let id = eraySnapshot.key;

				this.erays.push({
					owner: owner,
					location: location,
					commissioning: commissioning,
					id: id
				});
			}

			);

		});
		autorun(()=>{
			this.items = this.users.slice().map((item) =>
					<div>
						<ListItem primaryText={item.lastname + ", " + item.firstname} onTouchTap={()=>{this.handleOpen(item)}}/>
					</div>
			);
			this.erayItems = this.erays.slice().map((eray) =>
					<div>
						<ListItem primaryText={eray.location + ", " + eray.id} />
					</div>
			);

		});
	}

	handleClose = () => {
		this.setState({open: false});
		console.log('close');
	};

	handleOpen = (user) => {
		this.setState({open: true, user: user});
		console.log("Nachname: " + user.lastname);
	};

	render(){
		if(this.counter >= 2){
		return (
			<div>
			<div id="col-2-left">
				<List>
					{this.items}
				</List>

			</div>
			<div id="col-2-left">
				<List>
					{this.erayItems}
				</List>
			</div>

			<div>
				<UserCard open={this.state.open} close={this.handleClose} user={this.state.user}/>
			</div>
			</div>
		);}
		return <div>nö</div>;

	}
}

export default AdminDashboard;
