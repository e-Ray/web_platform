import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const CustomDatePicker = ({dayTo,dayFrom, handler }) => {

 let bool=false;
  
  return (
    <div>
      <div id="col-5">
        <DatePicker hintText="Von" autoOk onChange={(d, value) => { dayFrom = new Date(value.getTime()); console.log(dayFrom); bool=true}} />
      </div>
      <div id="col-5">
        <DatePicker hintText="Bis" autoOk onChange={(d, value) => { dayTo = new Date(value.getTime()); console.log(dayTo); bool=true;}} />
      </div>
      <div id="col-5">
        <RaisedButton label="ok" onClick={() => {if(bool) { handler(dayTo, dayFrom); console.log("setting new date:" + dayFrom + "\n"+ dayTo+"\n"); bool=false; } }} />
      </div>
    </div>);
};

export default CustomDatePicker;
