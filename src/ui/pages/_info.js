import React, { Component } from 'react';
import { firebaseAuth } from '../../api/Auth/_constants';
import { ref } from '../../api/Auth/_constants';
import { observable, autorun } from 'mobx';

function getInfo(info) {

    /*ref.child('/erays/'+this.eray+'/info/'+info)
    .on('value',(snapshot) =>{
      result = snapshot.val();
      console.log(snapshot.val());
    });*/

  return <h5>Für diesen Wert gibt es noch keine Informationen</h5>;
}

class InfoPage extends Component {

  @observable eray = "";
	constructor(props){
		super(props);
		ref.child('/users/'+firebaseAuth().currentUser.uid+'/erays/eray1')
		.on('value',(snapshot) =>{
			this.eray = snapshot.val();
			console.log(snapshot.val());
		});
		autorun(()=>{console.log(this.eray)});
  }


  render() {
    return (

      <div id="container">
        <h1>Das ist eine Informationsseite</h1>
        <h2>Hier gibt es demnächst Informationen zum e.Ray, wie zum Beispiel der Standort, Foto und Datum der Inbetriebnahme.</h2>
        <div id="row">
          <div id="col-5">
            <h4>Standort: </h4>
          </div>
          <div id="col-3">
            { getInfo("bla") }
          </div>

        </div>

      </div>
    );
  }
}

export default InfoPage;
