import React, { Component } from 'react';
import { DropoutButton } from '../generic';
import {Line} from 'react-chartjs-2';

import {ref, firebaseAuth} from '../../../api/Auth/_constants'



function TimeSpan(time) {
    this.time = time;

    //console.log('Time instantiated');
};

TimeSpan.prototype.set = function(timeRange) {
  this.time = timeRange;

  //console.log('time set to '+timeRange);
};
TimeSpan.prototype.get = function() {
  //console.log('time got');
  return this.time;
};


var timeSpan = new TimeSpan("2 Wochen");

function timeRange(mode, handler){
  if(mode === "detail"){
    return <div id="timeButton"><DropoutButton timeSpan={ timeSpan } handler={ handler }/></div>
  }else return;
};


class PHVal extends Component {
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

    const sensorRef= ref.child('/users/'+ firebaseAuth().currentUser.uid+'/erays/eray1/sensor1').limitToLast(1000);
    let labels=this.state.labels;
    let values=this.state.values;
    let tm=null;
    sensorRef.on('child_added', (snapshot) => {
      //let labels = this.state.labels;
        labels.push(snapshot.val().timestamp);
        values.push(snapshot.val().value);
        if(tm) clearTimeout(tm);
        tm = setTimeout(() => this.setState({ 'labels': labels, 'values': values, stamp: new Date().getTime(), }), 25); }); }


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
        {/**<h1>{ timeSpan.get() }</h1>**/}
        <div id="col-2-right">
          {timeRange(this.props.mode, this.handler)}
        </div>
        <div id="col-1">
				    <Line redraw={true} data={daten} width={10} height={210} options={{ maintainAspectRatio: false }} />
        </div>





			</div>
		);

	}
}


export default PHVal;
