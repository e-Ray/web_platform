import React, { Component } from 'react';
import { Match, BrowserRouter, Miss, Redirect } from 'react-router';
import Login from './_loginPage';
import Dashboard from './_dashboard';
import PERF from './_detailPagePerf';
import RAIN from './_detailPageRain';
import RPM from './_detailPageRpm';
import TEMP from './_detailPageTemp';
import WTEMP from './_detailPageWaterTemp';
import WDIR from './_detailPageWindDir';
import WSPEED from './_detailPageWindSpeed';
import WL from './_detailPageWL';
import InfoPage from './_info';
import { firebaseAuth } from '../../api/Auth/_constants';
import Loader from 'react-loader';
import Appbar from '../components/generic/_bar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HelpPage from './_help';
import { ref } from '../../api/Auth/_constants';


injectTapEventPlugin();


function MatchWhenAuthed({ component: Component, authed, ...rest }) {
  return (
    <Match
      {...rest}
      render={props => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  );
}

function MatchWhenUnauthed({ component: Component, authed, ...rest }) {
  return (
    <Match
      {...rest}
      render={props => authed === false
        ? <Component {...props} />
        : <Redirect to="/dashboard" />}
    />
  );
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
    };
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        ref.child(`/users/${firebaseAuth().currentUser.uid}/info/`)
          .on('value', (snapshot) => {
            this.setState({
              authed: true,
              loading: false,
              admin: snapshot.val().admin,
            });
          });
      } else {
        this.setState({
          loading: false,
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.state.loading === true ? <Loader loaded={false} /> : (
      <BrowserRouter>
        {({ router }) => (
          <div>


            <div id="baseLayout">
              {this.state.authed
                      ? <Appbar admin={this.state.admin} /> : <div />
                      }
            </div>


            <div className="container">
              <div className="row">
                <MatchWhenUnauthed authed={this.state.authed} pattern="/" component={Login} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/dashboard" component={Dashboard} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPagePerf" component={PERF} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageRain" component={RAIN} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageRpm" component={RPM} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageTemp" component={TEMP} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageWaterTemp" component={WTEMP} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageWindDir" component={WDIR} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageWindSpeed" component={WSPEED} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/detailPageWL" component={WL} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/InfoPage" component={InfoPage} />
                <MatchWhenAuthed authed={this.state.authed} pattern="/HelpPage" component={HelpPage} />
                <Miss render={() => <h3>No Match</h3>} />
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }

}
