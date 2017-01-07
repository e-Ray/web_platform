import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const CustomDatePicker = ({handler})=>{
  let dayTo = new Date();
  let dayFrom = new Date();
      return (
        <div>
          <div>
            <DatePicker hintText="Von" onChange={(d,value)=>{dayFrom = value}} />
          </div>
          <div>
            <DatePicker hintText="Bis" onChange={(d,value)=>{dayTo = value}} />
          </div>
          <div>
            <RaisedButton label="ok" onClick={()=> handler(dayTo, dayFrom)} />
          </div>
        </div>);
}

export default CustomDatePicker;