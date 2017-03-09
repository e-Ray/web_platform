import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import { ref } from '../../../api/Auth/_constants';
import { ListItem } from 'material-ui/List';

@observer
class UserCard extends Component {

  @observable erays = [];
  @observable erayItems = [];

  constructor(props){
    super(props);

    let query = ref.child('users/'+this.props.user.hash+'/erays/');

      query.once("value")
        .then((snapshot)=>{
          snapshot.forEach((eraySnapshot) =>{
            this.erays.push(
              eraySnapshot.val()
    				);
          });
        });
    autorun(() => {
      this.erayItems = this.erays.slice().map((eray) => {
              return (
    					 <div key={eray}>
    						<ListItem key={eray} primaryText={eray} />
    					 </div>);
            }
    			);
      });
  }

  getName(){
    return (this.props.user.firstname + " " + this.props.user.lastname);
  }

  render(){
    return (
    <div>
    <Card>
      <CardHeader
          title={this.getName()} />
      <CardText>
        Email: {this.props.user.email} <br></br>
        Erays: {this.erayItems.slice()}
      </CardText>
    </Card>
    </div>

  );
  }
}

export default UserCard;
