import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import { LoginComponent, CreateAccount } from '../components/generic';

const banner = require('../../images/eray-banner.jpg');

class LoginPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      LoginComponentOpen: false,
      CreateAccountOpen: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleClose() {
    this.setState({ LoginComponentOpen: false, CreateAccountOpen: false });
  }
  handleOpen() {
    this.setState({ LoginComponentOpen: true });
  }
  handleRegistration() {
    this.setState({ CreateAccountOpen: true });
  }


  render() {
    return (
      <div>

        <div id="baseLayout">
          <AppBar
            title="e.Ray"
            iconElementRight={<FlatButton label="Login" onTouchTap={() => this.handleOpen()} />}
            iconElementLeft={<IconButton />}
          />
        </div>
        <div id="container">
          <img src={banner} id="banner" alt="" />
          <div id="home">
            <h1>Riversense - Flood Monitoring Platform</h1>
            <h2>You can look up the sensor data of your e.Ray on this page</h2>

            <div id="home_login">
              <FlatButton label="Login" style={{ color: '#ffffff' }} onTouchTap={() => this.handleOpen()} />
              <FlatButton label="Create Account" style={{ color: '#ffffff' }} onTouchTap={() => this.handleRegistration()} />
            </div>

          </div>
        </div>
        <div>
          <LoginComponent
            open={this.state.LoginComponentOpen}
            close={() => this.handleClose()} testing={false}
          />
          <CreateAccount open={this.state.CreateAccountOpen} close={() => this.handleClose()} />
        </div>
      </div>
    );
  }
}
export default LoginPage;
