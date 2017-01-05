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

  buttonLabel( timeSpan ) {
    if(this.props.timeSpan.getCustom() === true){
      return "Custom";
    }else {
      switch(timeSpan) {
        case 14 :
          return "2 Wochen";
        case 7 :
          return "1 Woche";
        case 30 :
          return "1 Monat";
        case 90 :
          return "3 Monate";
        case 180 :
          return "6 Monate";
        case 365 :
          return "1 Jahr";
        default :
          return "2 Wochen";
      }
    }
  }

  render() {
    return (
      <div>
        <RaisedButton
          primary={true}
          onClick={this.handleTouchTap}
          label={ this.buttonLabel(this.props.timeSpan.get()) }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="1 Woche" onClick={()=>{this.props.timeSpan.setCustom(false); this.props.timeSpan.set(7); this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="2 Wochen" onClick={()=>{this.props.timeSpan.setCustom(false); this.props.timeSpan.set(14); this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="1 Monat" onClick={()=>{this.props.timeSpan.setCustom(false); this.props.timeSpan.set(30);this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="3 Monate" onClick={()=>{this.props.timeSpan.setCustom(false); this.props.timeSpan.set(90);this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="6 Monate" onClick={()=>{this.props.timeSpan.setCustom(false); this.props.timeSpan.set(180);this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="1 Jahr" onClick={()=>{this.props.timeSpan.setCustom(false); this.props.timeSpan.set(365);this.setState({open: false}); this.props.handler()}}/>
            <MenuItem primaryText="Custom" onClick={()=>{this.props.timeSpan.setCustom(true); this.props.timeSpan.set("Custom"); this.setState({open: false}); this.props.handler()}}/>
          </Menu>
        </Popover>
      </div>
    );
  }


}


export default DropoutButton;
