import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuExampleIcons from '../components/generic/_menu';
import AppBarExampleIcon from '../components/generic/_bar';


const BaseLayout = ({children}) => (
  <div>
    <MuiThemeProvider>
    <AppBarExampleIcon/>
  	</MuiThemeProvider>
  	<MuiThemeProvider>
    <MenuExampleIcons/>
  </MuiThemeProvider>
    {children}
   
    <div>I am the footer</div>
  </div>
);

export default BaseLayout;
