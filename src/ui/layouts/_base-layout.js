import React from 'react';
import { Link } from 'react-router';
import { Header, Footer } from '../components/generic';

const BaseLayout = ({children}) => (
  <div>
    <Header />
    <div>I am the baselayout header with <Link to="/dashboard">a Link</Link> to the dashboard</div>
    {children}
    <div>I am the footer</div>
    <Footer />
  </div>
);

export default BaseLayout;
