import React, { Component } from 'react'
import { Match, BrowserRouter, Miss, Redirect } from 'react-router'
import Login from './_loginPage'
import createAccount from './_createAccount'
import Dashboard from './_dashboard'
import Home from './_home'
import PH from './_detailPagePH'
import WL from './_detailPageWL'
import { firebaseAuth } from '../../api/Auth/_constants'
import Loader from 'react-loader';
import Appbar from '../components/generic/_bar'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();


function MatchWhenAuthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function MatchWhenUnauthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <Loader loaded={false}/> : (
      <BrowserRouter>
        {({router}) => (
          <div>


            <div id="baseLayout">
                    {this.state.authed
                      ? <Appbar />: <div></div>
                      }
            </div>   



            <div className="container">
              <div className="row">
          		<MatchWhenUnauthed authed={this.state.authed} pattern='/notloggedin' component={Home}/>
                <MatchWhenUnauthed authed={this.state.authed} pattern='/' component={Login} />
                <MatchWhenUnauthed authed={this.state.authed} pattern='/createAccount' component={createAccount} />
                <MatchWhenAuthed authed={this.state.authed} pattern='/dashboard' component={Dashboard} />
                <MatchWhenAuthed authed={this.state.authed} pattern='/detailPagePH' component={PH} />
                <MatchWhenAuthed authed={this.state.authed} pattern='/detailPageWL' component={WL} />
                <Miss render={() => <h3>No Match</h3>} />
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }

}

