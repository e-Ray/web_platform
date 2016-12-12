import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'; 


class LoginText extends React.Component {

  constructor(props){
   super(props);
   this.state={
      Username: '',
      Password: ''
   };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
  }

  onNameChangeHandler(e){
    this.setState({Username: e.target.value});
  }

  onPasswordChangeHandler(e){
    this.setState({Password: e.target.value});
  }

  render() {
    return (
      <div>   
        <TextField hintText="Username" value={this.state.Username} onChange={this.onNameChangeHandler}/>
        <br></br>
        <TextField hintText="Password" value={this.state.Password} onChange={this.onPasswordChangeHandler}/>
        <RaisedButton label="Login" />
        <br></br>
        <RaisedButton label="Create Account" containerElement={<Link to="Dashboard"/>}/>
        <h1>Username: {this.state.Username}</h1>
        <h2>Password: {this.state.Password}</h2>
      </div>
      )
  }

}

export default LoginText;
