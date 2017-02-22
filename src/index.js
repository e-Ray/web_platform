import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './main.css';
ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),

);
