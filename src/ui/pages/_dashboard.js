import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Sensor } from '../components/sensors';
import { Link } from 'react-router';
import { firebaseAuth } from '../../api/Auth/_constants'; 
import { ref } from '../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';

@observer
class Dashboard extends Component {
  @observable isAdmin = "";

  constructor(props){
    super(props);
    ref.child('/users/'+firebaseAuth().currentUser.uid+'/admin/')
      .on('value', (snapshot)=>{
        this.isAdmin = snapshot.val().admin;
      });
  }

  render() {

    return (

      <div id="container">

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Leistung (Watt)" fullWidth primary containerElement={<Link to="/DetailPagePerf" />} />
            </div>
            <Sensor sensor="performance" width={950} mode={'dashboard'} date={new Date()} range={14} height={300} />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="WasserPegel" fullWidth primary containerElement={<Link to="/DetailPageWL" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="waterlevel" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Rpm (Geschwindigkeit)" fullWidth primary containerElement={<Link to="/DetailPageRpm" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="rpm" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Wassertemperatur" fullWidth primary containerElement={<Link to="/DetailPageWaterTemp" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="watertemp" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Lufttemperatur" fullWidth primary containerElement={<Link to="/DetailPageTemp" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="temp" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Niederschlagsmenge" fullWidth primary containerElement={<Link to="/DetailPageRain" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="rain" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Windgeschwindigkeit" fullWidth primary containerElement={<Link to="/DetailPageWindSpeed" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="windspeed" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Windrichtung" fullWidth primary containerElement={<Link to="/DetailPageWindDir" />} />
            </div>
            <Sensor width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="winddir" />
          </div>
        </div>

      </div>
    );
  }

}



export default Dashboard;
