import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import {
	BaseLayout,
} from '../../ui/layouts';

import {
	Home,
	Dashboard,
	DetailPageWL,
	DetailPagePH,
	LoginPage
} from '../../ui/pages';


const Routes = () => (
	<Router history={ browserHistory }>
		<Route path="/" component={LoginPage}/>
		<Route path="/" component={BaseLayout}>
			<Route path="/dashboard" component={Dashboard}/>
				<Route path="/DetailPageWL" component={DetailPageWL}/>
				<Route path="/DetailPagePH" component={DetailPagePH}/>
      <Route path="*"/>{/* component={NotFound} some page not found component*/}
    </Route>
	</Router>
);

export default Routes;
