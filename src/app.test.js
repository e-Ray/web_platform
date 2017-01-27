import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, div);
});
