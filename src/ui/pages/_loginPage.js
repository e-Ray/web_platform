import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import { LoginText } from '../components/generic';
import { CreateAccount } from '../components/generic';
import { FormattedMessage } from 'react-intl';


class LoginPage extends React.Component{



	constructor(props){
		super(props);
		this.state={
			LoginTextOpen: false,
			CreateAccountOpen: false,
		}
		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleClose = () => {
    	this.setState({LoginTextOpen: false, CreateAccountOpen: false});
  	};
  	handleOpen = () => {
    	this.setState({LoginTextOpen: true});
  	};
	handleRegistration = () => {
		this.setState({CreateAccountOpen: true});
	}


	render() {

		return(
			<div>

				<div id="baseLayout">
					<AppBar title="e.Ray"
						iconElementRight={<FlatButton label="Login" onTouchTap={this.handleOpen} />}
						iconElementLeft={<IconButton/>}/>
				</div>
				<div id="container">
					<img src={require('../../images/eray-banner.jpg')} id="banner" alt=""/>
					<div id="home">
						<h1>Riversense - Flood Monitoring Platform</h1>
						<h2><FormattedMessage
                        id='messages.LOGIN1'
                        defaultMessage="React Intl Translations Example"
/></h2>

						<div id="home_login">
							<FlatButton label="Login" style={{color: '#ffffff'}} onTouchTap={this.handleOpen} />
							<FlatButton label="Create Account" style={{color: '#ffffff'}} onTouchTap={this.handleRegistration} />
						</div>

				</div>
				</div>
				<div>
					<LoginText open={this.state.LoginTextOpen} close={this.handleClose} testing={false}/>
					<CreateAccount open={this.state.CreateAccountOpen} close={this.handleClose}/>
				</div>
			</div>
);

}
}
export default LoginPage;
