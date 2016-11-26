import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import {
	BaseLayout,
} from '../../ui/layouts';

import {
	Home,
	Dashboard,
} from '../../ui/pages';


const Routes = () => (
	<Router history={ browserHistory }>
		<Route path="/" component={BaseLayout}>
			<IndexRoute component={Home}/>
			<Route path="/dashboard" component={Dashboard}/>
      <Route path="*"/>{/* component={NotFound} some page not found component*/}
    </Route>
	</Router>
);

export default Routes;
