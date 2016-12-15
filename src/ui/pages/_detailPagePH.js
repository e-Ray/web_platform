import React, { Component } from 'react';
import { DetailPage } from '../components/generic';


class DetailPagePH extends Component{

  render() {

		return(
			<div>
				<h1>PH-Wert</h1>
				<DetailPage sensor="ph" mode="detail"/>

			</div>
		);

	}
}

export default DetailPagePH;
