import React, { Component } from 'react';
import { DropoutButton } from '../generic';
import {Line} from 'react-chartjs-2';
import {ref, firebaseAuth} from '../../../api/Auth/_constants'





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

function TimeSpan(time) {
    this.time = time;

    console.log('Time instantiated');
};

TimeSpan.prototype.set = function(timeRange) {
  this.time = timeRange;

  console.log('time set to '+timeRange);
};
TimeSpan.prototype.get = function() {
  console.log('time got');
  return this.time;
};


var timeSpan = new TimeSpan("2 Wochen");

function timeRange(mode, handler){
  if(mode === "detail"){
    return <DropoutButton timeSpan={ timeSpan } handler={ handler }/>
  }else return;
};



class PHVal extends Component {




  constructor(props) {
    super(props)
    console.log('test1');
    this.state = this.getData()/**{labels: daten[0],
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
                      data: daten[1]
                    }
                  ]
                }**/;
                console.log(this.state.labels);
    this.handler = this.handler.bind(this)
  }
  getData(){
    const sensorRef= ref.child('/users/9paFU7idD5X24edYeAr7aE9vpKm1/erays/eray1/sensor1');
    var times=[];
    var values=[];
    sensorRef.on('child_added', (snapshot) => {
      var time=snapshot.val().timestamp;
      var value=snapshot.val().value;
      times.push(time);
      values.push(value);
    });
    var daten={
                  labels: times,
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
                                  data: values
                                }
                              ]
                            };
    return daten;
  }
  
  handler(e) {
    this.setState(this.getData());

  };

	render() {

		return(
			<div>
        <h1>{ timeSpan.get() }</h1>

        {timeRange(this.props.mode, this.handler)}
        <Line data={this.getData()} />


			</div>
		);

	}
}
//var userID= firebaseAuth.currentUser.uid;


export default PHVal;
