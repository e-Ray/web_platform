import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { ref } from '../../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


@observer
class DashboardSensor extends Component {
  @observable daten = [];
  @observable labels = [];
  @observable yearsSeen = 0;

  constructor(props) {
    super(props);

    ref.child('/erays/eray2/'+this.props.sensor+'/').on('child_added',(daySnapshot) =>{

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

        this.yearsSeen++;

    });

  }
@action
  getData(){

    let range = 14;


    if (true){
      console.log(this.daten.peek());
    return {
      labels: this.labels.peek().slice(this.labels.peek().length-15,this.labels.peek().length-1),
      values: this.daten.peek().slice(this.daten.peek().length-15,this.daten.peek().length-1)
    };
  }
  }



	render() {
    if (this.yearsSeen>0){
		return(

       <div id="col-1">
				   <Line redraw data={ {
            labels: this.getData().labels,
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
          data: this.getData().values
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


export default DashboardSensor;
