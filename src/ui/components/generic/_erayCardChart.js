import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { DetailPage, DropoutButtonSensors } from './';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class ErayCardChart extends Component {

  @observable sensor = "performance";


  constructor(props){
    super(props);
    this.state={
      sensor: "performance"
    }
    this.handler = this.handler.bind(this);
  }

  handler(sensor) {
    this.sensor = sensor;
  }

 
  getSensorChart(sensor, id) {
    return <DetailPage key={Math.random()} sensor={sensor} mode="detail" eray={id}/>;
  }



  render(){
  	let styles = {
  dialogRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  },
  dialogContent: {
    position: 'relative',
    width: '90vw',
    maxWidth: '50%'
  },
  dialogBody: {
    paddingBottom: 0
  }
};
	let id = typeof(this.props.eray.id) !== "undefined" ? this.props.eray.id : this.props.eray
    return (
    <div>
    <Dialog
        title={"Data for eRay: " + id}
        contentStyle={ styles.dialogContent }
  		bodyStyle={ styles.dialogBody }
  		style={ styles.dialogRoot }
        open={this.props.openDrawer}
        repositionOnUpdate={false}>

        <DropoutButtonSensors handler={this.handler} />
        {this.getSensorChart(this.sensor, id)}
        <RaisedButton label="close" onTouchTap={()=>{this.props.handleButton()}} />
      </Dialog>
    
    </div>

  );
  }
}

export default ErayCardChart;
