import React from 'react';
import { WaterLevel, PHVal } from '../sensors';



function renderSensor(sensor, mode) {
  switch(sensor) {
    case "waterlevel":
      return <WaterLevel mode={ mode }/>;
    case "ph":
      return <PHVal mode={ mode }/>;
    default:
      return <h2>Fehler: No such sensor</h2>;
  }
}; 
class DetailPage extends React.Component {



  render() {
    return (
      <div>
        {renderSensor(this.props.sensor, this.props.mode)}
      </div>
    );
  }
}

export default DetailPage;