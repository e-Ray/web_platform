import React from 'react';
import { Sensor } from '../sensors';
import { DropoutButton, CustomDatePicker } from '../generic';
import { observer } from 'mobx-react';
import { firebaseAuth } from '../../../api/Auth/_constants'; 
import { ref } from '../../../api/Auth/_constants';
import Loader from 'react-loader';
import { observable } from 'mobx';



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

function rangePicker(dayTo, dayFrom, custom, handler){
  if (custom){
    return (
        <div>
         <CustomDatePicker dayTo={dayTo} dayFrom={dayFrom} handler={ handler }/>
        </div>
      );
  } else {
    return;
  }
}

@observer
class DetailPage extends React.Component {

  @observable eray = "";
  constructor(props) {
    super(props);
    this.state = {
     custom: false,
     range: 14,
     sensor: props.sensor,
     dayTo: new Date(),
     dayFrom: new Date()
    };
  this.handler = this.handler.bind(this);
    this.customHandler = this.customHandler.bind(this);
  };
  componentDidMount(){
    this.getMainEray();
  }

  getMainEray(){
    let query = ref.child('users/'+firebaseAuth().currentUser.uid+'/erays/');

      query.once("value")
        .then((snapshot)=>{
          console.log(snapshot.val().eray1);
            this.eray = snapshot.val().eray1;
         
        });
  }

  handler(range) {
      this.setState({custom: false, range: range });
  }

  customHandler(dayTo, dayFrom) {
  	let dayTwo = new Date();
  	dayTwo.setDate(dayTo.getDate()+1);
      this.setState({custom: true, dayTo: dayTo, dayFrom: dayFrom, range: Math.abs(dayTwo.getDate()-dayFrom.getDate()) });
      console.log(this.state.range);
  }
  render() {
    if(this.eray !== ""){
    return (
    <div>
    	<div id="col-2-right">
          { timeRange(this.props.mode, this.handler, this.customHandler) }
        </div>
      <div id="row">
          { rangePicker(this.state.dayTo, this.state.dayFrom, this.state.custom, this.customHandler) }
      </div>
      <div id="detailPage">
        <Sensor date={ this.state.dayTo } eray={ this.eray } range={ this.state.range }  sensor={ this.props.sensor }
        	width={1500} height={700}/>
      </div>
     </div>
    );
    }
    return <Loader loading={false}/>;
  }
}

export default DetailPage;
