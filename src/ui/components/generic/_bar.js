import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { logout } from '../../../api/Auth/_auth';
import { firebaseAuth } from '../../../api/Auth/_constants';
import { HelpDrawer } from './';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class AppBarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      helpOpen: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (!user) {
        // eslint-disable-next-line
        window.location.reload();
      }
    });
  }

  handleToggle() { this.setState({ open: !this.state.open }); }

  handleClose() { this.setState({ open: false, helpOpen: false }); }

  handleLogout() { logout(); }

  handleHelp() { this.setState({ helpOpen: true }); }


  render() {
    if (this.props.admin === 'true') {
      return (<div>

        <AppBar
          title="admin"
          onLeftIconButtonTouchTap={() => this.handleToggle()}
          iconElementRight={
            <FlatButton
              label="Logout"
              onTouchTap={() => this.handleLogout()}
            />}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem
            onTouchTap={() => this.handleClose()}
            containerElement={<Link to="Dashboard" />}
          >
          Dashboard
        </MenuItem>
          <Divider />

        </Drawer>
      </div>);
    }
    return (
      <div>
        <AppBar
          title="e.Ray"
          onLeftIconButtonTouchTap={() => this.handleToggle()}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
							}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText="Help" onTouchTap={this.handleHelp} />
              <MenuItem primaryText="Logout" onTouchTap={this.handleLogout} />
            </IconMenu>
            }
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="Dashboard" />}
          >
            Dashboard
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPagePerf" />}
          >
            Performance
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWL" />}
          >
            Water Level
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageRpm" />}
          >
            RPM
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWaterTemp" />}
          >
            Water Temperature
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageTemp" />}
          >
            Air Temperature
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageRain" />}
          >
            Rainfall
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWindSpeed" />}
          >
            Wind Speed
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="DetailPageWindDir" />}
          >
            Wind Direction
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="InfoPage" />}
          >
            My e.Ray
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to="HelpPage" />}
          >
            Help Page
          </MenuItem>
        </Drawer>
        <HelpDrawer
          open={this.state.helpOpen}
          close={this.handleClose}
        />
      </div>
    );
  }
}
AppBarMenu.propTypes = {
  admin: React.PropTypes.string.isRequired,
};
