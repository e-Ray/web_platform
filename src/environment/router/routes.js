import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../../ui/components/generic/App/App';
import Dashboard from '../../ui/components/generic/Dashboard/Dashboard';

const Routes = () => (
	<Router history={ browserHistory }>
		<Route path="/" component={App}/>
		<Route path="/Dashboard" component={Dashboard}/>
	</Router>
);

export default Routes;
