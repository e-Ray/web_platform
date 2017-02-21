import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './main.css';


function test() {
  return (


    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(


  		test(),

  document.getElementById('root'),

);
