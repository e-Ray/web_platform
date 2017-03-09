import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Sensor } from '../components/sensors';
import { Link } from 'react-router';
import { firebaseAuth } from '../../api/Auth/_constants'; 
import { ref } from '../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import AdminDashboard from '../components/generic/_adminDashboard';

@observer
class Dashboard extends Component {
  @observable isAdmin = "";
  @observable eray = "";

  constructor(props){
    super(props);
    ref.child('/users/'+firebaseAuth().currentUser.uid+'/info/')
    .on('value',(snapshot) =>{
      this.isAdmin = snapshot.val().admin;
      });
    this.getMainEray();
  }
  getMainEray() {
    if (this.isAdmin === "false")
    ref.child('/users/'+firebaseAuth().currentUser.uid+'/erays/')
    .on('value',(snapshot) =>{
      this.eray = snapshot.val().eray1;
      });
  }
  render() {
   
    if (this.isAdmin === "false" && this.eray !== ""){
    return (

      <div id="container">

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Leistung (Watt)" fullWidth primary containerElement={<Link to="/DetailPagePerf" />} />
            </div>
            <Sensor sensor="performance" eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="WasserPegel" fullWidth primary containerElement={<Link to="/DetailPageWL" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="waterlevel" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Rpm (Geschwindigkeit)" fullWidth primary containerElement={<Link to="/DetailPageRpm" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="rpm" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Wassertemperatur" fullWidth primary containerElement={<Link to="/DetailPageWaterTemp" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="watertemp" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Lufttemperatur" fullWidth primary containerElement={<Link to="/DetailPageTemp" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="temp" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Niederschlagsmenge" fullWidth primary containerElement={<Link to="/DetailPageRain" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="rain" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Windgeschwindigkeit" fullWidth primary containerElement={<Link to="/DetailPageWindSpeed" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="windspeed" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Windrichtung" fullWidth primary containerElement={<Link to="/DetailPageWindDir" />} />
            </div>
            <Sensor eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="winddir" />
          </div>
        </div>

      </div>
    );
  };
  if (this.isAdmin === "true"){
    return <div><AdminDashboard/></div>;
  }
  return <div>Loading..</div>;
  }

}



export default Dashboard;
