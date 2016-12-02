import React from 'react';
import BarExample from '../components/charts/barChart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuExampleIcons from '../components/generic/_menu';
import AppBarExampleIcon from '../components/generic/_bar';

const Home = () => (

  <div>
  <MuiThemeProvider>
    <AppBarExampleIcon/>
  </MuiThemeProvider>
  <MuiThemeProvider>
    <MenuExampleIcons/>
  </MuiThemeProvider>
  	<BarExample />
  </div>
);

export default Home;
