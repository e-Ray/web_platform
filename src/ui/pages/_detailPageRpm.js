import React, { Component } from 'react';
import { DetailPage } from '../components/generic';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ref } from '../../api/Auth/_constants';
import { firebaseAuth } from '../../api/Auth/_constants'; 



@observer
class DetailPageRpm extends Component {
@observable eray = "";
  constructor(props){
    super(props);

    let query = ref.child('users/'+firebaseAuth().currentUser.uid+'/erays/');

      query.once("value")
        .then((snapshot)=>{
          console.log(snapshot.val().eray1);
            this.eray = snapshot.val().eray1;
         
        });

  }
  render() {
    if(this.eray !== "")
    return (

      <div id="container">
        <div id="row">
          <div id="col-2-left">
            <h1 id="detailMode">Rpm (Velocity)</h1>
          </div>
          <DetailPage sensor="rpm" mode="detail" eray={this.eray}/>
        </div>
        <div id="row">
          <div id="col-1">
            <h3> Measurement unit: Rounds per minute </h3>
            <h3> If the interval is set to 7 or more days, the mean value of each day will be displayed. </h3>
          </div>
        </div>
      </div>
    );
  return <div></div>;
  }
}

export default DetailPageRpm;
