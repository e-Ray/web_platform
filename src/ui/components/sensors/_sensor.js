import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { ref } from '../../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';


@observer
class Sensor extends Component {
  @observable daten = [];
  @observable labels = [];
  @observable daysSeen = 0;
  constructor(props) {
    super(props);
    this.state={
      date: this.props.date,
      range: this.props.range,
      sensor: this.props.sensor
    };

   // autorun(()=> console.log(this.daysSeen));

//   
    //}
  }
  componentDidMount(){
    this.getData();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.range !== this.props.range){
    this.daten=[];
    this.labels=[];
    this.daysSeen=0;
    this.getData();
    }
  }

@action
  getData(){
    
    let range = this.props.range;
    let iterator = new Date();
    iterator.setDate(this.props.date.getDate()-range);
    
    while(range > 0){
      
      ref.child('/erays/eray2/'+this.props.sensor+'/'+iterator.getFullYear()+'_'+
        (iterator.getMonth()+1)+'_'+iterator.getDate()+'/')
        .on('value',(daySnapshot) =>{
          
          if(this.props.range >= 7){
          let values = [];
          let label = '';
          daySnapshot.forEach((werteSnapshot) =>{
              values.push(werteSnapshot.val().value);
              label= werteSnapshot.val().date;
          });
        
          let total = 0;
          for (let i = 0; i<values.length; i++){
              total += values[i];
          }
          this.daten.push((total/values.length));
          this.labels.push(label);
          } else {
            daySnapshot.forEach((werteSnapshot) =>{
              this.daten.push(werteSnapshot.val().value);
              this.labels.push( werteSnapshot.val().date + '_' +werteSnapshot.val().timestamp);
          });
          }

          this.daysSeen++;
      });
      iterator.setDate(iterator.getDate()+1);
      
       
      range--;
    };
    
  }



	render() {

    if (this.daysSeen > (this.props.range-1)){
		return(

       <div id="col-1">
				   <Line redraw data={ {
            labels: this.labels.slice(),
            datasets: [
        {
          label: this.props.sensor,
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
          data: this.daten.slice()
        }
      ]
    }
           } width={ this.props.width } height={ this.props.height }
              options={ { maintainAspectRatio: false, responsive: true, legend: { display: false, } } } />
        </div>
		);


    }
    return <div>Loading ...</div>

	}
}


export default Sensor;
