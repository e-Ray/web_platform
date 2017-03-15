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
        <h1>My e.Ray</h1>
        <h2>This page gives you information about your e.Ray. You can view the installation site, a picture and the comissioning date.</h2>
        <div id="row">
          <div id="col-3">
            <h4>Installation site: {this.ort} </h4>
            <h4>Comissioning date: {this.inbetriebnahme} </h4>
          </div>
          <div id="col-5"/>
          <div id="col-3-right">
            <img src={require('../../images/eray-info.jpg')} role="presentation"/>
          </div>
        </div>

      </div>
    );
  }
  return <Loader loaded={false}/>;
  }
}

export default InfoPage;
