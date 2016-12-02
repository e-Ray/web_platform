import React from 'react';
import { WaterLevel } from '../sensors';

function renderSensor(props) {
  switch(props) {
    case "waterlevel":
      return <WaterLevel />;
    default:
      return <h2>Fehler: No such sensor</h2>;
    };
};

export default React.createClass({

  render() {
    return (
      <div>
        <h1>I am a detail page</h1>
        {renderSensor(this.props.sensor)}
      </div>
    );
  }
});
