import React, { Component } from 'react';
import { DetailPage } from '../components/generic';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ref } from '../../api/Auth/_constants';
import { firebaseAuth } from '../../api/Auth/_constants'; 



@observer
class DetailPageWindDir extends Component {
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
            <h1 id="detailMode">Windrichtung</h1>
          </div>
          <DetailPage sensor="winddir" mode="detail" eray={this.eray}/>
        </div>
        <div id="row">
          <div id="col-1">
            <h3> Einheit: Windrichtung </h3>
            <h3> Wenn der Zeitraum auf dem Graphen 7 oder mehr Tage umfasst, wird der Durchschnittswert des jeweiligen Tages angezeigt. </h3>
          </div>
        </div>
      </div>
    );
  return <div></div>;
  }
}

export default DetailPageWindDir;
