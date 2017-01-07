import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPageTemp extends Component {

  render() {
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Lufttemperatur</h1>
          </div>
          <DetailPage sensor="temp" mode="detail" />
        </div>

      </div>
    );
  }
}

export default DetailPageTemp;
