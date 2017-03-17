import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

class DropoutButtonSensors extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      sensor: "Performance",
      value: 1
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Performance" onClick={()=>{this.setState({sensor: "Performance"}); this.props.handler("performance")}}/>
          <MenuItem value={2} primaryText="RPM" onClick={()=>{ this.setState({sensor: "RPM"}); this.props.handler("rpm")}}/>
          <MenuItem value={3} primaryText="Rain" onClick={()=>{this.setState({sensor: "Rain"}); this.props.handler("rain")}}/>
          <MenuItem value={4} primaryText="Temperature" onClick={()=>{this.setState({sensor: "Temperature"}); this.props.handler("temp")}}/>
          <MenuItem value={5} primaryText="Water Temperature" onClick={()=>{this.setState({sensor: "Water Temperature"}); this.props.handler("windspeed")}}/>
          <MenuItem value={6} primaryText="Windspeed" onClick={()=>{this.setState({sensor: "Windspeed"}); this.props.handler("windspeed")}}/>
          <MenuItem value={7} primaryText="Water level" onClick={()=>{this.setState({sensor: "Waterlevel"}); this.props.handler("waterlevel")}}/>
        </DropDownMenu>
      </div>
    );
  }


}


export default DropoutButtonSensors;
