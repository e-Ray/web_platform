import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login, logout } from '../../../api/Auth/_auth';
import Dialog from 'material-ui/Dialog';





class LoginText extends React.Component {

  constructor(props){
   super(props);
   this.state={
      Username: this.props.userName,
      Password: this.props.password,
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
    this.setState({userError: '', passwordError: ''});
    login(this.state.Username, this.state.Password).catch(
      (error)=>{this.handleError(error)});


  }
  _handleSubmitForTests(){
    this.setState({userError: '', passwordError: ''});
    login(this.state.Username, this.state.Password).catch(
      (error)=>{this.handleError(error)});
  }





  handleError(error){
    var errorCode = error.code;

      if(errorCode === 'auth/user-not-found')
         this.setState({userError: 'Account not found'});
      else if(errorCode === 'auth/user-disabled')
          this.setState({userError: 'Account got closed down'});
      else if(errorCode === 'auth/invalid-email')
          this.setState({userError: 'Invalid e-mail address'});
      else if(errorCode === 'auth/wrong-password')
          this.setState({passwordError: 'Invalid password'});
  }
  handleLogout = (e) => {
    logout();

    console.log('logout');
  }


  render() {




    if(this.props.testing){
        return <a
          userName={this.state.Username}
          userError={this.state.userError}
          password={this.state.password}
          passwordError={this.state.passwordError}>
          </a>
    }else return(

      <div>

      <Dialog
           title="Login"

           modal={false}
           open={this.props.open}
           onRequestClose={this.props.close}
          >
      <form action={this.handleSubmit}>
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


        <br></br>
        <li>Testaccount: nutzerstudie@befragung.net : r1versense</li>
        <li>Admin Account: admintest@eray.com : 123456</li>
        <RaisedButton type="submit" label="Login" primary={true} onClick={this.handleSubmit}/>
        {/**<br></br>**/}

        {/**<h1>Username: {this.state.Username}</h1>
        <h2>Password: {this.state.Password}</h2>**/}
        </form>
      </Dialog>

      </div>);


  }

}

export default LoginText;
