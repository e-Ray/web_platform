import React from 'react';
import { Sensor } from '../sensors';



function renderSensor(sensor, mode) {
  switch(sensor) {
    case "performance":
      return <Sensor mode={ mode } sensor="sensor1"/>;
    case "ph":
      return <Sensor mode={ mode } sensor="sensor2"/>;
    case "rain":
      return <Sensor mode={ mode } sensor="sensor3"/>;
    case "rpm":
      return <Sensor mode={ mode } sensor="sensor4"/>;
    case "temp":
      return <Sensor mode={ mode } sensor="sensor5"/>;
    case "watertemp":
      return <Sensor mode={ mode } sensor="sensor6"/>;
    case "winddir":
      return <Sensor mode={ mode } sensor="sensor7"/>;
    case "windspeed":
      return <Sensor mode={ mode } sensor="sensor8"/>;
    case "waterlevel":
      return <Sensor mode={ mode } sensor="sensor9"/>;
    default:
      return <h2>Fehler: No such sensor</h2>;
  }
};
class DetailPage extends React.Component {



  render() {
    return (
      <div id="detailPage">
        {renderSensor(this.props.sensor, this.props.mode)}
      </div>
    );
  }
}

export default DetailPage;
