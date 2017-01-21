import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { ref } from '../../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';


@observer
class PHVal extends Component {
  @observable daten = {};

  constructor(props) {
    super(props);
    this.state={
      data: false
    }
    ref.child('/erays/eray2/'+this.props.sensor+'/'+
      this.props.date.getFullYear()+'/'+(this.props.date.getMonth()+1)+
      '/'+this.props.date.getDay()+'/werte/').on('child_added', (snapshot) =>{
        this.daten = snapshot.val();
        this.setState({data: true});
    });
    
  }
@action
  getData(){
    let labels = [];
    let values = [];
    let range = 14;

   
    if (this.state.data){
      values.push(this.daten.value);
      labels.push(this.daten.date + "-" + this.daten.timestamp);
    return {
      labels: labels,
      values: values
    };
  }
  }


	render() {
    if (this.state.data){
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


export default PHVal;
