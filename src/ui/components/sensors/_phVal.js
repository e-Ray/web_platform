import React, { Component } from 'react';
import { LineExample } from '../charts';
import { DropoutButton, TimeSpan } from '../generic';


const daten = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};



function timeRange(props){
  if(props === "detail"){
    return  <DropoutButton />; //<<TODO: Button
  }else return;
};

class PHVal extends Component {

	render() {

		return(
			<div>
        
        {timeRange(this.props.mode, {timeRange})}
				<LineExample data={daten} />
        
			</div>
		);

	}
}

export default PHVal;