import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Sensor } from '../components/sensors';
import { Link } from 'react-router';



class Dashboard extends Component {



	render() {

		return(

			<div id="container">

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Leistung (Watt)" fullWidth={true} primary={true} containerElement={<Link to="/DetailPagePerf" />} />
						</div>
						<Sensor sensor="sensor1" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="WasserPegel" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWL" />} />
						</div>
						<Sensor sensor="sensor2" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Rpm (Geschwindigkeit)" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageRpm" />} />
						</div>
						<Sensor sensor="sensor3" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="Wassertemperatur" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWaterTemp" />} />
						</div>
						<Sensor sensor="sensor4" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Lufttemperatur" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageTemp" />} />
						</div>
						<Sensor sensor="sensor5" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
							<RaisedButton label="Niederschlagsmenge" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageRain" />} />
						</div>
						<Sensor sensor="sensor6" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Windgeschwindigkeit" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWindSpeed" />} />
						</div>
						<Sensor sensor="sensor7" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
							<RaisedButton label="Windrichtung" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWindDir" />} />
						</div>
						<Sensor sensor="sensor8" />
					</div>
				</div>

			</div>
		);

	}
}



export default Dashboard;
