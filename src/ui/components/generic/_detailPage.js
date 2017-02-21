import React from 'react';
import { DashboardSensor } from '../sensors';
import { DropoutButton, CustomDatePicker } from '../generic';
import { observer } from 'mobx-react';
function timeRange(mode, handler, customHandler){
  if (mode === "detail"){
    return (
      <div id="timeButton">
        <DropoutButton handler={ handler } customHandler={ customHandler }/>
      </div>
    );
  } else {
     return;
  }
}

function rangePicker(mode, custom, handler){
  if (mode === "detail" && custom){
    return (
        <div>
         <CustomDatePicker handler={ handler }/>
        </div>
      );
  } else {
    return;
  }
}
@observer
class DetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     custom: false,
     range: 14,
     sensor: props.sensor,
     dayTo: new Date(),
     dayFrom: new Date(),
    };
  this.handler = this.handler.bind(this);
    this.customHandler = this.customHandler.bind(this);
  };

  handler(range) {
      this.setState({custom: false, range: range });
  }

  customHandler(dayTo, dayFrom) {
      this.setState({custom: true, dayTo: dayTo, dayFrom: dayFrom, range: (dayTo.getDate()-dayFrom.getDate()) });
  }
  render() {
    return (
    <div>
    	<div id="col-2-right">
          { timeRange(this.props.mode, this.handler, this.customHandler) }
        </div>
      <div id="row">
          { rangePicker(this.props.mode, this.state.custom, this.customHandler) }
      </div>
      <div id="detailPage">
        <DashboardSensor date={ this.state.dayFrom } range={ this.state.range }  sensor={ this.props.sensor }
        	width={1500} height={500}/>
      </div>
     </div>
    );
  }
}

export default DetailPage;
