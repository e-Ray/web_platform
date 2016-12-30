import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { DropoutButton } from '../generic';
import {ref, firebaseAuth} from '../../../api/Auth/_constants'



function TimeSpan(time) {
    this.time = time;

};

TimeSpan.prototype.set = function(timeRange) {
  this.time = timeRange;

};
TimeSpan.prototype.get = function() {
  return this.time;
};


var timeSpan = new TimeSpan("2 Wochen");

function timeRange(mode, handler){
  if(mode === "detail"){
    return <DropoutButton timeSpan={ timeSpan } handler={ handler }/>
  }else return;
};

class WaterLevel extends Component {
  state = {
   labels: [],
   values: []
 };
  constructor(props) {
    super(props);
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
    this.getData();
  }
});

  }

  getData(){
    const sensorRef= ref.child('/users/'+ firebaseAuth().currentUser.uid+'/erays/eray1/sensor2').limitToLast(50);
    sensorRef.on('child_added', (snapshot) => {
      let labels = this.state.labels;
      let test=snapshot.val().values;
        labels.push(snapshot.val().timestamp);

        let values = this.state.values;
        values.push(snapshot.val().value);
        this.setState({
          'labels': labels,
          'values': values,
        });
      });
    }
  handler(e) {

  };


	render() {
    const daten = {
      labels: this.state.labels,
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
          data: this.state.values,
        }
      ]
    };
		return(
			<div>
        <h1>{ timeSpan.get() }</h1>

        {timeRange(this.props.mode, this.handler)}
        <Line redraw={true} data={daten}/>


			</div>
		);

	}
}
export default WaterLevel;
