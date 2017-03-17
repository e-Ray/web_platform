import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { ref } from '../../../api/Auth/_constants';
import { observer } from 'mobx-react';
import Loader from 'react-loader';
import { observable, action } from 'mobx';
import moment from 'moment';


@observer
class Chart extends Component {
  @observable daten = [];
  @observable labels = [];
  @observable daysSeen = 0;
  
  constructor(props) {
    super(props);
    this.state={
      range: this.props.range,
      sensor: this.props.sensor
    };


  }
  componentDidMount(){
    this.getData();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.range !== this.props.range){
      this.daysSeen=0;
      this.getData();
    }
  }

@action
  getData(){
    this.daysSeen = 0;
    this.daten.clear();
    this.labels.clear();
    
    let range = this.props.range;
    let iterator = new Date();
    iterator.setDate(this.props.date.getDate()-range+1);

    while(range > 0){

      ref.child('/erays/'+this.props.eray+'/'+this.props.sensor+moment(iterator).format("/YYYY_M_D/"))
        .once('value',(daySnapshot) =>{

          
          if(this.props.range >= 7){
          let values = [];
          let label = '';

          daySnapshot.forEach((valueSnapshot) =>{
              values.push(valueSnapshot.val().value);
              let date = valueSnapshot.val().date.split("_");
              console.log(moment(valueSnapshot.val().date).isValid());
              label =  date[1]+'/'+date[2]+'/'+date[0];
          });

          let total = 0;
          for (let i = 0; i<values.length; i++){
              total += values[i];
          }
          if (total !== 0){
          this.daten.push((total/values.length));
          this.labels.push(label);
          };
          } else {
            daySnapshot.forEach((valueSnapshot) =>{
              this.daten.push(valueSnapshot.val().value);
              let date = valueSnapshot.val().date.split("_");
              let time = valueSnapshot.val().timestamp.split("_");
              this.labels.push( date[1]+'/'+date[2]+'/'+date[0]+ '   ' + time[0]+':'+time[1]);

          });
          }

          this.daysSeen++;
         
      });
      iterator.setDate(iterator.getDate()+1);
      range--;
      this.daysSeen++;
    };

  }



	render() {

    if (this.daysSeen === ((this.props.range)*2)){
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
          }} 
          width={ this.props.width } height={ this.props.height } key={Math.random()}
            options={ { maintainAspectRatio: false, responsive: true, legend: { display: false, }, yAxes: [{label: "Label"}] } } />
           
        </div>
		);


    }

    if(this.props.mode === "dashboard"){
      return <h6>Loading ...</h6>
    }
    return <div><Loader loaded={false}/></div>

	}
}


export default Chart;