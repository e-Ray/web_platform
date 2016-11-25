import React, { Component } from 'react';
import { browserHistory} from 'react-router';
import Routes from './environment/router/routes';

class App extends Component {
  render() {
    return (
      <Routes history={browserHistory} />
    );
  }
}

export default App;
