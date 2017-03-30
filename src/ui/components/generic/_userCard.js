import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ErayCardChart from './_erayCardChart';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import { ref } from '../../../api/Auth/_constants';
import { List, ListItem } from 'material-ui/List';

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
  @observable erayForChart = "eray1";

  constructor(props){
    super(props);

    this.state={
      openDrawer: false,
      openDataDrawer: false
    }
    
      ref.child('users/'+this.props.user.hash+'/erays/').on("value",(snapshot)=>{
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
        });

    autorun(() => {
      this.erayItems = this.erays.slice().map((eray) => {
              return (
    					 <div key={eray+Math.random()}>
    						<ListItem key={eray+Math.random()} primaryText={eray}
                  rightIconButton={<FlatButton
                    label="delete"
                    onTouchTap={()=>{this.setErayToNotOwned(eray)}}
                    secondary />}
                 onTouchTap={()=>{this.handleDataDrawer(eray)}}/>
    					 </div>);
            }
    			);
      // Wanted that there is no return if the element is in the array
      // eslint-disable-next-line
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
      this.handleDataDrawer = this.handleDataDrawer.bind(this);
  }

  getName(){
    return (this.props.user.firstname + " " + this.props.user.lastname);
  }
  handleDataDrawer(eray) {

    this.erayForChart = typeof(eray)!== "undefined" ? eray : "";
    this.setState({openDataDrawer: !this.state.openDataDrawer})
  }
  setErayToOwned(eray){
    this.props.clearArrays();
    this.erayItems = [];
    let erayString = "eray"+(this.erays.slice().length+1);
    this.erays = [];
    let obj = {};
    obj[erayString]=eray;
    ref.child('users/'+this.props.user.hash+'/erays/')
      .update(obj);
    ref.child('erays/'+eray+'/info/')
      .update({
        owner: this.props.user.hash
      });
    ref.child('erays/eraylist/'+eray+'/')
      .update({
        owner: this.props.user.hash
      });
  }
  setErayToNotOwned(eray){
    this.props.clearArrays();
    this.erayItems = [];
    let length = this.erays.slice().length;
    let erays = this.erays.slice();
    this.erays = [];
    let found = false;
    for(let i=0 ; i<length ; i++){
      if (!found && i+1 === length){
        ref.child('users/'+this.props.user.hash+'/erays/eray'+(i+1)).remove();
        ref.child('erays/eraylist/' + eray + '/owner').remove();
        ref.child('erays/'+eray+'/info/owner').remove();
      }
      else if (found && i+1 === length){
        this.erays = [];
        ref.child('users/' + this.props.user.hash+'/erays/eray'+(i+1)).remove();
      }
      else if (found) {
        let erayString = "eray"+(i+1);
        let obj = {};
        obj[erayString]=erays[i+1];
        ref.child('users/'+this.props.user.hash+'/erays/')
          .update(obj);
      }
      else if (!found && erays[i] === eray){
        found = true;
        ref.child('erays/eraylist/' + eray + '/owner').remove();
        ref.child('erays/'+eray+'/info/owner').remove();
        let erayString = "eray"+(i+1);
        let obj = {};
        obj[erayString]=erays[i+1];
        ref.child('users/'+this.props.user.hash+'/erays/')
          .update(obj);
      }
    }

  }
  handleButton() {
    this.setState({openDrawer: !this.state.openDrawer});

  }


  render(){
    return (
    <div>
      <Dialog
        title={"Erays to add for User: " + this.getName()}
        open={this.state.openDrawer}
        >
        {this.addableErays.slice()}
        <RaisedButton label="close" onTouchTap={()=>{this.handleButton()}} />
      </Dialog>
      <div>
        <ErayCardChart openDrawer={this.state.openDataDrawer} eray={this.erayForChart} handleButton={this.handleDataDrawer}/>
      </div>
    <Card>
      <CardHeader
          title={this.getName()} />
      <CardText>
        Email: {this.props.user.email} <br></br>
        Erays: 
        <List>
        {this.erayItems.slice()}
        </List>
         <br></br>
        <RaisedButton label="Set owned Erays" onTouchTap={()=>{this.handleButton()}} />
      </CardText>
    </Card>
    </div>

  );
  }
}

export default UserCard;
