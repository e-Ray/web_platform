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
          primary={true}
          onClick={this.handleTouchTap}
          label={ this.props.timeSpan.get() }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="1 Woche" onClick={()=>{this.props.timeSpan.set("1 Woche"); this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="2 Wochen" onClick={()=>{this.props.timeSpan.set("2 Wochen"); this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="1 Monat" onClick={()=>{this.props.timeSpan.set("1 Monat");this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="3 Monate" onClick={()=>{this.props.timeSpan.set("3 Monate");this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="6 Monate" onClick={()=>{this.props.timeSpan.set("6 Monate");this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="1 Jahr" onClick={()=>{this.props.timeSpan.set("1 Jahr");this.setState({open: false}); this.props.handler()}}/>
          </Menu>
        </Popover>
      </div>
    );
  }


}


export default DropoutButton;
