import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const CustomDatePicker = ({ dayTo, dayFrom, handler }) => {
  let bool = false;

  return (
    <div>
      <div id="col-5">
        <DatePicker
          hintText="From" autoOk
          onChange={(d, value) => { dayFrom = new Date(value.getTime()); bool = true; }}
        />
      </div>
      <div id="col-5">
        <DatePicker
          hintText="To" autoOk
          onChange={(d, value) => { dayTo = new Date(value.getTime()); bool = true; }}
        />
      </div>
      <div id="col-5">
        <RaisedButton
          label="ok" onClick={() => {
            if (bool) {
              if (dayTo.getTime() > dayFrom.getTime()) {
                handler(dayTo, dayFrom); bool = false;
              } else {
                handler(dayFrom, dayTo); bool = false;
              }
            }
          }}
        />
      </div>
    </div>);
};
CustomDatePicker.propTypes = {
  dayTo: React.PropTypes.instanceOf(Date),
  dayFrom: React.PropTypes.instanceOf(Date),
  handler: React.PropTypes.func,
};
export default CustomDatePicker;
