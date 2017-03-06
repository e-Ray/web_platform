import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { observer } from 'mobx-react';
import Dialog from 'material-ui/Dialog';
import { observable, action, autorun } from 'mobx';
import { ref } from '../../../api/Auth/_constants';

@observer
class UserCard extends Component {

  @observable erays = [];

  constructor(props){
    super(props);

  }

  getName(){
    return (this.props.user.firstname + " " + this.props.user.lastname);
  }

  getErays(){
    if(true/*this.props.user.admin.matches("false")*/){
    let query = ref.child('users/'+this.props.user.hash+'/erays/');
    let eray = "";

      query.once("value")
        .then(function(snapshot){
          snapshot.forEach(function(eraySnapshot) {
            console.log(eraySnapshot.val());
            /*eray = eraySnapshot.val();
            this.erays.push({
              eray
    				});*/
          });
        });
        return "kein Admin"
    }else return "Admin";
  }

  render(){
    return (
    <Dialog
    modal={false}
    open={this.props.open}
    onRequestClose={this.props.close}>
    <Card>
      <CardHeader
          title={this.getName()}
          actAsExpander={true}
          showExpandableButton={true}/>
      <CardText expandable={true}>
        Ich bin der CardText. {this.getErays()}
      </CardText>
    </Card>
    </Dialog>
  );
  }
}

export default UserCard;
