import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { PHVal, WaterLevel} from '../components/sensors';
import { Link } from 'react-router';


class Dashboard extends Component {



	render() {

		return(
			<div id="container">
			<div id="row">
					{/**<div class="col-2" id="graph_waterlevel">
						<div id="buttonHeader">
							{/**<RaisedButton label="Wasserstand" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWL" />} />}
						</div>
					{/**<WaterLevel  />}
					</div>

					<div class="col-2" id="graph_phval">
						<div id="buttonHeader">
        			{/**<RaisedButton label="PH-Wert" fullWidth={true} primary={true} containerElement={<Link to="/DetailPagePH" />} />}
						</div>
					{/**<PHVal />}
					</div>**/}
					<div id="col-2"><p>col-2</p></div>
					<div id="col-2"><p>col-2</p></div>
			</div>
			<div id="row">
					<div id="col-1"><p>col-1</p></div>
			</div>
			<div id="row">
					<div id="col-3"><p>col-3</p></div>
					<div id="col-3"><p>col-3</p></div>
					<div id="col-3"><p>col-3</p></div>
			</div>
			</div>
		);

	}
}



export default Dashboard;
