import React, { Component } from 'react';
import { ref } from '../../../api/Auth/_constants';
import { firebaseAuth } from '../../../api/Auth/_constants'; 
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';
import { List, ListItem } from 'material-ui/List';

@observer
class AdminDashboard extends Component {

	@observable users = [];
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
		autorun(()=>{
			this.items = this.users.slice().map((item) => 
					<div>
						<ListItem primaryText={item.lastname + ", " + item.firstname}/>
					</div>
		);
			
		});
		
			
	}

	render(){
		if(this.counter > 2){
		return (
				<List>
					{this.items}
				</List>	
			);
		} 
		return <div>nö</div>;
	
	}
}

export default AdminDashboard;