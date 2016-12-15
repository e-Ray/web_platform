import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { firebaseAuth } from '../../api/Auth/_constants';

import {
	BaseLayout,
} from '../../ui/layouts';

import {
	Home,
	Dashboard,
	DetailPageWL,
	DetailPagePH,
	LoginPage,
	CreateAccount
} from '../../ui/pages';

function requireAuth(nextState, replace){
	if(!firebaseAuth().currentUser){
		replace({
			pathname: "/",
			state: { nextPathname: nextState.location.pathname}
		})
	}
}
const Routes = () => (
	<Router history={ browserHistory }>
		<Route path="/" component={LoginPage}/>
		<Route path="/CreateAccount" component={CreateAccount} />

		<Route path="/" component={BaseLayout}>
			<Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
				<Route path="/DetailPageWL" component={DetailPageWL} onEnter={requireAuth}/>
				<Route path="/DetailPagePH" component={DetailPagePH} onEnter={requireAuth}/>
      <Route path="*"/>{/* component={NotFound} some page not found component*/}
    </Route>
	</Router>
);

export default Routes;
