import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { PHVal, WaterLevel} from '../components/sensors';
import { Link } from 'react-router';





class Dashboard extends Component {


	
	render() {

		
		return(
			<div>		
				<RaisedButton label="Wasserstand" primary={true} containerElement={<Link to="/DetailPageWL" />} />
        		<WaterLevel  />
        		<RaisedButton label="PH-Wert" primary={true} containerElement={<Link to="/DetailPagePH" />} />
        		<PHVal />
			</div>
		);

	}
}



export default Dashboard;
