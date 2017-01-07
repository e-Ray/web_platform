import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPageWindSpeed extends Component {

  render() {
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Windgeschwindigkeit</h1>
          </div>
          <DetailPage sensor="windspeed" mode="detail" />
        </div>

      </div>
    );
  }
}

export default DetailPageWindSpeed;
