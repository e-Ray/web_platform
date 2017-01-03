import React from 'react';
import { WaterLevel, PHVal, Rpm, Performance, Rain, Temperature, WaterTemp, WindDirection, WindSpeed } from '../sensors';



function renderSensor(sensor, mode) {
  switch(sensor) {
    case "performance":
      return <Performance mode={ mode }/>;
    case "ph":
      return <PHVal mode={ mode }/>;
    case "rain":
      return <Rain mode={ mode }/>;
    case "rpm":
      return <Rpm mode={ mode }/>;
    case "temp":
      return <Temperature mode={ mode }/>;
    case "watertemp":
      return <WaterTemp mode={ mode }/>;
    case "winddir":
      return <WindDirection mode={ mode }/>;
    case "windspeed":
      return <WindSpeed mode={ mode }/>;
    case "waterlevel":
      return <WaterLevel mode={ mode }/>;
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
