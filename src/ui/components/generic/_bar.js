import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { logout } from '../../../api/Auth/_auth';
import FlatButton from 'material-ui/FlatButton';
import { firebaseAuth } from '../../../api/Auth/_constants';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class AppBarMenu extends React.Component {

	constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleLogout = this.handleLogout.bind(this);
  	}

  	handleToggle = () => this.setState({open: !this.state.open});

  	handleClose = () => this.setState({open: false});

    handleLogout = () => {
      logout();

      console.log('logged out');
        }
    componentDidMount(){
      firebaseAuth().onAuthStateChanged(user => {
        if(!user){
          window.location.reload();
        }
      });
    }
    
	render(){
    
		return(
			<div>
       
      	<AppBar
          title="Aussagekräftiger Titel"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Logout" onTouchTap={this.handleLogout} href="/notloggedin" />}
        	/>

       	 <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
         
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="Dashboard" />}>Dashboard</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="DetailPagePH" />}>PH-Wert</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="DetailPageWL" />}>Wasserstand</MenuItem>
        </Drawer>

  		</div>
		);
	}

}




