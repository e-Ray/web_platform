import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Sensor, PHVal } from '../components/sensors';
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
						<PHVal sensor="performance" date={new Date()} width={950} height={300}/>
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="WasserPegel" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWL" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="waterlevel" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Rpm (Geschwindigkeit)" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageRpm" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="rpm" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="Wassertemperatur" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWaterTemp" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="watertemp" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Lufttemperatur" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageTemp" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="temp" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
							<RaisedButton label="Niederschlagsmenge" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageRain" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="rain" />
					</div>
				</div>

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Windgeschwindigkeit" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWindSpeed" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="windspeed" />
					</div>
					<div id="col-2-right">
						<div id="buttonHeader">
							<RaisedButton label="Windrichtung" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWindDir" />} />
						</div>
						<PHVal date={new Date()} width={950} height={300} sensor="winddir" />
					</div>
				</div>

			</div>
		);

	}
}



export default Dashboard;
