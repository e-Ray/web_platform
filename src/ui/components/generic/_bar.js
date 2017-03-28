import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { FormattedMessage } from 'react-intl';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { logout } from '../../../api/Auth/_auth';
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

    handleLogout = () => logout();

    componentDidMount(){
      firebaseAuth().onAuthStateChanged(user => {
        if(!user){
          window.location.reload();
        }
      });
    }

	render(){

    if(this.props.admin === "true"){
      return <div>

        <AppBar
          title="admin"
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
          <Divider />
         
        </Drawer>
      </div>

    }
		return(
			<div>
      	<AppBar
          title="e.Ray"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Logout" onTouchTap={this.handleLogout} href="/notloggedin" />}
        	/>
       	 <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} 
            containerElement={<Link to="Dashboard" />}>
            Dashboard
          </MenuItem>
					<Divider />
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPagePerf" />}>
            <FormattedMessage id='SENSOR_PERF'
              defaultMessage='Performance'/>
          </MenuItem>
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWL" />}>
            <FormattedMessage id='SENSOR_WL' 
             defaultMessage='Water Level' />
          </MenuItem>
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageRpm" />}>
            <FormattedMessage id='SENSOR_RPM'
              defaultMessage='RPM' />
          </MenuItem>
			    <MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWaterTemp" />}>
            <FormattedMessage id='SENSOR_WT'
              defaultMessage='Water Temperature' />
          </MenuItem>
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageTemp" />}>
            <FormattedMessage id='SENSOR_AT'
              defaultMessage='Air Temperature' />
          </MenuItem>
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageRain" />}>
            <FormattedMessage id='SENSOR_RAIN'
              defaultMessage='Rainfall' />
          </MenuItem>
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWindSpeed" />}>
            <FormattedMessage id='SENSOR_WS'
              defaultMessage='Wind Speed' />
          </MenuItem>
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWindDir" />}>
            <FormattedMessage id='SENSOR_WD'
              defaultMessage='Wind Direction' />
          </MenuItem>
					<Divider />
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="InfoPage" />}>
            <FormattedMessage id='MY_ERAY'
              defaultMessage='My e.Ray' />
          </MenuItem>
					<Divider />
					<MenuItem onTouchTap={this.handleClose}
            containerElement={<Link to="HelpPage" />}>
            <FormattedMessage id='HELP_PAGE'
              defaultMessage='Help Page' />
          </MenuItem>
        </Drawer>
      </div>
		);
  
	}

}
