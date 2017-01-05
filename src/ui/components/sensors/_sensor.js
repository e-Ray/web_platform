import React, { Component } from 'react';
import { DropoutButton } from '../generic';
import { Line } from 'react-chartjs-2';
import { ref, firebaseAuth } from '../../../api/Auth/_constants';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';




function TimeSpan(time, custom, customDayFrom, customDayTo) {
    this.time = time;
    this.custom = custom;
    this.customDayFrom = customDayFrom;
    this.customDayTo = customDayTo;
    this.labels = [];
    this.values = [];
    console.log('Time instantiated');
};

TimeSpan.prototype.set = function(timeRange) {
  this.time = timeRange;
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
  return this.time;
};
TimeSpan.prototype.setLabels = function(labels) {
  this.labels = labels;
}
TimeSpan.prototype.setValues = function(values) {
  this.values = values;
}
TimeSpan.prototype.getLabels = function() {
  return this.labels;
}
TimeSpan.prototype.getValues = function() {
  return this.values;
}
var timeSpan = new TimeSpan(14, false, "", "");

function timeRange(mode, handler){
  if(mode === "detail"){
    return (
                <div id="timeButton">
                  <DropoutButton timeSpan={ timeSpan } handler={ handler }/>
                </div>
    );
  }else{
    timeSpan.set(14);
     return;
  }
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
   values: timeSpan.getValues(),
   labels: timeSpan.getLabels(),
   range:   timeSpan.get(),
   dayFrom: timeSpan.getCustomDayFrom(),
   dayTo:   timeSpan.getCustomDayTo(),
   custom:  timeSpan.getCustom()
 };

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log("range: " + timeSpan.get());
        this.getData(timeSpan.get());
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
    this.getData(timeSpan);
  }

  getEray() {
    /*const userRef=ref.child('/users/'+ firebaseAuth().currentUser.uid);*/
    let eray='eray2'; //TODO: Default Eray richtig setzen!
    /*userRef.once('value', (snapshot) => {
      eray=snapshot.val();
    });*/
    console.log("eray: " + eray);
    return eray;
  }

  getData(timeSpan){

    
    let dayDiff;
    let iterator;
    let labels = [];
    let values =[];
    let i = 0;
    
    if(this.state.range==="Custom"){
      let dayTo = timeSpan.getCustomDayTo();
      let dayFrom = timeSpan.getCustomDayFrom();
      dayDiff = Math.floor((dayTo-dayFrom)/(1000*60*60*24));
      iterator = timeSpan.getCustomDayFrom();
    }else{
      dayDiff = this.state.range;
      iterator = new Date();
      iterator.setDate(iterator.getDate()-dayDiff);
  
    }
     while(i<=dayDiff){
        let sensorRef = ref.child('/erays/eray2/'+this.props.sensor+'/'+iterator.getFullYear()+'/'+(iterator.getMonth()+1)+'/'+iterator.getDate()+'/werte'); 
      console.log(iterator.getFullYear()+'.'+(iterator.getMonth()+1)+'.'+iterator.getDate()+'\n');
        sensorRef.on('child_added', (snapshot) => {

            labels.push(snapshot.val().date+"-"+snapshot.val().timestamp);
            values.push(snapshot.val().value);
      });
      i++;
      iterator.setDate(iterator.getDate()+1);
    };
      this.setState({labels: labels, values: values});




  }

  

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
          { timeRange(this.props.mode, this.handler) }
        </div>
          { rangePicker(this.props.mode, timeSpan.getCustom(), timeSpan, this.handler) }
        <div id="col-1">
				  <Line redraw={ true } data={ daten } width={ 10 } height={ 210 } options={ { maintainAspectRatio: false, legend: { display: false, } } } />
        </div>

			</div>
		);

	}
}


export default Sensor;
