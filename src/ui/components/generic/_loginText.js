import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'; 
import { login, logout } from '../../../api/Auth/_auth';
import { firebaseAuth } from '../../../api/Auth/_constants';
import Dialog from 'material-ui/Dialog';
import { browserHistory } from 'react-router'
import Loader from 'react-loader';


class LoginText extends React.Component {

  constructor(props){
   super(props);
   this.state={
      Username: '',
      Password: '',
      loading:true,
   };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    }

  onNameChangeHandler(e){
    this.setState({Username: e.target.value});
  }

  onPasswordChangeHandler(e){
    this.setState({Password: e.target.value});
  }
  

  handleSubmit = (e) => {
    
    e.preventDefault();
    login(this.state.Username, this.state.Password);
    this.setState({loading: false});
    firebaseAuth().onAuthStateChanged(user => {
         if(user) {
          browserHistory.push('/dashboard');
          }else this.setState({loading: true});
    })
    
    
  }

  handleLogout = (e) => {
    logout();
    console.log('logout');
  }


  render() {
    return (
      <div> 

      <Dialog
           title="Login"
           modal={true}
           open={true}
          >   
  
        <TextField  hintText="Username" 
                    value={this.state.Username} 
                    onChange={this.onNameChangeHandler}/>
        <br></br>
        <Loader loaded={this.state.loading}/>
        <TextField  hintText="Password" 
                    type="password"
                    value={this.state.Password} 
                    onChange={this.onPasswordChangeHandler}/>

        <RaisedButton label="Login" onClick={this.handleSubmit}/>
        <br></br>
        <RaisedButton label="Create Account" 
                      containerElement={<Link to="CreateAccount" />}/>
        <br></br>
        <RaisedButton label="Log Out" onClick={this.handleLogout}/>
        <h1>Username: {this.state.Username}</h1>
        <h2>Password: {this.state.Password}</h2>
      </Dialog>
      
      </div>
      )
  }

}

export default LoginText;
