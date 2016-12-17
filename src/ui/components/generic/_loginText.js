import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'; 
import { login, logout } from '../../../api/Auth/_auth';
import Dialog from 'material-ui/Dialog';




class LoginText extends React.Component {

  constructor(props){
   super(props);
   this.state={
      Username: '',
      Password: '',
      loading:true,
      userError: '',
      passwordError: '',
   };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleError = this.handleError.bind(this);
    }

  onNameChangeHandler(e){
    this.setState({Username: e.target.value});
  }

  onPasswordChangeHandler(e){
    this.setState({Password: e.target.value});
  }
  

  handleSubmit = (e) => {
    
    e.preventDefault();
    login(this.state.Username, this.state.Password).catch(
      (error)=>{this.handleError(error)});
    
  }

  handleError(error){
    var errorCode = error.code;

      if(errorCode === 'auth/user-not-found')
         this.setState({userError: 'Account wurde nicht gefunden'});
      else if(errorCode === 'auth/user-disabled')
          this.setState({userError: 'Account wurde stillgelegt'});
      else if(errorCode === 'auth/invalid-email')
          this.setState({userError: 'Ungültige E-Mail Adresse'});
      else if(errorCode === 'auth/wrong-password')
          this.setState({passwordError: 'Ungültiges Passwort'});
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
                    errorText={this.state.userError}
                    value={this.state.Username} 
                    onChange={this.onNameChangeHandler}/>
        <br></br>
        
        <TextField  hintText="Password" 
                    errorText={this.state.passwordError}
                    type="password"
                    value={this.state.Password} 
                    onChange={this.onPasswordChangeHandler}/>


        <RaisedButton label="Login" onClick={this.handleSubmit}/>
        <br></br>
        <RaisedButton label="Create Account" 
                      containerElement={<Link to="/dashboard" />}/>
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
