import React, { Component } from 'react';
import LineExample from '../components/charts/lineChart';



var kalenderwoche = '48';
const wasserstandData = {
  labels: ['21.11', '22.11', '23.11', '24.11', '25.11', '26.11', '27.11', '28.11.', '29.11.', '30.11.', '1.12.', '2.12.', '3.12.', '4.12.'],
  datasets: [
    {
      label: 'Wasserstand KW ' + (kalenderwoche-1) + '/' + kalenderwoche,
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 1, 1, 1.3, 1.2, 1.5, 1.3, 1.5, 1, 1.4, 1.2, 1.1]
    }
  ]
};
const phData = {
  labels: ['21.11', '22.11', '23.11', '24.11', '25.11', '26.11', '27.11', '28.11.', '29.11.', '30.11.', '1.12.', '2.12.', '3.12.', '4.12.'],
  datasets: [
    {
      label: 'pH-Wert KW ' + (kalenderwoche-1) + '/' + kalenderwoche,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [7.01,7,7,7,7,6.99,6.99,7.01, 6.99, 6.98, 7.02, 7.02]
    }
  ]
};



class Dashboard extends Component {



	render() {


		return(
			<div>
				
				<LineExample name="Wasserstand" data={wasserstandData} href="/"/>
        <LineExample name="PH-Wert" data={phData} href="/"/>

			</div>
		);

	}
}



export default Dashboard;
