import React from 'react';
import { Routes } from './environment/router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
	<MuiThemeProvider>
  		<Routes />
  	</MuiThemeProvider> 
);



export default App;
