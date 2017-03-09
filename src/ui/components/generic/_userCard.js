import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import { ref } from '../../../api/Auth/_constants';
import { ListItem } from 'material-ui/List';

function elementOf(arr, obj) {
  var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            return true;
        }
    }

    return false;
}
@observer
class UserCard extends Component {

  @observable erays = [];
  @observable erayItems = [];
  @observable dialogTitle = "";
  @observable addableErays = [];
  @observable allErays = [];

  constructor(props){
    super(props);

    this.state={
      openDrawer: false
    }
    let query = ref.child('users/'+this.props.user.hash+'/erays/');
    

      query.on("value",(snapshot)=>{
          snapshot.forEach((eraySnapshot)=>{
            this.erays.push(
              eraySnapshot.val()
    				);
          });
        });
      ref.child('erays/eraylist/').on('value',(snapshot) =>{
          snapshot.forEach((eraySnapshot)=>{
         
            this.allErays.push(
              eraySnapshot.key
            );
          })
        })
    autorun(() => {
      this.erayItems = this.erays.slice().map((eray) => {
              return (
    					 <div key={eray}>
    						<ListItem key={eray} primaryText={eray} />
    					 </div>);
            }
    			);
      this.addableErays = this.allErays.slice().map((eray) => {
        if (!elementOf(this.erays.slice(), eray)) {
          return (
            <div key={eray}>
              <ListItem key={eray} primaryText={eray} onTouchTap={()=>{this.setErayToOwned(eray)}}/>
            </div>
          );
        }

      });
      });
  }

  getName(){
    return (this.props.user.firstname + " " + this.props.user.lastname);
  }
  setErayToOwned(eray){
    let erayString = "eray"+(this.erays.slice().length+1);
    console.log(erayString);
    let obj = {};
    obj[erayString]=eray;
    ref.child('users/'+this.props.user.hash+'/erays/')
      .update(obj);
  }
  handleButton() {
    this.setState({openDrawer: !this.state.openDrawer});

  }


  render(){
    return (
    <div>
      <Dialog
        title={"Erays to add for User: " + this.getName()}
        modal={false}
        open={this.state.openDrawer}>
        {this.addableErays.slice()}
        <RaisedButton label="close" onTouchTap={()=>{this.handleButton()}} />
      </Dialog>
    <Card>
      <CardHeader
          title={this.getName()} />
      <CardText>
        Email: {this.props.user.email} <br></br>
        Erays: {this.erayItems.slice()} <br></br>
        <RaisedButton label="Set owned Erays" onTouchTap={()=>{this.handleButton()}} />
      </CardText>
    </Card>
    </div>

  );
  }
}

export default UserCard;
