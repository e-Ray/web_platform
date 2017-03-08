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

    let query = ref.child('users/'+this.props.user.hash+'/erays/');

      query.once("value")
        .then((snapshot)=>{
          snapshot.forEach((eraySnapshot) =>{
            console.log(eraySnapshot.val());
            this.erays.push(
              eraySnapshot.val()
    				);
          });
        });
    autorun(() => console.log(this.erays.slice()));
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
            eray = eraySnapshot.val();
            this.erays.push({
              eray
    				});
            this.erays.push("\n");
          });
        });
        return "kein Admin"
    }else return "Admin";
  }

  render(){
    return (
    <div>
    <Card>
      <CardHeader
          title="Ich bin ein Card-Titel"
          actAsExpander={true}
          showExpandableButton={true}/>
      <CardText expandable={true}>
        Ich bin der CardText. {this.erays.slice()}
      </CardText>
    </Card>
    </div>

  );
  }
}

export default UserCard;
