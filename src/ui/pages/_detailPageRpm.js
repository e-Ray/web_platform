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

      </div>
    );
  }
}

export default DetailPageRpm;
