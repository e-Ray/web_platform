import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';





class DropoutButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      range: "2 Wochen",
      value: 2
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="1 Woche" onClick={()=>{this.setState({range: "1 Woche"}); this.props.handler(7)}}/>
          <MenuItem value={2} primaryText="2 Wochen" onClick={()=>{ this.setState({range: "2 Wochen"}); this.props.handler(14)}}/>
          <MenuItem value={3} primaryText="1 Monat" onClick={()=>{this.setState({range: "1 Monat"}); this.props.handler(31)}}/>
          <MenuItem value={4} primaryText="3 Monate" onClick={()=>{this.setState({range: "3 Monate"}); this.props.handler(92)}}/>
          <MenuItem value={5} primaryText="6 Monate" onClick={()=>{this.setState({range: "6 Monate"}); this.props.handler(184)}}/>
          <MenuItem value={6} primaryText="1 Jahr" onClick={()=>{this.setState({range: "1 Jahr"}); this.props.handler(365)}}/>
          <MenuItem value={7} primaryText="Custom" onClick={()=>{this.setState({range: "Custom"}); this.props.customHandler(new Date(),new Date())}}/>
        </DropDownMenu>
      </div>
    );
  }


}


export default DropoutButton;
