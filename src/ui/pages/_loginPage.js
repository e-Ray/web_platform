import React from 'react';


import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Sensor from '../components/sensors/_sensor';

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
					<AppBar title="Public API"
						iconElementRight={<FlatButton label="Login" onTouchTap={this.handleOpen} />}
						iconElementLeft={<IconButton/>}

						/>
				</div>
				<Sensor mode="dashboard" sensor="performance" width={950} height={300}/>
				<div>
					<LoginText open={this.state.LoginTextOpen} close={this.handleClose} testing={false}/>
				</div>
			


			</div>

);

}
}
export default LoginPage;
