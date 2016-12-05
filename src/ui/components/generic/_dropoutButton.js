import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class DropoutButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}//onTouchTap={this.handleTouchTap}
          label="Zeitraum"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="1 Woche" />
            <MenuItem primaryText="2 Wochen" />
            <MenuItem primaryText="1 Monat" />
            <MenuItem primaryText="3 Monate" />
            <MenuItem primaryText="6 Monate" />
            <MenuItem primaryText="1 Jahr" />
          </Menu>
        </Popover>
      </div>
    );
  }


}


export default DropoutButton;