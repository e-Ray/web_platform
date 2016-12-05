import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { PHVal, WaterLevel} from '../components/sensors';






class Dashboard extends Component {



	render() {


		return(
			<div>
				
				<RaisedButton label="Wasserstand" primary={true} href="/Dashboard/DetailPageWL" />
        <WaterLevel  />
        <RaisedButton label="PH-Wert" primary={true} href="/Dashboard/DetailPagePH" />
        <PHVal />


			</div>
		);

	}
}



export default Dashboard;
