import React from 'react';
import { Sensor } from '../sensors';



class DetailPage extends React.Component {



  render() {
    return (
      <div id="detailPage">
        <Sensor mode={ this.props.mode } sensor={ this.props.sensor }
        	width={1500} height={500}/>
      </div>
    );
  }
}

export default DetailPage;
