import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

var timeRange = "2 Wochen";


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
          onClick={this.handleTouchTap}
          label={ timeRange }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="1 Woche" onClick={()=>{timeRange="1 Woche"; this.setState({open: false})}}/>
            <MenuItem primaryText="2 Wochen" onClick={()=>{timeRange="2 Wochen"; this.setState({open: false})}}/>
            <MenuItem primaryText="1 Monat" onClick={()=>{timeRange="1 Monat";this.setState({open: false})}}/>
            <MenuItem primaryText="3 Monate" onClick={()=>{timeRange="3 Monate";this.setState({open: false})}}/>
            <MenuItem primaryText="6 Monate" onClick={()=>{timeRange="6 Monate";this.setState({open: false})}}/>
            <MenuItem primaryText="1 Jahr" onClick={()=>{timeRange="1 Jahr";this.setState({open: false})}}/>
          </Menu>
        </Popover>
      </div>
    );
  }


}


export default DropoutButton;