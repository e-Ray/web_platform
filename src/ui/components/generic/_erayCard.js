import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { DetailPage, DropoutButtonSensors, ErayCardChart } from './';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ref } from '../../../api/Auth/_constants';

@observer
class ErayCard extends Component {

  @observable email = "";
  @observable sensor = "performance";


  constructor(props){
    super(props);
    this.state={
      openDrawer: false,
      sensor: "performance"
    }
    let query = ref.child('users/'+this.props.eray.owner+'/info/');

      query.once("value")
        .then((snapshot)=>{
            this.email = snapshot.val().email;
         
        });
    this.handleButton = this.handleButton.bind(this);
  }


  handleButton() {
    this.setState({openDrawer: !this.state.openDrawer});
  }
  getSensorChart(sensor) {
    return <DetailPage sensor={sensor} mode="detail" eray={this.props.eray.id}/>;
  }



  render(){
    return (
    <div>
    <ErayCardChart handleButton={this.handleButton} openDrawer={this.state.openDrawer} eray={this.props.eray}/>
    <Card>
      <CardHeader
          title={this.props.eray.id} />
      <CardText>
        Email of Owner: {this.email} <br></br>
        Location: {this.props.eray.location} <br></br>
        <RaisedButton label="Eray Data" onTouchTap={()=>{this.handleButton()}} />
      </CardText>
    </Card>
    </div>

  );
  }
}

export default ErayCard;
