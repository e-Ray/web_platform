import React, { Component } from 'react';
import { firebaseAuth } from '../../api/Auth/_constants';
import { ref } from '../../api/Auth/_constants';
import Loader from 'react-loader';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class InfoPage extends Component {

  @observable ort = "";
  @observable eray = "";
  @observable inbetriebnahme = "";
	constructor(props){
		super(props);
		ref.child('/users/'+firebaseAuth().currentUser.uid+'/erays/')
		  .on('value',(snapshot) =>{

			let eray = snapshot.val().eray1;
      ref.child('erays/eraylist/'+eray+'/').on('value',(snapshot) =>{
        this.ort = snapshot.val().location;
        this.inbetriebnahme = snapshot.val().startDate;
      });

		});
  }


  render() {

    if(this.ort !== ""){
    return (

      <div id="container">
        <h1>Das ist eine Informationsseite</h1>
        <h2>Hier gibt es demnächst Informationen zum e.Ray, wie zum Beispiel der Standort, Foto und Datum der Inbetriebnahme.</h2>
        <div id="row">
          <div id="col-3">
            <h4>Standort: {this.ort} </h4>
            <h4>Inbetriebnahme: {this.inbetriebnahme} </h4>
          </div>
          <div id="col-5"/>
          <div id="col-3-right">
            <img src={require('../../images/eray-info.jpg')} alt=""/>
          </div>
        </div>

      </div>
    );
  }
  return <Loader loaded={false}/>;
  }
}

export default InfoPage;
