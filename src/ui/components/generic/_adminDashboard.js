import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import { Paper } from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List';
import { UserCard, ErayCard } from './';
import { ref } from '../../../api/Auth/_constants';

@observer
class AdminDashboard extends Component {

	@observable users = [];
	@observable erays = [];
	@observable erayItems = [];
	@observable items = [];
	@observable counter = 0;
	@observable user = "";
	@observable eray = "";

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
					<div key={item.hash + Math.random()}>
						<ListItem
							key={item.hash + Math.random()}
							primaryText={item.lastname + ", " + item.firstname}
							onTouchTap={() => {this.user = item;}}/>
					</div>
			);
			this.erayItems = this.erays.slice().map((eray) =>
					<div key={eray.id + Math.random()}>
						<ListItem
							key={eray.id + Math.random()}
							primaryText={eray.location + ", " + eray.id}
							onTouchTap={() => {this.eray = eray;}}/>
					</div>
			);

		});
		this.clearArrays = this.clearArrays.bind(this);


	}

	clearArrays() {
		this.items = [];
		this.users = [];
		this.erayItems = [];
		this.erays = [];
	}

	getUserCard() {
		if(this.user !== ""){
			return <div><UserCard user={this.user} clearArrays={this.clearArrays} key={this.user.hash}/></div>;
		}
	}

	getErayCard() {
		if(this.eray !== ""){
			return <div><ErayCard eray={this.eray} clearArrays={this.clearArrays} key={this.eray.id} /></div>;
		}
	}

	render(){
		
		return (
			<div>
			<div id="row">
			<div id="col-2-left">
				<List style={{maxHeight: 250, overflow: 'auto'}}>
					{this.items}
				</List>

			</div>
			<div id="col-2-left">
				<List style={{maxHeight: 250, overflow: 'auto'}}>
					{this.erayItems}
				</List>
			</div>
			</div>
			<div id="row">
				<div id="col-2-left">
				{this.getUserCard()}
			</div>
				<div id="col-2-left">
				{this.getErayCard()}
				</div>
			</div>
			</div>
		);

	}
}

export default AdminDashboard;
