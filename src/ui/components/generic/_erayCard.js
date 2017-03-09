import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { observer } from 'mobx-react';
import Dialog from 'material-ui/Dialog';
import { observable, action, autorun } from 'mobx';
import { ref } from '../../../api/Auth/_constants';
import { List, ListItem } from 'material-ui/List';

@observer
class ErayCard extends Component {

  @observable email = "";


  constructor(props){
    super(props);

    let query = ref.child('users/'+this.props.eray.owner+'/info/');

      query.once("value")
        .then((snapshot)=>{
            console.log(snapshot.val().email);
            this.email = snapshot.val().email;
         
        });
  }


  render(){
    return (
    <div>
    <Card>
      <CardHeader
          title={this.props.eray.id} />
      <CardText>
        Email of Owner: {this.email} <br></br>
        Location: {this.props.eray.location} <br></br>
        Link to Data
      </CardText>
    </Card>
    </div>

  );
  }
}

export default ErayCard;
