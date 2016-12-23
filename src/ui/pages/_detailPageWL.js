import React, { Component } from 'react';
import { DetailPage } from '../components/generic';



class DetailPageWL extends Component{

  render() {

		return(
			<div>
			  <h1>Wasserstand</h1>
				<DetailPage sensor="waterlevel" mode="detail"/>

			</div>
		);

	}
}

export default DetailPageWL;
