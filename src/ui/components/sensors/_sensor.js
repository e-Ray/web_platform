import React, { Component } from 'react';
import { DropoutButton } from '../generic';
import { Line } from 'react-chartjs-2';
import { ref, firebaseAuth } from '../../../api/Auth/_constants';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';




function TimeSpan(time, custom, customDayFrom, customTimeFrom, customDayTo, customTimeTo) {
    this.time = time;
    this.custom = custom;
    this.customDayFrom = customDayFrom;
    this.customDayTo = customDayTo;
    //console.log('Time instantiated');
};

TimeSpan.prototype.set = function(timeRange) {
  this.time = timeRange;

  //console.log('time set to '+timeRange);
};

TimeSpan.prototype.setCustom = function(custom) {
  this.custom = custom;
};
TimeSpan.prototype.setCustomDayFrom = function(fromDay) {
  this.customDayFrom = fromDay;
};
TimeSpan.prototype.setCustomDayTo = function(to) {
  this.customDayTo = to;
};
TimeSpan.prototype.getCustom = function() {
  return this.custom;
};
TimeSpan.prototype.getCustomDayFrom = function() {
  return this.customDayFrom;
};
TimeSpan.prototype.getCustomDayTo = function() {
  return this.customDayTo;
};
TimeSpan.prototype.get = function() {
  //console.log('time got');
  return this.time;
};


var timeSpan = new TimeSpan("2 Wochen", false, "", "", "", "");

function timeRange(mode, handler){
  if(mode === "detail"){
    return (
                <div id="timeButton">
                  <DropoutButton timeSpan={ timeSpan } handler={ handler }/>
                </div>
          );
  }else return;      
  };

function rangePicker(mode, custom, timeSpan, handler){
  if(mode === "detail" && custom){
      return (
              <div>
                <div>
                  <DatePicker hintText="Von" onChange={(d,value)=>{timeSpan.setCustomDayFrom(value)}}/>
                </div>
                <div>
                  <DatePicker hintText="Bis" onChange={(d,value)=>{timeSpan.setCustomDayTo(value)}}/>
                </div>
                <div>
                  <RaisedButton label="ok" onClick={()=> handler()} />
                </div>

              </div>);

};
};


class Sensor extends Component {
  state = {
   labels: [],
   values: [],
   range: timeSpan.get(),
   dayFrom: timeSpan.getCustomDayFrom(),
   dayTo: timeSpan.getCustomDayTo(),
   custom: timeSpan.getCustom()
 };
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
    this.getData();
  }
});

  }
  handler(){
    this.setState({ range: timeSpan.get(),
                    dayFrom: timeSpan.getCustomDayFrom(),
                    dayTo: timeSpan.getCustomDayTo()
    });
    console.log('set State to: \n range:' + timeSpan.get()
                + '\n dayFrom:' + timeSpan.getCustomDayFrom()
                + '\n dayTo:' + timeSpan.getCustomDayTo().toString());
  }
  getData(){

    const sensorRef= ref.child('/users/'+ firebaseAuth().currentUser.uid+'/erays/eray1/'+this.props.sensor).limitToLast(1000);
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
        <h1>{ timeSpan.get() }</h1>
        
        <div id="col-2-right">
          {timeRange(this.props.mode, this.handler)}
        </div>
        {rangePicker(this.props.mode, timeSpan.getCustom(), timeSpan, this.handler)}
        <div id="col-1">
				    <Line redraw={true} data={daten} width={10} height={210} options={{ maintainAspectRatio: false }} />
        </div>

			</div>
		);

	}
}


export default Sensor;
