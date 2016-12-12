import React from 'react';
import Dialog from 'material-ui/Dialog';

import { LoginText } from '../components/generic';

class LoginPage extends React.Component{



	render() {

		return(	
			<div>
			<Dialog
         	 title="Login"
         	 modal={true}
         	 open={true}
        	>	
			<LoginText />
			</Dialog>
			</div>
	
);

}
}
export default LoginPage;