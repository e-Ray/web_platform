import React, { Component } from 'react';
import Loader from 'react-loader';
import { FormattedMessage } from 'react-intl';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import RaisedButton from 'material-ui/RaisedButton';
import { firebaseAuth } from '../../api/Auth/_constants';
import { ref } from '../../api/Auth/_constants';


@observer
class InfoPage extends Component {

  @observable location = "";
  @observable eray = "";
  @observable comissioning = "";
  @observable token = "";
	constructor(props){
		super(props);
		ref.child('/users/'+firebaseAuth().currentUser.uid+'/erays/')
		  .on('value',(snapshot) =>{

			let eray = snapshot.val().eray1;
      ref.child('erays/eraylist/'+eray+'/').on('value',(snapshot) =>{
        this.location = snapshot.val().location;
        this.comissioning = snapshot.val().startDate;
      });

		});

    firebaseAuth().currentUser.getToken(true).then((idToken) => {
      this.token=idToken;
}).catch(function(error) {
  console.log(error);
});
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    	alert(this.token);
  	};

  render() {

    if(this.location !== ""){
    return (

      <div id="container">
        <h1><FormattedMessage id='MY_ERAY' defaultMessage='My e.Ray' /></h1>
        <h2><FormattedMessage id='INFO_1' 
        defaultMessage='This page gives you information about your e.Ray.
         You can view the installation site, a picture and the comissioning date.'/></h2>
        <div id="row">
          <div id="col-3">
            <h4>Installation site: {this.location} </h4>
            <h4>Comissioning date: {this.comissioning} </h4>
            <h4><RaisedButton label="Get Token"  onTouchTap={this.handleClick} /></h4>
          </div>
          <div id="col-5"/>
          <div id="col-3-right">
            <img src={require('../../images/eray-info.jpg')} alt=""/>
          </div>
        </div>

      </div>
    );
  }
  return <Loader loaded={false}/>;
  }
}

export default InfoPage;
