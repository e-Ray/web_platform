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

				<div id="baseLayout">
					<AppBar title="e.Ray"
						iconElementRight={<FlatButton label="Login" onTouchTap={this.handleOpen} />}
						iconElementLeft={<IconButton/>}

						/>
				</div>

				<div id="container">
					<div id="home">
						<div id="banner">
							<img src="eray-banner.jpg" id="banner" alt=""/>

							<h1>Riversense - Flood Monitoring Platform</h1>
							<h2>Hier können Sie die Sensordaten zu Ihrem e.Ray abrufen.</h2>
						</div>

						<div id="home_login">
							<FlatButton label="Login" style={{color: '#ffffff'}} onTouchTap={this.handleOpen} />
						</div>
					</div>
				</div>
				<div>
					<LoginText open={this.state.LoginTextOpen} close={this.handleClose} testing={false}/>
				</div>

			</div>

);

}
}
export default LoginPage;
