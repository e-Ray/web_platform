import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const CustomDatePicker = ({handler})=>{
  let dayTo = new Date();
  let dayFrom = new Date();
  let bool = false;
      return (
        <div>
          <div id="col-5">
            <DatePicker hintText="Von" onChange={(d,value)=>{dayFrom = new Date(value.getTime()); bool = true;}} />
          </div>
          <div id="col-5">
            <DatePicker hintText="Bis" onChange={(d,value)=>{dayTo = new Date(value.getTime()); bool = true}} />
          </div>
          <div id="col-5">
            <RaisedButton label="ok" onClick={()=> { if (bool) {handler(dayTo, dayFrom); bool = false}}} />
          </div>
        </div>);
}

export default CustomDatePicker;
