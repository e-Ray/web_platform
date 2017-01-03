import React, { Component } from 'react';
import { DetailPage } from '../components/generic';



class DetailPageWindDir extends Component{

  render() {

		return(

			<div id="container">
        <div id="row">
          <div id="col-2-left">
			       <h1 id="detailMode">Windrichtung</h1>
          </div>
				  <DetailPage sensor="winddir" mode="detail"/>
        </div>

			</div>
		);

	}
}

export default DetailPageWindDir;
