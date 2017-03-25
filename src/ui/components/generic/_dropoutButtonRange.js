import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

class DropoutButtonRange extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      range: "2 Weeks",
      value: 2
    };
  }

  handleChange(event, index, value){ this.setState({value})};

  render() {
    return (

      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="1 Week" onClick={()=>{this.setState({range: "1 Week"}); this.props.handler(7)}}/>
          <MenuItem value={2} primaryText="2 Weeks" onClick={()=>{ this.setState({range: "2 Weeks"}); this.props.handler(14)}}/>
          <MenuItem value={3} primaryText="1 Month" onClick={()=>{this.setState({range: "1 Month"}); this.props.handler(31)}}/>
          <MenuItem value={4} primaryText="3 Months" onClick={()=>{this.setState({range: "3 Months"}); this.props.handler(92)}}/>
          <MenuItem value={5} primaryText="6 Months" onClick={()=>{this.setState({range: "6 Months"}); this.props.handler(184)}}/>
          <MenuItem value={6} primaryText="1 Year" onClick={()=>{this.setState({range: "1 Year"}); this.props.handler(365)}}/>
          <MenuItem value={7} primaryText="Custom" onClick={()=>{this.setState({range: "Custom"}); this.props.customHandler(new Date(),new Date())}}/>
        </DropDownMenu>
      </div>
    );
  }


}


export default DropoutButtonRange;
