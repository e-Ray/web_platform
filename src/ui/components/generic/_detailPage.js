import React from 'react';
import { WaterLevel, PHVal } from '../sensors';



function renderSensor(props) {
  switch(props) {
    case "waterlevel":
      return <WaterLevel />;
    case "ph":
      return <PHVal />;
    default:
      return <h2>Fehler: No such sensor</h2>;
  };
}; 
class DetailPage extends React.Component {



  render() {
    return (
      <div>
        {renderSensor(this.props.sensor)}
      </div>
    );
  }
}

export default DetailPage;