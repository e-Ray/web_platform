import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPagePH extends Component{

  render() {

		return(

      
      <div id="container">
        <div id="row">
          <div id="col-2-left">
			       <h1 id="detailMode">PH-Wert</h1>
          </div>
				  <DetailPage sensor="ph" mode="detail"/>
        </div>

			</div>
		);

	}
}

export default DetailPagePH;
