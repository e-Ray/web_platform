import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPageRpm extends Component {

  render() {
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Rpm (Geschwindigkeit)</h1>
          </div>
          <DetailPage sensor="rpm" mode="detail" />
        </div>
        <div id="row">
          <div id="col-1">
            <h3> Einheit: Umdrehungen/Minute (des Rotors im Kraftwerk)</h3>
            <h3> Wenn der Zeitraum auf dem Graphen 7 oder mehr Tage umfasst, wird der Durchschnittswert des jeweiligen Tages angezeigt. </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPageRpm;
