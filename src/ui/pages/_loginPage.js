import React from 'react';
import { firebaseAuth } from '../../api/Auth/_constants';
import { LoginText } from '../components/generic';

class LoginPage extends React.Component{



	render() {

		return(	
			<div>
			
			<LoginText user={firebaseAuth().currentUser}/>
			
			</div>
	
);

}
}
export default LoginPage;