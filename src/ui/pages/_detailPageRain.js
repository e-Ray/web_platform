import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPageRain extends Component {

  render() {
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Niederschlagsmenge</h1>
          </div>
          <DetailPage sensor="rain" mode="detail" />
        </div>
        <div id="row">
          <div id="col-1">
            <h3> Einheit: Liter/Quatdratmeter </h3>
            <h3> Wenn der Zeitraum auf dem Graphen 7 oder mehr Tage umfasst, werden die Werte eines Tages gerundet. </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPageRain;
