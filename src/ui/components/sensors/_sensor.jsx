import React, { Component } from 'react';
import { DropoutButton, CustomDatePicker } from '../generic';
import { Line } from 'react-chartjs-2';
import { ref } from '../../../api/Auth/_constants';







function timeRange(mode, handler, customHandler){
  if (mode === "detail"){
    return (  
      <div id="timeButton">
        <DropoutButton handler={ handler } customHandler={ customHandler }/>
      </div>
    );
  } else {
     return;
  }
}
function rangePicker(mode, custom, handler){
  if (mode === "detail" && custom){
    return (
        <div>
         <CustomDatePicker handler={ handler }/>
        </div>
      );
  } else {
    return;
  }
}




class Sensor extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
     mode: props.mode,
     custom: false,
     range: 14,
     sensor: props.sensor,
     ready: false,
     dayTo: new Date(),
     dayFrom: new Date()
    };
    this.handler = this.handler.bind(this);
    this.customHandler = this.customHandler.bind(this);
  }

  componentWillMount() {
    if (this.props.mode === "dashboard"){
      this.setState({custom: false, range: 20 });

    }
    if (this.props.mode === "detail")
      this.setState({custom: false, range: 200});
  }
  componentDidMount() {
    this.setState({custom:false, range: 14});
  }

  
  componentWillUnmount() {
    console.log('unmount:'+this.props.sensor);
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

  getData(_callback){

    
    let dayDiff = 14;
    let iterator;
    let labels = [];
    let values =[];
    let i = 0;
    let daten;
    
    if (this.state.custom){
      
      
      dayDiff = Math.floor((this.state.dayTo-this.state.dayFrom)/(1000*60*60*24));
      iterator = this.state.dayFrom;
    } else {
      dayDiff = this.state.range;
      iterator = new Date();
      iterator.setDate(iterator.getDate()-dayDiff);
    //  console.log(iterator.getFullYear()+'.'+(iterator.getMonth()+1)+'.'+iterator.getDate()+'\n')
  
    }
    while (i<=dayDiff){
      
      let value = [];
      let sensorRef = ref.child('/erays/eray2/'+this.props.sensor+'/'+iterator.getFullYear()+'/'+(iterator.getMonth()+1)+'/'+iterator.getDate()+'/werte'); 
     // console.log(iterator.getFullYear()+'.'+(iterator.getMonth()+1)+'.'+iterator.getDate()+'\n');
      if (dayDiff>=7)labels.push(iterator.getFullYear()+"."+(iterator.getMonth()+1)+"."+iterator.getDate());
      sensorRef.on('child_added', (snapshot) => {

          if (dayDiff>=7){ 
            value.push(snapshot.val().value);
           //console.log(snapshot.val().value);
          };
          if (dayDiff<7){
            values.push(snapshot.val().value);
            
            labels.push(snapshot.val().date + "." + snapshot.val().timestamp);
          }
         //  console.log(iterator.getFullYear()+"."+(iterator.getMonth()+1)+"."+iterator.getDate()+":"+snapshot.val().value);
            
      });
      if (dayDiff>=7){
      let total = 0;
      for (let i = 0; i<value.length; i++){
              total += value[i];
      }
      values.push((total/value.length));
      //console.log(total);
      }
      i++;
      iterator.setDate(iterator.getDate()+1);
    }
     // this.setState({labels: labels, values: values});
     // console.log(values);
    daten = {
      labels: labels,
      datasets: [
        {
          label: this.state.sensor,
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
    _callback();
   
    return daten;

  }

  handler(range){
      this.setState({custom: false, range: range });
  }
  customHandler(dayTo, dayFrom) {
      this.setState({custom: true, dayTo: dayTo, dayFrom: dayFrom });
  }


  render() {

    return (
      <div>
        <h1>{ this.state.range }</h1>
        
        <div id="col-2-right">
          { timeRange(this.props.mode, this.handler, this.customHandler) }
        </div>
          { rangePicker(this.props.mode, this.state.custom, this.customHandler) }
        <div id="col-1">
         <Line redraw data={ this.getData(function() {console.log('got data');}, this.state.range) } width={ this.props.width } height={ this.props.height } 
              options={ { maintainAspectRatio: false, responsive: true, legend: { display: false, } } } />
          
        </div>
      </div>
		);
  }
}


export default Sensor;
