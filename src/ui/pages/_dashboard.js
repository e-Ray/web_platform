import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Chart } from '../components/generic';
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
    if (this.isAdmin !== "true")
    ref.child('/users/'+firebaseAuth().currentUser.uid+'/erays/')
    .on('value',(snapshot) =>{
      this.eray = snapshot.val().eray1;
    });
  }
  render() {

    if (this.isAdmin !== "true" && this.eray !== ""){
    return (

      <div id="container">

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Performance (watt)" fullWidth primary containerElement={<Link to="/DetailPagePerf" />} />
            </div>
            <Chart sensor="performance" eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Water level (m)" fullWidth primary containerElement={<Link to="/DetailPageWL" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="waterlevel" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Rpm (velocity)" fullWidth primary containerElement={<Link to="/DetailPageRpm" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="rpm" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Water temperature (°C)" fullWidth primary containerElement={<Link to="/DetailPageWaterTemp" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="watertemp" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Air temperature (°C)" fullWidth primary containerElement={<Link to="/DetailPageTemp" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="temp" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Rainfall (mm/m²)" fullWidth primary containerElement={<Link to="/DetailPageRain" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="rain" />
          </div>
        </div>

        <div id="row">
          <div id="col-2-left">
            <div id="buttonHeader">
              <RaisedButton label="Wind speed (m/sec)" fullWidth primary containerElement={<Link to="/DetailPageWindSpeed" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="windspeed" />
          </div>
          <div id="col-2-right">
            <div id="buttonHeader">
              <RaisedButton label="Wind direction" fullWidth primary containerElement={<Link to="/DetailPageWindDir" />} />
            </div>
            <Chart eray={this.eray} width={950} mode={'dashboard'} date={new Date()} range={14} height={300} sensor="winddir" />
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
