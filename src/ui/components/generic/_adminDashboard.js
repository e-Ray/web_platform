import React, { Component } from 'react';
import { ref } from '../../../api/Auth/_constants';
import { firebaseAuth } from '../../../api/Auth/_constants'; 
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';
import { List, ListItem } from 'material-ui/List';

@observer
class AdminDashboard extends Component {

	@observable users = [];
	@observable erays = [];
	@observable erayItems = [];
	@observable items = [];
	@observable counter = 0;

	constructor(props){
		super(props);
		ref.child('/users/').on('value', (snapshot)=>{
			
			snapshot.forEach((userSnapshot) => {

				let lastname = "";
				let firstname = "";
				let hash = userSnapshot.key;
				ref.child('users/'+hash+'/info/')
					.on('value', (infoSnapshot) =>{
						lastname = infoSnapshot.val().lastname;
						firstname = infoSnapshot.val().firstname;
						this.counter++;
						
					});

					
				this.users.push({
					lastname: lastname,
					firstname: firstname,
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
						<ListItem primaryText={item.lastname + ", " + item.firstname}/>
					</div>
			);
			this.erayItems = this.erays.slice().map((eray) =>
					<div>
						<ListItem primaryText={eray.location + ", " + eray.id} />
					</div>
			);
			
		});
		
			
	}

	render(){
		if(this.counter > 2){
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
			</div>
		);} 
		return <div>nö</div>;
	
	}
}

export default AdminDashboard;