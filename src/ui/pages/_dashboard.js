import React, { Component } from 'react';
import Test from '../components/generic/test';
import Button from '../../stories/Button';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';

class Dashboard extends Component {


	render() {

	
		return(
			<div>
				<Test />
				<Button />
				
				
				
			</div>
		);

	}
}



export default Dashboard;
