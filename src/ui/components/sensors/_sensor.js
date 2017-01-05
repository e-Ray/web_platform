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


var timeSpan = new TimeSpan(3, false, "", "");

function timeRange(mode, handler){
  if(mode === "detail"){
    return (
                <div id="timeButton">
                  <DropoutButton timeSpan={ timeSpan } handler={ handler }/>
                </div>
    );
  }else{
     /*this.time=14; -> das muss anders gemacht werden!
     console.log("timeRange(): Time back to 14 - Dashboard");*/
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
   values:  [],
   labels: [],
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
    this.getData(timeSpan.get());
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

  calculateCustomRange(fromDate, toDate){
    let oneDay=24*60*60*1000;
    return Math.round(Math.abs((fromDate.getTime() - toDate.getTime())/(oneDay)));
  }

  getData(range){
    console.log("getData(): aufgerufen");
    if(range==="Custom"){
      console.log("getData(): Custom erkannt");
      console.log("getData(): 1.Tag: " + timeSpan.getCustomDayFrom());
      console.log("getData(): 2.Tag: " + timeSpan.getCustomDayTo());
      range = this.calculateCustomRange(timeSpan.getCustomDayFrom(), timeSpan.getCustomDayTo());
      console.log("getData(): berechnete Range -> " + range);
      this.getCustomData(this.dayTo, range);
    }else{
      console.log("getData(): Range erkannt ->" + range);
      this.getCustomData(new Date(), range);

    }


/*
    const sensorRef=ref.child('/erays/'+ this.getEray() + '/' + this.props.sensor + '/kw0/0_00_0/werte');
    const sensorRef2=ref.child('/erays/'+ this.getEray() + '/' + this.props.sensor + '/kw0/0_00_2/werte');
    let labels=this.state.labels;
    let values=this.state.values;
    let tm=null;
    sensorRef.on('child_added', (snapshot) => {
        labels.push(snapshot.val().timestamp);
        values.push(snapshot.val().value);

        if(tm) clearTimeout(tm);
        tm = setTimeout(() => this.setState({ 'labels': labels, 'values': values, stamp: new Date().getTime(), }), 25);
    });
    sensorRef2.on('child_added', (snapshot) => {
        labels.push(snapshot.val().timestamp);
        values.push(snapshot.val().value);

        if(tm) clearTimeout(tm);
        tm = setTimeout(() => this.setState({ 'labels': labels, 'values': values, stamp: new Date().getTime(), }), 25);
    });*/
  }

  getCustomData(toDay, range){
    console.log("getCustomData(): aufgerufen");
    console.log("getCustomData(): letzterTag ->" + toDay);
    console.log("getCustomData(): Range ->" + range);
    let day=toDay;
    let i=range;
    if(i<4){

      let labels=[];
      let values=[];
      while(i>0){
        console.log("getCustomData(): while -> " + i + ", Range: " + range);
        let month = day.getMonth()+1;
        const sensorRef=ref.child('/erays/eray2/'+this.props.sensor+'/'+day.getFullYear()+'/'+month+'/'+day.getDate()+'/werte');

        let labels2=[];
        let values2=[];

        let tm=null;
        sensorRef.on('child_added', (snapshot) => {

            labels2.push(snapshot.val().date+"_"+snapshot.val().timestamp);
            values2.push(snapshot.val().value);
            console.log("sensorRef");
            //this.setState({'labels':labels, 'values': values});
            /*if(tm) clearTimeout(tm);
            tm = setTimeout(() => this.setState({ 'labels': labels, 'values': values, stamp: new Date().getTime(), }), 50);*/
        });
        labels2.reverse();
        labels=labels.concat(labels2);
        values2.reverse();
        values=values.concat(values2);
        //this.setState({ 'values': values, 'labels': labels }, console.log(this.state));
        day=this.calculateNewDate(day);
        i--;
      }

      labels.reverse();
      values.reverse();
      this.setState({ 'values': values, 'labels': labels });
      console.log(values);
    }
  }

  calculateNewDate(day){
    console.log("calculateNewDate(): aufgerufen");
    if(day.getDate()===1){
      console.log("calculateNewDate(): switch");
      switch(day.getMonth()) {
        case 0 :
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
          day.setDate(30); //TODO: Das muss hier später zu "31" geändert werden, die Datenbank enthält aber zur Zeit nur Werte bis "30".
          break;
        case 2 :
          day.setDate(28);
          break;
        default :
          day.setDate(30);
          break;
      }
      if(day.getMonth()===0){
        day.setFullYear(day.getFullYear()-1);
        day.setMonth(11);
      }else{
        day.setMonth(day.getMonth()-1);
      }
    }else{
      day.setDate(day.getDate()-1);
    }
    console.log("calculateNewDate(): neuer Tag: " + day);
    console.log("calculateNewDate(): State: " + timeSpan.getCustomDayTo());
    return day;
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
