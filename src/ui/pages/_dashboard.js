import React, { Component } from 'react';
import Test from '../components/generic/test';
import Button from '../../stories/Button';
import Chart from 'chart.js';
import LineExample from '../components/charts/lineChart';

class Dashboard extends Component {


	render() {

	
		return(
			<div>
				<Test />
				<Button />
				<LineExample />
				
				
			</div>
		);

	}
}



export default Dashboard;
