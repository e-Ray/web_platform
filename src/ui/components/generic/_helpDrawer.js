import React from 'react';
import Dialog from 'material-ui/Dialog';

const help1pic = require('../../../images/help1_en.png');
const help2pic = require('../../../images/help2_en.png');
const help3pic = require('../../../images/help3_en.png');
const help4pic = require('../../../images/help4_en.png');

class HelpDrawer extends React.Component {

  getActualPage(){
    let name = window.location.pathname;
    if(name === "/dashboard"){
      return (
        <div>
        <h4>Dashboard - Read values</h4>
        <p>
              You have different possibilities to read values on your dashboard.
            <br />
              All eight sensors are going to be displayed and you can read the desired value
              by hovering over the graph. It should look similar to the following picture.
            <br />
          <br />
          <img src={help1pic} id="helpimage" alt="" /> <br />
          <br />
              For more detailed information you need to go the detail page for each sensor.
              You can access a detail page by pressing the title bar for the corresponding
              sensor as seen in the following picture. Another method is by using the menu
              in the top left corner.
              <br />
          <br />
          <img src={help2pic} id="helpimage" alt="" /> <br />
          <br />
        </p>
        </div>
      );
    }else if(name.match("/DetailPage")){
      return (
        <div>
        <h4>Detailseite - Set an interval</h4>
        <p>
            On a detail page you can set custom intervals in order to see exactly which value
            was measured at a set point in time.
            <br />
            To set an interval you need to press the button in the top right corner
            (as seen in the picture below) and choose an option from the dropdown menu.
            <br />
          <br />
          <img src={help3pic} id="helpimage" alt="" /> <br />
          <br />
                You also have the possibility to set your own custom interval.
                To do this you need to choose the &quot;Custom&quot; entry from the dropdown menu.
                After that you can set the desired custom date as seen below:
              <br />
          <br />
          <img src={help4pic} id="helpimage" alt="" /> <br />
          <br />
                First, you need to click on &quot;From&quot; in order to set
                 the starting date for your interval.
                A mask will open where you can choose the date.
                <br />
                To set the end date you need to click on &quot;To&quot;
                 and also choose a date from the mask.
                Click on &quot;Ok&quot; to let the graph show your values.
                <br />
          <br />
        </p>
        </div>
      );
    }else if(name === "/InfoPage"){
      return (
        <div>
        <h4>Information Page</h4>
        <p>
            Here you can see some information about your e.Ray.
            <br />
          <br /></p>
        </div>
      );
    }else return <h3>Sie sind bereits auf der Hilfe-Seite</h3>;
  }


  render() {
    return (
      <div>
        <Dialog
          title="Help"

          modal={false}
          open={this.props.open}
          onRequestClose={this.props.close}
          autoScrollBodyContent
        >
          { this.getActualPage() }
        </Dialog>
      </div>);
  }

}
HelpDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired,
  close: React.PropTypes.func.isRequired,
};

export default HelpDrawer;
