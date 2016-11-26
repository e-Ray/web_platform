import React from 'react';
import { Link } from 'react-router';


const BaseLayout = ({children}) => (
  <div>
    <div>I am the baselayout header with <Link to="/dashboard">a Link</Link> to the dashboard</div>
    {children}
   
    <div>I am the footer</div>
  </div>
);

export default BaseLayout;
