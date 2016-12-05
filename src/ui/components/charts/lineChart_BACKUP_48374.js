import React from 'react';
import {Line} from 'react-chartjs-2';
import RaisedButton from 'material-ui/RaisedButton';



export default React.createClass({
  displayName: 'LineExample',

  render() {
    return (
      <div>
<<<<<<< HEAD
        <RaisedButton label={ this.props.name } primary={true} href={ this.props.href }/>
=======
        
>>>>>>> feature/sensor-detail-pages
        <Line data={this.props.data} />
      </div>
    );
  }
});