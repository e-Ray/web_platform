import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { PHVal, WaterLevel} from '../components/sensors';
import { Link } from 'react-router';



class Dashboard extends Component {



	render() {

		return(

			<div id="container">

				<div id="row">
					<div id="col-2-left">
						<div id="buttonHeader">
							<RaisedButton label="Wasserstand" fullWidth={true} primary={true} containerElement={<Link to="/DetailPageWL" />} />
						</div>
						<WaterLevel  />
					</div>

					<div id="col-2-right">
						<div id="buttonHeader">
        			<RaisedButton label="PH-Wert" fullWidth={true} primary={true} containerElement={<Link to="/DetailPagePH" />} />
						</div>
						<PHVal />
					</div>
				</div>


			</div>
		);

	}
}



export default Dashboard;
