import React, { Component } from 'react';
import { DetailPage } from '../components/generic';



class DetailPageRain extends Component{

  render() {

		return(

			<div id="container">
        <div id="row">
          <div id="col-2-left">
			       <h1 id="detailMode">Niederschlagsmenge</h1>
          </div>
				  <DetailPage sensor="rain" mode="detail"/>
        </div>

			</div>
		);

	}
}

export default DetailPageRain;
