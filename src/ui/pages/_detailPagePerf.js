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

      </div>
    );
  }
}

export default DetailPagePerf;
