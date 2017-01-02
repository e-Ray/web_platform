import React, { Component } from 'react';
import { DetailPage } from '../components/generic';



class DetailPageWL extends Component{

  render() {

		return(
			<div id="container">
        <div id="row">
          <div id="col-2-left">
			       <h1 id="detailMode">Wasserstand</h1>
          </div>
				  <DetailPage sensor="waterlevel" mode="detail"/>
        </div>
			</div>
		);

	}
}

export default DetailPageWL;
