import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './main.css'


function app(){
	return (

		<MuiThemeProvider>
		<App />
		</MuiThemeProvider>
	);
}

ReactDOM.render(
	
  		app(),
  	
  document.getElementById('root')
);
