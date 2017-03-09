import React, { Component } from 'react';
import { DetailPage } from '../components/generic';




class DetailPagePerf extends Component {


  render() {
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Leistung (Watt)</h1>
          </div>
          <DetailPage sensor="performance" mode="detail" />
        </div>
        <div id="row">
          <div id="col-1">
            <h3> Einheit: Watt </h3>
            <h3> Wenn der Zeitraum auf dem Graphen 7 oder mehr Tage umfasst, wird der Durchschnittswert des jeweiligen Tages angezeigt. </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPagePerf;
