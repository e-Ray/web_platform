import React from 'react';
import { Routes } from './environment/router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './main.css'


const App = () => (
	<MuiThemeProvider>
  		<Routes />
  	</MuiThemeProvider> 
);



export default App;
