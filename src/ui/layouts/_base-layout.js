import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarMenu from '../components/generic/_bar.js';
injectTapEventPlugin();




const BaseLayout = ({children}) => (
  <div>
   
    <AppBarMenu /> 
    {children}
   
    <div>I am the footer</div>
  </div>
);

export default BaseLayout;
