import React from 'react';
import { Chart } from './';
import { DropoutButtonRange, CustomDatePicker } from '../generic';
import { observer } from 'mobx-react';
import { observable } from 'mobx';



function dropoutButton(mode, handler, customHandler){
  if (mode === "detail"){
    return (
      <div id="timeButton">
        <DropoutButtonRange handler={ handler } customHandler={ customHandler }/>
      </div>
    );
  } else {
     return;
  }
}

function rangePicker(dayTo, dayFrom, custom, handler){
  if (custom){
    return (
        <div>
         <CustomDatePicker dayTo={dayTo} dayFrom={dayFrom} handler={ handler }/>
        </div>
      );
  } else {
    return;
  }
}

@observer
class DetailPage extends React.Component {

  @observable eray = "";
  constructor(props) {
    super(props);
    this.state = {
     custom: false,
     range: 14,
     sensor: props.sensor,
     dayTo: new Date(),
     dayFrom: new Date()
    };
  this.handler = this.handler.bind(this);
    this.customHandler = this.customHandler.bind(this);
  };

  handler(range) {
      this.setState({custom: false, range: range });
  }

  customHandler(dayTo, dayFrom) {
  	let dayTwo = new Date();
  	dayTwo.setDate(dayTo.getDate()+1);
      this.setState({
          custom: true, 
          dayTo: dayTo, 
          dayFrom: dayFrom, 
          range: Math.abs(dayTwo.getDate()-dayFrom.getDate())
        });
  }
  render() {
    
    return (
    <div>
    	<div id="col-2-right">
          { dropoutButton(this.props.mode, this.handler, this.customHandler) }
        </div>
      <div id="row">
          { rangePicker(this.state.dayTo, this.state.dayFrom, this.state.custom, this.customHandler) }
      </div>
      <div id="detailPage">
        <Chart date={ this.state.dayTo } eray={ this.props.eray } range={ this.state.range }  sensor={ this.props.sensor }
        	width={1500} height={700}/>
      </div>
     </div>
    );
    
    
  }
}

export default DetailPage;
