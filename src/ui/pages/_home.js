import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const Home = () => (

  <div>

    <h1>Not logged in</h1>
    <FlatButton label="Log in" containerElement={<Link to=""/>}/>

  </div>
);

export default Home;
