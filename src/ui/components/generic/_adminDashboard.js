import React, { Component } from 'react';
import { ref } from '../../../api/Auth/_constants';
import { firebaseAuth } from '../../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import { UserCard } from './';

@observer
class AdminDashboard extends Component {

	@observable users = [];
	@observable erays = [];
	@observable erayItems = [];
	@observable items = [];
	@observable counter = 0;
	@observable user = "";

	constructor(props){
		super(props);
		ref.child('/users/').on('value', (snapshot)=>{

			snapshot.forEach((userSnapshot) => {

				let lastname = "";
				let firstname = "";
				let email = "";
				let hash = userSnapshot.key;
				ref.child('users/'+hash+'/info/')
					.on('value', (infoSnapshot) =>{
						lastname = infoSnapshot.val().lastname;
						firstname = infoSnapshot.val().firstname;
						email = infoSnapshot.val().email;
						this.counter++;

					});


				this.users.push({
					lastname: lastname,
					firstname: firstname,
					email: email,
					hash: hash
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
						<ListItem primaryText={item.lastname + ", " + item.firstname} onTouchTap={() => {this.user = item;}}/>
					</div>
			);
			this.erayItems = this.erays.slice().map((eray) =>
					<div>
						<ListItem primaryText={eray.location + ", " + eray.id} />
					</div>
			);

		});


	}

	getUserCard(){
		if(this.user !== ""){
			console.log("User: " + this.user.firstname);
			return <div><UserCard user={this.user}/></div>;
		}
	}

	render(){
		if(this.counter >= 2){
		return (
			<div>
			<div id="row">
			<div id="col-2-left">
				<List style={{maxHeight: 250, overflow: 'auto'}}>
					{this.items}
				</List>

			</div>
			<div id="col-2-left">
				<List>
					{this.erayItems}
				</List>
			</div>
			</div>
			<div id="row">
				<div id="col-2-left">
				{this.getUserCard()}
			</div>
				<div id="col-2-left">
				{/**this.getErayCard**/}
				</div>
			</div>
			</div>
		);}
		return <div>nö</div>;

	}
}

export default AdminDashboard;
