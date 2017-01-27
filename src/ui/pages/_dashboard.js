import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { DashboardSensor } from '../components/sensors';
import { Link } from 'react-router';
import { firebaseAuth } from '../../api/Auth/_constants'; 
import { ref } from '../../api/Auth/_constants';
import { observer } from 'mobx-react';
import { observable, action, autorun } from 'mobx';

@observer
class Dashboard extends Component {

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
		if(this.eray != ""){
		return(

			<div id="container">

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Leistung (Watt)" fullWidth={true} primary={true} containerElement={<Link to="/DetailPagePerf" />} />
						</div>
						<DashboardSensor sensor="performance" userEray={this.eray} width={950} height={300}/>
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="WasserPegel" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWL" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="waterlevel" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Rpm (Geschwindigkeit)" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageRpm" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="rpm" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="Wassertemperatur" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWaterTemp" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="watertemp" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Lufttemperatur" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageTemp" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="temp" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
							<RaisedButton label="Niederschlagsmenge" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageRain" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="rain" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Windgeschwindigkeit" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWindSpeed" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="windspeed" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
							<RaisedButton label="Windrichtung" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWindDir" />} />
						</div>
						<DashboardSensor userEray={this.eray} width={950} height={300} sensor="winddir" />
					</div>
				</div>

			</div>
		);
	}
	return <div>Loading ...</div>
	}
}



export default Dashboard;
