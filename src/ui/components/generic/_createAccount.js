import React, { Component } from 'react'
import { auth } from '../../../api/Auth/_auth'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import RaisedButton from 'material-ui/RaisedButton';

@observer
class CreateAccount extends Component {

  @observable data = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    passwordVerification: "",
  };

  constructor(props){
    super(props);
    this.state = {
      verificationError: "",
      emailError: "",
      passwordError: ""
    };

    this.onLastnameChangeHandler = this.onLastnameChangeHandler.bind(this);
    this.onFirstnameChangeHandler = this.onFirstnameChangeHandler.bind(this);
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onPasswordVerificationHandler = this.onPasswordVerificationHandler.bind(this);
  }

  handleSubmit = (e) => {
    this.resetError();
    e.preventDefault();
    if(this.data.password === this.data.passwordVerification){
      auth(this.data.email, this.data.password, this.data.firstname, this.data.lastname).catch((error) => this.handleError(error.code));
      console.log("auth: " + this.data.email + " " + this.data.password);
    }else{
      this.setState({verificationError: "Passwords do not match!"});
    }
  }

  handleError(errorCode){
    if(errorCode === "auth/invalid-email"){
      this.setState({emailError: "The E-Mail format is invalid!"});
    }else if(errorCode === "auth/email-already-in-use"){
      this.setState({emailError: "The E-Mail is already in use!"});
    }else if(errorCode === "auth/weak-password"){
      this.setState({passwordError: "The password is not strong enough!"});
    }
  }

  resetError(){
    this.setState({ verificationError: "" });
    this.setState({ emailError: "" });
    this.setState({ passwordError: "" });
  }

  onLastnameChangeHandler(e){
    this.data.lastname = e.target.value;
  }

  onFirstnameChangeHandler(e){
    this.data.firstname = e.target.value;
  }

  onEmailChangeHandler(e){
    this.data.email = e.target.value;
  }

  onPasswordChangeHandler(e){
    this.data.password = e.target.value;
  }

  onPasswordVerificationHandler(e){
    this.data.passwordVerification = e.target.value;
  }

  render () {
    return (
      <div>
        <Dialog
            title="Registration"

            modal={false}
            open={this.props.open}
            onRequestClose={this.props.close}
            >
            <TextField hintText="Last Name"
                       value={this.data.lastname}
                       onChange={this.onLastnameChangeHandler}/>
            <TextField hintText="First Name"
                       value={this.data.firstname}
                       onChange={this.onFirstnameChangeHandler}/>
            <TextField hintText="E-Mail"
                       value={this.data.email}
                       errorText={this.state.emailError}
                       onChange={this.onEmailChangeHandler}/>
            <TextField hintText="Password"
                       type="password"
                       value={this.data.password}
                       errorText={this.state.passwordError}
                       onChange={this.onPasswordChangeHandler}/>
            <TextField hintText="Password Verification"
                       type="password"
                       errorText={this.state.verificationError}
                       value={this.data.passwordVerification}
                       onChange={this.onPasswordVerificationHandler}/>
            <RaisedButton type="submit" label="Create" primary={true} onClick={this.handleSubmit}/>
        </Dialog>
      </div>

    )
  }
}
export default CreateAccount;
