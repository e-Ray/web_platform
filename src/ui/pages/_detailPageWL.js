import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPageWL extends Component{

  render() {

		return(
			<div>
				<DetailPage sensor="waterlevel" />
        <h1>Wasserstand</h1>
			</div>
		);

	}
}

export default DetailPageWL;
