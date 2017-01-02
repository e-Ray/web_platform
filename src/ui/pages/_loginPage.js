import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

import { LoginText } from '../components/generic';

class LoginPage extends React.Component{

	constructor(props){
		super(props);
		this.state={
			LoginTextOpen: false,

		}

		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleClose = () => {
    this.setState({LoginTextOpen: false});
    console.log('close');
  	};
  	handleOpen = () => {
    this.setState({LoginTextOpen: true});
  	console.log('open');
  	};

	render() {

		return(	
			<div>
				<AppBar title="Public API" 
						iconElementRight={<FlatButton label="Login" onTouchTap={this.handleOpen} />}
						iconElementLeft={<IconButton/>}

						/>
						
				<div>
					<LoginText open={this.state.LoginTextOpen} close={this.handleClose} testing={false}/>
				</div>
				<div>
					Something like a list for selecting e-rays,
					or a search field?
				</div>
			</div>
	
);

}
}
export default LoginPage;