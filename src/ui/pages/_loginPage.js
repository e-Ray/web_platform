import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
				<h1>Public API </h1>
				<div>
					<RaisedButton label="Login" onTouchTap={this.handleOpen} />
				</div>
				<div>
					<LoginText open={this.state.LoginTextOpen} close={this.handleClose}/>
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