import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPageWaterTemp extends Component {

  render() {
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Wassertemperatur</h1>
          </div>
          <DetailPage sensor="watertemp" mode="detail" />
        </div>

      </div>
    );
  }
}

export default DetailPageWaterTemp;
