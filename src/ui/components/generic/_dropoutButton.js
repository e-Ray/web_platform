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
      range: "2 Wochen"
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
          label={ this.state.range }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="1 Woche" onClick={()=>{this.setState({open: false, range: "1 Woche"}); this.props.handler(false, 7, "", "")}}/>
            <MenuItem primaryText="2 Wochen" onClick={()=>{ this.setState({open: false, range: "2 Wochen"}); this.props.handler(false, 14, "", "")}}/>
            <MenuItem primaryText="1 Monat" onClick={()=>{this.setState({open: false, range: "1 Monat"}); this.props.handler(false, 31, "", "")}}/>
            <MenuItem primaryText="3 Monate" onClick={()=>{this.setState({open: false, range: "3 Monate"}); this.props.handler(false, 92, "", "")}}/>
            <MenuItem primaryText="6 Monate" onClick={()=>{this.setState({open: false, range: "6 Monate"}); this.props.handler(false, 184, "", "")}}/>
            <MenuItem primaryText="1 Jahr" onClick={()=>{this.setState({open: false, range: "1 Jahr"}); this.props.handler(false, 365, "", "")}}/>
            <MenuItem primaryText="Custom" onClick={()=>{this.setState({open: false, range: "Custom"}); this.props.handler(true, 14, "", "")}}/>
          </Menu>
        </Popover>
      </div>
    );
  }


}


export default DropoutButton;
