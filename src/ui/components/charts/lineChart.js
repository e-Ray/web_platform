import React from 'react';
import {Line} from 'react-chartjs-2';



export default React.createClass({
  displayName: 'LineExample',

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={this.props.data} />
      </div>
    );
  }
});