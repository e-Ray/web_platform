import React, { Component } from 'react';
import { LineExample } from '../charts';
import { DropoutButton } from '../generic';


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

    this.handler = this.handler.bind(this)
  }

  handler(e) {

    this.setState({
      s: 1
    })
  }

	render() {

		return(
			<div>
        <h1>{ timeSpan.get() }</h1>

        {timeRange(this.props.mode, this.handler)}
				<LineExample data={daten} />

			</div>
		);

	}
}

export default PHVal;

/**
const TimeSelect = ({value, onChangeHandler}) => (
  <select value={value} onChange={(e) => onChangeHandler(e.target.value)}>
    <option value='1week'>1 Woche</option>
    <option value='2week'>2 Woche</option>
  </select>
)

const TitleComp = ({ zeit }) => {
  return (
    <div>Text {zeit}</div>
  )
}

class ContainerComp extends Component {
  state = {
    timespan: '1week'
  }

   render() {
     return(
       <TimeSelect value={this.state.timespan} onChangeHandler={(value) => this.setState({ timespan: value })} />
       <TitleComp zeit={this.state.timestamp} />
     )
   }
}
**/
